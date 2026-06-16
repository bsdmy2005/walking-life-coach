"use client"

import { useEffect, useState } from "react"
import { VARIANT_PALETTES } from "@/lib/variant-palettes"

/**
 * Applies the visitor's selected design palette to a subtree (checkout, success
 * — routes outside the landing chooser). Reads the chosen variant from
 * localStorage so these pages match the design they came from. Falls back to
 * the brand palette.
 */
export function PaletteShell({ children }: { children: React.ReactNode }) {
  const [palette, setPalette] = useState<React.CSSProperties>(
    VARIANT_PALETTES.original as React.CSSProperties
  )

  useEffect(() => {
    const v = window.localStorage.getItem("wlc-variant") ?? "original"
    setPalette((VARIANT_PALETTES[v] ?? VARIANT_PALETTES.original) as React.CSSProperties)
  }, [])

  return <div style={palette}>{children}</div>
}
