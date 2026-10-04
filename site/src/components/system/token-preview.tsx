import { previewTokens, type DesignFile } from "@/lib/atlas"

/** A miniature product page rendered purely from the file's tokens. */
export function TokenPreview({ f }: { f: DesignFile }) {
  const t = previewTokens(f)
  const btn = { borderRadius: t.radiusBtn, padding: "10px 18px", fontSize: 14, fontWeight: 500 } as const
  return (
    <div className="overflow-hidden rounded-2xl border shadow-sm">
      <div className="flex items-center gap-1.5 border-b bg-muted/50 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-[#FF5F57]" />
        <span className="size-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="size-2.5 rounded-full bg-[#28C840]" />
        <span className="mx-auto rounded-md bg-background px-3 py-0.5 font-mono text-[11px] text-muted-foreground">{f.source.replace(/^https?:\/\//, "") || f.slug}</span>
      </div>
      <div style={{ background: t.bg, color: t.text, fontFamily: t.body }} className="p-6 sm:p-10">
        <div className="flex items-center justify-between gap-4 text-sm" style={{ borderBottom: `1px solid ${t.border}`, paddingBottom: 16 }}>
          <span style={{ fontFamily: t.display, fontWeight: 700 }} className="text-base">{f.name}</span>
          <span className="hidden gap-5 sm:flex" style={{ color: t.muted }}><span>Product</span><span>Pricing</span><span>Docs</span></span>
          <span style={{ ...btn, padding: "6px 12px", fontSize: 13, background: t.primary, color: t.onPrimary }}>Sign up</span>
        </div>
        <div className="py-10 sm:py-14">
          <span style={{ color: t.accent, borderColor: t.border, borderRadius: 999 }} className="inline-block border px-3 py-1 text-xs">New · Shipped today</span>
          <h3 style={{ fontFamily: t.display }} className="mt-4 max-w-xl text-3xl leading-[1.05] font-semibold tracking-tight sm:text-5xl">
            Build something people love.
          </h3>
          <p style={{ color: t.muted }} className="mt-4 max-w-md text-[15px]">
            This preview uses only this file&apos;s tokens: colors, radius and fonts. Fonts render if they&apos;re installed, or fall back to the next family in the list.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span style={{ ...btn, background: t.primary, color: t.onPrimary }}>Get started</span>
            <span style={{ ...btn, border: `1px solid ${t.border}` }}>Talk to sales</span>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {["Fast by default", "Designed to scale", "Secure by design"].map((title, i) => (
            <div key={title} style={{ background: t.surface, border: `1px solid ${t.border}`, borderRadius: t.radiusLg }} className="p-4">
              <span style={{ background: i === 0 ? t.primary : t.accent, borderRadius: t.radius }} className="mb-3 block size-7" />
              <div style={{ fontFamily: t.display }} className="font-semibold">{title}</div>
              <div style={{ color: t.muted }} className="mt-1 text-[13px]">A short supporting sentence for this feature card.</div>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-3 p-1.5" style={{ border: `1px solid ${t.border}`, borderRadius: t.radius, background: t.surface }}>
          <span style={{ color: t.muted }} className="flex-1 px-2 text-sm">you@company.com</span>
          <span style={{ ...btn, padding: "7px 14px", fontSize: 13, background: t.text, color: t.bg }}>Subscribe</span>
        </div>
      </div>
    </div>
  )
}
