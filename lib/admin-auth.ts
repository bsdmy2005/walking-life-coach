import crypto from "crypto"

/**
 * Simple single-password admin auth (no Clerk). The password lives in
 * ADMIN_PASSWORD. On login we set an httpOnly cookie holding an HMAC token
 * derived from the password (never the password itself), and verify it on the
 * admin page. Good enough for one coach managing their own dashboard.
 */

const COOKIE = "wlc_admin"
export const ADMIN_COOKIE = COOKIE

function sha256(s: string): Buffer {
  return crypto.createHash("sha256").update(s).digest()
}

/** Timing-safe check of a submitted password against ADMIN_PASSWORD. */
export function checkPassword(input: string): boolean {
  const pw = process.env.ADMIN_PASSWORD
  if (!pw) return false
  return crypto.timingSafeEqual(sha256(input), sha256(pw))
}

/** Deterministic session token derived from the password. */
export function adminToken(): string {
  const pw = process.env.ADMIN_PASSWORD ?? ""
  return crypto.createHmac("sha256", "wlc-admin-session").update(pw).digest("hex")
}

/** Validate the cookie token. */
export function verifyToken(token: string | undefined): boolean {
  if (!token || !process.env.ADMIN_PASSWORD) return false
  const expected = adminToken()
  try {
    return crypto.timingSafeEqual(Buffer.from(token), Buffer.from(expected))
  } catch {
    return false
  }
}
