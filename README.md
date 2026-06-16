# The Walking Life Coach

Marketing website + registration + Paystack payments for Sazi Ngcobo's
walking-based life coaching.

> Move your body. Clear your mind. Move your life forward.

## Stack

Next.js 16 · React 19 · TypeScript · Tailwind v4 · shadcn/ui · Clerk ·
Drizzle + Postgres · Paystack (ZAR).

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in Clerk, DATABASE_URL, Paystack keys
npm run db:push              # create tables (needs DATABASE_URL)
npm run dev                  # http://localhost:3000
```

## Project layout

| Path                       | Purpose                                      |
| -------------------------- | -------------------------------------------- |
| `app/`                     | App Router pages (landing, dashboard, auth)  |
| `lib/paystack.ts`          | Paystack one-time-payment client             |
| `db/schema/`               | `user_profiles`, `purchases`                 |
| `components/ui/`           | shadcn/ui primitives                         |
| `proxy.ts`                 | Clerk auth middleware                         |
| `DESIGN.md`                | Brand system + Canva slide→section map       |
| `_design/`                 | Source design assets (deck SVGs, photos)     |

## Status

Scaffold complete — building bones, brand tokens, auth, payment client, and a
placeholder landing. The full marketing site (11 sections from the deck) and
the live Paystack checkout routes are the next build phase. See `CLAUDE.md`.
