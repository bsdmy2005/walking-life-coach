import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Compass,
  Footprints,
  Leaf,
  Waves,
  Wind,
  Sun,
  Sparkles,
  Check,
  Heart,
  MessageCircle,
  Map,
  CircleDot,
  Mountain
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/site/contact-form"
import {
  brand,
  problem,
  insight,
  solution,
  different,
  audience,
  coach,
  walkMethod,
  journey,
  ctaActions
} from "@/lib/landing-content"
import { PACKAGES } from "@/lib/packages"

export function VariantCoastal() {
  return (
    <div className="min-h-screen bg-[var(--background)] font-sans text-[var(--foreground)] antialiased selection:bg-[var(--primary)]/20">
      {/* ───────────────────────── HERO ───────────────────────── */}
      <section
        id="top"
        className="relative overflow-hidden bg-gradient-to-b from-[#EAF2F4] to-[var(--background)]"
      >
        {/* soft decorative blobs */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[var(--primary)]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-40 h-72 w-72 rounded-full bg-[var(--accent)]/25 blur-3xl" />

        <div className="relative mx-auto grid max-w-[88rem] gap-12 px-6 pb-20 pt-16 sm:pt-24 md:px-10 lg:grid-cols-2 lg:items-center lg:px-16 lg:pb-28">
          <div className="text-center lg:text-left">
            <p className="font-script text-2xl text-[var(--primary)] sm:text-3xl">
              {brand.name}
            </p>

            <h1 className="mt-4 font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              {brand.titleLead}{" "}
              <span className="italic text-[var(--primary)]">{brand.titleAccent}</span>{" "}
              {brand.titleTail}
            </h1>

            <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-[#5C6B73] lg:mx-0">
              {brand.tagline}
            </p>

            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:items-start lg:justify-start">
              <Button
                asChild
                className="h-12 rounded-full bg-[var(--primary)] px-8 text-base text-white shadow-sm transition-colors hover:bg-[#356a78]"
              >
                <Link href="#pricing">
                  See packages
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-full border-[#DCE6E8] bg-white px-8 text-base text-[var(--foreground)] hover:bg-[#EAF2F4]"
              >
                <Link href="#contact">Book a free intro</Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-[#5C6B73] lg:justify-start">
              <span className="inline-flex items-center gap-2">
                <Footprints className="h-4 w-4 text-[var(--primary)]" />
                {brand.role}
              </span>
              <span className="inline-flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[var(--accent)]" />
                {brand.pillars}
              </span>
            </div>
          </div>

          {/* hero image */}
          <div className="relative">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] border border-[#DCE6E8] bg-white shadow-xl shadow-[var(--primary)]/10">
              <Image
                src="/images/hero.jpg"
                alt="Walking life coaching by the coast"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 480px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--foreground)]/30 via-transparent to-[var(--primary)]/10" />
            </div>
            <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-[#DCE6E8] bg-white/90 px-5 py-2.5 text-sm text-[var(--foreground)] shadow-md backdrop-blur">
              <Waves className="h-4 w-4 text-[var(--primary)]" />
              Coaching that moves with you
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── PROBLEM ───────────────────────── */}
      <section id="about" className="mx-auto max-w-[88rem] px-6 py-20 sm:py-28 md:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative order-last aspect-[5/4] overflow-hidden rounded-[2rem] border border-[#DCE6E8] shadow-lg shadow-[var(--primary)]/5 lg:order-first">
            <Image
              src="/images/problem.jpg"
              alt="Feeling stuck"
              fill
              sizes="(max-width: 1024px) 90vw, 520px"
              className="object-cover grayscale"
            />
            <div className="absolute inset-0 bg-[var(--primary)]/15 mix-blend-multiply" />
          </div>

          <div>
            <SectionTag n={problem.n} label="The Problem" icon={Wind} />
            <h2 className="mt-5 font-serif text-3xl tracking-tight sm:text-4xl">
              {problem.title}
            </h2>
            <ul className="mt-8 space-y-4">
              {problem.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 rounded-2xl border border-[#DCE6E8] bg-white p-5 text-[#5C6B73] shadow-sm"
                >
                  <CircleDot className="mt-0.5 h-5 w-5 shrink-0 text-[var(--primary)]" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <p className="mt-7 rounded-2xl bg-[#EAF2F4] px-6 py-4 font-serif text-lg italic text-[var(--foreground)]">
              {problem.result}
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────────────── INSIGHT ───────────────────────── */}
      <section className="bg-gradient-to-b from-[var(--background)] to-[#EAF2F4]">
        <div className="mx-auto max-w-[88rem] px-6 py-20 sm:py-28 md:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionTag n={insight.n} label="The Insight" icon={Leaf} />
              <h2 className="mt-5 font-serif text-3xl tracking-tight sm:text-4xl">
                {insight.title}
              </h2>
              <p className="mt-6 font-serif text-2xl leading-snug text-[var(--primary)]">
                “{insight.lead}”
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {insight.openUp.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[#DCE6E8] bg-white px-5 py-6 text-center shadow-sm"
                  >
                    <p className="font-medium text-[var(--foreground)]">{item}</p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-lg leading-relaxed text-[#5C6B73]">
                {insight.closer}
              </p>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-[#DCE6E8] shadow-lg shadow-[var(--primary)]/10">
              <Image
                src="/images/insight.jpg"
                alt="Walking and breathing"
                fill
                sizes="(max-width: 1024px) 90vw, 520px"
                className="object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/30 to-[var(--accent)]/10 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── SOLUTION ───────────────────────── */}
      <section className="mx-auto max-w-[88rem] px-6 py-20 sm:py-28 md:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative order-last aspect-[5/4] overflow-hidden rounded-[2rem] border border-[#DCE6E8] shadow-lg shadow-[var(--primary)]/5 lg:order-first">
            <Image
              src="/images/solution.jpg"
              alt="Walking coaching in nature"
              fill
              sizes="(max-width: 1024px) 90vw, 520px"
              className="object-cover grayscale"
            />
            <div className="absolute inset-0 bg-[var(--primary)]/15 mix-blend-multiply" />
          </div>

          <div>
            <SectionTag n={solution.n} label="The Solution" icon={Compass} />
            <h2 className="mt-5 font-serif text-3xl tracking-tight sm:text-4xl">
              {solution.title}
            </h2>
            <p className="mt-2 font-script text-2xl text-[var(--primary)]">
              {solution.subtitle}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-[#5C6B73]">
              {solution.intro}
            </p>

            <ul className="mt-7 space-y-3">
              {solution.combines.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-full border border-[#DCE6E8] bg-white px-5 py-3.5 text-[var(--foreground)] shadow-sm"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EAF2F4]">
                    <Check className="h-4 w-4 text-[var(--primary)]" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-8 rounded-2xl bg-[var(--accent)]/20 px-6 py-4 font-serif text-lg italic text-[var(--foreground)]">
              {solution.closer}
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────────────── DIFFERENT + WHO ───────────────────────── */}
      <section className="bg-gradient-to-b from-[#EAF2F4] to-[var(--background)]">
        <div className="mx-auto max-w-[88rem] px-6 py-20 sm:py-28 md:px-10 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Different */}
            <div className="rounded-[2rem] border border-[#DCE6E8] bg-white p-8 shadow-sm sm:p-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#EAF2F4] px-4 py-1.5 text-sm font-medium text-[var(--primary)]">
                <Sparkles className="h-4 w-4" />
                Distinct
              </div>
              <h2 className="mt-5 font-serif text-2xl tracking-tight sm:text-3xl">
                {different.title}
              </h2>
              <ul className="mt-7 space-y-4">
                {different.points.map((point) => (
                  <li key={point} className="flex gap-3 text-[#5C6B73]">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-[var(--primary)]" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-7 font-serif text-lg italic text-[var(--foreground)]">
                {different.closer}
              </p>
            </div>

            {/* Who */}
            <div className="rounded-[2rem] border border-[#DCE6E8] bg-gradient-to-b from-white to-[#EAF2F4] p-8 shadow-sm sm:p-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)]/25 px-4 py-1.5 text-sm font-medium text-[#8a6a3c]">
                <Heart className="h-4 w-4" />
                For you
              </div>
              <h2 className="mt-5 font-serif text-2xl tracking-tight sm:text-3xl">
                {audience.title}
              </h2>
              <ul className="mt-7 space-y-4">
                {audience.points.map((point) => (
                  <li key={point} className="flex gap-3 text-[#5C6B73]">
                    <Sun className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent)]" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── COACH ───────────────────────── */}
      <section id="about-coach" className="mx-auto max-w-[88rem] px-6 py-20 sm:py-28 md:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-[2rem] border border-[#DCE6E8] shadow-lg shadow-[var(--primary)]/10">
                <Image
                  src="/images/coach-1.jpg"
                  alt={coach.name}
                  fill
                  sizes="(max-width: 1024px) 90vw, 460px"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-[1.5rem] border border-[#DCE6E8] shadow-sm">
                <Image
                  src="/images/coach-2.jpg"
                  alt={coach.name}
                  fill
                  sizes="(max-width: 1024px) 45vw, 220px"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-[1.5rem] border border-[#DCE6E8] shadow-sm">
                <Image
                  src="/images/coach-3.jpg"
                  alt={coach.name}
                  fill
                  sizes="(max-width: 1024px) 45vw, 220px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <p className="font-script text-2xl text-[var(--primary)]">{coach.eyebrow}</p>
            <h2 className="mt-2 font-serif text-3xl tracking-tight sm:text-4xl">
              {coach.name}
            </h2>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#EAF2F4] px-5 py-2 font-serif text-lg italic text-[var(--foreground)]">
              <MessageCircle className="h-4 w-4 text-[var(--primary)]" />
              {coach.question}
            </p>
            <div className="mt-7 space-y-5">
              {coach.bio.map((para) => (
                <p key={para} className="leading-relaxed text-[#5C6B73]">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── WALK METHOD ───────────────────────── */}
      <section
        id="method"
        className="relative overflow-hidden bg-gradient-to-b from-[#EAF2F4] to-[var(--background)]"
      >
        <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[var(--accent)]/20 blur-3xl" />
        <div className="relative mx-auto max-w-[88rem] px-6 py-20 sm:py-28 md:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <div className="text-center lg:text-left">
                <p className="font-medium text-[var(--primary)]">{walkMethod.title}</p>
                <h2 className="mt-2 font-serif text-3xl tracking-tight sm:text-4xl">
                  {walkMethod.subtitle}
                </h2>
                <p className="mt-3 font-script text-2xl text-[var(--accent)]">
                  {walkMethod.tagline}
                </p>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {walkMethod.steps.map((step) => (
                  <div
                    key={step.letter}
                    className="rounded-[1.5rem] border border-[#DCE6E8] bg-white p-6 shadow-sm"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--primary)] font-serif text-xl text-white">
                      {step.letter}
                    </div>
                    <h3 className="mt-4 font-serif text-lg text-[var(--foreground)]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5C6B73]">
                      {step.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-[#DCE6E8] shadow-lg shadow-[var(--primary)]/10">
              <Image
                src="/images/walk.jpg"
                alt="The WALK method"
                fill
                sizes="(max-width: 1024px) 90vw, 440px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--foreground)]/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── JOURNEY ───────────────────────── */}
      <section id="journey" className="mx-auto max-w-[88rem] px-6 py-20 sm:py-28 md:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="relative order-last aspect-[5/4] overflow-hidden rounded-[2rem] border border-[#DCE6E8] shadow-lg shadow-[var(--primary)]/5 lg:order-first">
            <Image
              src="/images/journey.jpg"
              alt="The coaching journey"
              fill
              sizes="(max-width: 1024px) 90vw, 520px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)]/20 to-transparent" />
          </div>

          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EAF2F4] px-4 py-1.5 text-sm font-medium text-[var(--primary)]">
              <Map className="h-4 w-4" />
              The path
            </div>
            <h2 className="mt-5 font-serif text-3xl tracking-tight sm:text-4xl">
              {journey.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#5C6B73]">
              {journey.lead}
            </p>

            <ol className="mt-9 space-y-5">
              {journey.steps.map((step) => (
                <li key={step.n} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#DCE6E8] bg-white font-serif text-[var(--primary)] shadow-sm">
                    {step.n}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-[var(--foreground)]">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#5C6B73]">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ───────────────────────── PRICING ───────────────────────── */}
      <section className="bg-gradient-to-b from-[var(--background)] to-[#EAF2F4]">
        <div className="mx-auto max-w-[88rem] px-6 py-20 sm:py-28 md:px-10 lg:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-[var(--primary)] shadow-sm">
              <Mountain className="h-4 w-4" />
              Packages
            </div>
            <h2
              id="pricing"
              className="mt-5 scroll-mt-24 font-serif text-3xl tracking-tight sm:text-4xl"
            >
              Choose your pace
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#5C6B73]">
              Gentle, flexible coaching packages — start where you feel ready.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PACKAGES.map((p) => (
              <div
                key={p.key}
                className={`flex flex-col rounded-[1.75rem] border bg-white p-7 shadow-sm transition-shadow hover:shadow-lg hover:shadow-[var(--primary)]/10 ${
                  p.free
                    ? "border-[var(--accent)]"
                    : "border-[#DCE6E8]"
                }`}
              >
                {p.free ? (
                  <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-[var(--accent)]/25 px-3 py-1 text-xs font-medium text-[#8a6a3c]">
                    <Sparkles className="h-3.5 w-3.5" />
                    Start here
                  </span>
                ) : (
                  <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-[#EAF2F4] px-3 py-1 text-xs font-medium text-[var(--primary)]">
                    <Footprints className="h-3.5 w-3.5" />
                    {p.sessions}
                  </span>
                )}

                <h3 className="font-serif text-xl text-[var(--foreground)]">{p.name}</h3>
                <p className="mt-3 font-serif text-3xl text-[var(--primary)]">
                  {p.price}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-[#5C6B73]">
                  {p.blurb}
                </p>

                {p.free ? (
                  <Button
                    asChild
                    variant="outline"
                    className="mt-6 h-11 rounded-full border-[var(--accent)] bg-white text-[var(--foreground)] hover:bg-[var(--accent)]/15"
                  >
                    <Link href="#contact">Book</Link>
                  </Button>
                ) : (
                  <Button
                    asChild
                    className="mt-6 h-11 rounded-full bg-[var(--primary)] text-white hover:bg-[#356a78]"
                  >
                    <Link href={`/checkout/${p.key}`}>Choose</Link>
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── CTA ───────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/cta.jpg"
            alt="Take the first step"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--foreground)]/85 via-[var(--foreground)]/65 to-[var(--primary)]/55" />
        </div>

        <div className="relative mx-auto max-w-[88rem] px-6 py-20 text-white sm:py-28 md:px-10 lg:px-16">
          <div className="grid gap-6 sm:grid-cols-3">
            {ctaActions.map((action) => (
              <Link
                key={action.title}
                href="#contact"
                className="group rounded-[1.75rem] border border-white/20 bg-white/10 p-7 backdrop-blur-md transition-colors hover:bg-white/20"
              >
                <h3 className="font-serif text-xl">{action.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  {action.body}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)]">
                  Begin
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-12 text-center font-script text-3xl text-[var(--accent)] sm:text-4xl">
            Take the first step…literally!
          </p>
        </div>
      </section>

      {/* ───────────────────────── CONTACT ───────────────────────── */}
      <section id="contact" className="mx-auto max-w-2xl px-6 py-20 sm:py-28">
        <div className="text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-[#EAF2F4] px-4 py-1.5 text-sm font-medium text-[var(--primary)]">
            <Waves className="h-4 w-4" />
            Let's talk
          </div>
          <h2 className="mt-5 font-serif text-3xl tracking-tight sm:text-4xl">
            Start the conversation
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#5C6B73]">
            Send a note and we'll find a time to walk. No pressure, just a first
            step.
          </p>
        </div>

        <div className="mt-10 rounded-[2rem] border border-[#DCE6E8] bg-white p-7 shadow-sm sm:p-10">
          <ContactForm />
        </div>

        <p className="mt-10 text-center text-sm text-[#5C6B73]">
          {brand.name} · {brand.role} · {brand.pillars}
        </p>
      </section>
    </div>
  )
}

function SectionTag({
  n,
  label,
  icon: Icon
}: {
  n: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-[#DCE6E8] bg-white px-4 py-1.5 shadow-sm">
      <span className="font-serif text-sm text-[var(--accent)]">{n}</span>
      <span className="h-3.5 w-px bg-[#DCE6E8]" />
      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--primary)]">
        <Icon className="h-4 w-4" />
        {label}
      </span>
    </div>
  )
}
