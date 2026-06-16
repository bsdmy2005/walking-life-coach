import Link from "next/link"

export const metadata = { title: "Terms · The Walking Life Coach" }

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <Link href="/" className="text-muted-foreground text-sm hover:underline">
        ← Home
      </Link>
      <h1 className="mt-4 font-serif text-4xl">Terms of Service</h1>
      <div className="text-muted-foreground mt-6 space-y-4 leading-relaxed">
        <p>
          These terms govern coaching services provided by Sazi Ngcobo (The
          Walking Life Coach). By booking a session or purchasing a package, you
          agree to them.
        </p>
        <p>
          Coaching is not therapy or medical advice. Sessions are forward-focused
          and action-based. Outcomes depend on your own participation and effort.
        </p>
        <p>
          Packages are valid for a reasonable period from purchase. Sessions are
          scheduled by mutual arrangement. Please give at least 24 hours&rsquo;
          notice to reschedule.
        </p>
        <p>
          For any questions about these terms, get in touch via the{" "}
          <Link href="/#contact" className="text-primary hover:underline">
            contact form
          </Link>
          .
        </p>
      </div>
    </main>
  )
}
