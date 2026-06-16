"use client"

import { useState } from "react"
import { Check, Droplet, X } from "lucide-react"
import { CORE_COLORS, VARIANT_PALETTES } from "@/lib/variant-palettes"

/**
 * Dev tool: recolour the active design's core colours (background, text,
 * primary, accent) with live pickers. Controlled by the chooser; overrides
 * persist to disk per variant. Variants whose bodies reference these CSS vars
 * repaint instantly; the shared chrome always follows.
 */
export function ColorTool({
  variant,
  colors,
  onChange,
  onSave
}: {
  variant: string
  colors: Record<string, string>
  onChange: (name: string, hex: string) => void
  onSave: () => Promise<void>
}) {
  const [open, setOpen] = useState(false)
  const [saved, setSaved] = useState(false)
  const base = VARIANT_PALETTES[variant] ?? {}

  async function save() {
    try {
      await onSave()
      setSaved(true)
      setTimeout(() => setSaved(false), 1500)
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="fixed bottom-5 left-1/2 z-[70] flex -translate-x-1/2 flex-col items-center gap-3">
      {open && (
        <div className="w-72 max-w-[88vw] overflow-hidden rounded-2xl border border-neutral-300 bg-white text-neutral-900 shadow-2xl">
          <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3">
            <p className="font-medium">
              Colours
              <span className="ml-2 text-xs text-neutral-400">{variant}</span>
            </p>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="text-neutral-500 hover:text-neutral-900"
            >
              <X className="size-4" />
            </button>
          </div>
          <div className="space-y-3 p-4">
            {CORE_COLORS.map(c => {
              const val = colors[c.name] ?? base[c.name] ?? "#000000"
              return (
                <div key={c.name} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{c.label}</p>
                    <p className="text-[10px] tabular-nums text-neutral-400">
                      {val}
                    </p>
                  </div>
                  <input
                    type="color"
                    value={val}
                    onChange={e => onChange(c.name, e.target.value)}
                    className="size-9 cursor-pointer rounded-md border border-neutral-300 bg-white"
                  />
                </div>
              )
            })}
          </div>
          <div className="border-t border-neutral-200 p-3">
            <button
              onClick={save}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-neutral-900 py-2.5 text-sm font-medium text-white hover:bg-neutral-800"
            >
              {saved ? (
                <>
                  <Check className="size-4" /> Saved
                </>
              ) : (
                "Save"
              )}
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-white shadow-xl transition-colors hover:bg-neutral-800"
      >
        <Droplet className="size-5" />
        <span className="text-sm font-medium">Colours</span>
      </button>
    </div>
  )
}
