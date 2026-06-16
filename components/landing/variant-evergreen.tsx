import Image from "next/image"
import Link from "next/link"
import {
  Leaf,
  Mountain,
  Sprout,
  Wind,
  Compass,
  Footprints,
  TreePine,
  Sun,
  ArrowRight,
  Quote,
  Check,
  Circle
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

const coachImages = ["/images/coach-1.jpg", "/images/coach-2.jpg", "/images/coach-3.jpg"]
const ctaIcons = [Compass, Sprout, TreePine]

export function VariantEvergreen() {
  return (
    <div className="min-h-screen bg-[#0E1C14] font-sans text-[#E9E4D6] antialiased selection:bg-[#CBA15A] selection:text-[#0E1C14]">
      {/* ---------------------------------------------------------------- HERO */}
      <section
        id="top"
        className="relative overflow-hidden bg-gradient-to-b from-[#0E1C14] to-[#16271C]"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="A quiet forest trail"
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-[0.45] saturate-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0E1C14]/70 via-[#0E1C14]/55 to-[#0E1C14]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E1C14]/80 to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[92vh] max-w-[88rem] flex-col justify-center px-6 py-28 md:px-10 lg:px-16">
          <div className="mb-6 flex items-center gap-3 text-[#CBA15A]">
            <Leaf className="h-5 w-5" />
            <span className="font-script text-2xl sm:text-3xl">{brand.name}</span>
          </div>

          <h1 className="max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight text-[#E9E4D6] sm:text-6xl md:text-7xl">
            {brand.titleLead}{" "}
            <span className="italic text-[#CBA15A]">{brand.titleAccent}</span>{" "}
            {brand.titleTail}
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-[#A9B5A2] sm:text-xl">
            {brand.tagline}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              asChild
              className="h-12 rounded-full bg-[#CBA15A] px-8 text-base font-medium text-[#0E1C14] hover:bg-[#d8b372]"
            >
              <Link href="#pricing">See packages</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full border-[#274033] bg-transparent px-8 text-base font-medium text-[#E9E4D6] hover:bg-[#16271C] hover:text-[#E9E4D6]"
            >
              <Link href="#contact">Book a free intro</Link>
            </Button>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm uppercase tracking-[0.25em] text-[#6FA07A]">
            <span className="flex items-center gap-2">
              <Footprints className="h-4 w-4" /> {brand.role}
            </span>
            <span className="hidden h-3 w-px bg-[#274033] sm:block" />
            <span className="flex items-center gap-2">
              <Mountain className="h-4 w-4" /> {brand.pillars}
            </span>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- PROBLEM */}
      <section id="about" className="bg-[#0E1C14] py-24 sm:py-32">
        <div className="mx-auto max-w-[88rem] px-6 md:px-10 lg:px-16">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-[#274033]">
              <Image
                src="/images/problem.jpg"
                alt="Solitude"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover brightness-90 grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1C14]/60 to-transparent" />
            </div>

            <div>
              <SectionMark n={problem.n} icon={<Wind className="h-4 w-4" />} />
              <h2 className="mt-5 font-serif text-4xl text-[#E9E4D6] sm:text-5xl">
                {problem.title}
              </h2>

              <ul className="mt-10 space-y-6">
                {problem.points.map((point, i) => (
                  <li key={i} className="flex gap-4">
                    <Circle className="mt-1.5 h-2.5 w-2.5 shrink-0 fill-[#CBA15A] text-[#CBA15A]" />
                    <p className="text-lg leading-relaxed text-[#A9B5A2]">{point}</p>
                  </li>
                ))}
              </ul>

              <p className="mt-10 border-l-2 border-[#CBA15A] pl-6 font-serif text-xl italic leading-relaxed text-[#E9E4D6]">
                {problem.result}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- INSIGHT */}
      <section className="bg-gradient-to-b from-[#16271C] to-[#0E1C14] py-24 sm:py-32">
        <div className="mx-auto max-w-[88rem] px-6 md:px-10 lg:px-16">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <SectionMark n={insight.n} icon={<Sun className="h-4 w-4" />} />
              <h2 className="mt-5 font-serif text-4xl text-[#E9E4D6] sm:text-5xl">
                {insight.title}
              </h2>

              <p className="mt-8 font-serif text-2xl leading-snug text-[#E9E4D6] sm:text-3xl">
                {insight.lead}
              </p>

              <div className="mt-10 space-y-3">
                {insight.openUp.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 rounded-2xl border border-[#274033] bg-[#16271C] px-6 py-4"
                  >
                    <span className="font-serif text-lg text-[#CBA15A]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-lg text-[#E9E4D6]">{item}</span>
                  </div>
                ))}
              </div>

              <p className="mt-10 font-script text-2xl text-[#6FA07A] sm:text-3xl">
                {insight.closer}
              </p>
            </div>

            <div className="relative order-1 aspect-[4/5] overflow-hidden rounded-3xl border border-[#274033] lg:order-2">
              <Image
                src="/images/insight.jpg"
                alt="A walk in nature"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover brightness-90 grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1C14]/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ SOLUTION */}
      <section className="bg-[#0E1C14] py-24 sm:py-32">
        <div className="mx-auto max-w-[88rem] px-6 md:px-10 lg:px-16">
          <div className="grid items-start gap-14 lg:grid-cols-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-[#274033]">
              <Image
                src="/images/solution.jpg"
                alt="Walking coaching"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover brightness-90 grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1C14]/60 to-transparent" />
            </div>

            <div>
              <SectionMark n={solution.n} icon={<Leaf className="h-4 w-4" />} />
              <h2 className="mt-5 font-serif text-4xl text-[#E9E4D6] sm:text-5xl">
                {solution.title}
              </h2>
              <p className="mt-2 font-script text-3xl text-[#CBA15A]">{solution.subtitle}</p>

              <p className="mt-8 text-lg leading-relaxed text-[#A9B5A2]">{solution.intro}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {solution.combines.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-[#274033] bg-[#16271C] p-5 text-center"
                  >
                    <Sprout className="mx-auto h-6 w-6 text-[#6FA07A]" />
                    <p className="mt-3 text-sm font-medium leading-snug text-[#E9E4D6]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-10 border-l-2 border-[#CBA15A] pl-6 font-serif text-xl italic leading-relaxed text-[#E9E4D6]">
                {solution.closer}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------- DIFFERENT + WHO */}
      <section className="bg-gradient-to-b from-[#0E1C14] to-[#16271C] py-24 sm:py-32">
        <div className="mx-auto max-w-[88rem] px-6 md:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* What makes this different (has closer) */}
            <div className="rounded-3xl border border-[#274033] bg-[#16271C] p-8 sm:p-10">
              <div className="flex items-center gap-3 text-[#CBA15A]">
                <Compass className="h-5 w-5" />
                <span className="text-xs uppercase tracking-[0.3em] text-[#6FA07A]">
                  Approach
                </span>
              </div>
              <h2 className="mt-5 font-serif text-3xl text-[#E9E4D6] sm:text-4xl">
                {different.title}
              </h2>
              <ul className="mt-8 space-y-5">
                {different.points.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-[#6FA07A]" />
                    <span className="leading-relaxed text-[#A9B5A2]">{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 font-serif text-lg italic text-[#CBA15A]">
                {different.closer}
              </p>
            </div>

            {/* Who this is for (no closer) */}
            <div className="rounded-3xl border border-[#274033] bg-[#16271C] p-8 sm:p-10">
              <div className="flex items-center gap-3 text-[#CBA15A]">
                <Footprints className="h-5 w-5" />
                <span className="text-xs uppercase tracking-[0.3em] text-[#6FA07A]">
                  Fit
                </span>
              </div>
              <h2 className="mt-5 font-serif text-3xl text-[#E9E4D6] sm:text-4xl">
                {audience.title}
              </h2>
              <ul className="mt-8 space-y-5">
                {audience.points.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <Leaf className="mt-1 h-5 w-5 shrink-0 text-[#CBA15A]" />
                    <span className="leading-relaxed text-[#A9B5A2]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------- COACH */}
      <section id="about-coach" className="bg-[#16271C] py-24 sm:py-32">
        <div className="mx-auto max-w-[88rem] px-6 md:px-10 lg:px-16">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-3xl border border-[#274033]">
                  <Image
                    src={coachImages[0]}
                    alt={coach.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover brightness-95"
                  />
                </div>
                {coachImages.slice(1).map((src, i) => (
                  <div
                    key={i}
                    className="relative aspect-square overflow-hidden rounded-3xl border border-[#274033]"
                  >
                    <Image
                      src={src}
                      alt={`${coach.name} coaching`}
                      fill
                      sizes="(max-width: 1024px) 50vw, 22vw"
                      className="object-cover brightness-95"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <span className="text-xs uppercase tracking-[0.3em] text-[#6FA07A]">
                {coach.eyebrow}
              </span>
              <h2 className="mt-4 font-serif text-4xl text-[#E9E4D6] sm:text-5xl">
                {coach.name}
              </h2>
              <p className="mt-3 flex items-center gap-2 font-script text-2xl text-[#CBA15A]">
                <Quote className="h-5 w-5" />
                {coach.question}
              </p>

              <div className="mt-8 max-w-2xl space-y-5">
                {coach.bio.map((para, i) => (
                  <p key={i} className="leading-relaxed text-[#A9B5A2]">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- WALK METHOD */}
      <section id="method" className="relative overflow-hidden bg-[#0E1C14] py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/walk.jpg"
            alt="Forest path"
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0E1C14] via-[#0E1C14]/90 to-[#16271C]" />
        </div>

        <div className="relative mx-auto max-w-[88rem] px-6 md:px-10 lg:px-16">
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-[#6FA07A]">
              {walkMethod.title}
            </span>
            <h2 className="mt-4 font-serif text-4xl text-[#E9E4D6] sm:text-5xl">
              {walkMethod.subtitle}
            </h2>
            <p className="mt-3 font-script text-2xl text-[#CBA15A]">{walkMethod.tagline}</p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {walkMethod.steps.map((step, i) => (
              <div
                key={i}
                className="rounded-3xl border border-[#274033] bg-[#16271C]/80 p-7 backdrop-blur-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#CBA15A]/40 bg-[#0E1C14] font-serif text-2xl text-[#CBA15A]">
                  {step.letter}
                </div>
                <h3 className="mt-6 font-serif text-xl text-[#E9E4D6]">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#A9B5A2]">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- JOURNEY */}
      <section id="journey" className="bg-gradient-to-b from-[#16271C] to-[#0E1C14] py-24 sm:py-32">
        <div className="mx-auto max-w-[88rem] px-6 md:px-10 lg:px-16">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <h2 className="font-serif text-4xl text-[#E9E4D6] sm:text-5xl">
                {journey.title}
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-[#A9B5A2]">
                {journey.lead}
              </p>

              <div className="mt-12 space-y-2">
                {journey.steps.map((step, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#274033] bg-[#16271C] font-serif text-[#CBA15A]">
                        {step.n}
                      </span>
                      {i < journey.steps.length - 1 && (
                        <span className="my-1 w-px flex-1 bg-[#274033]" />
                      )}
                    </div>
                    <div className="pb-8">
                      <h3 className="font-serif text-xl text-[#E9E4D6]">{step.title}</h3>
                      <p className="mt-2 leading-relaxed text-[#A9B5A2]">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[24rem] overflow-hidden rounded-3xl border border-[#274033]">
              <Image
                src="/images/journey.jpg"
                alt="The coaching journey"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1C14]/70 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- PRICING */}
      <section id="pricing" className="relative overflow-hidden bg-[#0E1C14] py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/pricing.jpg"
            alt="Mountain horizon"
            fill
            sizes="100vw"
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0E1C14] to-[#16271C]" />
        </div>

        <div className="relative mx-auto max-w-[88rem] px-6 md:px-10 lg:px-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-[#CBA15A]">
              <Mountain className="h-5 w-5" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#6FA07A]">
                Packages
              </span>
            </div>
            <h2 className="mt-5 font-serif text-4xl text-[#E9E4D6] sm:text-5xl">
              Choose your path forward
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PACKAGES.map(p => (
              <div
                key={p.key}
                className={`flex flex-col rounded-3xl border bg-[#16271C] p-7 ${
                  p.free ? "border-[#CBA15A]/50" : "border-[#274033]"
                }`}
              >
                <span className="text-xs uppercase tracking-[0.25em] text-[#6FA07A]">
                  {p.sessions}
                </span>
                <h3 className="mt-3 font-serif text-2xl text-[#E9E4D6]">{p.name}</h3>
                <p className="mt-4 font-serif text-3xl text-[#CBA15A]">{p.price}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-[#A9B5A2]">
                  {p.blurb}
                </p>

                {p.free ? (
                  <Button
                    asChild
                    variant="outline"
                    className="mt-7 h-11 rounded-full border-[#CBA15A] bg-transparent text-[#CBA15A] hover:bg-[#CBA15A] hover:text-[#0E1C14]"
                  >
                    <Link href="#contact">Book</Link>
                  </Button>
                ) : (
                  <Button
                    asChild
                    className="mt-7 h-11 rounded-full bg-[#CBA15A] text-[#0E1C14] hover:bg-[#d8b372]"
                  >
                    <Link href={`/checkout/${p.key}`}>Choose</Link>
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- CTA */}
      <section className="relative overflow-hidden bg-[#16271C] py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/cta.jpg"
            alt="Open trail ahead"
            fill
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#16271C] via-[#16271C]/85 to-[#0E1C14]" />
        </div>

        <div className="relative mx-auto max-w-[88rem] px-6 md:px-10 lg:px-16">
          <div className="grid gap-6 sm:grid-cols-3">
            {ctaActions.map((action, i) => {
              const Icon = ctaIcons[i % ctaIcons.length]
              return (
                <Link
                  key={i}
                  href="#contact"
                  className="group flex flex-col rounded-3xl border border-[#274033] bg-[#0E1C14]/70 p-8 backdrop-blur-sm transition-colors hover:border-[#CBA15A]/60"
                >
                  <Icon className="h-7 w-7 text-[#6FA07A]" />
                  <h3 className="mt-6 font-serif text-2xl text-[#E9E4D6]">{action.title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-[#A9B5A2]">{action.body}</p>
                  <span className="mt-6 flex items-center gap-2 text-sm font-medium text-[#CBA15A]">
                    Start here
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              )
            })}
          </div>

          <p className="mt-16 text-center font-script text-3xl text-[#CBA15A] sm:text-4xl">
            Take the first step…literally!
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------- CONTACT */}
      <section id="contact" className="bg-gradient-to-b from-[#0E1C14] to-[#16271C] py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 md:px-10 lg:px-16">
          <div className="text-center">
            <div className="mx-auto flex w-fit items-center gap-3 text-[#CBA15A]">
              <Leaf className="h-5 w-5" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#6FA07A]">
                Get in touch
              </span>
            </div>
            <h2 className="mt-5 font-serif text-4xl text-[#E9E4D6] sm:text-5xl">
              Let&apos;s walk and talk
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#A9B5A2]">
              Reach out to book your free intro walk or ask a question. {brand.tagline}
            </p>
          </div>

          <div className="mt-12 rounded-3xl border border-[#274033] bg-[#16271C] p-8 sm:p-10">
            <ContactForm />
          </div>

          <p className="mt-12 text-center font-script text-2xl text-[#6FA07A]">
            {brand.name}
          </p>
        </div>
      </section>
    </div>
  )
}

function SectionMark({ n, icon }: { n: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-serif text-3xl text-[#CBA15A]">{n}</span>
      <span className="h-px w-12 bg-[#CBA15A]/50" />
      <span className="text-[#6FA07A]">{icon}</span>
    </div>
  )
}
