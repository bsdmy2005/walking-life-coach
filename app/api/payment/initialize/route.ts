import crypto from "crypto"
import { eq } from "drizzle-orm"
import { NextResponse } from "next/server"
import { z } from "zod"
import { db } from "@/db/db"
import { purchases, type NewPurchase } from "@/db/schema"
import { getPackage } from "@/lib/packages"
import { initializeTransaction } from "@/lib/paystack"

export const runtime = "nodejs"

const schema = z.object({
  packageKey: z.string(),
  name: z.string().min(1).max(200),
  email: z.string().email().max(200)
})

function appUrl() {
  return process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"
}

export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }

  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 })
  }

  const { packageKey, name, email } = parsed.data
  const pkg = getPackage(packageKey)
  if (!pkg || pkg.free) {
    return NextResponse.json({ error: "Invalid package" }, { status: 400 })
  }

  if (!db || !process.env.PAYSTACK_SECRET_KEY) {
    return NextResponse.json(
      { error: "Payments not configured yet. Please try again later." },
      { status: 503 }
    )
  }

  const reference = `wlc-${crypto.randomUUID()}`

  // Record the pending purchase before redirecting to Paystack.
  const row: NewPurchase = {
    name,
    email,
    packageKey: pkg.key,
    amount: pkg.amount,
    currency: "ZAR",
    status: "pending",
    paystackReference: reference
  }
  await db.insert(purchases).values(row)

  let result: {
    ok: boolean
    data?: { authorization_url?: string }
    message: string
  }
  try {
    result = await initializeTransaction({
      email,
      amount: pkg.amount,
      reference,
      callbackUrl: `${appUrl()}/api/payment/callback`,
      metadata: { packageKey: pkg.key, name }
    })
  } catch {
    result = { ok: false, data: undefined, message: "Payment gateway error" }
  }

  if (!result.ok || !result.data?.authorization_url) {
    await db
      .update(purchases)
      .set({ status: "failed" })
      .where(eq(purchases.paystackReference, reference))
    return NextResponse.json(
      { error: result.message || "Could not start checkout" },
      { status: 502 }
    )
  }

  return NextResponse.json({
    authorizationUrl: result.data.authorization_url,
    reference
  })
}
