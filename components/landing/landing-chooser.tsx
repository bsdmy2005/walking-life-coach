"use client"

import { useCallback, useEffect, useState } from "react"
import { Check, Palette, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { VARIANT_PALETTES } from "@/lib/variant-palettes"
import { ColorTool } from "@/components/dev/color-tool"
import { ImagePositioner } from "@/components/dev/image-positioner"
import { Footer } from "@/components/site/footer"
import { Nav } from "@/components/site/nav"
import { VariantAurora } from "./variant-aurora"
import { VariantCoastal } from "./variant-coastal"
import { VariantKinfolk } from "./variant-kinfolk"
import { VariantOriginal } from "./variant-original"
import { VariantPoster } from "./variant-poster"

const IS_DEV = process.env.NODE_ENV !== "production"

const VARIANTS = [
  { id: "original", name: "Original", desc: "Photo-led split layouts" },
  { id: "aurora", name: "Aurora", desc: "Sunrise gradient, glassy wellness" },
  { id: "kinfolk", name: "Kinfolk", desc: "Editorial luxury, big serif" },
  { id: "coastal", name: "Coastal", desc: "Calm sky-blue, mindful & airy" },
  { id: "poster", name: "Poster", desc: "Swiss brutalist, electric accent" }
] as const

type VariantId = (typeof VARIANTS)[number]["id"]
const DEFAULT_VARIANT: VariantId = "original"
const STORAGE_KEY = "wlc-variant"

const BODIES: Record<VariantId, React.ComponentType> = {
  original: VariantOriginal,
  aurora: VariantAurora,
  kinfolk: VariantKinfolk,
  coastal: VariantCoastal,
  poster: VariantPoster
}

type VariantSettings = {
  images?: Record<string, number>
  colors?: Record<string, string>
}
type DesignSettings = Record<string, VariantSettings>

export function LandingChooser() {
  const [variant, setVariant] = useState<VariantId>(DEFAULT_VARIANT)
  const [open, setOpen] = useState(false)
  const [settings, setSettings] = useState<DesignSettings>({})

  // Dev: restore last-picked design + load persisted design settings from disk.
  useEffect(() => {
    if (!IS_DEV) return
    const saved = window.localStorage.getItem(STORAGE_KEY) as VariantId | null
    if (saved && saved in BODIES) setVariant(saved)
    fetch("/api/dev/design")
      .then(r => (r.ok ? r.json() : {}))
      .then((s: DesignSettings) => setSettings(s ?? {}))
      .catch(() => {})
  }, [])

  // Persist settings to disk (dev only).
  const persist = useCallback((next: DesignSettings) => {
    setSettings(next)
    if (!IS_DEV) return
    fetch("/api/dev/design", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(next)
    }).catch(() => {})
  }, [])

  // Explicit save (the tools call this from their Save button).
  const saveNow = useCallback(async () => {
    const res = await fetch("/api/dev/design", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(settings)
    })
    if (!res.ok) throw new Error("save failed")
  }, [settings])

  function choose(id: VariantId) {
    setVariant(id)
    window.localStorage.setItem(STORAGE_KEY, id)
    window.scrollTo({ top: 0 })
  }

  function updateImage(file: string, y: number) {
    const cur = settings[variant] ?? {}
    persist({
      ...settings,
      [variant]: { ...cur, images: { ...(cur.images ?? {}), [file]: y } }
    })
  }

  function updateColor(name: string, hex: string) {
    const cur = settings[variant] ?? {}
    persist({
      ...settings,
      [variant]: { ...cur, colors: { ...(cur.colors ?? {}), [name]: hex } }
    })
  }

  const Body = BODIES[variant]
  // Wrapper palette = variant base palette + any dev colour overrides.
  const palette = {
    ...VARIANT_PALETTES[variant],
    ...(settings[variant]?.colors ?? {})
  } as React.CSSProperties

  return (
    <div style={palette}>
      <Nav />
      <main>
        <Body />
      </main>
      <Footer />

      {IS_DEV && (
        <>
          <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
            {open && (
              <div className="border-border bg-card w-72 overflow-hidden rounded-2xl border shadow-2xl">
                <div className="border-border flex items-center justify-between border-b px-4 py-3">
                  <p className="font-serif text-lg">Choose a design</p>
                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Close"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <X className="size-4" />
                  </button>
                </div>
                <div className="p-2">
                  {VARIANTS.map(v => (
                    <button
                      key={v.id}
                      onClick={() => choose(v.id)}
                      className={cn(
                        "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left transition-colors",
                        variant === v.id ? "bg-muted" : "hover:bg-muted/60"
                      )}
                    >
                      <span>
                        <span className="block font-medium">{v.name}</span>
                        <span className="text-muted-foreground block text-xs">
                          {v.desc}
                        </span>
                      </span>
                      {variant === v.id && (
                        <Check className="text-primary size-4 shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <button
              onClick={() => setOpen(o => !o)}
              className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2 rounded-full px-5 py-3 shadow-xl transition-colors"
            >
              <Palette className="size-5" />
              <span className="text-sm font-medium">Design</span>
            </button>
          </div>

          <ImagePositioner
            variant={variant}
            images={settings[variant]?.images ?? {}}
            onChange={updateImage}
            onSave={saveNow}
          />
          <ColorTool
            variant={variant}
            colors={settings[variant]?.colors ?? {}}
            onChange={updateColor}
            onSave={saveNow}
          />
        </>
      )}
    </div>
  )
}
