import { and, eq, ne } from "drizzle-orm"
import { NextResponse } from "next/server"
import { db } from "@/db/db"
import { purchases } from "@/db/schema"
import { notifyCoach, sendConfirmation } from "@/lib/notify"
import { formatZar, getPackage } from "@/lib/packages"
import { verifyWebhookSignature } from "@/lib/paystack"

export const runtime = "nodejs"

/**
 * Authoritative payment confirmation. Paystack POSTs charge.success here
 * (even if the customer closed the tab before the redirect). We verify the
 * signature against the raw body, then mark the purchase paid idempotently.
 */
export async function POST(req: Request) {
  const raw = await req.text()
  const signature = req.headers.get("x-paystack-signature") ?? ""

  if (!verifyWebhookSignature(raw, signature)) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 })
  }

  let event: { event?: string; data?: { reference?: string } }
  try {
    event = JSON.parse(raw)
  } catch {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 })
  }

  if (event.event === "charge.success" && event.data?.reference && db) {
    const reference = event.data.reference
    // Idempotent: only flip rows that aren't already paid. `returning()` tells us
    // whether THIS call did the transition, so we email exactly once.
    const updated = await db
      .update(purchases)
      .set({ status: "paid", paidAt: new Date() })
      .where(
        and(
          eq(purchases.paystackReference, reference),
          ne(purchases.status, "paid")
        )
      )
      .returning()

    if (updated.length > 0) {
      const p = updated[0]
      const label = getPackage(p.packageKey)?.name ?? p.packageKey
      await Promise.all([
        notifyCoach(`Payment received — ${formatZar(p.amount)}`, [
          ["Package", label],
          ["Name", p.name ?? "—"],
          ["Email", p.email],
          ["Amount", formatZar(p.amount)],
          ["Reference", p.paystackReference]
        ]),
        sendConfirmation({
          to: p.email,
          name: p.name,
          heading: "Your booking is confirmed ✓",
          message: `Your ${label} (${formatZar(p.amount)}) is confirmed. Sazi will be in touch shortly to schedule your sessions. Looking forward to walking with you.`
        })
      ])
    }
  }

  // Always 200 so Paystack stops retrying once received.
  return NextResponse.json({ received: true })
}
