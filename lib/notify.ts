/**
 * Email via Resend (https://resend.com) — plain fetch, no SDK.
 *
 * Env:
 *   RESEND_API_KEY  — Resend API key (if unset, everything just logs)
 *   NOTIFY_EMAIL    — coach inbox(es) for alerts; comma-separate for several
 *   NOTIFY_FROM     — verified sender (sandbox onboarding@resend.dev for testing)
 *
 * Two audiences:
 *   notifyCoach()      → alerts the coach (new lead / payment)
 *   sendConfirmation() → thanks the person who signed up / paid
 */

const FROM = () => process.env.NOTIFY_FROM ?? "onboarding@resend.dev"

async function sendEmail(opts: {
  to: string | string[]
  subject: string
  html: string
  text: string
}): Promise<void> {
  const key = process.env.RESEND_API_KEY
  const to = (Array.isArray(opts.to) ? opts.to : [opts.to])
    .map(e => e.trim())
    .filter(Boolean)

  if (!key || to.length === 0) {
    console.log(`[email] (not sent — not configured) ${opts.subject} → ${to}`)
    return
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: FROM(),
        to,
        subject: opts.subject,
        html: opts.html,
        text: opts.text
      })
    })
    if (!res.ok) console.error("[email] failed:", res.status, await res.text())
  } catch (err) {
    console.error("[email] error:", err)
  }
}

/** Branded shell for all outgoing emails (inline styles for email clients). */
function shell(bodyHtml: string): string {
  return `<div style="background:#f1ebdd;padding:32px 16px;font-family:Helvetica,Arial,sans-serif;color:#1e2a38">
  <div style="max-width:520px;margin:0 auto;background:#faf6ee;border:1px solid #ddd3bf;border-radius:16px;overflow:hidden">
    <div style="padding:22px 28px;border-bottom:1px solid #ddd3bf">
      <div style="font-size:20px;font-weight:700">The Walking <em>Life Coach</em></div>
      <div style="font-size:12px;color:#6b6453;margin-top:4px">Sazi Ngcobo&nbsp;·&nbsp;Mind. Body. Purpose.</div>
    </div>
    <div style="padding:28px;font-size:15px;line-height:1.6">${bodyHtml}</div>
    <div style="padding:16px 28px;background:#1e2a38;color:#f1ebdd;font-size:12px">
      Move your body. Clear your mind. Move your life forward.
    </div>
  </div>
</div>`
}

function esc(s: string): string {
  return s.replace(/[<>&]/g, c =>
    c === "<" ? "&lt;" : c === ">" ? "&gt;" : "&amp;"
  )
}

/** Alert the coach. `rows` are label/value pairs shown as a list. */
export async function notifyCoach(
  subject: string,
  rows: [string, string][]
): Promise<void> {
  const to = (process.env.NOTIFY_EMAIL ?? "")
    .split(",")
    .map(e => e.trim())
    .filter(Boolean)
  if (to.length === 0) {
    console.log(`[email] (no NOTIFY_EMAIL) ${subject}`)
    return
  }
  const list = rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:4px 12px 4px 0;color:#6b6453">${esc(k)}</td><td style="padding:4px 0;font-weight:600">${esc(v)}</td></tr>`
    )
    .join("")
  const html = shell(
    `<p style="margin:0 0 14px;font-size:18px;font-weight:700">${esc(subject)}</p>
     <table style="border-collapse:collapse">${list}</table>`
  )
  const text = `${subject}\n${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}`
  await sendEmail({ to, subject, html, text })
}

/** Thank the person who signed up / paid. */
export async function sendConfirmation(opts: {
  to: string
  name?: string | null
  heading: string
  message: string
}): Promise<void> {
  const name = opts.name?.trim() || "there"
  const html = shell(
    `<p style="margin:0 0 12px;font-family:Georgia,serif;font-size:24px">${esc(opts.heading)}</p>
     <p style="margin:0 0 12px">Hi ${esc(name)},</p>
     <p style="margin:0 0 16px">${esc(opts.message)}</p>
     <p style="margin:0;color:#6b6453">— Sazi</p>`
  )
  const text = `${opts.heading}\n\nHi ${name},\n\n${opts.message}\n\n— Sazi`
  await sendEmail({ to: opts.to, subject: opts.heading, html, text })
}
