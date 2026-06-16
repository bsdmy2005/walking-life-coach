import Image from "next/image"
import { cn } from "@/lib/utils"

type Tone = "cream" | "ink"

/**
 * Split section: text in the shared centered gutter (so its left edge lines up
 * with every other section) + a full-bleed image on the right half (desktop)
 * or a band on top (mobile). Use for all text-beside-image sections so the
 * page keeps one consistent left margin.
 */
export function SplitSection({
  id,
  tone = "cream",
  image,
  imageAlt,
  imagePosition = "object-center",
  priority,
  children
}: {
  id?: string
  tone?: Tone
  image: string
  imageAlt: string
  imagePosition?: string
  priority?: boolean
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-20",
        tone === "ink" ? "bg-ink text-cream" : "bg-background text-foreground"
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-14 md:px-12 md:py-20 lg:px-16">
          {children}
        </div>
        <div className="relative h-72 w-full md:h-auto md:min-h-full">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 50vw"
            className={cn("object-cover", imagePosition)}
          />
        </div>
      </div>
    </section>
  )
}

/** Shared left gutter — every non-split section uses this so left edges line up. */
export const gutter = "w-full max-w-[90rem] px-6 md:px-12 lg:px-16"

/**
 * Section wrapper. `tone="ink"` = the deck's dark editorial sections;
 * `tone="cream"` = the warm sections. `bleed` removes the inner container
 * so a child can go full-bleed (split layouts).
 */
export function Section({
  id,
  tone = "cream",
  className,
  containerClassName,
  children
}: {
  id?: string
  tone?: Tone
  className?: string
  containerClassName?: string
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20",
        tone === "ink" ? "bg-ink text-cream" : "bg-background text-foreground",
        className
      )}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-6xl px-6 py-20 md:py-28",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  )
}

/** The "02 ———" slide-number motif. */
export function Eyebrow({
  n,
  className
}: {
  n: string
  className?: string
}) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <span className="text-sm tracking-widest opacity-70">{n}</span>
      <span className="h-px w-16 bg-current opacity-40" />
    </div>
  )
}

/** Circle-outline icon + title + body — the deck's repeating list motif. */
export function IconRow({
  icon,
  title,
  children,
  tone = "cream",
  className
}: {
  icon: React.ReactNode
  title?: React.ReactNode
  children?: React.ReactNode
  tone?: Tone
  className?: string
}) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <span
        className={cn(
          "flex size-12 shrink-0 items-center justify-center rounded-full border",
          tone === "ink" ? "border-cream/40" : "border-foreground/25"
        )}
      >
        {icon}
      </span>
      <div className="min-w-0">
        {title && <p className="font-medium leading-snug">{title}</p>}
        {children && (
          <div
            className={cn(
              "leading-snug",
              tone === "ink" ? "text-cream/80" : "text-muted-foreground",
              title && "mt-0.5"
            )}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  )
}

/** Nine-pointed enneagram glyph (no lucide equivalent). */
export function EnneagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="46" />
      <path d="M50 4 L83 79 L11 33 L89 33 L17 79 Z" strokeLinejoin="round" />
      <path d="M50 4 L25 88 M50 4 L75 88 M4 50 L88 33 M96 50 L12 33" opacity="0.5" />
    </svg>
  )
}
