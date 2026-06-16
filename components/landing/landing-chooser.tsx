"use client"

import { useCallback, useEffect, useState } from "react"
import { Check, Palette, X } from "lucide-react"
import bakedSettings from "@/design-settings.json"
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
type DesignSettings = {
  defaultVariant?: string
  variants?: Record<string, VariantSettings>
}

const BAKED = bakedSettings as DesignSettings

function imageKey(src: string): string | null {
  try {
    const m = decodeURIComponent(src).match(/\/images\/([\w.-]+)/)
    return m ? m[1] : null
  } catch {
    return null
  }
}

function isVariant(id: string | null | undefined): id is VariantId {
  return !!id && id in BODIES
}

export function LandingChooser() {
  // Settings come from the committed file (applies in dev AND production).
  // In dev the tools mutate this live; saving rewrites the file so it ships.
  const [settings, setSettings] = useState<DesignSettings>(BAKED)
  const [variant, setVariant] = useState<VariantId>(
    isVariant(BAKED.defaultVariant) ? BAKED.defaultVariant : "original"
  )
  const [open, setOpen] = useState(false)

  const current = settings.variants?.[variant] ?? {}

  // Restore the visitor's last pick (so the switcher choice sticks per browser).
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (isVariant(saved)) setVariant(saved)
  }, [])

  // Apply saved image positions for the active design — always on (dev + prod),
  // reapplied as images mount / the design switches.
  useEffect(() => {
    const images = settings.variants?.[variant]?.images ?? {}
    const apply = () => {
      document.querySelectorAll<HTMLImageElement>("main img").forEach(img => {
        const key = imageKey(img.currentSrc || img.src)
        img.style.objectPosition =
          key && key in images ? `center ${images[key]}%` : ""
      })
    }
    apply()
    const obs = new MutationObserver(apply)
    obs.observe(document.body, { childList: true, subtree: true })
    return () => obs.disconnect()
  }, [settings, variant])

  const persist = useCallback((next: DesignSettings) => {
    setSettings(next)
    if (!IS_DEV) return
    fetch("/api/dev/design", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(next)
    }).catch(() => {})
  }, [])

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
    // In dev, picking also sets the committed default (so it ships to prod).
    if (IS_DEV) persist({ ...settings, defaultVariant: id })
  }

  function patchVariant(patch: VariantSettings) {
    const prev = settings.variants?.[variant] ?? {}
    persist({
      ...settings,
      variants: { ...settings.variants, [variant]: { ...prev, ...patch } }
    })
  }

  function updateImage(file: string, y: number) {
    patchVariant({ images: { ...(current.images ?? {}), [file]: y } })
  }
  function updateColor(name: string, hex: string) {
    patchVariant({ colors: { ...(current.colors ?? {}), [name]: hex } })
  }

  const Body = BODIES[variant]
  const palette = {
    ...VARIANT_PALETTES[variant],
    ...(current.colors ?? {})
  } as React.CSSProperties

  return (
    <div style={palette}>
      <Nav />
      <main>
        <Body />
      </main>
      <Footer />

      {/* Design switcher — available everywhere (dev + deployed). */}
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

      {/* Edit tools — dev/localhost only. */}
      {IS_DEV && (
        <>
          <ImagePositioner
            variant={variant}
            images={current.images ?? {}}
            onChange={updateImage}
            onSave={saveNow}
          />
          <ColorTool
            variant={variant}
            colors={current.colors ?? {}}
            onChange={updateColor}
            onSave={saveNow}
          />
        </>
      )}
    </div>
  )
}
