import { NextResponse } from "next/server"
import { z } from "zod"
import { db } from "@/db/db"
import { registrations, type NewRegistration } from "@/db/schema"
import { notifyCoach, sendConfirmation } from "@/lib/notify"

export const runtime = "nodejs"

const schema = z.object({
  name: z.string().min(1, "Name is required").max(200),
  email: z.string().email("Valid email required").max(200),
  phone: z.string().max(40).optional().or(z.literal("")),
  packageInterest: z.string().max(40).optional().or(z.literal("")),
  message: z.string().max(2000).optional().or(z.literal(""))
})

const VALID_INTEREST = new Set(["intro_free", "pkg_4", "pkg_6", "pkg_8"])

export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }

  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid input" },
      { status: 400 }
    )
  }

  if (!db) {
    return NextResponse.json(
      { error: "Service not configured. Please try again later." },
      { status: 503 }
    )
  }

  const { name, email, phone, packageInterest, message } = parsed.data
  const row: NewRegistration = {
    name,
    email,
    phone: phone || null,
    packageInterest:
      packageInterest && VALID_INTEREST.has(packageInterest)
        ? packageInterest
        : null,
    message: message || null,
    source: "intro_form"
  }

  await db.insert(registrations).values(row)

  // Alert the coach + thank the person who signed up.
  await Promise.all([
    notifyCoach(`New intro registration — ${name}`, [
      ["Name", name],
      ["Email", email],
      ["Phone", phone || "—"],
      ["Interested in", row.packageInterest ?? "not specified"],
      ["Message", message || "—"]
    ]),
    sendConfirmation({
      to: email,
      name,
      heading: "Thank you for reaching out 🌿",
      message:
        "Thanks for booking a free intro walk with The Walking Life Coach. Sazi will be in touch shortly to find a time that works for you. No payment needed for the intro — just bring yourself."
    })
  ])

  return NextResponse.json({ ok: true })
}
