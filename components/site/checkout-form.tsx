"use client"

import { useState } from "react"
import { toast } from "sonner"
import type { Package } from "@/lib/packages"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function CheckoutForm({ pkg }: { pkg: Package }) {
  const [submitting, setSubmitting] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget).entries())

    setSubmitting(true)
    try {
      const res = await fetch("/api/payment/initialize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, packageKey: pkg.key })
      })
      const json = await res.json()
      if (!res.ok || !json.authorizationUrl) {
        throw new Error(json.error ?? "Could not start checkout")
      }
      // Hand off to Paystack's hosted checkout
      window.location.href = json.authorizationUrl
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong")
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
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
      <Button type="submit" size="lg" className="w-full" disabled={submitting}>
        {submitting ? "Redirecting…" : `Pay ${pkg.price}`}
      </Button>
      <p className="text-muted-foreground text-center text-xs">
        Secure payment via Paystack. You&rsquo;ll be redirected to complete your
        purchase.
      </p>
    </form>
  )
}
