import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"
import { GitHubIcon } from "@/components/site/logo"
import { Button } from "@/components/ui/button"
import { ShineBorder } from "@/components/ui/shine-border"
import { GITHUB_URL } from "@/lib/atlas"

export function Cta() {
  return (
    <section className="container-page pt-28">
      <div className="relative overflow-hidden rounded-3xl border bg-card px-6 py-16 text-center sm:px-12">
        <ShineBorder shineColor={["#FF6B4A", "#FFC84A", "#4AD6A8", "#8B7CFF"]} borderWidth={1.5} duration={12} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_50%_0%,rgba(139,124,255,0.12),transparent)]" />
        <h2 className="relative text-3xl font-semibold tracking-tighter text-balance sm:text-5xl">
          Give your agent <span className="font-serif font-normal italic">taste.</span>
        </h2>
        <p className="relative mx-auto mt-4 max-w-lg text-muted-foreground">Pick a system, drop in one file, ship UI that looks designed. Or add your own and grow the atlas.</p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-3">
          <Button size="lg" className="h-10 px-4" asChild><Link href="/#catalog">Find a system <ArrowRightIcon /></Link></Button>
          <Button size="lg" variant="outline" className="h-10 px-4" asChild>
            <a href={`${GITHUB_URL}#-contributing`} target="_blank" rel="noopener"><GitHubIcon className="size-4" />Contribute a DESIGN.md</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
