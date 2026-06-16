import { promises as fs } from "fs"
import path from "path"
import { NextResponse } from "next/server"

/**
 * Dev-only design settings store. Persists per-style image positions and colour
 * overrides to a JSON file in the repo so they survive restarts. Disabled (404)
 * in production — these are design-time tools only.
 */

export const runtime = "nodejs"

const FILE = path.join(process.cwd(), "design.dev.json")
const isDev = process.env.NODE_ENV !== "production"

async function read(): Promise<Record<string, unknown>> {
  try {
    return JSON.parse(await fs.readFile(FILE, "utf8"))
  } catch {
    return {}
  }
}

export async function GET() {
  if (!isDev) return new NextResponse("Not found", { status: 404 })
  return NextResponse.json(await read())
}

export async function POST(req: Request) {
  if (!isDev) return new NextResponse("Not found", { status: 404 })
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "bad json" }, { status: 400 })
  }
  await fs.writeFile(FILE, JSON.stringify(body, null, 2), "utf8")
  return NextResponse.json({ ok: true })
}
