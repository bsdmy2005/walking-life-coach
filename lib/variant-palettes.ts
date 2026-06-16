/**
 * Per-variant palettes. Used to theme the SHARED chrome (Nav, Footer,
 * ContactForm) and, for the kept variants whose bodies reference these CSS
 * variables, the design itself. The dev Color tool edits these live and the
 * dev Image tool positions images; both persist to design.dev.json.
 *
 * Keys are CSS custom-property names. Core editable colours: --background,
 * --foreground, --primary, --accent (plus support tokens for the chrome).
 */

type Vars = Record<string, string>

const BRAND: Vars = {
  "--background": "#f1ebdd",
  "--foreground": "#1e2a38",
  "--card": "#faf6ee",
  "--card-foreground": "#1e2a38",
  "--popover": "#faf6ee",
  "--popover-foreground": "#1e2a38",
  "--primary": "#bc5630",
  "--primary-foreground": "#f1ebdd",
  "--muted": "#e7dfcd",
  "--muted-foreground": "#6b6453",
  "--accent": "#d2a12b",
  "--border": "#ddd3bf",
  "--input": "#ddd3bf",
  "--ring": "#bc5630",
  "--footer-bg": "#111111",
  "--footer-fg": "#f1ebdd",
  "--footer-muted": "#b8b0a0"
}

const AURORA: Vars = {
  "--background": "#fff7ee",
  "--foreground": "#2a1e16",
  "--card": "#ffffff",
  "--card-foreground": "#2a1e16",
  "--popover": "#ffffff",
  "--popover-foreground": "#2a1e16",
  "--primary": "#e8743b",
  "--primary-foreground": "#fff7ee",
  "--muted": "#fbead9",
  "--muted-foreground": "#8a7a6c",
  "--accent": "#f2a93b",
  "--border": "#f2dfc9",
  "--input": "#f2dfc9",
  "--ring": "#e8743b",
  "--footer-bg": "#2a1e16",
  "--footer-fg": "#fff7ee",
  "--footer-muted": "#c9b9aa"
}

const KINFOLK: Vars = {
  "--background": "#efeae2",
  "--foreground": "#1e1b17",
  "--card": "#f7f4ee",
  "--card-foreground": "#1e1b17",
  "--popover": "#f7f4ee",
  "--popover-foreground": "#1e1b17",
  "--primary": "#9c5b3b",
  "--primary-foreground": "#efeae2",
  "--muted": "#e4ddd1",
  "--muted-foreground": "#6b635a",
  "--accent": "#9c5b3b",
  "--border": "#d8d0c4",
  "--input": "#d8d0c4",
  "--ring": "#9c5b3b",
  "--footer-bg": "#1e1b17",
  "--footer-fg": "#efeae2",
  "--footer-muted": "#b3ab9e"
}

const COASTAL: Vars = {
  "--background": "#f3f6f7",
  "--foreground": "#1f2a33",
  "--card": "#ffffff",
  "--card-foreground": "#1f2a33",
  "--popover": "#ffffff",
  "--popover-foreground": "#1f2a33",
  "--primary": "#3e7c8c",
  "--primary-foreground": "#ffffff",
  "--muted": "#e4edef",
  "--muted-foreground": "#5c6b73",
  "--accent": "#e6c79c",
  "--border": "#dce6e8",
  "--input": "#dce6e8",
  "--ring": "#3e7c8c",
  "--footer-bg": "#1f2a33",
  "--footer-fg": "#f3f6f7",
  "--footer-muted": "#9fb0b8"
}

const POSTER: Vars = {
  "--background": "#f4f1ea",
  "--foreground": "#111111",
  "--card": "#ffffff",
  "--card-foreground": "#111111",
  "--popover": "#ffffff",
  "--popover-foreground": "#111111",
  "--primary": "#ff5a1f",
  "--primary-foreground": "#111111",
  "--muted": "#e9e5dc",
  "--muted-foreground": "#555555",
  "--accent": "#ff5a1f",
  "--border": "#111111",
  "--input": "#111111",
  "--ring": "#ff5a1f",
  "--footer-bg": "#111111",
  "--footer-fg": "#f4f1ea",
  "--footer-muted": "#9a9488"
}

export const VARIANT_PALETTES: Record<string, Vars> = {
  original: BRAND,
  aurora: AURORA,
  kinfolk: KINFOLK,
  coastal: COASTAL,
  poster: POSTER
}

/** Core colours the dev Color tool exposes for editing. */
export const CORE_COLORS = [
  { name: "--background", label: "Background" },
  { name: "--foreground", label: "Text" },
  { name: "--primary", label: "Primary" },
  { name: "--accent", label: "Accent" }
] as const
