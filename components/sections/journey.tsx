import Image from "next/image"
import { ClipboardCheck, Footprints, Sunrise } from "lucide-react"
import { EnneagramIcon } from "@/components/site/section"

const STEPS = [
  {
    n: "01",
    badge: "bg-terracotta",
    accent: "text-terracotta",
    icon: <EnneagramIcon className="size-8 text-terracotta" />,
    title: "Enneagram assessment",
    body: "Gain self-awareness and insight into your personality, motivations, and patterns."
  },
  {
    n: "02",
    badge: "bg-gold",
    accent: "text-gold",
    icon: <Footprints className="size-8 text-gold" />,
    title: "Introductory walking session",
    body: "We connect, set intentions, and explore what matters most to you right now."
  },
  {
    n: "03",
    badge: "bg-olive",
    accent: "text-olive",
    icon: <ClipboardCheck className="size-8 text-olive" />,
    title: "6-session coaching cycle",
    body: "Structured, purposeful sessions that help you gain clarity, overcome blocks, and take action."
  },
  {
    n: "04",
    badge: "bg-navy",
    accent: "text-navy",
    icon: <Sunrise className="size-8 text-navy" />,
    title: "Reflection & next steps",
    body: "We reflect on your progress, celebrate wins, and map out your path forward."
  }
]

export function Journey() {
  return (
    <section id="journey" className="bg-background relative scroll-mt-20">
      {/* Header band */}
      <div className="relative h-52 w-full overflow-hidden sm:h-60">
        <Image
          src="/images/journey.jpg"
          alt="A path through the savanna at sunset"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="from-background/90 via-background/50 to-background/90 absolute inset-0 bg-gradient-to-r" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h2 className="text-navy font-serif text-4xl tracking-tight sm:text-5xl">
            The Coaching Journey
          </h2>
          <p className="text-muted-foreground mt-2 max-w-md">
            A clear, supportive process designed to create real, lasting change.
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-5 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map(s => (
          <div
            key={s.n}
            className="bg-card border-border flex flex-col items-center rounded-xl border p-6 text-center shadow-sm"
          >
            <div className="border-border flex size-16 items-center justify-center rounded-full border">
              {s.icon}
            </div>
            <span
              className={`${s.badge} text-cream mt-4 flex size-8 items-center justify-center rounded-full text-sm font-semibold`}
            >
              {s.n}
            </span>
            <p className={`${s.accent} mt-3 font-serif text-2xl`}>{s.title}</p>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
