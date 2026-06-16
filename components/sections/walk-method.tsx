import Image from "next/image"
import { Brain, Footprints, MapPin, MountainSnow } from "lucide-react"

const STEPS = [
  {
    letter: "W",
    color: "text-terracotta",
    tint: "bg-terracotta/10",
    icon: MapPin,
    title: "Where are you now?",
    body: "We start by understanding your current situation, challenges, and goals."
  },
  {
    letter: "A",
    color: "text-gold",
    tint: "bg-gold/10",
    icon: Brain,
    title: "Awareness (patterns & blockers)",
    body: "We uncover patterns, beliefs, and blockers that are keeping you stuck."
  },
  {
    letter: "L",
    color: "text-olive",
    tint: "bg-olive/10",
    icon: MountainSnow,
    title: "Leverage (strengths & control)",
    body: "We identify your strengths, resources, and what you can influence to create change."
  },
  {
    letter: "K",
    color: "text-navy",
    tint: "bg-navy/10",
    icon: Footprints,
    title: "Keep moving (clear next steps)",
    body: "We define clear, practical next steps and keep you moving forward."
  }
]

export function WalkMethod() {
  return (
    <section id="method" className="bg-background scroll-mt-20">
      {/* Header band */}
      <div className="relative h-56 w-full overflow-hidden sm:h-64">
        <Image
          src="/images/walk.jpg"
          alt="A trail at golden hour"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="from-background/90 via-background/50 to-background/90 absolute inset-0 bg-gradient-to-r" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h2 className="text-navy font-serif text-4xl tracking-tight sm:text-5xl">
            The Coaching Framework
          </h2>
          <p className="text-terracotta mt-1 text-xl font-medium">
            The WALK Method
          </p>
        </div>
      </div>

      {/* Columns */}
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map(s => (
          <div
            key={s.letter}
            className={`${s.tint} flex flex-col items-center rounded-xl p-8 text-center`}
          >
            <s.icon className={`${s.color} size-8`} />
            <span className={`${s.color} mt-4 font-serif text-6xl`}>
              {s.letter}
            </span>
            <span className={`${s.color} mt-1 mb-3 block h-px w-8 bg-current`} />
            <p className={`${s.color} font-semibold`}>{s.title}</p>
            <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
              {s.body}
            </p>
          </div>
        ))}
      </div>

      {/* Footer strip */}
      <div className="bg-navy text-cream">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-center gap-3 px-6 py-4">
          <Footprints className="size-5" />
          <span className="text-sm tracking-[0.3em]">
            SIMPLE. PRACTICAL. REPEATABLE.
          </span>
        </div>
      </div>
    </section>
  )
}
