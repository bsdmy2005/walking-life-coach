"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function AdminLoginPage() {
  const router = useRouter()
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError("")
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password })
      })
      if (!res.ok) {
        setError((await res.json()).error ?? "Login failed")
        return
      }
      router.push("/admin")
      router.refresh()
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="bg-muted flex min-h-dvh items-center justify-center px-6">
      <form
        onSubmit={onSubmit}
        className="border-border bg-card w-full max-w-sm space-y-4 rounded-xl border p-8 shadow-sm"
      >
        <div>
          <h1 className="font-serif text-3xl">Admin</h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Enter the admin password to view registrations and payments.
          </p>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoFocus
            required
          />
        </div>
        {error && <p className="text-destructive text-sm">{error}</p>}
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Checking…" : "Sign in"}
        </Button>
      </form>
    </main>
  )
}
