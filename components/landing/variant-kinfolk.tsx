import Image from "next/image"
import Link from "next/link"
import {
  ArrowUpRight,
  ArrowRight,
  Minus,
  MapPin,
  Compass,
  Leaf,
  Footprints
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

/* ------------------------------------------------------------------ */
/*  Small editorial primitives                                         */
/* ------------------------------------------------------------------ */

function Label({
  children,
  className = ""
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={`font-sans text-[0.6875rem] uppercase tracking-[0.32em] ${className}`}
    >
      {children}
    </span>
  )
}

function Rule({ className = "" }: { className?: string }) {
  return <span className={`block h-px w-full bg-[#D8D0C4] ${className}`} />
}

/* ------------------------------------------------------------------ */
/*  Variant                                                            */
/* ------------------------------------------------------------------ */

export function VariantKinfolk() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased selection:bg-[var(--primary)] selection:text-[var(--background)]">
      {/* ============================================================ */}
      {/*  HERO                                                          */}
      {/* ============================================================ */}
      <header
        id="top"
        className="mx-auto max-w-[88rem] px-6 pb-20 pt-10 md:px-10 md:pt-12 lg:px-16"
      >
        {/* top bar */}
        <nav className="flex items-baseline justify-between border-b border-[#D8D0C4] pb-6">
          <Label className="text-[var(--foreground)]">{brand.name}</Label>
          <Label className="hidden text-[#6B635A] sm:block">
            {brand.role}
          </Label>
          <Label className="text-[var(--primary)]">{brand.pillars}</Label>
        </nav>

        <div className="grid gap-12 pt-12 md:grid-cols-12 md:gap-8 md:pt-16">
          {/* headline */}
          <div className="md:col-span-7 lg:col-span-7">
            <Label className="text-[#6B635A]">Walking Life Coaching</Label>
            <h1 className="mt-8 font-serif text-[3.25rem] font-normal leading-[0.95] tracking-[-0.02em] sm:text-7xl lg:text-[6.5rem]">
              {brand.titleLead}{" "}
              <span className="italic text-[var(--primary)]">{brand.titleAccent}</span>
              <br className="hidden sm:block" /> {brand.titleTail}
            </h1>

            <p className="mt-10 max-w-md font-serif text-xl leading-relaxed text-[#6B635A] sm:text-2xl">
              {brand.tagline}
            </p>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-none bg-[var(--foreground)] px-8 font-sans text-[0.6875rem] uppercase tracking-[0.28em] text-[var(--background)] hover:bg-[var(--primary)]"
              >
                <Link href="#pricing">See packages</Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="group h-12 rounded-none px-2 font-sans text-[0.6875rem] uppercase tracking-[0.28em] text-[var(--foreground)] hover:bg-transparent hover:text-[var(--primary)]"
              >
                <Link href="#contact">
                  Book a free intro
                  <ArrowUpRight className="ml-1 size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* hero image */}
          <figure className="md:col-span-5 lg:col-span-5">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#D8D0C4]">
              <Image
                src="/images/hero.jpg"
                alt="A coaching walk in nature"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 flex items-center justify-between">
              <Label className="text-[#6B635A]">Fig. 01</Label>
              <Label className="text-[#6B635A]">Side by side, in motion</Label>
            </figcaption>
          </figure>
        </div>
      </header>

      {/* ============================================================ */}
      {/*  PROBLEM                                                       */}
      {/* ============================================================ */}
      <section
        id="about"
        className="mx-auto max-w-[88rem] px-6 py-24 md:px-10 md:py-32 lg:px-16"
      >
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <figure className="order-2 md:order-1 md:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#D8D0C4]">
              <Image
                src="/images/problem.jpg"
                alt="Feeling stuck in modern life"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover grayscale"
              />
            </div>
            <figcaption className="mt-3">
              <Label className="text-[#6B635A]">{problem.n} — {problem.title}</Label>
            </figcaption>
          </figure>

          <div className="order-1 flex flex-col justify-center md:order-2 md:col-span-6 md:col-start-7">
            <Label className="text-[var(--primary)]">{problem.n}</Label>
            <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-[-0.01em] sm:text-5xl lg:text-6xl">
              {problem.title}
            </h2>

            <ul className="mt-12 space-y-0">
              {problem.points.map((p, i) => (
                <li key={i} className="border-t border-[#D8D0C4] py-6">
                  <div className="flex gap-6">
                    <Label className="mt-1 shrink-0 text-[#6B635A]">
                      {String(i + 1).padStart(2, "0")}
                    </Label>
                    <p className="font-serif text-lg leading-relaxed text-[var(--foreground)] sm:text-xl">
                      {p}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-10 flex items-center gap-3 font-serif text-lg italic text-[var(--primary)]">
              <Minus className="size-5 shrink-0" />
              {problem.result}
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  INSIGHT                                                       */}
      {/* ============================================================ */}
      <section className="border-y border-[#D8D0C4] bg-[#F7F4EE]">
        <div className="mx-auto grid max-w-[88rem] gap-12 px-6 py-24 md:grid-cols-12 md:gap-8 md:px-10 md:py-32 lg:px-16">
          <div className="md:col-span-7">
            <Label className="text-[var(--primary)]">{insight.n} — {insight.title}</Label>
            <p className="mt-10 max-w-2xl font-serif text-3xl leading-[1.15] tracking-[-0.01em] sm:text-4xl lg:text-5xl">
              “{insight.lead}”
            </p>

            <div className="mt-14 flex flex-wrap items-stretch gap-px bg-[#D8D0C4]">
              {insight.openUp.map((o, i) => (
                <div
                  key={i}
                  className="flex flex-1 flex-col gap-3 bg-[#F7F4EE] px-6 py-8"
                >
                  <Label className="text-[var(--primary)]">
                    {String(i + 1).padStart(2, "0")}
                  </Label>
                  <span className="font-serif text-lg text-[var(--foreground)]">{o}</span>
                </div>
              ))}
            </div>

            <p className="mt-12 max-w-md font-serif text-xl italic leading-relaxed text-[#6B635A]">
              {insight.closer}
            </p>
          </div>

          <figure className="md:col-span-4 md:col-start-9">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#D8D0C4]">
              <Image
                src="/images/insight.jpg"
                alt="Walking and breathing in the open air"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover grayscale"
              />
            </div>
            <figcaption className="mt-3 flex justify-between">
              <Label className="text-[#6B635A]">Fig. 02</Label>
              <Label className="text-[#6B635A]">Movement &amp; honesty</Label>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SOLUTION                                                      */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-[88rem] px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <figure className="md:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#D8D0C4]">
              <Image
                src="/images/solution.jpg"
                alt="A guided walking coaching session"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover grayscale"
              />
            </div>
            <figcaption className="mt-3 flex justify-between">
              <Label className="text-[#6B635A]">Fig. 03</Label>
              <Label className="text-[#6B635A]">{solution.subtitle}</Label>
            </figcaption>
          </figure>

          <div className="flex flex-col justify-center md:col-span-6 md:col-start-7">
            <Label className="text-[var(--primary)]">{solution.n} — {solution.title}</Label>
            <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-[-0.01em] sm:text-5xl lg:text-6xl">
              {solution.subtitle}
            </h2>
            <p className="mt-8 max-w-md font-serif text-xl leading-relaxed text-[#6B635A]">
              {solution.intro}
            </p>

            <ul className="mt-10 space-y-0">
              {solution.combines.map((c, i) => (
                <li
                  key={i}
                  className="flex items-baseline gap-5 border-t border-[#D8D0C4] py-5"
                >
                  <Label className="text-[var(--primary)]">
                    {String(i + 1).padStart(2, "0")}
                  </Label>
                  <span className="font-serif text-xl text-[var(--foreground)]">{c}</span>
                </li>
              ))}
              <li className="border-t border-[#D8D0C4]" />
            </ul>

            <p className="mt-10 max-w-md font-serif text-lg italic leading-relaxed text-[var(--primary)]">
              {solution.closer}
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  DIFFERENT + WHO                                               */}
      {/* ============================================================ */}
      <section className="border-y border-[#D8D0C4] bg-[#F7F4EE]">
        <div className="mx-auto grid max-w-[88rem] gap-16 px-6 py-24 md:grid-cols-2 md:gap-px md:bg-[#D8D0C4] md:px-10 md:py-0 lg:px-16">
          {/* What makes this different */}
          <div className="md:bg-[#F7F4EE] md:py-32 md:pr-16">
            <Label className="text-[var(--primary)]">Distinction</Label>
            <h2 className="mt-6 font-serif text-3xl leading-[1.05] tracking-[-0.01em] sm:text-4xl lg:text-5xl">
              {different.title}
            </h2>
            <ul className="mt-10 space-y-0">
              {different.points.map((p, i) => (
                <li key={i} className="border-t border-[#D8D0C4] py-5">
                  <p className="font-serif text-lg leading-relaxed text-[var(--foreground)]">
                    {p}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-8 font-serif text-lg italic text-[var(--primary)]">
              {different.closer}
            </p>
          </div>

          {/* Who this is for */}
          <div className="md:bg-[#F7F4EE] md:py-32 md:pl-16">
            <Label className="text-[#6B635A]">Audience</Label>
            <h2 className="mt-6 font-serif text-3xl leading-[1.05] tracking-[-0.01em] sm:text-4xl lg:text-5xl">
              {audience.title}
            </h2>
            <ul className="mt-10 space-y-0">
              {audience.points.map((p, i) => (
                <li
                  key={i}
                  className="flex items-baseline gap-5 border-t border-[#D8D0C4] py-5"
                >
                  <Label className="text-[#6B635A]">
                    {String(i + 1).padStart(2, "0")}
                  </Label>
                  <p className="font-serif text-lg leading-relaxed text-[var(--foreground)]">
                    {p}
                  </p>
                </li>
              ))}
              <li className="border-t border-[#D8D0C4]" />
            </ul>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  COACH                                                         */}
      {/* ============================================================ */}
      <section
        id="about-coach"
        className="mx-auto max-w-[88rem] px-6 py-24 md:px-10 md:py-32 lg:px-16"
      >
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          {/* image stack */}
          <div className="md:col-span-5">
            <figure className="relative aspect-[4/5] w-full overflow-hidden bg-[#D8D0C4]">
              <Image
                src="/images/coach-1.jpg"
                alt={coach.name}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover grayscale"
              />
            </figure>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {["/images/coach-2.jpg", "/images/coach-3.jpg"].map((src, i) => (
                <figure
                  key={src}
                  className="relative aspect-square w-full overflow-hidden bg-[#D8D0C4]"
                >
                  <Image
                    src={src}
                    alt={`${coach.name}, portrait ${i + 2}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-cover grayscale"
                  />
                </figure>
              ))}
            </div>
            <Label className="mt-3 block text-[#6B635A]">
              {coach.eyebrow} — {coach.name}
            </Label>
          </div>

          {/* bio */}
          <div className="flex flex-col justify-center md:col-span-6 md:col-start-7">
            <Label className="text-[var(--primary)]">{coach.eyebrow}</Label>
            <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-[-0.01em] sm:text-5xl">
              {coach.name}
            </h2>
            <p className="mt-6 font-serif text-2xl italic leading-snug text-[var(--primary)]">
              {coach.question}
            </p>

            <div className="mt-10 space-y-6 border-t border-[#D8D0C4] pt-8">
              {coach.bio.map((b, i) => (
                <p
                  key={i}
                  className="max-w-xl font-serif text-lg leading-relaxed text-[#6B635A]"
                >
                  {b}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  WALK METHOD — dark editorial section                          */}
      {/* ============================================================ */}
      <section
        id="method"
        className="bg-[var(--foreground)] text-[var(--background)]"
      >
        <div className="mx-auto max-w-[88rem] px-6 py-24 md:px-10 md:py-32 lg:px-16">
          <div className="max-w-3xl">
            <Label className="text-[var(--primary)]">{walkMethod.title}</Label>
            <h2 className="mt-6 font-serif text-5xl leading-[0.98] tracking-[-0.02em] sm:text-6xl lg:text-7xl">
              {walkMethod.subtitle}
            </h2>
            <p className="mt-8 font-serif text-xl italic text-[var(--background)]/70">
              {walkMethod.tagline}
            </p>
          </div>

          <div className="mt-16 grid gap-px bg-[var(--background)]/15 sm:grid-cols-2 lg:grid-cols-4">
            {walkMethod.steps.map((s) => (
              <div
                key={s.letter}
                className="flex flex-col bg-[var(--foreground)] px-7 py-10"
              >
                <span className="font-serif text-7xl leading-none text-[var(--primary)]">
                  {s.letter}
                </span>
                <h3 className="mt-8 font-serif text-2xl leading-tight">
                  {s.title}
                </h3>
                <p className="mt-4 font-sans text-sm leading-relaxed text-[var(--background)]/65">
                  {s.body}
                </p>
              </div>
            ))}
          </div>

          <figure className="relative mt-16 aspect-[16/7] w-full overflow-hidden bg-[var(--background)]/10">
            <Image
              src="/images/walk.jpg"
              alt="The WALK method in practice"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </figure>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  JOURNEY                                                       */}
      {/* ============================================================ */}
      <section
        id="journey"
        className="mx-auto max-w-[88rem] px-6 py-24 md:px-10 md:py-32 lg:px-16"
      >
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <Label className="text-[var(--primary)]">The Process</Label>
            <h2 className="mt-6 font-serif text-4xl leading-[1.02] tracking-[-0.01em] sm:text-5xl">
              {journey.title}
            </h2>
            <p className="mt-8 max-w-xs font-serif text-lg leading-relaxed text-[#6B635A]">
              {journey.lead}
            </p>
            <figure className="relative mt-10 hidden aspect-[3/4] w-full overflow-hidden bg-[#D8D0C4] md:block">
              <Image
                src="/images/journey.jpg"
                alt="The coaching journey"
                fill
                sizes="33vw"
                className="object-cover grayscale"
              />
            </figure>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <ol className="space-y-0">
              {journey.steps.map((s) => (
                <li
                  key={s.n}
                  className="grid grid-cols-[auto_1fr] gap-6 border-t border-[#D8D0C4] py-8 sm:gap-10"
                >
                  <span className="font-serif text-5xl leading-none text-[var(--primary)] sm:text-6xl">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl leading-tight sm:text-3xl">
                      {s.title}
                    </h3>
                    <p className="mt-3 max-w-md font-serif text-lg leading-relaxed text-[#6B635A]">
                      {s.body}
                    </p>
                  </div>
                </li>
              ))}
              <li className="border-t border-[#D8D0C4]" />
            </ol>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  PRICING                                                       */}
      {/* ============================================================ */}
      <section
        id="pricing"
        className="border-y border-[#D8D0C4] bg-[#F7F4EE]"
      >
        <div className="mx-auto max-w-[88rem] px-6 py-24 md:px-10 md:py-32 lg:px-16">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-xl">
              <Label className="text-[var(--primary)]">Packages</Label>
              <h2 className="mt-6 font-serif text-4xl leading-[1.02] tracking-[-0.01em] sm:text-5xl lg:text-6xl">
                Choose your pace
              </h2>
            </div>
            <figure className="relative aspect-[3/2] w-full max-w-xs overflow-hidden bg-[#D8D0C4]">
              <Image
                src="/images/pricing.jpg"
                alt="Coaching packages"
                fill
                sizes="(max-width: 768px) 100vw, 20vw"
                className="object-cover"
              />
            </figure>
          </div>

          <div className="mt-16 grid gap-px bg-[#D8D0C4] sm:grid-cols-2 lg:grid-cols-4">
            {PACKAGES.map((p) => (
              <article
                key={p.key}
                className="flex flex-col bg-[#F7F4EE] px-7 py-10"
              >
                <div className="flex items-baseline justify-between">
                  <Label className="text-[#6B635A]">{p.sessions}</Label>
                  {p.free ? (
                    <Label className="text-[var(--primary)]">No cost</Label>
                  ) : null}
                </div>

                <h3 className="mt-6 font-serif text-2xl leading-tight">
                  {p.name}
                </h3>

                <p className="mt-6 font-serif text-4xl text-[var(--primary)]">
                  {p.price}
                </p>

                <p className="mt-6 flex-1 font-sans text-sm leading-relaxed text-[#6B635A]">
                  {p.blurb}
                </p>

                <Rule className="mt-8" />

                {p.free ? (
                  <Button
                    asChild
                    variant="ghost"
                    className="group mt-6 h-11 justify-between rounded-none px-0 font-sans text-[0.6875rem] uppercase tracking-[0.28em] text-[var(--foreground)] hover:bg-transparent hover:text-[var(--primary)]"
                  >
                    <Link href="#contact">
                      Book
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                ) : (
                  <Button
                    asChild
                    variant="ghost"
                    className="group mt-6 h-11 justify-between rounded-none px-0 font-sans text-[0.6875rem] uppercase tracking-[0.28em] text-[var(--foreground)] hover:bg-transparent hover:text-[var(--primary)]"
                  >
                    <Link href={`/checkout/${p.key}`}>
                      Choose
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CTA                                                           */}
      {/* ============================================================ */}
      <section className="relative isolate overflow-hidden bg-[var(--foreground)] text-[var(--background)]">
        <Image
          src="/images/cta.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="relative mx-auto max-w-[88rem] px-6 py-24 md:px-10 md:py-32 lg:px-16">
          <Label className="text-[var(--primary)]">Begin</Label>
          <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.02] tracking-[-0.01em] sm:text-5xl lg:text-6xl">
            Take the first step…literally!
          </h2>

          <div className="mt-16 grid gap-px bg-[var(--background)]/15 sm:grid-cols-3">
            {ctaActions.map((c, i) => {
              const Icon = [Compass, Leaf, Footprints][i] ?? MapPin
              return (
                <Link
                  key={c.title}
                  href="#contact"
                  className="group flex flex-col gap-4 bg-[var(--foreground)] px-7 py-10 transition-colors hover:bg-[#26221d]"
                >
                  <Icon className="size-6 text-[var(--primary)]" />
                  <h3 className="font-serif text-2xl leading-tight">
                    {c.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed text-[var(--background)]/65">
                    {c.body}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 font-sans text-[0.6875rem] uppercase tracking-[0.28em] text-[var(--background)]/80">
                    Start
                    <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CONTACT                                                       */}
      {/* ============================================================ */}
      <section
        id="contact"
        className="mx-auto max-w-[88rem] px-6 py-24 md:px-10 md:py-32 lg:px-16"
      >
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Label className="text-[var(--primary)]">Contact</Label>
            <h2 className="mt-6 font-serif text-4xl leading-[1.02] tracking-[-0.01em] sm:text-5xl lg:text-6xl">
              Let’s walk &amp; talk
            </h2>
            <p className="mt-8 max-w-sm font-serif text-lg leading-relaxed text-[#6B635A]">
              {brand.tagline}
            </p>
            <div className="mt-10 space-y-4 border-t border-[#D8D0C4] pt-8">
              <p className="flex items-center gap-3 font-sans text-sm text-[#6B635A]">
                <MapPin className="size-4 text-[var(--primary)]" />
                {brand.role}
              </p>
              <p className="flex items-center gap-3 font-sans text-sm text-[#6B635A]">
                <Footprints className="size-4 text-[var(--primary)]" />
                {brand.pillars}
              </p>
            </div>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <div className="border border-[#D8D0C4] bg-[#F7F4EE] p-8 sm:p-10">
              <ContactForm />
            </div>
          </div>
        </div>

        <footer className="mt-24 flex flex-col items-baseline justify-between gap-4 border-t border-[#D8D0C4] pt-8 sm:flex-row">
          <Label className="text-[var(--foreground)]">{brand.name}</Label>
          <Label className="text-[#6B635A]">{brand.tagline}</Label>
          <Label className="text-[var(--primary)]">{brand.pillars}</Label>
        </footer>
      </section>
    </div>
  )
}
