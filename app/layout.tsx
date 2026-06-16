import type { Metadata } from "next"
import { Dancing_Script, Inter, Playfair_Display } from "next/font/google"
import { Toaster } from "sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
})

const script = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap"
})

export const metadata: Metadata = {
  title: "The Walking Life Coach — Sazi Ngcobo",
  description:
    "Walking-based life coaching. Move your body. Clear your mind. Move your life forward."
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${script.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <TooltipProvider>
          {children}
          <Toaster richColors position="top-right" />
        </TooltipProvider>
      </body>
    </html>
  )
}
