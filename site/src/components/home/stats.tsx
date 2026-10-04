import { NumberTicker } from "@/components/ui/number-ticker"
import { stats } from "@/lib/atlas"

const ITEMS = [
  { value: stats.files, label: "DESIGN.md files", hint: "Validated against the spec" },
  { value: stats.categories, label: "Categories", hint: "From AI labs to aesthetics" },
  { value: stats.colors, label: "Color tokens", hint: "Each with a named role" },
  { value: stats.repos, label: "Curated repos", hint: "Collections, tools, specs" },
]

export function Stats() {
  return (
    <section className="container-page py-16">
      <div className="grid grid-cols-2 overflow-hidden rounded-2xl border lg:grid-cols-4">
        {ITEMS.map((s, i) => (
          <div key={s.label} className={`bg-card p-6 sm:p-8 ${i % 2 ? "border-l" : ""} ${i > 1 ? "border-t lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}>
            <NumberTicker value={s.value} className="text-4xl font-semibold tracking-tighter sm:text-5xl" />
            <div className="mt-2 text-sm font-medium">{s.label}</div>
            <div className="text-xs text-muted-foreground">{s.hint}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
