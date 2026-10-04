"use client"

import { BookOpenIcon, SearchIcon } from "lucide-react"
import { GitHubIcon } from "@/components/site/logo"
import { useRouter } from "next/navigation"
import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import type { FileSummary } from "@/lib/atlas"
import { cn } from "@/lib/utils"

const Ctx = createContext<(open: boolean) => void>(() => {})

export function CommandMenuProvider({
  items,
  categories,
  githubUrl,
  children,
}: {
  items: FileSummary[]
  categories: Record<string, { label: string; color: string }>
  githubUrl: string
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const router = useRouter()

  // Own ranking instead of cmdk's fuzzy score: name prefix > name substring > fonts/category/description.
  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return null
    const rank = (f: FileSummary) => {
      const name = f.name.toLowerCase()
      if (name.startsWith(q)) return 0
      if (name.includes(q)) return 1
      if ([...f.fonts, categories[f.category]?.label ?? ""].join(" ").toLowerCase().includes(q)) return 2
      if (f.description.toLowerCase().includes(q)) return 3
      return -1
    }
    return items.map((f) => [rank(f), f] as const).filter(([r]) => r >= 0).sort((a, b) => a[0] - b[0]).map(([, f]) => f)
  }, [query, items, categories])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !/input|textarea/i.test((e.target as HTMLElement).tagName))) {
        e.preventDefault()
        setOpen((o) => !o)
      }
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [])

  const go = (href: string) => {
    setOpen(false)
    setQuery("")
    if (href.startsWith("http")) window.open(href, "_blank", "noopener")
    else router.push(href)
  }

  return (
    <Ctx.Provider value={setOpen}>
      {children}
      <CommandDialog open={open} onOpenChange={setOpen} title="Search the atlas" description="Jump to any design system">
        <Command shouldFilter={false}>
        <CommandInput value={query} onValueChange={setQuery} placeholder="Search 120 design systems, fonts, vibes…" />
        <CommandList>
          <CommandEmpty>No systems found.</CommandEmpty>
          {results ? (
            <CommandGroup heading={`${results.length} results`}>
              {results.map((f) => <SystemItem key={f.slug} f={f} onSelect={() => go(`/s/${f.slug}/`)} />)}
            </CommandGroup>
          ) : (
            <>
              <CommandGroup heading="Links">
                <CommandItem onSelect={() => go("/#catalog")}><BookOpenIcon />Browse catalog</CommandItem>
                <CommandItem onSelect={() => go(githubUrl)}><GitHubIcon />GitHub repository</CommandItem>
              </CommandGroup>
              <CommandSeparator />
              {Object.entries(categories).map(([key, cat]) => {
                const list = items.filter((i) => i.category === key)
                return list.length ? (
                  <CommandGroup key={key} heading={cat.label}>
                    {list.map((f) => <SystemItem key={f.slug} f={f} onSelect={() => go(`/s/${f.slug}/`)} />)}
                  </CommandGroup>
                ) : null
              })}
            </>
          )}
        </CommandList>
        </Command>
      </CommandDialog>
    </Ctx.Provider>
  )
}

function SystemItem({ f, onSelect }: { f: FileSummary; onSelect: () => void }) {
  return (
    <CommandItem value={f.slug} onSelect={onSelect}>
      <span className="flex h-3.5 w-10 shrink-0 overflow-hidden rounded-sm ring-1 ring-border">
        {f.palette.slice(0, 5).map((c, i) => <span key={i} className="flex-1" style={{ background: c }} />)}
      </span>
      <span className="truncate">{f.name}</span>
      <span className="ml-auto truncate text-xs text-muted-foreground">{f.fonts[0]}</span>
    </CommandItem>
  )
}

export function SearchTrigger({ className }: { className?: string }) {
  const setOpen = useContext(Ctx)
  return (
    <Button
      variant="outline"
      onClick={() => setOpen(true)}
      className={cn("h-9 justify-start gap-2 bg-muted/40 px-3 font-normal text-muted-foreground shadow-none", className)}
    >
      <SearchIcon />
      <span className="hidden lg:inline">Search design systems…</span>
      <span className="hidden sm:inline lg:hidden">Search…</span>
      <KbdGroup className="ml-auto hidden sm:flex"><Kbd>⌘</Kbd><Kbd>K</Kbd></KbdGroup>
    </Button>
  )
}
