import { eq } from "drizzle-orm"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { db } from "@/db/db"
import { purchases } from "@/db/schema"
import { getPackage, formatZar } from "@/lib/packages"
import { Button } from "@/components/ui/button"
import { PaletteShell } from "@/components/site/palette-shell"

export default async function SuccessPage({
  searchParams
}: {
  searchParams: Promise<{ ref?: string }>
}) {
  const { ref } = await searchParams

  const row =
    ref && db
      ? (
          await db
            .select()
            .from(purchases)
            .where(eq(purchases.paystackReference, ref))
        )[0]
      : undefined

  const pkg = row ? getPackage(row.packageKey) : undefined

  return (
    <PaletteShell>
      <main className="bg-muted text-foreground flex min-h-dvh items-center justify-center px-6 py-16">
        <div className="border-border bg-card w-full max-w-md rounded-xl border p-8 text-center shadow-sm">
          <CheckCircle2 className="text-primary mx-auto size-14" />
          <h1 className="mt-4 font-serif text-4xl">You&rsquo;re booked</h1>

          {pkg ? (
            <p className="text-muted-foreground mt-3">
              Your <strong className="text-foreground">{pkg.name}</strong>
              {row?.status === "paid"
                ? ` (${formatZar(row.amount)}) is confirmed.`
                : " is being confirmed."}
            </p>
          ) : (
            <p className="text-muted-foreground mt-3">
              Your payment is being confirmed.
            </p>
          )}

          <p className="text-muted-foreground mt-4">
            Sazi will reach out shortly to schedule your first walk. Keep an eye
            on your inbox.
          </p>

          <p className="font-script text-primary mt-6 text-2xl">
            Take the first step…literally!
          </p>

          <Button asChild className="mt-8 w-full">
            <Link href="/">Back to home</Link>
          </Button>
        </div>
      </main>
    </PaletteShell>
  )
}
