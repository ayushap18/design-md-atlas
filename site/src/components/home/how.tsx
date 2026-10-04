import { BotIcon, FileCodeIcon, PaletteIcon, ShieldCheckIcon, TerminalIcon, TypeIcon } from "lucide-react"
import { DotPattern } from "@/components/ui/dot-pattern"
import { cn } from "@/lib/utils"
import { SectionHeading } from "./section-heading"

const YAML = `---
name: Linear
colors:
  primary: "#5E6AD2"
  background: "#08090A"
  text: "#F7F8F8"
typography:
  display:
    fontFamily: Inter Display
    fontSize: 4rem
rounded: { md: 6px, lg: 12px }
components:
  button-primary:
    backgroundColor: "{colors.primary}"
---`

const SECTIONS = ["Overview", "Colors", "Typography", "Layout", "Elevation & Depth", "Shapes", "Components", "Do's and Don'ts", "Agent Prompt Guide"]
const AGENTS = ["Claude Code", "Cursor", "Codex", "Gemini CLI", "Google Stitch", "Copilot", "Windsurf", "v0"]

function Tile({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("relative overflow-hidden rounded-2xl border bg-card p-6", className)}>{children}</div>
}

function Step({ n, icon: Icon, title, children }: { n: number; icon: React.ElementType; title: string; children: React.ReactNode }) {
  return (
    <Tile>
      <div className="flex items-center justify-between">
        <span className="grid size-9 place-items-center rounded-lg border bg-muted"><Icon className="size-4" /></span>
        <span className="font-serif text-4xl text-muted-foreground/40 italic">0{n}</span>
      </div>
      <h3 className="mt-5 font-semibold">{title}</h3>
      <p className="mt-1.5 text-sm text-muted-foreground">{children}</p>
    </Tile>
  )
}

export function How() {
  return (
    <section id="how" className="container-page pt-28">
      <SectionHeading eyebrow="02 · How it works" title={<>From catalog to <span className="font-serif font-normal italic">on-brand</span> UI in a minute</>}>
        DESIGN.md is the format Google Stitch introduced: plain markdown with machine-readable tokens up top and human-readable rules below. Agents read it the same way they read README.md.
      </SectionHeading>
      <div className="grid gap-4 md:grid-cols-3">
        <Step n={1} icon={PaletteIcon} title="Pick a system">Browse 120 systems, preview the palette and type live, then copy or download the file.</Step>
        <Step n={2} icon={TerminalIcon} title="Drop it in your repo">Save it as <code className="rounded bg-muted px-1 font-mono text-xs">DESIGN.md</code> in your project root, next to README.md and AGENTS.md.</Step>
        <Step n={3} icon={BotIcon} title="Prompt your agent">“Read DESIGN.md and build a pricing page that follows it exactly.” Every file ships a prompt guide.</Step>

        <Tile className="md:col-span-2 md:row-span-2 p-0">
          <div className="flex items-center justify-between border-b px-5 py-3">
            <span className="flex items-center gap-2 font-mono text-xs text-muted-foreground"><FileCodeIcon className="size-3.5" />DESIGN.md · frontmatter</span>
            <span className="rounded-full border px-2 py-0.5 font-mono text-[10px] text-muted-foreground">YAML</span>
          </div>
          <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
            {YAML.split("\n").map((line, i) => {
              const m = line.match(/^(\s*)([\w-]+)(:)(.*)$/)
              return (
                <div key={i} className="flex">
                  <span className="w-8 shrink-0 text-right text-muted-foreground/40 select-none">{i + 1}</span>
                  <span className="pl-4">
                    {m ? (
                      <>{m[1]}<span className="text-[#8B7CFF]">{m[2]}</span>{m[3]}<span className={/#|"/.test(m[4]) ? "text-[#E5532F] dark:text-[#FF8A6B]" : "text-[#0E9F6E] dark:text-[#4AD6A8]"}>{m[4]}</span></>
                    ) : <span className="text-muted-foreground">{line}</span>}
                  </span>
                </div>
              )
            })}
          </pre>
        </Tile>

        <Tile>
          <h3 className="flex items-center gap-2 font-semibold"><TypeIcon className="size-4" />Nine sections, in spec order</h3>
          <ol className="mt-4 space-y-1.5 text-sm">
            {SECTIONS.map((s, i) => (
              <li key={s} className="flex items-center gap-3 text-muted-foreground">
                <span className="w-5 font-mono text-[11px] text-muted-foreground/60">{String(i + 1).padStart(2, "0")}</span>{s}
              </li>
            ))}
          </ol>
        </Tile>

        <Tile>
          <DotPattern className="[mask-image:radial-gradient(220px_circle_at_top_right,white,transparent)] opacity-60" />
          <h3 className="relative flex items-center gap-2 font-semibold"><ShieldCheckIcon className="size-4" />Validated in CI</h3>
          <p className="relative mt-1.5 text-sm text-muted-foreground">Every file is parsed and checked for required tokens and section order on each push.</p>
          <div className="relative mt-4 flex flex-wrap gap-1.5">
            {AGENTS.map((a) => <span key={a} className="rounded-md border bg-background px-2 py-1 text-xs">{a}</span>)}
          </div>
        </Tile>
      </div>
    </section>
  )
}
