"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet"

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#method", label: "The Method" },
  { href: "#journey", label: "Journey" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" }
]

export function Nav() {
  return (
    <header className="bg-background/85 border-border fixed inset-x-0 top-0 z-50 border-b shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link
          href="#top"
          className="text-foreground font-serif text-lg leading-none"
        >
          The Walking <span className="italic">Life Coach</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-foreground/80 hover:text-primary text-sm transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button asChild size="sm">
            <a href="#contact">Book a free intro</a>
          </Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetTitle className="font-serif text-xl">Menu</SheetTitle>
            <nav className="mt-8 flex flex-col gap-1">
              {LINKS.map(l => (
                <SheetClose asChild key={l.href}>
                  <a
                    href={l.href}
                    className="hover:bg-muted rounded-md px-3 py-3 text-lg"
                  >
                    {l.label}
                  </a>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button asChild className="mt-4">
                  <a href="#contact">Book a free intro</a>
                </Button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
