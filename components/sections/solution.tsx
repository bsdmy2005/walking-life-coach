import { Flag, MessageSquareQuote, Trees } from "lucide-react"
import { Eyebrow, IconRow, SplitSection } from "@/components/site/section"

export function Solution() {
  return (
    <SplitSection
      tone="ink"
      image="/images/solution.jpg"
      imageAlt="A path winding through trees toward a city skyline"
    >
      <Eyebrow n="04" />
      <h2 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">
        The Solution
      </h2>
      <p className="mt-3 text-xl font-semibold">Walking Coaching</p>
      <p className="text-cream/80 mt-5">
        A guided coaching experience that combines:
      </p>

      <div className="mt-8 space-y-6">
        <IconRow tone="ink" icon={<Trees className="size-5" />}>
          Walking in nature
        </IconRow>
        <div className="bg-cream/15 h-px" />
        <IconRow tone="ink" icon={<MessageSquareQuote className="size-5" />}>
          Structured conversation
        </IconRow>
        <div className="bg-cream/15 h-px" />
        <IconRow tone="ink" icon={<Flag className="size-5" />}>
          Practical life guidance
        </IconRow>
      </div>

      <p className="text-cream/90 mt-10">
        This is not therapy. This is{" "}
        <strong className="text-cream">forward-focused, action-based</strong>{" "}
        coaching.
      </p>
    </SplitSection>
  )
}
