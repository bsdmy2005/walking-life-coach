# CLAUDE.md

Guidance for Claude Code working in this repository.

## What this is

**The Walking Life Coach** — a simple marketing website for Sazi Ngcobo's
walking-based life coaching, with registration and payments. Two jobs:

1. Present the offering (built from the Canva deck — see `DESIGN.md`).
2. **Take payments and track who registered and who paid.**

Keep it simple. No subscriptions, no workspaces — one-time coaching-package
purchases via Paystack (ZAR).

**Auth model:** clients never log in. They register (intro/contact form) and
check out by name + email. Clerk gates ONLY the `/admin` area (the coach), with
an `ADMIN_EMAILS` allowlist check on top.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 + shadcn/ui (`components/ui`, new-york style)
- Clerk for auth ("who registered") — middleware in `proxy.ts`
- Drizzle ORM + Postgres ("who paid", `purchases` table)
- Paystack one-time payments (`lib/paystack.ts`)
- Cloudflare R2 for object storage (`lib/storage.ts`, optional)

This was ported from a larger template (`whatsapplead`); only the reusable
bones were kept (config, auth, Paystack client, R2, UI kit). All WhatsApp /
SaaS-subscription code was dropped.

## Commands

- `npm run dev` — dev server (Turbopack)
- `npm run build` / `npm run start`
- `npm run types` — `tsc --noEmit` typecheck
- `npm run lint` / `npm run lint:fix`
- `npm run db:push` — push schema to DB
- `npm run db:generate` / `db:migrate` / `db:studio`
- `npx shadcn@latest add [component]` — add a UI component

## Architecture

- `app/` — App Router. `(unauthenticated)/(auth)/sign-in` is the coach login.
  `admin/` is Clerk-protected + `ADMIN_EMAILS`-gated (who registered / who paid).
- `lib/paystack.ts` — Paystack client: `initializeTransaction` (one-time),
  `verifyTransaction`, `verifyWebhookSignature`. The webhook is the source of
  truth for marking a purchase `paid`.
- `db/schema/` — `registrations` (who registered, public leads) + `purchases`
  (who paid).
- `proxy.ts` — Clerk middleware; protects `/admin(.*)` only, rest public.
- `DESIGN.md` — brand palette, fonts, slide→section map, package prices.
- `_design/` — source assets from the Canva deck (SVGs, photos).

## Payment flow (to build)

1. `/pricing` → user picks a package → POST to `/api/payment/subscribe`
   (to be built) which calls `initializeTransaction` and redirects to Paystack.
2. Paystack redirects to `/api/payment/callback` → `verifyTransaction` →
   mark purchase `paid`, redirect to `/dashboard`.
3. `/api/webhooks/paystack` → `verifyWebhookSignature` → authoritative
   `paid` update (handles cases where the user closes the tab).

## Env

Copy `.env.example` to `.env.local`. Needs Clerk keys, `DATABASE_URL`,
`PAYSTACK_SECRET_KEY`. R2 vars optional.

## Conventions

- Prettier: no semicolons, double quotes, no trailing commas, 2-space, arrow
  parens avoided. Run `npm run clean` before committing.
- Money is stored in ZAR cents (integer) everywhere, matching Paystack.
