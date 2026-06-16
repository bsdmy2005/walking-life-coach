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

function Rule() {
  return <div className="bg-foreground/15 h-px w-full" />
}

/** Editorial: typographic, airy, numbered lists, minimal imagery. */
export function VariantEditorial() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section id="top" className="mx-auto max-w-4xl px-6 pt-40 pb-24 text-center">
        <p className="font-script text-primary text-3xl">{brand.name}</p>
        <h1 className="mt-4 font-serif text-6xl leading-[0.95] tracking-tight sm:text-8xl">
          {brand.titleLead} <span className="italic">{brand.titleAccent}</span>{" "}
          {brand.titleTail}
        </h1>
        <p className="text-muted-foreground mx-auto mt-8 max-w-md text-lg">
          {brand.tagline}
        </p>
        <div className="mt-10 flex justify-center gap-3">
          <Button asChild size="lg">
            <a href="#pricing">See packages</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#contact">Book a free intro</a>
          </Button>
        </div>
      </section>

      <div className="relative mx-auto h-[60vh] max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="relative h-full overflow-hidden rounded-2xl">
          <Image
            src="/images/hero.jpg"
            alt="Walking a mountain trail"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Problem */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-28 md:px-10 lg:px-16">
        <p className="text-primary text-sm tracking-[0.3em]">{problem.n}</p>
        <h2 className="mt-3 font-serif text-5xl tracking-tight sm:text-6xl">
          {problem.title}
        </h2>
        <div className="mt-14 space-y-8">
          {problem.points.map((p, i) => (
            <div key={i}>
              <div className="flex gap-8">
                <span className="text-primary/70 font-serif text-2xl">
                  0{i + 1}
                </span>
                <p className="max-w-3xl flex-1 text-xl leading-relaxed">{p}</p>
              </div>
              <div className="mt-8">
                <Rule />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-12 max-w-3xl font-serif text-3xl italic">
          The result? {problem.result}
        </p>
      </section>

      {/* Insight — pull quote */}
      <section className="bg-foreground text-background py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-background/60 text-sm tracking-[0.3em]">
            {insight.n} — {insight.title.toUpperCase()}
          </p>
          <p className="mt-8 font-serif text-4xl leading-tight sm:text-5xl">
            “{insight.lead}”
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-3 text-lg">
            {insight.openUp.map((o, i) => (
              <span key={i} className="text-background/80">
                {o}
              </span>
            ))}
          </div>
          <p className="mt-12 font-serif text-2xl italic">{insight.closer}</p>
        </div>
      </section>

      {/* Solution */}
      <section className="mx-auto max-w-7xl px-6 py-28 md:px-10 lg:px-16">
        <p className="text-primary text-sm tracking-[0.3em]">{solution.n}</p>
        <h2 className="mt-3 font-serif text-5xl tracking-tight sm:text-6xl">
          {solution.title}
        </h2>
        <p className="text-muted-foreground mt-4 text-xl">{solution.subtitle}</p>
        <div className="mt-12 grid gap-px sm:grid-cols-3">
          {solution.combines.map((c, i) => (
            <div key={i} className="px-2">
              <span className="font-serif text-primary text-5xl">0{i + 1}</span>
              <p className="mt-3 text-lg">{c}</p>
            </div>
          ))}
        </div>
        <p className="mt-14 max-w-xl text-lg">{solution.closer}</p>
      </section>

      {/* Different + Who */}
      <section className="bg-muted py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:px-10 lg:px-16">
          {[different, audience].map((col, ci) => {
            const closer = (col as { closer?: string }).closer
            return (
              <div key={ci}>
                <h3 className="font-serif text-3xl tracking-tight">
                  {col.title}
                </h3>
                <ul className="mt-8 space-y-5">
                  {col.points.map((p, i) => (
                    <li key={i} className="flex gap-5">
                      <span className="text-primary/70 font-serif">
                        0{i + 1}
                      </span>
                      <span className="text-muted-foreground flex-1">{p}</span>
                    </li>
                  ))}
                </ul>
                {closer && <p className="mt-8 italic">{closer}</p>}
              </div>
            )
          })}
        </div>
      </section>

      {/* Coach */}
      <section
        id="about-coach"
        className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-28 md:grid-cols-[1fr_1.2fr] md:px-10 lg:px-16"
      >
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
          <Image
            src="/images/coach-1.jpg"
            alt={coach.name}
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-script text-primary text-2xl">{coach.eyebrow}</p>
          <h2 className="font-serif text-5xl tracking-tight">{coach.name}</h2>
          <p className="text-muted-foreground mt-2">
            {brand.role} · {brand.pillars}
          </p>
          <div className="mt-6 max-w-2xl space-y-4">
            {coach.bio.map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* WALK */}
      <section id="method" className="bg-foreground text-background py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <h2 className="text-center font-serif text-4xl tracking-tight sm:text-5xl">
            {walkMethod.title}
          </h2>
          <p className="text-background/60 mt-2 text-center">
            {walkMethod.subtitle}
          </p>
          <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {walkMethod.steps.map(s => (
              <div key={s.letter}>
                <span className="font-serif text-7xl">{s.letter}</span>
                <p className="mt-4 font-medium">{s.title}</p>
                <p className="text-background/70 mt-2 text-sm leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
          <p className="text-background/50 mt-16 text-center text-sm tracking-[0.3em]">
            {walkMethod.tagline.toUpperCase()}
          </p>
        </div>
      </section>

      {/* Journey */}
      <section id="journey" className="mx-auto max-w-7xl px-6 py-28 md:px-10 lg:px-16">
        <h2 className="font-serif text-5xl tracking-tight">{journey.title}</h2>
        <p className="text-muted-foreground mt-3 max-w-md">{journey.lead}</p>
        <div className="mt-14 space-y-px">
          {journey.steps.map(s => (
            <div
              key={s.n}
              className="border-foreground/10 flex flex-col gap-2 border-t py-6 md:flex-row md:items-baseline md:gap-10"
            >
              <span className="text-primary font-serif text-3xl md:w-16">
                {s.n}
              </span>
              <p className="font-serif text-2xl md:w-72">{s.title}</p>
              <p className="text-muted-foreground flex-1">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-muted py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <h2 className="font-serif text-5xl tracking-tight">Pricing</h2>
          <p className="text-primary mt-3">Flexible and accessible.</p>
          <div className="mt-12 space-y-px">
            {PACKAGES.map(p => (
              <div
                key={p.key}
                className="border-foreground/10 flex items-center gap-4 border-t py-6"
              >
                <div className="flex-1">
                  <p className="font-serif text-2xl">{p.name}</p>
                  <p className="text-muted-foreground text-sm">{p.blurb}</p>
                </div>
                <span className="text-primary font-serif text-3xl">
                  {p.price}
                </span>
                <Link
                  href={p.free ? "#contact" : `/checkout/${p.key}`}
                  className="text-foreground underline-offset-4 hover:underline"
                >
                  {p.free ? "Book" : "Choose"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-2xl px-6 py-28">
        <div className="text-center">
          <p className="font-script text-primary text-3xl">Start your journey</p>
          <h2 className="mt-2 font-serif text-5xl tracking-tight">
            Book your free intro
          </h2>
        </div>
        <div className="mt-10">
          <ContactForm />
        </div>
      </section>
    </div>
  )
}
