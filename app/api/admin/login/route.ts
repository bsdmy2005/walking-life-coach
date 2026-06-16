import { NextResponse } from "next/server"
import { ADMIN_COOKIE, adminToken, checkPassword } from "@/lib/admin-auth"

export const runtime = "nodejs"

export async function POST(req: Request) {
  let password = ""
  try {
    password = (await req.json()).password ?? ""
  } catch {
    return NextResponse.json({ error: "bad request" }, { status: 400 })
  }

  if (!process.env.ADMIN_PASSWORD) {
    return NextResponse.json(
      { error: "Admin password not configured (set ADMIN_PASSWORD)." },
      { status: 503 }
    )
  }

  if (!checkPassword(password)) {
    return NextResponse.json({ error: "Incorrect password." }, { status: 401 })
  }

  const res = NextResponse.json({ ok: true })
  res.cookies.set(ADMIN_COOKIE, adminToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7 // 7 days
  })
  return res
}
