import { ArrowRightIcon, SparklesIcon } from "lucide-react"
import Link from "next/link"
import { CopyButton } from "@/components/site/copy-button"
import { GitHubIcon } from "@/components/site/logo"
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import { AuroraText } from "@/components/ui/aurora-text"
import { BorderBeam } from "@/components/ui/border-beam"
import { Button } from "@/components/ui/button"
import { GITHUB_URL, RAW_BASE, stats, summaries } from "@/lib/atlas"
import { cn } from "@/lib/utils"
import { Mosaic } from "./mosaic"

const CURL = `curl -o DESIGN.md ${RAW_BASE}design-md/developer-tools/linear/DESIGN.md`

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b">
      <AnimatedGridPattern
        numSquares={36}
        maxOpacity={0.08}
        duration={3}
        className={cn("inset-x-0 inset-y-[-30%] h-[160%] skew-y-12", "[mask-image:radial-gradient(700px_circle_at_30%_30%,white,transparent)]")}
      />
      <div className="container-page relative grid items-center gap-14 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="min-w-0">
          <Link
            href="/#catalog"
            className="group inline-flex items-center rounded-full border bg-background/60 px-1 py-1 text-xs backdrop-blur transition hover:bg-accent"
          >
            <span className="rounded-full bg-foreground px-2 py-0.5 font-medium text-background">New</span>
            <AnimatedShinyText className="mx-2 inline-flex items-center gap-1">
              <SparklesIcon className="size-3" /> {stats.files} systems · {stats.colors.toLocaleString()} color tokens
            </AnimatedShinyText>
            <ArrowRightIcon className="mr-1.5 size-3 transition group-hover:translate-x-0.5" />
          </Link>
          <h1 className="mt-6 text-5xl font-semibold tracking-tighter text-balance sm:text-6xl lg:text-7xl">
            Design systems your <AuroraText colors={["#FF6B4A", "#FFC84A", "#4AD6A8", "#8B7CFF"]} className="font-serif font-normal italic">agent</AuroraText> can read.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-pretty text-muted-foreground">
            A curated atlas of DESIGN.md files: brand-inspired systems, official public design systems and style archetypes.
            Drop one into your repo, and Claude Code, Cursor or Google Stitch builds UI that matches.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" asChild className="h-10 px-4">
              <Link href="/#catalog">Browse the catalog <ArrowRightIcon /></Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-10 px-4">
              <a href={GITHUB_URL} target="_blank" rel="noopener"><GitHubIcon className="size-4" />Star on GitHub</a>
            </Button>
          </div>
          <div className="mt-8 flex max-w-xl items-center gap-2 rounded-xl border bg-muted/40 py-1.5 pr-1.5 pl-4 font-mono text-[13px]">
            <span className="text-muted-foreground select-none">$</span>
            <code className="min-w-0 flex-1 truncate">
              curl -o DESIGN.md <span className="text-muted-foreground">…/developer-tools/linear/DESIGN.md</span>
            </code>
            <CopyButton value={CURL} variant="ghost" size="icon-sm" label={undefined} toastLabel="curl command copied" aria-label="Copy curl command" />
          </div>
        </div>
        <div className="relative min-w-0">
          <div className="relative overflow-hidden rounded-3xl border bg-[#0F0E14] p-4 shadow-2xl shadow-black/20 sm:p-5">
            <div className="mb-3 flex items-center gap-1.5 px-1">
              <span className="size-2.5 rounded-full bg-[#FF5F57]" />
              <span className="size-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="size-2.5 rounded-full bg-[#28C840]" />
              <span className="ml-3 font-mono text-[11px] text-white/40">atlas — {stats.files} systems</span>
            </div>
            <Mosaic items={summaries} />
            <BorderBeam size={120} duration={10} colorFrom="#FF6B4A" colorTo="#8B7CFF" />
          </div>
        </div>
      </div>
    </section>
  )
}
