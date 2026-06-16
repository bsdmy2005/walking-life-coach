import { Coach } from "@/components/sections/coach"
import { Contact } from "@/components/sections/contact"
import { Cta } from "@/components/sections/cta"
import { Different } from "@/components/sections/different"
import { Hero } from "@/components/sections/hero"
import { Insight } from "@/components/sections/insight"
import { Journey } from "@/components/sections/journey"
import { Pricing } from "@/components/sections/pricing"
import { Problem } from "@/components/sections/problem"
import { Solution } from "@/components/sections/solution"
import { WalkMethod } from "@/components/sections/walk-method"

/** The original photo-led, split-layout design (alignment corrected). */
export function VariantOriginal() {
  return (
    <>
      <Hero />
      <Problem />
      <Insight />
      <Solution />
      <Different />
      <Coach />
      <WalkMethod />
      <Journey />
      <Pricing />
      <Cta />
      <Contact />
    </>
  )
}
