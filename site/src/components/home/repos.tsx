import { ExternalLinkIcon, StarIcon } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Repo } from "@/lib/atlas"
import { SectionHeading } from "./section-heading"

export function Repos({ repos, groups }: { repos: Repo[]; groups: Record<string, string> }) {
  const keys = Object.keys(groups)
  return (
    <section id="repos" className="container-page pt-28">
      <SectionHeading eyebrow="03 · Ecosystem" title={<>{repos.length} repos worth <span className="font-serif font-normal italic">knowing</span></>}>
        The DESIGN.md collections, the spec, extractors and generators, and the open-source design systems these files draw from. Star counts are a snapshot from 2026-10-04.
      </SectionHeading>
      <Tabs defaultValue={keys[0]}>
        <div className="-mx-4 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0">
          <TabsList className="h-10">
            {keys.map((k) => (
              <TabsTrigger key={k} value={k} className="px-3">
                {groups[k].replace(" (source material)", "")}
                <span className="ml-1 font-mono text-[10px] text-muted-foreground">{repos.filter((r) => r.group === k).length}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        {keys.map((k) => (
          <TabsContent key={k} value={k} className="mt-6">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {repos.filter((r) => r.group === k).map((r) => {
                const [owner, name] = r.name.split("/")
                return (
                  <a key={r.name} href={r.url} target="_blank" rel="noopener" className="group flex min-w-0 flex-col rounded-xl border bg-card p-4 transition hover:border-foreground/25 hover:bg-accent/40">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex min-w-0 items-center gap-2.5">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={`https://github.com/${owner}.png?size=40`} alt="" width={20} height={20} loading="lazy" className="size-5 rounded-md bg-muted" />
                        <span className="truncate font-mono text-sm"><span className="text-muted-foreground">{owner}/</span>{name}</span>
                      </div>
                      <ExternalLinkIcon className="size-3.5 shrink-0 text-muted-foreground opacity-0 transition group-hover:opacity-100" />
                    </div>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{r.description}</p>
                    <span className="mt-3 flex items-center gap-1 font-mono text-xs text-muted-foreground"><StarIcon className="size-3" />{r.stars.toLocaleString()}</span>
                  </a>
                )
              })}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}
