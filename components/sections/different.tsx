import {
  Briefcase,
  Lightbulb,
  MessageCircle,
  PersonStanding,
  Signpost,
  TreePine,
  User,
  Users
} from "lucide-react"
import { IconRow } from "@/components/site/section"

export function Different() {
  return (
    <section className="bg-ink text-cream grid grid-cols-1 md:grid-cols-2">
      {/* What makes this different */}
      <div className="border-cream/10 px-6 py-20 md:border-r md:px-12 md:py-28">
        <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">
          What Makes This Different
        </h2>
        <div className="mt-10 space-y-6">
          <IconRow tone="ink" icon={<Users className="size-5" />}>
            Coaching happens side-by-side, not face-to-face
          </IconRow>
          <IconRow tone="ink" icon={<PersonStanding className="size-5" />}>
            Movement reduces pressure and overthinking
          </IconRow>
          <IconRow tone="ink" icon={<TreePine className="size-5" />}>
            Nature supports emotional clarity
          </IconRow>
          <IconRow tone="ink" icon={<MessageCircle className="size-5" />}>
            Real conversations, not theory-heavy sessions
          </IconRow>
        </div>
        <p className="text-cream/90 mt-10">
          This is coaching that feels <strong className="text-cream">natural</strong>,
          not clinical.
        </p>
      </div>

      {/* Who this is for */}
      <div className="bg-ink/95 px-6 py-20 md:px-12 md:py-28">
        <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">
          Who This Is For
        </h2>
        <div className="mt-10 space-y-6">
          <IconRow tone="ink" icon={<Briefcase className="size-5" />}>
            Professionals feeling stuck or burnt out
          </IconRow>
          <IconRow tone="ink" icon={<Signpost className="size-5" />}>
            People going through life transitions
          </IconRow>
          <IconRow tone="ink" icon={<Lightbulb className="size-5" />}>
            Entrepreneurs or creatives seeking clarity
          </IconRow>
          <IconRow tone="ink" icon={<User className="size-5" />}>
            Individuals who struggle with traditional coaching formats
          </IconRow>
        </div>
      </div>
    </section>
  )
}
