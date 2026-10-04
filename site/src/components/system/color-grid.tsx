"use client"

import { toast } from "sonner"
import { copyText } from "@/components/site/copy-button"
import { luminance } from "@/lib/atlas"

export function ColorGrid({ colors }: { colors: Record<string, string> }) {
  const copy = async (v: string) => {
    try { await copyText(v); toast.success(`Copied ${v}`) } catch { toast.error("Copy failed") }
  }
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {Object.entries(colors).map(([k, v]) => (
        <button key={k} onClick={() => copy(v)} title={`Copy ${v}`} className="group overflow-hidden rounded-xl border bg-card text-left transition hover:-translate-y-0.5 hover:shadow-md">
          <div className="relative h-20 border-b" style={{ background: v }}>
            <span className="absolute right-2 bottom-2 rounded-md px-1.5 py-0.5 font-mono text-[10px] opacity-0 backdrop-blur transition group-hover:opacity-100" style={{ color: luminance(v) > 0.45 ? "#111" : "#fff", background: luminance(v) > 0.45 ? "#0000000f" : "#ffffff22" }}>
              Copy
            </span>
          </div>
          <div className="px-3 py-2">
            <div className="truncate text-xs font-medium">{k}</div>
            <div className="truncate font-mono text-[11px] text-muted-foreground uppercase">{v}</div>
          </div>
        </button>
      ))}
    </div>
  )
}
