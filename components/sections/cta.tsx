import Image from "next/image"
import { CalendarCheck, Users } from "lucide-react"
import { EnneagramIcon } from "@/components/site/section"

const ACTIONS = [
  {
    color: "bg-terracotta",
    icon: <CalendarCheck className="size-5" />,
    title: "Book your first session",
    body: "Let's start the conversation."
  },
  {
    color: "bg-olive",
    icon: <EnneagramIcon className="size-5 text-cream" />,
    title: "Take the Enneagram test",
    body: "Gain clarity and deeper self-awareness."
  },
  {
    color: "bg-navy",
    icon: <Users className="size-5" />,
    title: "Join a group walk",
    body: "Connect, reflect and grow together in nature."
  }
]

export function Cta() {
  return (
    <section className="relative">
      <Image
        src="/images/cta.jpg"
        alt="Two hikers walking toward a mountain sunset"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="bg-ink/65 absolute inset-0" />

      <div className="text-cream relative mx-auto w-full max-w-3xl px-6 py-24 text-center md:py-32">
        <p className="font-script text-4xl text-[color:var(--gold,#d2a12b)]">
          Start your journey
        </p>
        <h2 className="mt-2 font-serif text-5xl tracking-tight sm:text-6xl">
          Take the first step
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {ACTIONS.map(a => (
            <a
              key={a.title}
              href="#contact"
              className="group border-cream/20 bg-cream/5 rounded-2xl border p-6 text-center backdrop-blur-sm transition-colors hover:bg-cream/10"
            >
              <span
                className={`${a.color} text-cream mx-auto flex size-12 items-center justify-center rounded-full`}
              >
                {a.icon}
              </span>
              <p className="mt-4 font-semibold">{a.title}</p>
              <p className="text-cream/75 mt-1 text-sm">{a.body}</p>
            </a>
          ))}
        </div>

        <p className="font-script bg-terracotta text-cream mt-12 inline-block rounded-full px-6 py-2 text-2xl">
          Take the first step…literally!
        </p>
      </div>
    </section>
  )
}
