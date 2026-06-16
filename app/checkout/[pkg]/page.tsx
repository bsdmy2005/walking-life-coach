import Link from "next/link"
import { notFound } from "next/navigation"
import { getPackage } from "@/lib/packages"
import { CheckoutForm } from "@/components/site/checkout-form"
import { PaletteShell } from "@/components/site/palette-shell"

export default async function CheckoutPage({
  params
}: {
  params: Promise<{ pkg: string }>
}) {
  const { pkg } = await params
  const pkgData = getPackage(pkg)

  // Unknown package, or the free intro (which goes through the contact form).
  if (!pkgData || pkgData.free) notFound()

  return (
    <PaletteShell>
      <main className="bg-muted text-foreground flex min-h-dvh items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">
          <Link
            href="/#pricing"
            className="text-muted-foreground hover:text-foreground text-sm"
          >
            ← Back to packages
          </Link>

          <div className="border-border bg-card mt-4 rounded-xl border p-8 shadow-sm">
            <p className="font-script text-primary text-2xl">Checkout</p>
            <h1 className="mt-1 font-serif text-3xl">{pkgData.name}</h1>
            <p className="text-muted-foreground mt-1">{pkgData.blurb}</p>

            <div className="border-border my-6 flex items-baseline justify-between border-y py-4">
              <span className="text-muted-foreground">{pkgData.sessions}</span>
              <span className="text-primary font-serif text-3xl">
                {pkgData.price}
              </span>
            </div>

            <CheckoutForm pkg={pkgData} />
          </div>
        </div>
      </main>
    </PaletteShell>
  )
}
