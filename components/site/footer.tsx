import Link from "next/link"

// Colours come from the active variant palette (set on the chooser wrapper):
// --footer-bg / --footer-fg / --footer-muted. Falls back to brand ink/cream.
export function Footer() {
  return (
    <footer className="bg-[var(--footer-bg,#111111)] text-[var(--footer-muted,#b8b0a0)]">
      <div className="mx-auto w-full max-w-6xl px-6 py-14">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div>
            <p className="font-serif text-xl text-[var(--footer-fg,#f1ebdd)]">
              The Walking <span className="italic">Life Coach</span>
            </p>
            <p className="mt-2 text-sm">
              Move your body. Clear your mind. Move your life forward.
            </p>
            <p className="mt-1 text-sm">Sazi Ngcobo · Mind. Body. Purpose.</p>
          </div>

          <nav className="flex flex-col gap-2 text-sm">
            {[
              ["#about", "About"],
              ["#method", "The Method"],
              ["#pricing", "Pricing"],
              ["#contact", "Book a free intro"]
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="transition-colors hover:text-[var(--footer-fg,#f1ebdd)]"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-2 border-t border-[var(--footer-fg,#f1ebdd)]/15 pt-6 text-xs md:flex-row">
          <p>
            © {new Date().getFullYear()} The Walking Life Coach. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/terms"
              className="hover:text-[var(--footer-fg,#f1ebdd)]"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="hover:text-[var(--footer-fg,#f1ebdd)]"
            >
              Privacy
            </Link>
            <Link
              href="/refund"
              className="hover:text-[var(--footer-fg,#f1ebdd)]"
            >
              Refunds
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
