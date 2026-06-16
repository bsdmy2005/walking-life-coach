import { ArrowRight, BrainCircuit, Lock, User } from "lucide-react"
import { Eyebrow, IconRow, SplitSection } from "@/components/site/section"

export function Problem() {
  return (
    <SplitSection
      id="about"
      tone="ink"
      image="/images/problem.jpg"
      imageAlt="A lone figure on a misty mountain path"
    >
      <Eyebrow n="02" />
      <h2 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">
        The Problem
      </h2>

      <div className="mt-8 space-y-5">
        <IconRow tone="ink" icon={<BrainCircuit className="size-5" />}>
          Modern life is overwhelming. People feel stuck, burnt out, or
          disconnected.
        </IconRow>
        <div className="bg-cream/15 h-px" />
        <IconRow tone="ink" icon={<Lock className="size-5" />}>
          Traditional coaching or therapy can feel intimidating or expensive.
        </IconRow>
        <div className="bg-cream/15 h-px" />
        <IconRow tone="ink" icon={<User className="size-5" />}>
          Many struggle to open up in formal settings.
        </IconRow>
      </div>

      <div className="mt-10">
        <IconRow tone="ink" icon={<ArrowRight className="size-5" />}>
          <span className="text-cream font-semibold">Result:</span> People stay
          in the same patterns for too long.
        </IconRow>
      </div>
    </SplitSection>
  )
}
