"use client"

import { useState } from "react"
import { toast } from "sonner"
import { PACKAGES } from "@/lib/packages"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    setSubmitting(true)
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
      if (!res.ok) throw new Error((await res.json()).error ?? "Failed")
      setDone(true)
      form.reset()
      toast.success("You're in! Sazi will reach out to schedule your walk.")
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setSubmitting(false)
    }
  }

  if (done) {
    return (
      <div className="border-border bg-card rounded-xl border p-8 text-center">
        <p className="font-serif text-2xl">Thank you.</p>
        <p className="text-muted-foreground mt-2">
          Your details are in. Sazi will reach out soon to schedule your first
          walk.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      className="border-border bg-card space-y-4 rounded-xl border p-6 shadow-sm"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required placeholder="Your name" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone (optional)</Label>
          <Input id="phone" name="phone" placeholder="+27…" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="packageInterest">I'm interested in</Label>
          <select
            id="packageInterest"
            name="packageInterest"
            defaultValue="intro_free"
            className="border-input bg-background ring-offset-background focus-visible:ring-ring h-10 w-full rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none"
          >
            {PACKAGES.map(p => (
              <option key={p.key} value={p.key}>
                {p.name}
              </option>
            ))}
            <option value="not_sure">Not sure yet</option>
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">Anything you'd like to share? (optional)</Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          placeholder="What's on your mind, or what you're hoping to work through…"
        />
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={submitting}>
        {submitting ? "Sending…" : "Book my free intro"}
      </Button>
      <p className="text-muted-foreground text-center text-xs">
        No payment needed for the intro session.
      </p>
    </form>
  )
}
