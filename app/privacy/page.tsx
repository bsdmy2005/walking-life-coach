import Link from "next/link"

export const metadata = { title: "Privacy · The Walking Life Coach" }

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <Link href="/" className="text-muted-foreground text-sm hover:underline">
        ← Home
      </Link>
      <h1 className="mt-4 font-serif text-4xl">Privacy Policy</h1>
      <div className="text-muted-foreground mt-6 space-y-4 leading-relaxed">
        <p>
          We collect only what we need to coach you: your name, email, phone (if
          provided), and details of any package you purchase.
        </p>
        <p>
          Payment card details are handled entirely by Paystack, our payment
          processor. We never see or store your card information.
        </p>
        <p>
          Your information is used to contact you, schedule sessions, and keep a
          record of purchases. We do not sell your data or share it except as
          needed to process payments.
        </p>
        <p>
          To request access to or deletion of your data, contact us via the{" "}
          <Link href="/#contact" className="text-primary hover:underline">
            contact form
          </Link>
          .
        </p>
      </div>
    </main>
  )
}
