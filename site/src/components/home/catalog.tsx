"use client"

import { ArrowDownAZIcon, LayoutGridIcon, SearchIcon, XIcon } from "lucide-react"
import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import type { FileSummary } from "@/lib/atlas"
import { cn } from "@/lib/utils"

type Cats = Record<string, { label: string; color: string }>

export function Catalog({ items, categories }: { items: FileSummary[]; categories: Cats }) {
  const [q, setQ] = useState("")
  const [cat, setCat] = useState("all")
  const [sort, setSort] = useState("category")

  useEffect(() => {
    // Static export: the query string is only readable after hydration.
    const c = new URLSearchParams(window.location.search).get("category")
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (c && categories[c]) setCat(c)
  }, [categories])

  const counts = useMemo(() => {
    const m: Record<string, number> = {}
    items.forEach((f) => (m[f.category] = (m[f.category] ?? 0) + 1))
    return m
  }, [items])

  const list = useMemo(() => {
    const needle = q.trim().toLowerCase()
    const out = items.filter(
      (f) =>
        (cat === "all" || f.category === cat) &&
        (!needle || [f.name, f.description, f.category, ...f.fonts, ...f.palette].join(" ").toLowerCase().includes(needle)),
    )
    return sort === "name" ? [...out].sort((a, b) => a.name.localeCompare(b.name)) : out
  }, [items, q, cat, sort])

  return (
    <div>
      <div className="sticky top-14 z-30 -mx-4 mb-6 border-b bg-background/85 px-4 py-3 backdrop-blur-xl sm:-mx-6 sm:px-6">
        <div className="flex gap-2">
          <InputGroup className="h-10 flex-1 bg-card">
            <InputGroupAddon><SearchIcon /></InputGroupAddon>
            <InputGroupInput value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search brands, vibes, fonts or a hex like #635BFF…" aria-label="Search design systems" />
            {q && (
              <InputGroupAddon align="inline-end">
                <InputGroupButton size="icon-xs" aria-label="Clear search" onClick={() => setQ("")}><XIcon /></InputGroupButton>
              </InputGroupAddon>
            )}
          </InputGroup>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="h-10 bg-card" aria-label="Sort">
                {sort === "name" ? <ArrowDownAZIcon /> : <LayoutGridIcon />}
                <span className="hidden sm:inline">{sort === "name" ? "A–Z" : "By category"}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44">
              <DropdownMenuLabel>Sort</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={sort} onValueChange={setSort}>
                <DropdownMenuRadioItem value="category">By category</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="name">Name A–Z</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <ScrollArea className="mt-3 w-full">
          <div className="flex gap-2 pb-2" role="group" aria-label="Filter by category">
            <Chip active={cat === "all"} onClick={() => setCat("all")} color="conic-gradient(#FF6B4A,#FFC84A,#4AD6A8,#8B7CFF,#FF6B4A)" label="All" count={items.length} />
            {Object.entries(categories).filter(([k]) => counts[k]).map(([k, c]) => (
              <Chip key={k} active={cat === k} onClick={() => setCat(k)} color={c.color} label={c.label} count={counts[k]} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      <p className="mb-4 font-mono text-xs text-muted-foreground">{list.length} of {items.length} systems</p>

      {list.length ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((f) => <SystemCard key={f.slug} f={f} category={categories[f.category]} />)}
        </div>
      ) : (
        <div className="flex flex-col items-center rounded-2xl border border-dashed py-20 text-center">
          <SearchIcon className="mb-3 size-6 text-muted-foreground" />
          <p className="font-medium">No systems match “{q}”</p>
          <p className="text-sm text-muted-foreground">Try a font name, a color, or clear the filters.</p>
          <Button variant="outline" size="sm" className="mt-4" onClick={() => { setQ(""); setCat("all") }}>Reset filters</Button>
        </div>
      )}
    </div>
  )
}

function Chip({ active, onClick, color, label, count }: { active: boolean; onClick: () => void; color: string; label: string; count: number }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "inline-flex h-8 shrink-0 items-center gap-2 rounded-full border px-3 text-sm transition",
        active ? "border-foreground bg-foreground text-background" : "bg-card hover:border-foreground/30",
      )}
    >
      <span className="size-2 rounded-full" style={{ background: color }} />
      {label}
      <span className={cn("font-mono text-[11px]", active ? "text-background/70" : "text-muted-foreground")}>{count}</span>
    </button>
  )
}

export function SystemCard({ f, category }: { f: FileSummary; category?: { label: string; color: string } }) {
  return (
    <Link
      href={`/s/${f.slug}/`}
      className="group flex flex-col overflow-hidden rounded-2xl border bg-card transition duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/40"
    >
      <div className="flex h-24">
        {f.palette.map((c, i) => (
          <span key={i} className="flex-1 transition-[flex] duration-500 group-hover:first:flex-[2.4]" style={{ background: c }} />
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-2 border-t p-4">
        <span className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
          <span className="size-1.5 rounded-full" style={{ background: category?.color }} />
          {category?.label}
        </span>
        <h3 className="text-lg font-semibold tracking-tight">{f.name}</h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">{f.description}</p>
        <div className="mt-auto flex items-center justify-between gap-2 pt-2 font-mono text-[11px] text-muted-foreground">
          <span className="truncate">{f.fonts.slice(0, 2).join(" · ")}</span>
          <span className="shrink-0 opacity-0 transition group-hover:opacity-100">Open →</span>
        </div>
      </div>
    </Link>
  )
}
