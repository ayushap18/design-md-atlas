import type { Metadata } from "next"
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google"
import { ThemeProvider } from "next-themes"
import { CommandMenuProvider } from "@/components/site/command-menu"
import { SiteFooter } from "@/components/site/site-footer"
import { SiteHeader } from "@/components/site/site-header"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { GITHUB_URL, categories, summaries } from "@/lib/atlas"
import "./globals.css"

const sans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const mono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })
const serif = Instrument_Serif({ variable: "--font-instrument-serif", subsets: ["latin"], weight: "400", style: ["normal", "italic"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://ayushap18.github.io/design-md-atlas/"),
  title: { default: "DESIGN.md Atlas: 120 design systems for AI coding agents", template: "%s · DESIGN.md Atlas" },
  description: "Browse 120 DESIGN.md files covering brand-inspired systems, official public design systems and style archetypes. Drop one into your repo and Claude Code, Cursor or Stitch builds matching UI.",
  openGraph: { title: "DESIGN.md Atlas", description: "120 DESIGN.md design systems your coding agent can read.", type: "website" },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sans.variable} ${mono.variable} ${serif.variable} antialiased`}>
      <body className="flex min-h-svh flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <TooltipProvider delayDuration={150}>
            <CommandMenuProvider items={summaries} categories={categories} githubUrl={GITHUB_URL}>
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <SiteFooter />
            </CommandMenuProvider>
          </TooltipProvider>
          <Toaster position="bottom-center" />
        </ThemeProvider>
      </body>
    </html>
  )
}
