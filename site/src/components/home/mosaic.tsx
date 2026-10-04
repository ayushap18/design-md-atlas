"use client"

import Link from "next/link"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { byVividness, type FileSummary } from "@/lib/atlas"

export function Mosaic({ items }: { items: FileSummary[] }) {
  return (
    <div className="grid grid-cols-12 gap-1 sm:gap-1.5">
      {items.map((f, i) => {
        const [main = "#888", dot = "transparent"] = byVividness(f.palette)
        return (
          <Tooltip key={f.slug}>
            <TooltipTrigger asChild>
              <Link
                href={`/s/${f.slug}/`}
                aria-label={f.name}
                className="relative aspect-square rounded-[5px] ring-1 ring-white/10 transition-transform duration-200 ring-inset hover:z-10 hover:scale-125 focus-visible:z-10 focus-visible:scale-125 animate-in fade-in zoom-in-50 fill-mode-backwards sm:rounded-md"
                style={{ background: main, animationDelay: `${((i % 12) + Math.floor(i / 12)) * 30}ms`, animationDuration: "500ms" }}
              >
                <span className="absolute top-[18%] right-[18%] size-[22%] rounded-full" style={{ background: dot }} />
              </Link>
            </TooltipTrigger>
            <TooltipContent>{f.name}</TooltipContent>
          </Tooltip>
        )
      })}
    </div>
  )
}
