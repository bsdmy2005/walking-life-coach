import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/site/contact-form"
import {
  audience,
  brand,
  coach,
  different,
  insight,
  journey,
  problem,
  solution,
  walkMethod
} from "@/lib/landing-content"
import { PACKAGES } from "@/lib/packages"

function Slide({
  src,
  alt,
  overlay = "bg-black/55",
  className,
  children,
  id,
  priority
}: {
  src: string
  alt: string
  overlay?: string
  className?: string
  children: React.ReactNode
  id?: string
  priority?: boolean
}) {
  return (
    <section
      id={id}
      className={`relative flex min-h-screen items-center ${className ?? ""}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
      />
      <div className={`absolute inset-0 ${overlay}`} />
      <div className="relative mx-auto w-full max-w-[88rem] px-6 text-cream md:px-10 lg:px-16">
        {children}
      </div>
    </section>
  )
}

/** Cinematic: full-bleed imagery, overlaid text, bold scale. */
export function VariantImmersive() {
  return (
    <div className="text-cream bg-ink">
      {/* Hero */}
      <Slide
        id="top"
        src="/images/hero.jpg"
        alt="Walking a trail"
        overlay="bg-gradient-to-t from-ink via-ink/40 to-ink/30"
        priority
      >
        <div className="max-w-3xl">
          <p className="font-script text-3xl text-[color:var(--gold)]">
            {brand.name}
          </p>
          <h1 className="mt-3 font-serif text-6xl leading-[0.92] tracking-tight sm:text-8xl">
            {brand.titleLead} <span className="italic">{brand.titleAccent}</span>
            <br />
            {brand.titleTail}
          </h1>
          <p className="text-cream/85 mt-6 text-xl">{brand.tagline}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#pricing">See packages</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-cream/60 text-cream hover:bg-cream/10 bg-transparent"
            >
              <a href="#contact">Book a free intro</a>
            </Button>
          </div>
        </div>
      </Slide>

      {/* Problem */}
      <Slide id="about" src="/images/problem.jpg" alt="Misty trail">
        <div className="max-w-2xl">
          <p className="text-cream/60 text-sm tracking-[0.3em]">{problem.n}</p>
          <h2 className="mt-3 font-serif text-5xl tracking-tight sm:text-6xl">
            {problem.title}
          </h2>
          <ul className="mt-10 space-y-6 text-xl">
            {problem.points.map((p, i) => (
              <li key={i} className="border-cream/20 border-l-2 pl-5">
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-10 font-serif text-2xl italic">{problem.result}</p>
        </div>
      </Slide>

      {/* Insight */}
      <Slide
        src="/images/insight.jpg"
        alt="Hikers at sunrise"
        overlay="bg-black/60"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-cream/60 text-sm tracking-[0.3em]">
            {insight.n} — {insight.title.toUpperCase()}
          </p>
          <p className="mt-8 font-serif text-4xl leading-tight sm:text-6xl">
            “{insight.lead}”
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-2 text-lg">
            {insight.openUp.map((o, i) => (
              <span key={i}>{o}</span>
            ))}
          </div>
          <p className="mt-10 font-serif text-2xl italic">{insight.closer}</p>
        </div>
      </Slide>

      {/* Solution */}
      <Slide src="/images/solution.jpg" alt="Path to the city">
        <div className="max-w-2xl">
          <p className="text-cream/60 text-sm tracking-[0.3em]">{solution.n}</p>
          <h2 className="mt-3 font-serif text-5xl tracking-tight sm:text-6xl">
            {solution.title}
          </h2>
          <p className="mt-2 text-2xl font-semibold">{solution.subtitle}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {solution.combines.map((c, i) => (
              <div
                key={i}
                className="border-cream/20 bg-cream/5 rounded-xl border p-5 backdrop-blur-sm"
              >
                <span className="font-serif text-3xl text-[color:var(--gold)]">
                  0{i + 1}
                </span>
                <p className="mt-2">{c}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-xl text-lg">{solution.closer}</p>
        </div>
      </Slide>

      {/* Different + Who */}
      <section className="bg-ink py-28">
        <div className="mx-auto grid max-w-[88rem] gap-12 px-6 md:grid-cols-2 md:px-10 lg:px-16">
          {[different, audience].map((col, ci) => (
            <div
              key={ci}
              className="border-cream/15 bg-cream/[0.03] rounded-2xl border p-8"
            >
              <h3 className="font-serif text-3xl">{col.title}</h3>
              <ul className="mt-6 space-y-4">
                {col.points.map((p, i) => (
                  <li key={i} className="text-cream/80 flex gap-3">
                    <span className="text-[color:var(--gold)]">—</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Coach */}
      <Slide
        id="about-coach"
        src="/images/coach-3.jpg"
        alt={coach.name}
        overlay="bg-gradient-to-r from-ink via-ink/80 to-transparent"
      >
        <div className="max-w-xl">
          <p className="font-script text-2xl text-[color:var(--gold)]">
            {coach.eyebrow}
          </p>
          <h2 className="font-serif text-6xl tracking-tight">{coach.name}</h2>
          <p className="text-cream/70 mt-2">
            {brand.role} · {brand.pillars}
          </p>
          <div className="mt-6 space-y-3">
            {coach.bio.slice(0, 3).map((p, i) => (
              <p key={i} className="text-cream/80 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </Slide>

      {/* WALK */}
      <Slide id="method" src="/images/walk.jpg" alt="Trail at golden hour">
        <div>
          <h2 className="font-serif text-5xl tracking-tight">
            {walkMethod.title}
          </h2>
          <p className="text-cream/70 mt-2 text-xl">{walkMethod.subtitle}</p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {walkMethod.steps.map(s => (
              <div key={s.letter}>
                <span className="font-serif text-7xl text-[color:var(--gold)]">
                  {s.letter}
                </span>
                <p className="mt-3 font-medium">{s.title}</p>
                <p className="text-cream/70 mt-1 text-sm">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Slide>

      {/* Journey */}
      <Slide id="journey" src="/images/journey.jpg" alt="Savanna at sunset">
        <div>
          <h2 className="font-serif text-5xl tracking-tight">
            {journey.title}
          </h2>
          <p className="text-cream/70 mt-2 max-w-md">{journey.lead}</p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {journey.steps.map(s => (
              <div
                key={s.n}
                className="border-cream/20 bg-cream/5 rounded-xl border p-5 backdrop-blur-sm"
              >
                <span className="font-serif text-3xl text-[color:var(--gold)]">
                  {s.n}
                </span>
                <p className="mt-2 font-medium">{s.title}</p>
                <p className="text-cream/70 mt-1 text-sm">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Slide>

      {/* Pricing */}
      <Slide id="pricing" src="/images/pricing.jpg" alt="Street at golden hour">
        <div className="max-w-2xl">
          <h2 className="font-serif text-5xl tracking-tight">Pricing</h2>
          <div className="mt-10 space-y-3">
            {PACKAGES.map(p => (
              <div
                key={p.key}
                className="border-cream/20 bg-cream/5 flex items-center gap-4 rounded-xl border p-4 backdrop-blur-sm"
              >
                <div className="flex-1">
                  <p className="font-semibold">{p.name}</p>
                  <p className="text-cream/60 text-sm">{p.sessions}</p>
                </div>
                <span className="font-serif text-2xl text-[color:var(--gold)]">
                  {p.price}
                </span>
                <Link
                  href={p.free ? "#contact" : `/checkout/${p.key}`}
                  className="bg-cream text-ink rounded-md px-4 py-2 text-sm font-medium"
                >
                  {p.free ? "Book" : "Choose"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Slide>

      {/* Contact */}
      <Slide id="contact" src="/images/cta.jpg" alt="Hikers at sunset">
        <div className="mx-auto max-w-xl">
          <div className="text-center">
            <p className="font-script text-3xl text-[color:var(--gold)]">
              Start your journey
            </p>
            <h2 className="mt-2 font-serif text-5xl tracking-tight">
              Take the first step
            </h2>
          </div>
          <div className="mt-8 [&_*]:text-foreground">
            <ContactForm />
          </div>
        </div>
      </Slide>
    </div>
  )
}
