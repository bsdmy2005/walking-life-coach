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

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-muted-foreground text-xs tracking-[0.25em] uppercase">
      {children}
    </span>
  )
}

/** Mono: high-contrast structured grid, monochrome + one terracotta accent. */
export function VariantMono() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section
        id="top"
        className="border-foreground/15 mx-auto max-w-7xl border-x px-0 pt-28"
      >
        <div className="border-foreground/15 border-b px-6 py-20 md:px-10 md:py-28 lg:px-16">
          <Label>Walking Life Coaching — South Africa</Label>
          <h1 className="mt-6 font-serif text-6xl leading-[0.9] tracking-tight sm:text-8xl">
            {brand.titleLead} <span className="italic">{brand.titleAccent}</span>{" "}
            {brand.titleTail}
          </h1>
          <div className="bg-primary mt-8 h-1 w-24" />
          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-md text-xl">{brand.tagline}</p>
            <div className="flex gap-3">
              <Button asChild size="lg" className="rounded-none">
                <a href="#pricing">See packages</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-none"
              >
                <a href="#contact">Book a free intro</a>
              </Button>
            </div>
          </div>
        </div>
        <div className="relative h-[44vh]">
          <Image
            src="/images/hero.jpg"
            alt="Walking a trail"
            fill
            priority
            sizes="100vw"
            className="object-cover grayscale"
          />
        </div>
      </section>

      {/* Problem */}
      <section
        id="about"
        className="border-foreground/15 mx-auto max-w-7xl border-x px-6 py-20 md:px-10 lg:px-16"
      >
        <Label>{problem.n} — The Problem</Label>
        <h2 className="mt-4 font-serif text-5xl tracking-tight">
          {problem.title}
        </h2>
        <div className="border-foreground/15 mt-12 grid border-t md:grid-cols-3">
          {problem.points.map((p, i) => (
            <div
              key={i}
              className="border-foreground/15 border-b p-6 md:border-r md:border-b-0 md:last:border-r-0"
            >
              <span className="text-primary font-serif text-4xl">0{i + 1}</span>
              <p className="mt-4 leading-relaxed">{p}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-xl">
          <span className="text-primary">→</span> {problem.result}
        </p>
      </section>

      {/* Insight — black block */}
      <section className="bg-foreground text-background">
        <div className="border-background/15 mx-auto max-w-7xl border-x px-6 py-24 md:px-10 lg:px-16">
          <Label>{insight.n} — The Insight</Label>
          <p className="mt-6 max-w-4xl font-serif text-4xl leading-tight sm:text-5xl">
            “{insight.lead}”
          </p>
          <div className="mt-12 grid border-t border-background/15 sm:grid-cols-3">
            {insight.openUp.map((o, i) => (
              <div
                key={i}
                className="border-background/15 border-b p-6 sm:border-r sm:border-b-0 sm:last:border-r-0"
              >
                <span className="text-[color:var(--gold)]">0{i + 1}</span>
                <p className="mt-2 text-lg">{o}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 font-serif text-2xl italic">{insight.closer}</p>
        </div>
      </section>

      {/* Solution */}
      <section className="border-foreground/15 mx-auto max-w-7xl border-x px-6 py-20 md:px-10 lg:px-16">
        <Label>{solution.n} — The Solution</Label>
        <h2 className="mt-4 font-serif text-5xl tracking-tight">
          {solution.subtitle}
        </h2>
        <div className="border-foreground/15 mt-12 grid border-t md:grid-cols-3">
          {solution.combines.map((c, i) => (
            <div
              key={i}
              className="border-foreground/15 border-b p-6 md:border-r md:border-b-0 md:last:border-r-0"
            >
              <span className="text-primary font-serif text-4xl">0{i + 1}</span>
              <p className="mt-4">{c}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-xl text-lg">{solution.closer}</p>
      </section>

      {/* Different + Who */}
      <section className="border-foreground/15 mx-auto grid max-w-7xl border-x md:grid-cols-2">
        {[different, audience].map((col, ci) => (
          <div
            key={ci}
            className={`p-6 md:p-10 lg:p-16 ${ci === 0 ? "border-foreground/15 md:border-r" : ""} border-foreground/15 border-b md:border-b-0`}
          >
            <h3 className="font-serif text-3xl">{col.title}</h3>
            <ul className="mt-8 space-y-px">
              {col.points.map((p, i) => (
                <li
                  key={i}
                  className="border-foreground/15 flex gap-4 border-t py-4"
                >
                  <span className="text-primary text-sm">0{i + 1}</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Coach */}
      <section
        id="about-coach"
        className="border-foreground/15 mx-auto grid max-w-7xl border-x border-t md:grid-cols-[1fr_1.3fr]"
      >
        <div className="relative min-h-[400px]">
          <Image
            src="/images/coach-1.jpg"
            alt={coach.name}
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover grayscale"
          />
        </div>
        <div className="border-foreground/15 border-t p-6 md:border-t-0 md:border-l md:p-10 lg:p-16">
          <Label>{coach.eyebrow}</Label>
          <h2 className="mt-4 font-serif text-5xl tracking-tight">
            {coach.name}
          </h2>
          <p className="text-muted-foreground mt-2">
            {brand.role} · {brand.pillars}
          </p>
          <div className="mt-6 space-y-4">
            {coach.bio.map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* WALK */}
      <section
        id="method"
        className="border-foreground/15 mx-auto max-w-7xl border-x border-t px-6 py-20 md:px-10 lg:px-16"
      >
        <Label>The Coaching Framework</Label>
        <h2 className="mt-4 font-serif text-5xl tracking-tight">
          {walkMethod.subtitle}
        </h2>
        <div className="border-foreground/15 mt-12 grid border-t sm:grid-cols-2 lg:grid-cols-4">
          {walkMethod.steps.map(s => (
            <div
              key={s.letter}
              className="border-foreground/15 border-b p-6 sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:last:border-r-0"
            >
              <span className="font-serif text-7xl">{s.letter}</span>
              <p className="mt-3 font-medium">{s.title}</p>
              <p className="text-muted-foreground mt-2 text-sm">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Journey */}
      <section
        id="journey"
        className="border-foreground/15 mx-auto max-w-7xl border-x border-t px-6 py-20 md:px-10 lg:px-16"
      >
        <Label>The Process</Label>
        <h2 className="mt-4 font-serif text-5xl tracking-tight">
          {journey.title}
        </h2>
        <div className="mt-12 space-y-px">
          {journey.steps.map(s => (
            <div
              key={s.n}
              className="border-foreground/15 flex flex-col gap-2 border-t py-6 md:flex-row md:items-baseline md:gap-10"
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
      <section
        id="pricing"
        className="border-foreground/15 mx-auto max-w-7xl border-x border-t px-6 py-20 md:px-10 lg:px-16"
      >
        <Label>Pricing</Label>
        <h2 className="mt-4 font-serif text-5xl tracking-tight">
          Flexible & accessible
        </h2>
        <div className="mt-12 space-y-px">
          {PACKAGES.map(p => (
            <div
              key={p.key}
              className="border-foreground/15 flex items-center gap-6 border-t py-6"
            >
              <p className="flex-1 font-serif text-2xl">{p.name}</p>
              <span className="text-primary font-serif text-3xl">{p.price}</span>
              <Link
                href={p.free ? "#contact" : `/checkout/${p.key}`}
                className="bg-foreground text-background rounded-none px-5 py-2.5 text-sm font-medium"
              >
                {p.free ? "Book" : "Choose"}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-foreground/15 mx-auto max-w-3xl border-x border-t px-6 py-20 md:px-10 lg:px-16"
      >
        <Label>Get started</Label>
        <h2 className="mt-4 font-serif text-5xl tracking-tight">
          Book your free intro
        </h2>
        <div className="mt-10">
          <ContactForm />
        </div>
      </section>
    </div>
  )
}
