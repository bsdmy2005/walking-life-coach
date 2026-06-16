import Image from "next/image"
import { Eye, Footprints, Mountain, Wind } from "lucide-react"
import { Eyebrow, gutter, IconRow } from "@/components/site/section"

export function Insight() {
  return (
    <section className="bg-ink text-cream relative">
      {/* Full-bleed background image */}
      <Image
        src="/images/insight.jpg"
        alt="Two people walking toward a sunlit valley"
        fill
        sizes="100vw"
        className="object-cover object-right opacity-60"
      />
      <div className="from-ink via-ink/80 absolute inset-0 bg-gradient-to-r to-transparent" />

      <div className={`relative ${gutter} py-24 md:py-32`}>
        <div className="max-w-2xl">
          <Eyebrow n="03" />
          <h2 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">
            The Insight
          </h2>
          <p className="text-cream/85 mt-5 text-lg">
            People don&rsquo;t open up sitting across a table.
          </p>

          <p className="mt-10 font-semibold">They open up:</p>
          <div className="mt-5 space-y-5">
            <IconRow tone="ink" icon={<Footprints className="size-5" />}>
              While walking
            </IconRow>
            <div className="bg-cream/15 h-px max-w-sm" />
            <IconRow tone="ink" icon={<Wind className="size-5" />}>
              While breathing
            </IconRow>
            <div className="bg-cream/15 h-px max-w-sm" />
            <IconRow tone="ink" icon={<Eye className="size-5" />}>
              While not being stared at
            </IconRow>
          </div>

          <div className="mt-10">
            <IconRow tone="ink" icon={<Mountain className="size-5" />}>
              <span className="text-cream">
                Movement creates <strong>honesty</strong>. Nature creates{" "}
                <strong>safety</strong>.
              </span>
            </IconRow>
          </div>
        </div>
      </div>
    </section>
  )
}
