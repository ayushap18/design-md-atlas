export function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: React.ReactNode; children?: React.ReactNode }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tighter text-balance sm:text-5xl">{title}</h2>
      {children && <p className="mt-4 text-pretty text-muted-foreground">{children}</p>}
    </div>
  )
}
