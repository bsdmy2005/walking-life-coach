import Link from "next/link"

export const metadata = { title: "Refunds · The Walking Life Coach" }

export default function RefundPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <Link href="/" className="text-muted-foreground text-sm hover:underline">
        ← Home
      </Link>
      <h1 className="mt-4 font-serif text-4xl">Refund Policy</h1>
      <div className="text-muted-foreground mt-6 space-y-4 leading-relaxed">
        <p>
          If you change your mind before any session in a package has taken
          place, you may request a full refund within 14 days of purchase.
        </p>
        <p>
          Once coaching has begun, refunds are pro-rated for unused sessions at
          the single-session rate.
        </p>
        <p>
          The free intro session carries no charge and no refund applies. Refunds
          are processed back to your original payment method via Paystack.
        </p>
        <p>
          To request a refund, contact us via the{" "}
          <Link href="/#contact" className="text-primary hover:underline">
            contact form
          </Link>{" "}
          with your purchase reference.
        </p>
      </div>
    </main>
  )
}
