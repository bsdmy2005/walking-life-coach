import { and, eq, ne } from "drizzle-orm"
import { NextResponse } from "next/server"
import { db } from "@/db/db"
import { purchases } from "@/db/schema"
import { notifyCoach, sendConfirmation } from "@/lib/notify"
import { formatZar, getPackage } from "@/lib/packages"
import { verifyTransaction } from "@/lib/paystack"

export const runtime = "nodejs"

function appUrl() {
  return process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"
}

/**
 * Paystack redirects the customer here after checkout. We verify the
 * transaction and mark the purchase paid, then send them to /success.
 * The webhook is the authoritative path; this covers the common case where
 * the customer completes payment and returns in the same session.
 */
export async function GET(req: Request) {
  const url = new URL(req.url)
  const reference =
    url.searchParams.get("reference") ?? url.searchParams.get("trxref")

  if (!reference) {
    return NextResponse.redirect(`${appUrl()}/#pricing`)
  }

  const result = await verifyTransaction(reference)
  const success = result.ok && result.data?.status === "success"

  if (success && db) {
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

  return NextResponse.redirect(
    success
      ? `${appUrl()}/success?ref=${encodeURIComponent(reference)}`
      : `${appUrl()}/#pricing`
  )
}
