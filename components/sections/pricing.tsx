import Link from "next/link"
import { CalendarCheck, Footprints } from "lucide-react"
import { PACKAGES } from "@/lib/packages"

export function Pricing() {
  return (
    <section id="pricing" className="bg-muted scroll-mt-20">
      <div className="mx-auto w-full max-w-3xl px-6 py-20 text-center md:py-28">
        <h2 className="text-navy font-serif text-5xl tracking-tight sm:text-6xl">
          Pricing Model
        </h2>
        <p className="text-terracotta mt-4 text-lg font-medium">
          Flexible and accessible.
        </p>

        <div className="mt-12 space-y-3 text-left">
          {PACKAGES.map(p => (
            <div
              key={p.key}
              className="bg-card border-border flex items-center gap-4 rounded-xl border p-4 shadow-sm"
            >
              <span className="bg-olive text-cream flex size-11 shrink-0 items-center justify-center rounded-full">
                {p.free ? (
                  <CalendarCheck className="size-5" />
                ) : (
                  <Footprints className="size-5" />
                )}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-semibold">{p.name}</p>
                <p className="text-muted-foreground text-sm">{p.sessions}</p>
              </div>
              <span className="text-terracotta font-serif text-2xl">
                {p.price}
              </span>
              <Link
                href={p.free ? "#contact" : `/checkout/${p.key}`}
                className="bg-navy text-cream hover:bg-navy/90 rounded-md px-4 py-2 text-sm font-medium transition-colors"
              >
                {p.free ? "Book" : "Choose"}
              </Link>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground mt-8 text-sm">
          Designed to grow with the client.
        </p>
      </div>
    </section>
  )
}
