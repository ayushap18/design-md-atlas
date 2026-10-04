import Link from "next/link"
import { Marquee } from "@/components/ui/marquee"
import type { FileSummary } from "@/lib/atlas"

function Pill({ f }: { f: FileSummary }) {
  return (
    <Link
      href={`/s/${f.slug}/`}
      className="flex items-center gap-2.5 rounded-full border bg-card px-3 py-1.5 text-sm whitespace-nowrap shadow-xs transition hover:border-foreground/30"
    >
      <span className="flex -space-x-1">
        {f.palette.slice(0, 4).map((c, i) => (
          <span key={i} className="size-3.5 rounded-full ring-2 ring-card" style={{ background: c }} />
        ))}
      </span>
      {f.name}
    </Link>
  )
}

export function BrandMarquee({ items }: { items: FileSummary[] }) {
  const half = Math.ceil(items.length / 2)
  return (
    <section aria-label="Systems in the atlas" className="relative border-b py-8">
      <Marquee pauseOnHover className="[--duration:80s] [--gap:0.75rem]">
        {items.slice(0, half).map((f) => <Pill key={f.slug} f={f} />)}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:80s] [--gap:0.75rem]">
        {items.slice(half).map((f) => <Pill key={f.slug} f={f} />)}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background" />
    </section>
  )
}
