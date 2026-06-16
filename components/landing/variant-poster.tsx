import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/site/contact-form"
import {
  ArrowRight,
  ArrowUpRight,
  Footprints,
  Compass,
  Eye,
  Leaf,
  Quote,
  Check,
  MapPin,
  Wind
} from "lucide-react"
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

export function VariantPoster() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] font-sans antialiased selection:bg-[var(--primary)] selection:text-[var(--background)]">
      {/* ============================== HERO ============================== */}
      <section
        id="top"
        className="relative border-b-2 border-[var(--foreground)] overflow-hidden"
      >
        {/* top marquee strip */}
        <div className="border-b-2 border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)] overflow-hidden">
          <div className="flex items-center gap-6 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.35em] whitespace-nowrap">
            <span className="text-[var(--primary)]">{brand.pillars}</span>
            <span aria-hidden>/</span>
            <span>{brand.role}</span>
            <span aria-hidden>/</span>
            <span className="text-[var(--primary)]">{brand.pillars}</span>
            <span aria-hidden>/</span>
            <span>{brand.role}</span>
            <span aria-hidden>/</span>
            <span className="text-[var(--primary)]">{brand.pillars}</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12">
          {/* left: type block */}
          <div className="lg:col-span-7 border-b-2 lg:border-b-0 lg:border-r-2 border-[var(--foreground)] p-6 sm:p-10 lg:p-14 flex flex-col justify-between">
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em]">
                <span className="grid h-7 w-7 place-items-center bg-[var(--primary)] text-[var(--foreground)]">
                  <Footprints className="h-4 w-4" strokeWidth={2.5} />
                </span>
                {brand.name}
              </span>
              <span className="font-serif italic text-sm">est. on foot</span>
            </div>

            <div className="py-10 lg:py-14">
              <h1 className="font-sans font-black leading-[0.82] tracking-tighter uppercase">
                <span className="block text-2xl sm:text-3xl tracking-[0.2em] font-bold text-[var(--foreground)]/70">
                  {brand.titleLead}
                </span>
                <span className="block whitespace-nowrap text-[14vw] leading-[0.85] sm:text-[11vw] lg:text-[6.25rem] xl:text-[7.5rem] text-[var(--primary)]">
                  {brand.titleAccent}
                </span>
                <span className="block text-[11vw] sm:text-[9vw] lg:text-[5rem] xl:text-[6rem] font-serif italic font-bold tracking-tight normal-case">
                  {brand.titleTail}
                </span>
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-t-2 border-[var(--foreground)] pt-6">
              <p className="max-w-md text-lg font-medium leading-snug">
                {brand.tagline}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="rounded-none border-2 border-[var(--foreground)] bg-[var(--primary)] text-[var(--foreground)] font-bold uppercase tracking-wide hover:bg-[var(--foreground)] hover:text-[var(--background)]"
                >
                  <Link href="#pricing">
                    See packages <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-none border-2 border-[var(--foreground)] bg-transparent text-[var(--foreground)] font-bold uppercase tracking-wide hover:bg-[var(--foreground)] hover:text-[var(--background)]"
                >
                  <Link href="#contact">Book a free intro</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* right: image with duotone poster effect */}
          <div className="lg:col-span-5 relative min-h-[340px] lg:min-h-0 bg-neutral-200">
            <Image
              src="/images/hero.jpg"
              alt="Walking life coaching outdoors"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover grayscale contrast-110"
            />
            <div className="absolute bottom-0 left-0 right-0 border-t-2 border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)] px-5 py-3 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.3em]">
                {brand.role}
              </span>
              <span className="font-serif italic text-sm">No. 01</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== PROBLEM ============================== */}
      <section id="about" className="border-b-2 border-[var(--foreground)]">
        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-4 border-b-2 lg:border-b-0 lg:border-r-2 border-[var(--foreground)] p-6 sm:p-10 flex flex-col justify-between gap-8">
            <span className="font-black text-[8rem] sm:text-[10rem] leading-none text-[var(--primary)] tracking-tighter">
              {problem.n}
            </span>
            <h2 className="font-sans font-black uppercase tracking-tight text-4xl sm:text-5xl leading-[0.9]">
              {problem.title}
            </h2>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-3">
            {problem.points.map((p, i) => (
              <div
                key={i}
                className="border-b-2 sm:border-b-0 sm:border-r-2 last:border-r-0 last:border-b-0 border-[var(--foreground)] p-6 sm:p-8 flex flex-col gap-4"
              >
                <span className="font-serif italic text-2xl text-[var(--primary)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-lg font-medium leading-snug">{p}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t-2 border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)] px-6 sm:px-10 py-5">
          <p className="font-serif italic text-xl sm:text-2xl">
            {problem.result}
          </p>
        </div>
      </section>

      {/* ============================== INSIGHT ============================== */}
      <section className="border-b-2 border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)]">
        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-14 border-b-2 lg:border-b-0 lg:border-r-2 border-[var(--background)]/30 flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <span className="font-black text-6xl text-[var(--primary)] tracking-tighter">
                {insight.n}
              </span>
              <h2 className="font-sans font-black uppercase tracking-tight text-3xl sm:text-4xl">
                {insight.title}
              </h2>
            </div>
            <p className="font-serif italic text-3xl sm:text-5xl leading-[1.05]">
              {insight.lead}
            </p>
            <div className="flex flex-wrap gap-3">
              {insight.openUp.map((o, i) => {
                const icons = [Footprints, Wind, Eye]
                const Icon = icons[i] ?? Footprints
                return (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 border-2 border-[var(--primary)] px-4 py-2 text-sm font-bold uppercase tracking-wide"
                  >
                    <Icon className="h-4 w-4 text-[var(--primary)]" strokeWidth={2.5} />
                    {o}
                  </span>
                )
              })}
            </div>
            <p className="border-t-2 border-[var(--background)]/30 pt-6 text-xl font-bold uppercase tracking-tight text-[var(--primary)]">
              {insight.closer}
            </p>
          </div>
          <div className="lg:col-span-5 relative min-h-[300px] bg-neutral-200">
            <Image
              src="/images/insight.jpg"
              alt="Conversation while walking"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover grayscale contrast-110"
            />
          </div>
        </div>
      </section>

      {/* ============================== SOLUTION ============================== */}
      <section className="border-b-2 border-[var(--foreground)]">
        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-5 relative min-h-[300px] order-2 lg:order-1 bg-neutral-200 border-t-2 lg:border-t-0 lg:border-r-2 border-[var(--foreground)]">
            <Image
              src="/images/solution.jpg"
              alt="Guided coaching walk in nature"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover grayscale contrast-110"
            />
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2 p-6 sm:p-10 lg:p-14 flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <span className="font-black text-6xl text-[var(--primary)] tracking-tighter">
                {solution.n}
              </span>
              <div>
                <h2 className="font-sans font-black uppercase tracking-tight text-3xl sm:text-4xl leading-none">
                  {solution.title}
                </h2>
                <p className="font-serif italic text-xl text-[var(--primary)]">
                  {solution.subtitle}
                </p>
              </div>
            </div>
            <p className="text-xl font-medium">{solution.intro}</p>
            <div className="grid sm:grid-cols-3 border-2 border-[var(--foreground)]">
              {solution.combines.map((c, i) => {
                const icons = [Leaf, Compass, MapPin]
                const Icon = icons[i] ?? Leaf
                return (
                  <div
                    key={i}
                    className="border-b-2 sm:border-b-0 sm:border-r-2 last:border-r-0 last:border-b-0 border-[var(--foreground)] p-5 flex flex-col gap-3 bg-white"
                  >
                    <Icon className="h-6 w-6 text-[var(--primary)]" strokeWidth={2.5} />
                    <span className="font-bold uppercase tracking-tight leading-tight">
                      {c}
                    </span>
                  </div>
                )
              })}
            </div>
            <p className="bg-[var(--primary)] text-[var(--foreground)] px-5 py-4 border-2 border-[var(--foreground)] font-bold text-lg leading-snug">
              {solution.closer}
            </p>
          </div>
        </div>
      </section>

      {/* ============================== DIFFERENT + WHO ============================== */}
      <section className="border-b-2 border-[var(--foreground)]">
        <div className="grid lg:grid-cols-2">
          {/* Different */}
          <div className="border-b-2 lg:border-b-0 lg:border-r-2 border-[var(--foreground)] p-6 sm:p-10 lg:p-14 flex flex-col gap-8">
            <h2 className="font-sans font-black uppercase tracking-tight text-3xl sm:text-4xl leading-[0.9]">
              {different.title}
            </h2>
            <ul className="flex flex-col">
              {different.points.map((p, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 border-t-2 border-[var(--foreground)] py-4"
                >
                  <span className="font-black text-2xl text-[var(--primary)] leading-none w-10 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg font-medium leading-snug">{p}</span>
                </li>
              ))}
            </ul>
            <p className="font-serif italic text-2xl border-t-2 border-[var(--foreground)] pt-6">
              {different.closer}
            </p>
          </div>
          {/* Who — inverted */}
          <div className="bg-[var(--foreground)] text-[var(--background)] p-6 sm:p-10 lg:p-14 flex flex-col gap-8">
            <h2 className="font-sans font-black uppercase tracking-tight text-3xl sm:text-4xl leading-[0.9]">
              {audience.title}
            </h2>
            <ul className="grid sm:grid-cols-2 gap-px bg-[var(--background)]/20 border-2 border-[var(--background)]/20">
              {audience.points.map((p, i) => (
                <li
                  key={i}
                  className="bg-[var(--foreground)] p-5 flex items-start gap-3"
                >
                  <Check
                    className="h-5 w-5 text-[var(--primary)] shrink-0 mt-0.5"
                    strokeWidth={3}
                  />
                  <span className="font-medium leading-snug">{p}</span>
                </li>
              ))}
            </ul>
            <span className="mt-auto font-black uppercase tracking-[0.3em] text-sm text-[var(--primary)]">
              {brand.pillars}
            </span>
          </div>
        </div>
      </section>

      {/* ============================== COACH ============================== */}
      <section id="about-coach" className="border-b-2 border-[var(--foreground)]">
        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-5 border-b-2 lg:border-b-0 lg:border-r-2 border-[var(--foreground)]">
            <div className="grid grid-cols-2 grid-rows-2 h-full min-h-[420px]">
              <div className="relative col-span-2 border-b-2 border-[var(--foreground)] bg-neutral-200">
                <Image
                  src="/images/coach-1.jpg"
                  alt={coach.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover grayscale contrast-110"
                />
              </div>
              <div className="relative border-r-2 border-[var(--foreground)]">
                <Image
                  src="/images/coach-2.jpg"
                  alt={coach.name}
                  fill
                  sizes="(max-width: 1024px) 50vw, 21vw"
                  className="object-cover grayscale contrast-125"
                />
              </div>
              <div className="relative">
                <Image
                  src="/images/coach-3.jpg"
                  alt={coach.name}
                  fill
                  sizes="(max-width: 1024px) 50vw, 21vw"
                  className="object-cover grayscale contrast-125"
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-14 flex flex-col gap-6">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--primary)]">
              {coach.eyebrow}
            </span>
            <h2 className="font-sans font-black uppercase tracking-tighter text-5xl sm:text-6xl leading-[0.85]">
              {coach.name}
            </h2>
            <p className="font-serif italic text-2xl sm:text-3xl flex items-start gap-2">
              <Quote className="h-6 w-6 text-[var(--primary)] shrink-0 mt-1" />
              {coach.question}
            </p>
            <div className="grid sm:grid-cols-2 gap-x-8">
              {coach.bio.map((b, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed border-t-2 border-[var(--foreground)] py-4 font-medium"
                >
                  <span className="font-black text-[var(--primary)] mr-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {b}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================== WALK METHOD ============================== */}
      <section
        id="method"
        className="border-b-2 border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)]"
      >
        <div className="p-6 sm:p-10 lg:p-14 border-b-2 border-[var(--background)]/30 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--primary)]">
              {walkMethod.title}
            </span>
            <h2 className="font-sans font-black uppercase tracking-tighter text-5xl sm:text-7xl leading-[0.85] mt-2">
              {walkMethod.subtitle}
            </h2>
          </div>
          <p className="font-serif italic text-2xl text-[var(--primary)]">
            {walkMethod.tagline}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {walkMethod.steps.map((s, i) => (
            <div
              key={s.letter}
              className="border-b-2 sm:border-b-2 lg:border-b-0 border-r-0 sm:border-r-2 lg:border-r-2 last:border-r-0 [&:nth-child(2)]:sm:border-r-0 lg:[&:nth-child(2)]:border-r-2 border-[var(--background)]/30 p-6 sm:p-8 flex flex-col gap-4 min-h-[260px]"
            >
              <span
                className={`font-black text-8xl leading-none tracking-tighter ${
                  i % 2 === 0 ? "text-[var(--primary)]" : "text-[var(--background)]"
                }`}
              >
                {s.letter}
              </span>
              <h3 className="font-bold uppercase tracking-tight text-lg leading-tight">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--background)]/80">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================== JOURNEY ============================== */}
      <section id="journey" className="border-b-2 border-[var(--foreground)]">
        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-4 border-b-2 lg:border-b-0 lg:border-r-2 border-[var(--foreground)] relative min-h-[260px] bg-neutral-200">
            <Image
              src="/images/journey.jpg"
              alt="The coaching journey"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover grayscale contrast-110"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
              <div className="max-w-sm border-2 border-[var(--foreground)] bg-[var(--primary)] p-4 sm:p-5">
                <h2 className="font-sans text-4xl font-black uppercase leading-[0.85] tracking-tighter text-[var(--foreground)] sm:text-5xl">
                  {journey.title}
                </h2>
                <p className="mt-3 font-serif text-lg italic text-[var(--foreground)]">
                  {journey.lead}
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2">
            {journey.steps.map((s, i) => (
              <div
                key={s.n}
                className={`p-6 sm:p-8 border-[var(--foreground)] flex flex-col gap-3 ${
                  i < 2 ? "border-b-2" : ""
                } ${i % 2 === 0 ? "sm:border-r-2" : ""} ${
                  i % 2 === 0 ? "border-b-2 sm:border-b-2" : "border-b-2 sm:border-b-2"
                } bg-white`}
              >
                <span className="font-black text-5xl text-[var(--primary)] tracking-tighter leading-none">
                  {s.n}
                </span>
                <h3 className="font-bold uppercase tracking-tight text-lg leading-tight">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed font-medium">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== PRICING ============================== */}
      <section id="pricing" className="border-b-2 border-[var(--foreground)]">
        <div className="p-6 sm:p-10 lg:p-14 border-b-2 border-[var(--foreground)] flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <h2 className="font-sans font-black uppercase tracking-tighter text-5xl sm:text-7xl leading-[0.85]">
            Pick your <span className="text-[var(--primary)]">pace</span>
          </h2>
          <p className="font-serif italic text-xl max-w-sm">
            Pay per cycle. Start free. Choose the block that fits the work
            ahead.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {PACKAGES.map((p, i) => (
            <div
              key={p.key}
              className={`border-[var(--foreground)] p-6 sm:p-8 flex flex-col gap-5 min-h-[360px] ${
                i < PACKAGES.length - 1 ? "border-b-2 lg:border-b-0 lg:border-r-2" : ""
              } ${i % 2 === 0 ? "sm:border-r-2 lg:border-r-2" : ""} ${
                i < 2 ? "border-b-2 sm:border-b-2 lg:border-b-0" : ""
              } ${p.free ? "bg-[var(--foreground)] text-[var(--background)]" : "bg-white"}`}
            >
              <div className="flex items-start justify-between">
                <span className="font-black text-4xl tracking-tighter text-[var(--primary)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {p.free && (
                  <span className="bg-[var(--primary)] text-[var(--foreground)] text-[10px] font-black uppercase tracking-widest px-2 py-1">
                    Free
                  </span>
                )}
              </div>
              <div>
                <h3 className="font-bold uppercase tracking-tight text-xl leading-tight">
                  {p.name}
                </h3>
                <span
                  className={`text-xs font-bold uppercase tracking-[0.2em] ${
                    p.free ? "text-[var(--background)]/70" : "text-[var(--foreground)]/60"
                  }`}
                >
                  {p.sessions}
                </span>
              </div>
              <span className="font-black text-4xl tracking-tighter">
                {p.price}
              </span>
              <p
                className={`text-sm leading-relaxed font-medium ${
                  p.free ? "text-[var(--background)]/80" : ""
                }`}
              >
                {p.blurb}
              </p>
              <div className="mt-auto">
                {p.free ? (
                  <Button
                    asChild
                    className="w-full rounded-none border-2 border-[var(--primary)] bg-[var(--primary)] text-[var(--foreground)] font-bold uppercase tracking-wide hover:bg-[var(--background)] hover:border-[var(--background)]"
                  >
                    <Link href="#contact">
                      Book <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                ) : (
                  <Button
                    asChild
                    className="w-full rounded-none border-2 border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)] font-bold uppercase tracking-wide hover:bg-[var(--primary)] hover:text-[var(--foreground)] hover:border-[var(--foreground)]"
                  >
                    <Link href={`/checkout/${p.key}`}>
                      Choose <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================== CTA ============================== */}
      <section className="border-b-2 border-[var(--foreground)] bg-[var(--primary)] text-[var(--foreground)]">
        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-5 relative min-h-[280px] border-b-2 lg:border-b-0 lg:border-r-2 border-[var(--foreground)]">
            <Image
              src="/images/cta.jpg"
              alt="Take the first step"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover grayscale contrast-110"
            />
          </div>
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-14 flex flex-col gap-8">
            <h2 className="font-sans font-black uppercase tracking-tighter text-5xl sm:text-6xl leading-[0.85]">
              Take the first step
              <span className="font-serif italic lowercase font-bold">
                …literally!
              </span>
            </h2>
            <div className="grid sm:grid-cols-3 border-2 border-[var(--foreground)]">
              {ctaActions.map((c, i) => (
                <Link
                  key={i}
                  href="#contact"
                  className="group border-b-2 sm:border-b-0 sm:border-r-2 last:border-r-0 last:border-b-0 border-[var(--foreground)] p-5 bg-[var(--background)] flex flex-col gap-3 hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors"
                >
                  <span className="font-black text-3xl tracking-tighter text-[var(--primary)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-bold uppercase tracking-tight leading-tight">
                    {c.title}
                  </span>
                  <span className="text-sm font-medium leading-snug">
                    {c.body}
                  </span>
                  <ArrowUpRight className="h-5 w-5 mt-auto group-hover:text-[var(--primary)]" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================== CONTACT ============================== */}
      <section id="contact" className="bg-[var(--foreground)] text-[var(--background)]">
        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-5 p-6 sm:p-10 lg:p-14 border-b-2 lg:border-b-0 lg:border-r-2 border-[var(--background)]/30 flex flex-col justify-between gap-10">
            <div className="flex flex-col gap-6">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--primary)]">
                {brand.name}
              </span>
              <h2 className="font-sans font-black uppercase tracking-tighter text-5xl sm:text-6xl leading-[0.85]">
                Let&apos;s <span className="text-[var(--primary)]">walk</span> &amp;
                talk
              </h2>
              <p className="font-serif italic text-2xl">{brand.tagline}</p>
            </div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--background)]/60">
              {brand.pillars}
            </p>
          </div>
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-14 bg-[var(--background)] text-[var(--foreground)]">
            <ContactForm />
          </div>
        </div>
        <div className="border-t-2 border-[var(--background)]/30 px-6 sm:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-bold uppercase tracking-[0.2em]">
          <span>
            &copy; {new Date().getFullYear()} {brand.name}
          </span>
          <span className="text-[var(--primary)]">{brand.role}</span>
        </div>
      </section>
    </div>
  )
}
