/**
 * Paystack API client — one-time payments for coaching packages.
 *
 * Flow: initializeTransaction() -> redirect customer to authorization_url ->
 * Paystack redirects back to callbackUrl -> verifyTransaction() confirms it ->
 * webhook (verifyWebhookSignature) is the source of truth for "paid".
 *
 * Amounts are in the currency's subunit. ZAR -> cents (R2200.00 => 220000).
 */

import crypto from "crypto"

const PAYSTACK_BASE = "https://api.paystack.co"

function getSecretKey() {
  const key = process.env.PAYSTACK_SECRET_KEY
  if (!key) throw new Error("PAYSTACK_SECRET_KEY not configured")
  return key
}

async function paystackRequest<T>(
  method: string,
  path: string,
  body?: Record<string, unknown>
): Promise<{ ok: boolean; data: T; message: string }> {
  const response = await fetch(`${PAYSTACK_BASE}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${getSecretKey()}`,
      "Content-Type": "application/json"
    },
    body: body ? JSON.stringify(body) : undefined
  })

  const json = (await response.json()) as {
    status: boolean
    message: string
    data: T
  }

  return {
    ok: response.ok && json.status,
    data: json.data,
    message: json.message
  }
}

// ── Initialize a one-time transaction (starts checkout) ──

export type InitializeTransactionResponse = {
  authorization_url: string
  access_code: string
  reference: string
}

export async function initializeTransaction(input: {
  email: string
  /** amount in subunit (ZAR cents). e.g. R2200.00 => 220000 */
  amount: number
  callbackUrl: string
  /** optional caller-supplied reference; Paystack generates one if omitted */
  reference?: string
  currency?: "ZAR" | "USD"
  metadata?: Record<string, unknown>
}) {
  return paystackRequest<InitializeTransactionResponse>(
    "POST",
    "/transaction/initialize",
    {
      email: input.email,
      amount: input.amount,
      callback_url: input.callbackUrl,
      reference: input.reference,
      currency: input.currency ?? "ZAR",
      metadata: input.metadata ?? {}
    }
  )
}

// ── Verify a transaction (confirm payment after callback) ──

export type VerifyTransactionResponse = {
  status: string // "success" when paid
  reference: string
  amount: number
  currency: string
  paid_at: string | null
  customer: {
    id: number
    email: string
    customer_code: string
  }
  metadata: Record<string, unknown> | null
}

export async function verifyTransaction(reference: string) {
  return paystackRequest<VerifyTransactionResponse>(
    "GET",
    `/transaction/verify/${encodeURIComponent(reference)}`
  )
}

// ── Webhook signature verification (source of truth for "paid") ──

export function verifyWebhookSignature(
  rawBody: string,
  signature: string
): boolean {
  const hash = crypto
    .createHmac("sha512", getSecretKey())
    .update(rawBody)
    .digest("hex")

  // Timing-safe comparison to prevent timing attacks
  try {
    return crypto.timingSafeEqual(
      Buffer.from(hash, "hex"),
      Buffer.from(signature, "hex")
    )
  } catch {
    return false
  }
}
