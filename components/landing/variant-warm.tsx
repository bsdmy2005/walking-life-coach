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

const TINTS = ["bg-terracotta/10", "bg-gold/10", "bg-olive/10", "bg-navy/10"]
const ACCENTS = ["text-terracotta", "text-gold", "text-olive", "text-navy"]
const PILLS = ["bg-terracotta", "bg-gold", "bg-olive", "bg-navy"]

/** Warm: soft rounded cards, cream throughout, gentle and organic. */
export function VariantWarm() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section id="top" className="mx-auto max-w-7xl px-6 pt-32 pb-16 md:px-10 lg:px-16">
        <div className="bg-card border-border overflow-hidden rounded-[2rem] border shadow-sm">
          <div className="grid items-center gap-0 md:grid-cols-2">
            <div className="p-10 md:p-14">
              <p className="font-script text-primary text-3xl">{brand.name}</p>
              <h1 className="mt-3 font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl">
                {brand.titleLead}{" "}
                <span className="italic">{brand.titleAccent}</span>{" "}
                {brand.titleTail}
              </h1>
              <p className="text-muted-foreground mt-6 text-lg">
                {brand.tagline}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full">
                  <a href="#pricing">See packages</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full"
                >
                  <a href="#contact">Book a free intro</a>
                </Button>
              </div>
            </div>
            <div className="relative min-h-[360px] md:min-h-[460px]">
              <Image
                src="/images/hero.jpg"
                alt="Walking a trail"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16">
        <h2 className="text-center font-serif text-4xl tracking-tight sm:text-5xl">
          {problem.title}
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {problem.points.map((p, i) => (
            <div
              key={i}
              className={`${TINTS[i]} rounded-3xl p-8`}
            >
              <span
                className={`${PILLS[i]} text-cream flex size-9 items-center justify-center rounded-full font-serif`}
              >
                {i + 1}
              </span>
              <p className="mt-4 text-lg leading-relaxed">{p}</p>
            </div>
          ))}
        </div>
        <div className="bg-navy text-cream mt-5 rounded-3xl px-8 py-6 text-center">
          <span className="font-semibold">Result:</span> {problem.result}
        </div>
      </section>

      {/* Insight */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="bg-olive/10 rounded-[2rem] p-10 text-center md:p-14">
          <p className="font-script text-primary text-3xl">{insight.title}</p>
          <p className="mt-4 font-serif text-3xl leading-snug sm:text-4xl">
            “{insight.lead}”
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {insight.openUp.map((o, i) => (
              <span
                key={i}
                className="bg-card border-border rounded-full border px-5 py-2 text-sm"
              >
                {o}
              </span>
            ))}
          </div>
          <p className="text-olive mt-8 font-serif text-2xl italic">
            {insight.closer}
          </p>
        </div>
      </section>

      {/* Solution */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16">
        <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">
          {solution.title}
        </h2>
        <p className="text-primary mt-2 text-xl font-medium">
          {solution.subtitle}
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {solution.combines.map((c, i) => (
            <div key={i} className={`${TINTS[i]} rounded-3xl p-8`}>
              <span className={`${ACCENTS[i]} font-serif text-4xl`}>
                0{i + 1}
              </span>
              <p className="mt-3 text-lg">{c}</p>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground mt-8 max-w-xl">{solution.closer}</p>
      </section>

      {/* Different + Who */}
      <section className="mx-auto grid max-w-7xl gap-5 px-6 py-16 md:grid-cols-2 md:px-10 lg:px-16">
        {[different, audience].map((col, ci) => (
          <div key={ci} className="bg-card border-border rounded-3xl border p-8">
            <h3 className="font-serif text-2xl">{col.title}</h3>
            <ul className="mt-6 space-y-3">
              {col.points.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className={`${PILLS[ci === 0 ? 0 : 2]} mt-2 size-2 shrink-0 rounded-full`}
                  />
                  <span className="text-muted-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Coach */}
      <section
        id="about-coach"
        className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-10 lg:px-16"
      >
        <div>
          <p className="font-script text-primary text-3xl">{coach.eyebrow}</p>
          <h2 className="text-olive font-serif text-5xl tracking-tight">
            {coach.name}
          </h2>
          <p className="text-olive/80 mt-2 font-medium">
            {brand.role} | {brand.pillars}
          </p>
          <div className="mt-6 space-y-4">
            {coach.bio.map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-3xl">
            <Image
              src="/images/coach-3.jpg"
              alt={coach.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-3xl">
            <Image
              src="/images/coach-2.jpg"
              alt={coach.name}
              fill
              sizes="25vw"
              className="object-cover object-top"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-3xl">
            <Image
              src="/images/coach-1.jpg"
              alt={coach.name}
              fill
              sizes="25vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* WALK */}
      <section id="method" className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16">
        <h2 className="text-center font-serif text-4xl tracking-tight sm:text-5xl">
          {walkMethod.title}
        </h2>
        <p className="text-primary mt-2 text-center text-lg">
          {walkMethod.subtitle}
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {walkMethod.steps.map((s, i) => (
            <div
              key={s.letter}
              className={`${TINTS[i]} flex flex-col items-center rounded-3xl p-8 text-center`}
            >
              <span className={`${ACCENTS[i]} font-serif text-6xl`}>
                {s.letter}
              </span>
              <p className={`${ACCENTS[i]} mt-3 font-semibold`}>{s.title}</p>
              <p className="text-muted-foreground mt-2 text-sm">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Journey */}
      <section id="journey" className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16">
        <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">
          {journey.title}
        </h2>
        <p className="text-muted-foreground mt-2 max-w-md">{journey.lead}</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {journey.steps.map((s, i) => (
            <div
              key={s.n}
              className="bg-card border-border rounded-3xl border p-6 text-center"
            >
              <span
                className={`${PILLS[i]} text-cream mx-auto flex size-10 items-center justify-center rounded-full font-serif`}
              >
                {s.n}
              </span>
              <p className={`${ACCENTS[i]} mt-4 font-serif text-xl`}>
                {s.title}
              </p>
              <p className="text-muted-foreground mt-2 text-sm">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-5xl px-6 py-16 md:px-10 lg:px-16">
        <h2 className="text-center font-serif text-4xl tracking-tight sm:text-5xl">
          Pricing Model
        </h2>
        <p className="text-primary mt-2 text-center">Flexible and accessible.</p>
        <div className="mt-10 space-y-4">
          {PACKAGES.map(p => (
            <div
              key={p.key}
              className="bg-card border-border flex items-center gap-4 rounded-3xl border p-5 shadow-sm"
            >
              <div className="flex-1">
                <p className="font-serif text-xl">{p.name}</p>
                <p className="text-muted-foreground text-sm">{p.blurb}</p>
              </div>
              <span className="text-terracotta font-serif text-2xl">
                {p.price}
              </span>
              <Link
                href={p.free ? "#contact" : `/checkout/${p.key}`}
                className="bg-navy text-cream hover:bg-navy/90 rounded-full px-5 py-2.5 text-sm font-medium transition-colors"
              >
                {p.free ? "Book" : "Choose"}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-2xl px-6 py-16 pb-28">
        <div className="text-center">
          <p className="font-script text-primary text-3xl">Start your journey</p>
          <h2 className="text-navy mt-2 font-serif text-4xl tracking-tight sm:text-5xl">
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
