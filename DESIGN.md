# The Walking Life Coach — Design System

Derived from the Canva deck (`Walking Life Coach.pdf`, 11 slides). Source assets
live in `_design/` (SVGs, photos) — not yet wired into the app.

## Brand

- **Name:** The Walking Life Coach
- **Coach:** Sazi Ngcobo
- **Tagline:** _Move your body. Clear your mind. Move your life forward._
- **Sub-brand line:** Walking Life Coach | Mind. Body. Purpose.
- **Region / currency:** South Africa, ZAR (drives Paystack).
- **Positioning:** Side-by-side walking coaching in nature — "not therapy,
  forward-focused, action-based." Warm, natural, premium-but-accessible.

## Two visual registers

The deck deliberately switches between two looks. Both are encoded in
`app/globals.css` (light = warm, `.dark` = editorial B&W).

1. **Warm earth** (cover, coach, framework, pricing, CTA): cream backgrounds,
   terracotta / gold / olive / navy, golden-hour landscape photography, a
   handwritten script accent.
2. **Editorial B&W** (problem, insight, solution, differentiators): near-black
   backgrounds, white high-contrast serif headings, monochrome trail imagery.

## Palette (CSS vars in `:root`)

| Token        | Hex       | Role                          |
| ------------ | --------- | ----------------------------- |
| `cream`      | `#f1ebdd` | warm background               |
| `terracotta` | `#bc5630` | primary accent / CTAs         |
| `gold`       | `#d2a12b` | secondary accent              |
| `olive`      | `#5b6233` | tertiary accent               |
| `navy`       | `#1e2a38` | headings / dark text          |
| `ink`        | `#111111` | B&W section backgrounds       |

> Hexes are eyeballed from the PDF. Refine against the final exported assets /
> Canva brand kit when available.

## Type

Injected via `next/font/google` in `app/layout.tsx`, exposed as CSS vars:

- **Serif display** — Playfair Display (`--font-serif`). Editorial headings.
  _Canva likely uses a Canela/didone-style face; Playfair is the free stand-in._
- **Sans body** — Inter (`--font-sans`).
- **Script accent** — Dancing Script (`--font-script`, class `.font-script`).
  Used for "Sazi Ngcobo", "Start your journey", "Take the first step…literally!".

Swap any of these in `layout.tsx` once licensed brand fonts are chosen.

## Slide → site section map

| #   | Slide                    | Section to build                                  |
| --- | ------------------------ | ------------------------------------------------- |
| 1   | Cover                    | Hero (name, title, tagline, hero image)           |
| 2   | The Problem              | Problem (3 points + result)                       |
| 3   | The Insight              | Insight (open up while walking / breathing)       |
| 4   | The Solution             | Solution — Walking Coaching (3 pillars)           |
| 5   | Different + Who it's for | Two-column: differentiators / audience            |
| 6   | The Coach                | About Sazi (bio, why choose me, photos)           |
| 7   | The WALK Method          | Framework (W-A-L-K four columns)                  |
| 8   | The Coaching Journey     | Process (4 steps: Enneagram → intro → cycle → reflect) |
| 9   | Pricing Model            | **Pricing → Paystack checkout** (see below)       |
| 10  | Call to Action           | CTA (book / Enneagram / group walk)               |
| 11  | Thank You                | Footer                                            |

## Packages (pricing → payments)

| Key          | Label                | Price    | Amount (ZAR cents) |
| ------------ | -------------------- | -------- | ------------------ |
| `intro_free` | Intro session        | Free     | 0                  |
| `pkg_4`      | 4-session package    | R2200.00 | 220000             |
| `pkg_6`      | 6-session package    | R3150.00 | 315000             |
| `pkg_8`      | 8-session package    | R4000.00 | 400000             |

Encoded in `db/schema/purchases-schema.ts`. Amounts are ZAR cents to match
Paystack's subunit convention.
