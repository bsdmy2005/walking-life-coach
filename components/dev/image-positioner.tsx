"use client"

import { useCallback, useEffect, useState } from "react"
import { Check, ImageIcon, X } from "lucide-react"

/**
 * Dev tool: slide each image up/down (vertical object-position) live, per design.
 * Controlled by the chooser (positions persisted to disk per variant). Reapplies
 * as images mount / variants switch so framing sticks across restarts.
 */

function basename(src: string): string | null {
  try {
    const m = decodeURIComponent(src).match(/\/images\/([\w.-]+)/)
    return m ? m[1] : null
  } catch {
    return null
  }
}

export function ImagePositioner({
  variant,
  images,
  onChange,
  onSave
}: {
  variant: string
  images: Record<string, number>
  onChange: (file: string, y: number) => void
  onSave: () => Promise<void>
}) {
  const [open, setOpen] = useState(false)
  const [found, setFound] = useState<{ key: string; alt: string }[]>([])
  const [saved, setSaved] = useState(false)

  async function save() {
    try {
      await onSave()
      setSaved(true)
      setTimeout(() => setSaved(false), 1500)
    } catch {
      /* ignore */
    }
  }

  const applyAll = useCallback(() => {
    document.querySelectorAll<HTMLImageElement>("main img").forEach(img => {
      const key = basename(img.currentSrc || img.src)
      img.style.objectPosition =
        key && key in images ? `center ${images[key]}%` : ""
    })
  }, [images])

  // Reapply whenever positions/variant change, and as new images mount.
  useEffect(() => {
    applyAll()
    const obs = new MutationObserver(() => applyAll())
    obs.observe(document.body, { childList: true, subtree: true })
    return () => obs.disconnect()
  }, [applyAll, variant])

  function scan() {
    const seen = new Map<string, string>()
    document.querySelectorAll<HTMLImageElement>("main img").forEach(img => {
      const key = basename(img.currentSrc || img.src)
      if (key && !seen.has(key)) seen.set(key, img.alt || key)
    })
    setFound([...seen].map(([key, alt]) => ({ key, alt })))
  }

  return (
    <div className="fixed bottom-5 left-5 z-[70] flex flex-col items-start gap-3">
      {open && (
        <div className="w-80 max-w-[88vw] overflow-hidden rounded-2xl border border-neutral-300 bg-white text-neutral-900 shadow-2xl">
          <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3">
            <p className="font-medium">
              Image position
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
          <div className="max-h-[60vh] space-y-4 overflow-y-auto p-4">
            {found.length === 0 && (
              <p className="text-sm text-neutral-500">No images found.</p>
            )}
            {found.map(img => {
              const v = images[img.key] ?? 50
              return (
                <div key={img.key}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="truncate font-medium">{img.alt}</span>
                    <span className="ml-2 shrink-0 tabular-nums text-neutral-500">
                      {v}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={v}
                    onChange={e => onChange(img.key, Number(e.target.value))}
                    className="mt-1 w-full accent-neutral-900"
                  />
                  <p className="text-[10px] text-neutral-400">{img.key}</p>
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
        onClick={() => {
          if (!open) scan()
          setOpen(o => !o)
        }}
        className="flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-white shadow-xl transition-colors hover:bg-neutral-800"
      >
        <ImageIcon className="size-5" />
        <span className="text-sm font-medium">Images</span>
      </button>
    </div>
  )
}
