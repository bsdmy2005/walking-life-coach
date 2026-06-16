import Image from "next/image"
import { Briefcase, Heart, Mountain, User } from "lucide-react"

const BIO = [
  {
    icon: User,
    color: "bg-olive",
    text: "My background spans Psychology, Marketing, corporate leadership, entrepreneurship, and personal transformation."
  },
  {
    icon: Briefcase,
    color: "bg-terracotta",
    text: "After years working with leading brands such as SAB and Moët Hennessy, I transitioned into entrepreneurship and now run two successful businesses. Alongside this journey, walking, hiking, meditation, and spirituality became powerful tools for self-discovery, healing, and clarity in my own life."
  },
  {
    icon: Mountain,
    color: "bg-olive",
    text: "What began as informal conversations during hikes evolved naturally into coaching — helping others navigate life, reconnect with themselves, and gain perspective through movement, reflection, and intentional conversation."
  },
  {
    icon: Heart,
    color: "bg-terracotta",
    text: "My coaching approach is grounded in lived experience, emotional awareness, optimism, and genuine human connection. Having experienced both adversity and success, I believe growth happens when people feel safe, seen, inspired, and empowered to move forward with purpose."
  }
]

export function Coach() {
  return (
    <section id="about-coach" className="bg-background scroll-mt-20">
      <div className="mx-auto w-full max-w-5xl px-6 py-20 text-center md:py-28">
        <p className="font-script text-primary text-3xl">The Coach</p>
        <h2 className="text-olive mt-2 font-serif text-5xl tracking-tight sm:text-6xl">
          Sazi Ngcobo
        </h2>
        <p className="text-olive/90 mt-4 font-medium tracking-wide">
          Walking Life Coach&nbsp;&nbsp;|&nbsp;&nbsp;Mind. Body. Purpose.
        </p>

        {/* Portraits */}
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-4">
          {[
            { src: "/images/coach-3.jpg", pos: "object-center" },
            { src: "/images/coach-1.jpg", pos: "object-center" },
            { src: "/images/coach-2.jpg", pos: "object-top" }
          ].map(p => (
            <div
              key={p.src}
              className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-sm"
            >
              <Image
                src={p.src}
                alt="Sazi Ngcobo"
                fill
                sizes="(max-width: 768px) 33vw, 220px"
                className={`object-cover ${p.pos}`}
              />
            </div>
          ))}
        </div>

        {/* Bio */}
        <p className="mt-14 font-semibold">Why choose me?</p>
        <div className="mx-auto mt-6 max-w-2xl space-y-5 text-left">
          {BIO.map((b, i) => (
            <div key={i} className="flex gap-4">
              <span
                className={`${b.color} text-cream mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full`}
              >
                <b.icon className="size-[18px]" />
              </span>
              <p className="text-muted-foreground leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
