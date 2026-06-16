import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Sparkles,
  Sun,
  Wind,
  Leaf,
  HeartHandshake,
  Compass,
  Footprints,
  MapPin,
  Quote,
  Check
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

export function VariantAurora() {
  return (
    <div className="min-h-screen bg-[var(--background)] font-sans text-[var(--foreground)] antialiased selection:bg-[var(--primary)]/20">
      {/* ===================== HERO ===================== */}
      <section
        id="top"
        className="relative overflow-hidden bg-gradient-to-br from-[#FFE9D2] via-[var(--background)] to-[#FDE3C3]"
      >
        {/* soft aurora orbs */}
        <div className="pointer-events-none absolute -left-32 -top-40 h-[34rem] w-[34rem] rounded-full bg-[var(--accent)]/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-24 h-[30rem] w-[30rem] rounded-full bg-[var(--primary)]/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-10rem] left-1/3 h-[26rem] w-[26rem] rounded-full bg-[#F6C9A8]/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-[88rem] items-center gap-12 px-6 py-20 sm:py-28 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-16 lg:py-32">
          <div>
            <span className="font-script text-3xl text-[var(--primary)] sm:text-4xl">
              {brand.name}
            </span>

            <h1 className="mt-4 font-serif text-5xl leading-[1.05] tracking-tight text-[var(--foreground)] sm:text-6xl lg:text-7xl">
              {brand.titleLead}{" "}
              <span className="italic text-[var(--primary)]">{brand.titleAccent}</span>{" "}
              {brand.titleTail}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--foreground)]/75 sm:text-xl">
              {brand.tagline}
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                asChild
                className="h-13 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] px-8 text-base font-semibold text-white shadow-lg shadow-[var(--primary)]/30 transition hover:shadow-xl hover:shadow-[var(--primary)]/40"
              >
                <Link href="#pricing">
                  See packages
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-13 rounded-full border-[#F2DFC9] bg-white/70 px-8 text-base font-semibold text-[var(--foreground)] backdrop-blur-md transition hover:bg-white"
              >
                <Link href="#contact">Book a free intro</Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-[var(--foreground)]/60">
              <span className="inline-flex items-center gap-2">
                <Sun className="h-4 w-4 text-[var(--accent)]" /> {brand.role}
              </span>
              <span className="inline-flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[var(--primary)]" /> {brand.pillars}
              </span>
            </div>
          </div>

          {/* hero portrait */}
          <div className="relative">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/40 shadow-2xl shadow-[var(--primary)]/20 backdrop-blur-sm">
              <Image
                src="/images/hero.jpg"
                alt="Two hikers walking together in nature"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover saturate-150"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--foreground)]/30 via-transparent to-transparent" />
            </div>

            {/* floating glass chip */}
            <div className="absolute -bottom-5 left-1/2 w-[88%] -translate-x-1/2 rounded-3xl border border-[#F2DFC9] bg-white/70 p-4 shadow-xl shadow-[var(--primary)]/10 backdrop-blur-md sm:left-6 sm:translate-x-0 sm:w-auto">
              <p className="font-script text-2xl text-[var(--primary)]">Mind. Body. Purpose.</p>
              <p className="mt-1 text-sm text-[var(--foreground)]/70">Walk it forward, one step at a time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PROBLEM ===================== */}
      <section id="about" className="mx-auto max-w-[88rem] px-6 py-24 sm:py-28 md:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[5/4] overflow-hidden rounded-[2.5rem] border border-[#F2DFC9] shadow-xl shadow-[var(--primary)]/10">
            <Image
              src="/images/problem.jpg"
              alt="Quiet landscape"
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover sepia brightness-105 saturate-150"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)]/30 via-transparent to-[var(--accent)]/20" />
          </div>

          <div className="flex flex-col justify-center">
            <SectionEyebrow n={problem.n} label="The Problem" />
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
              {problem.title}
            </h2>

            <ul className="mt-8 space-y-4">
              {problem.points.map((point, i) => (
                <li
                  key={i}
                  className="flex gap-4 rounded-2xl border border-[#F2DFC9] bg-white/70 p-5 shadow-sm backdrop-blur-md"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="text-[var(--foreground)]/80">{point}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 rounded-2xl bg-gradient-to-r from-[#FFE9D2] to-[#FDE3C3] p-5 text-lg font-medium italic text-[var(--foreground)]">
              {problem.result}
            </p>
          </div>
        </div>
      </section>

      {/* ===================== INSIGHT ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FFE9D2] via-[var(--background)] to-[#FDE3C3]">
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[var(--accent)]/20 blur-3xl" />
        <div className="relative mx-auto max-w-[88rem] px-6 py-24 sm:py-28 md:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionEyebrow n={insight.n} label="The Insight" />
              <Quote className="mt-6 h-10 w-10 text-[var(--primary)]/40" />
              <blockquote className="mt-3 font-serif text-3xl leading-snug sm:text-4xl">
                <span className="italic">&ldquo;{insight.lead}&rdquo;</span>
              </blockquote>

              <div className="mt-10 flex flex-wrap gap-3">
                {insight.openUp.map((item, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 rounded-full border border-[#F2DFC9] bg-white/70 px-5 py-2.5 text-sm font-medium text-[var(--foreground)] shadow-sm backdrop-blur-md"
                  >
                    {i === 0 ? (
                      <Footprints className="h-4 w-4 text-[var(--primary)]" />
                    ) : i === 1 ? (
                      <Wind className="h-4 w-4 text-[var(--accent)]" />
                    ) : (
                      <Leaf className="h-4 w-4 text-[var(--primary)]" />
                    )}
                    {item}
                  </span>
                ))}
              </div>

              <p className="mt-10 font-script text-3xl text-[var(--primary)] sm:text-4xl">
                {insight.closer}
              </p>
            </div>

            <div className="relative aspect-square overflow-hidden rounded-[2.5rem] border border-white/60 shadow-2xl shadow-[var(--primary)]/15">
              <Image
                src="/images/insight.jpg"
                alt="Open landscape"
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover sepia brightness-105 saturate-150"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--foreground)]/25 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SOLUTION ===================== */}
      <section className="mx-auto max-w-[88rem] px-6 py-24 sm:py-28 md:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <SectionEyebrow n={solution.n} label="The Solution" />
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
              {solution.title}
            </h2>
            <p className="mt-2 font-script text-3xl text-[var(--primary)]">
              {solution.subtitle}
            </p>
            <p className="mt-6 text-lg text-[var(--foreground)]/75">{solution.intro}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {solution.combines.map((item, i) => (
                <div
                  key={i}
                  className="rounded-3xl border border-[#F2DFC9] bg-white/70 p-6 text-center shadow-sm backdrop-blur-md"
                >
                  <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FFE9D2] to-[#FDE3C3] text-[var(--primary)]">
                    {i === 0 ? (
                      <Leaf className="h-5 w-5" />
                    ) : i === 1 ? (
                      <Compass className="h-5 w-5" />
                    ) : (
                      <HeartHandshake className="h-5 w-5" />
                    )}
                  </span>
                  <p className="mt-4 text-sm font-medium text-[var(--foreground)]">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-lg font-medium italic text-[var(--foreground)]/85">
              {solution.closer}
            </p>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-[#F2DFC9] shadow-xl shadow-[var(--primary)]/10">
            <Image
              src="/images/solution.jpg"
              alt="Path through nature"
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover sepia brightness-105 saturate-150"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/25 to-transparent" />
          </div>
        </div>
      </section>

      {/* ===================== DIFFERENT + WHO ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FDE3C3] via-[var(--background)] to-[#FFE9D2]">
        <div className="relative mx-auto max-w-[88rem] px-6 py-24 sm:py-28 md:px-10 lg:px-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Different */}
            <div className="rounded-[2.5rem] border border-[#F2DFC9] bg-white/70 p-8 shadow-xl shadow-[var(--primary)]/10 backdrop-blur-md sm:p-10">
              <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
                {different.title}
              </h2>
              <ul className="mt-7 space-y-4">
                {different.points.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-[var(--primary)]" />
                    <span className="text-[var(--foreground)]/80">{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 font-script text-2xl text-[var(--primary)]">
                {different.closer}
              </p>
            </div>

            {/* Who */}
            <div className="rounded-[2.5rem] border border-[#F2DFC9] bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] p-8 text-white shadow-xl shadow-[var(--primary)]/20 sm:p-10">
              <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
                {audience.title}
              </h2>
              <ul className="mt-7 space-y-4">
                {audience.points.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-white/90" />
                    <span className="text-white/90">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== COACH ===================== */}
      <section id="about-coach" className="mx-auto max-w-[88rem] px-6 py-24 sm:py-28 md:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* photo collage */}
          <div className="grid grid-cols-2 grid-rows-[auto_auto] gap-4">
            <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-3xl border border-[#F2DFC9] shadow-lg shadow-[var(--primary)]/10">
              <Image
                src="/images/coach-1.jpg"
                alt={coach.name}
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover saturate-150"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-[#F2DFC9] shadow-lg shadow-[var(--primary)]/10">
              <Image
                src="/images/coach-2.jpg"
                alt={coach.name}
                fill
                sizes="(max-width: 1024px) 45vw, 20vw"
                className="object-cover saturate-150"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-[#F2DFC9] shadow-lg shadow-[var(--primary)]/10">
              <Image
                src="/images/coach-3.jpg"
                alt={coach.name}
                fill
                sizes="(max-width: 1024px) 45vw, 20vw"
                className="object-cover saturate-150"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <span className="font-script text-3xl text-[var(--primary)]">{coach.eyebrow}</span>
            <h2 className="mt-2 font-serif text-4xl leading-tight sm:text-5xl">
              {coach.name}
            </h2>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]/55">
              {brand.role} &middot; {brand.pillars}
            </p>

            <div className="mt-7 space-y-5">
              {coach.bio.map((para, i) => (
                <p key={i} className="leading-relaxed text-[var(--foreground)]/80">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== WALK METHOD ===================== */}
      <section
        id="method"
        className="relative overflow-hidden bg-gradient-to-br from-[#FFE9D2] via-[var(--background)] to-[#FDE3C3]"
      >
        <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-[var(--primary)]/15 blur-3xl" />
        <div className="relative mx-auto max-w-[88rem] px-6 py-24 sm:py-28 md:px-10 lg:px-16">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
              {walkMethod.title}
            </h2>
            <p className="mt-3 font-script text-3xl text-[var(--primary)] sm:text-4xl">
              {walkMethod.subtitle}
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {walkMethod.steps.map((step) => (
              <div
                key={step.letter}
                className="group relative overflow-hidden rounded-3xl border border-[#F2DFC9] bg-white/70 p-7 shadow-sm backdrop-blur-md transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--primary)]/15"
              >
                <span className="font-serif text-6xl font-bold text-transparent [background:linear-gradient(135deg,var(--primary),var(--accent))] [-webkit-background-clip:text] [background-clip:text]">
                  {step.letter}
                </span>
                <h3 className="mt-4 font-serif text-xl leading-snug">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--foreground)]/75">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] px-8 py-5 text-center text-lg font-semibold text-white shadow-lg shadow-[var(--primary)]/25">
            {walkMethod.tagline}
          </div>
        </div>
      </section>

      {/* ===================== JOURNEY ===================== */}
      <section id="journey" className="relative mx-auto max-w-[88rem] px-6 py-24 sm:py-28 md:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          <div>
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
              {journey.title}
            </h2>
            <p className="mt-4 max-w-xl text-lg text-[var(--foreground)]/75">{journey.lead}</p>

            <ol className="mt-10 space-y-4">
              {journey.steps.map((step) => (
                <li
                  key={step.n}
                  className="flex gap-5 rounded-3xl border border-[#F2DFC9] bg-white/70 p-6 shadow-sm backdrop-blur-md"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FFE9D2] to-[#FDE3C3] font-serif text-xl font-bold text-[var(--primary)]">
                    {step.n}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--foreground)]/75">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="relative hidden overflow-hidden rounded-[2.5rem] border border-[#F2DFC9] shadow-xl shadow-[var(--primary)]/10 lg:block">
            <Image
              src="/images/journey.jpg"
              alt="Golden trail at sunrise"
              fill
              sizes="40vw"
              className="object-cover saturate-150"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--foreground)]/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* ===================== PRICING ===================== */}
      <section
        id="pricing"
        className="relative overflow-hidden bg-gradient-to-br from-[#FDE3C3] via-[var(--background)] to-[#FFE9D2]"
      >
        <div className="relative mx-auto max-w-[88rem] px-6 py-24 sm:py-28 md:px-10 lg:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-script text-3xl text-[var(--primary)]">Walk with me</span>
            <h2 className="mt-2 font-serif text-4xl leading-tight sm:text-5xl">
              Choose your path
            </h2>
            <p className="mt-4 text-lg text-[var(--foreground)]/75">
              Simple packages designed to meet you wherever you are right now.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PACKAGES.map((p) => (
              <div
                key={p.key}
                className={
                  p.free
                    ? "flex flex-col rounded-3xl border-2 border-[var(--primary)] bg-white/80 p-7 shadow-xl shadow-[var(--primary)]/15 backdrop-blur-md"
                    : "flex flex-col rounded-3xl border border-[#F2DFC9] bg-white/70 p-7 shadow-sm backdrop-blur-md transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--primary)]/15"
                }
              >
                {p.free && (
                  <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] px-3 py-1 text-xs font-semibold text-white">
                    <Sparkles className="h-3 w-3" /> Start here
                  </span>
                )}
                <h3 className="font-serif text-2xl leading-tight">{p.name}</h3>
                <p className="mt-1 text-sm font-medium uppercase tracking-wide text-[var(--primary)]">
                  {p.sessions}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[var(--foreground)]/70">
                  {p.blurb}
                </p>

                <p className="mt-6 font-serif text-3xl font-bold text-[var(--foreground)]">
                  {p.price}
                </p>

                <div className="mt-6 flex-1" />

                {p.free ? (
                  <Button
                    asChild
                    className="h-12 w-full rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-base font-semibold text-white shadow-md shadow-[var(--primary)]/25 hover:shadow-lg"
                  >
                    <Link href="#contact">Book</Link>
                  </Button>
                ) : (
                  <Button
                    asChild
                    variant="outline"
                    className="h-12 w-full rounded-full border-[var(--primary)] bg-white/60 text-base font-semibold text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white"
                  >
                    <Link href={`/checkout/${p.key}`}>Choose</Link>
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/cta.jpg"
          alt="Golden sunrise landscape"
          fill
          sizes="100vw"
          className="object-cover saturate-150"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFE9D2]/92 via-[var(--background)]/88 to-[#FDE3C3]/92" />

        <div className="relative mx-auto max-w-[88rem] px-6 py-24 sm:py-28 md:px-10 lg:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
              Ready when you are
            </h2>
            <p className="mt-4 font-script text-3xl text-[var(--primary)] sm:text-4xl">
              Take the first step&hellip;literally!
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {ctaActions.map((action, i) => (
              <Link
                key={i}
                href="#contact"
                className="group flex flex-col rounded-3xl border border-[#F2DFC9] bg-white/75 p-8 shadow-sm backdrop-blur-md transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--primary)]/15"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] text-white">
                  {i === 0 ? (
                    <MapPin className="h-5 w-5" />
                  ) : i === 1 ? (
                    <Compass className="h-5 w-5" />
                  ) : (
                    <Footprints className="h-5 w-5" />
                  )}
                </span>
                <h3 className="mt-5 font-serif text-xl leading-snug">{action.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--foreground)]/75">
                  {action.body}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--primary)]">
                  Get started
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CONTACT ===================== */}
      <section id="contact" className="mx-auto max-w-[88rem] px-6 py-24 sm:py-28 md:px-10 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-script text-3xl text-[var(--primary)]">Let&rsquo;s talk</span>
          <h2 className="mt-2 font-serif text-4xl leading-tight sm:text-5xl">
            Book your free intro walk
          </h2>
          <p className="mt-4 text-lg text-[var(--foreground)]/75">
            Tell me a little about where you are. I&rsquo;ll be in touch to set up
            your first walk.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-[2.5rem] border border-[#F2DFC9] bg-white/70 p-7 shadow-xl shadow-[var(--primary)]/10 backdrop-blur-md sm:p-10">
          <ContactForm />
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="border-t border-[#F2DFC9] bg-[var(--background)] py-12">
        <div className="mx-auto flex max-w-[88rem] flex-col items-center gap-3 px-6 text-center md:px-10 lg:px-16">
          <span className="font-script text-3xl text-[var(--primary)]">{brand.name}</span>
          <p className="text-sm text-[var(--foreground)]/60">
            {brand.role} &middot; {brand.tagline}
          </p>
        </div>
      </footer>
    </div>
  )
}

function SectionEyebrow({ n, label }: { n: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--primary)]">
      <span className="font-serif text-2xl tracking-normal text-[var(--accent)]">{n}</span>
      <span className="h-px w-8 bg-[#F2DFC9]" />
      {label}
    </span>
  )
}
