import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="top"
      className="bg-background relative grid grid-cols-1 md:min-h-[72vh] md:grid-cols-2"
    >
      {/* Text */}
      <div className="flex flex-col justify-center px-6 pt-28 pb-16 md:px-12 md:py-20 lg:px-16">
        <p className="font-script text-primary text-2xl sm:text-3xl">
          Sazi Ngcobo
        </p>
        <h1 className="mt-3 font-serif text-4xl leading-[0.98] tracking-tight sm:text-5xl lg:text-6xl">
          The <span className="italic">Walking</span> Life Coach
        </h1>
        <div className="bg-foreground/20 my-6 h-px w-32" />
        <p className="text-muted-foreground max-w-md">
          Move your body. Clear your mind. Move your life forward.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <a href="#pricing">See packages</a>
          </Button>
          <Button asChild variant="outline">
            <a href="#contact">Book a free intro</a>
          </Button>
        </div>
      </div>

      {/* Image */}
      <div className="relative min-h-[44vh] md:min-h-full">
        <Image
          src="/images/hero.jpg"
          alt="Two people walking a mountain trail"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    </section>
  )
}
