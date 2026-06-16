/**
 * Coaching package catalogue — single source of truth.
 *
 * Used by the pricing section and the checkout flow. Amounts are in ZAR cents
 * (Paystack's subunit): R2200.00 => 220000. The intro session is free and routes
 * to the contact form instead of checkout.
 */

export type PackageKey = "intro_free" | "pkg_4" | "pkg_6" | "pkg_8"

export type Package = {
  key: PackageKey
  name: string
  sessions: string
  /** ZAR cents; 0 for the free intro */
  amount: number
  /** display price, e.g. "Free" or "R2200.00" */
  price: string
  blurb: string
  /** free intro is captured via the contact form, not Paystack */
  free?: boolean
}

export const PACKAGES: Package[] = [
  {
    key: "intro_free",
    name: "Intro session",
    sessions: "once-off",
    amount: 0,
    price: "Free",
    blurb: "A no-pressure first walk to see if this is for you.",
    free: true
  },
  {
    key: "pkg_4",
    name: "4-session package",
    sessions: "4 sessions",
    amount: 220000,
    price: "R2200.00",
    blurb: "A focused starting block to build momentum."
  },
  {
    key: "pkg_6",
    name: "6-session package",
    sessions: "6 sessions",
    amount: 315000,
    price: "R3150.00",
    blurb: "The core coaching cycle — clarity and change."
  },
  {
    key: "pkg_8",
    name: "8-session package",
    sessions: "8 sessions",
    amount: 400000,
    price: "R4000.00",
    blurb: "Deeper work for lasting transformation."
  }
]

export const PACKAGE_MAP: Record<PackageKey, Package> = Object.fromEntries(
  PACKAGES.map(p => [p.key, p])
) as Record<PackageKey, Package>

export function getPackage(key: string): Package | undefined {
  return PACKAGE_MAP[key as PackageKey]
}

export function formatZar(cents: number): string {
  return `R${(cents / 100).toFixed(2)}`
}
