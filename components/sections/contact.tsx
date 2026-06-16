import { ContactForm } from "@/components/site/contact-form"

export function Contact() {
  return (
    <section id="contact" className="bg-background scroll-mt-20">
      <div className="mx-auto w-full max-w-2xl px-6 py-20 md:py-28">
        <div className="text-center">
          <p className="font-script text-primary text-3xl">Start your journey</p>
          <h2 className="text-navy mt-2 font-serif text-4xl tracking-tight sm:text-5xl">
            Book your free intro
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-md">
            One walk. No pressure. Just a conversation to see where you are and
            where you&rsquo;d like to go.
          </p>
        </div>
        <div className="mt-10">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
