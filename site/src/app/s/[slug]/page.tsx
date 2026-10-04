import { readFileSync } from "node:fs"
import path from "node:path"
import { ArrowLeftIcon, ArrowRightIcon, BotIcon, DownloadIcon, ExternalLinkIcon, FileCodeIcon, PaletteIcon, TypeIcon } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { SystemCard } from "@/components/home/catalog"
import { CopyButton, DownloadButton } from "@/components/site/copy-button"
import { GitHubIcon } from "@/components/site/logo"
import { ColorGrid } from "@/components/system/color-grid"
import { TokenPreview } from "@/components/system/token-preview"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GITHUB_URL, RAW_BASE, agentPrompt, fontStack, categoryOf, files, getFile, summaries } from "@/lib/atlas"

export const dynamicParams = false
export const generateStaticParams = () => files.map((f) => ({ slug: f.slug }))

export async function generateMetadata({ params }: PageProps<"/s/[slug]">): Promise<Metadata> {
  const f = getFile((await params).slug)
  return f ? { title: `${f.name} DESIGN.md`, description: f.description } : {}
}

const px = (v: string | number) => (typeof v === "number" || /^\d+$/.test(String(v)) ? `${v}px` : String(v))

export default async function SystemPage({ params }: PageProps<"/s/[slug]">) {
  const { slug } = await params
  const f = getFile(slug)
  if (!f) notFound()
  const content = readFileSync(path.join(process.cwd(), "..", f.path), "utf8")
  const cat = categoryOf(f)
  const idx = files.indexOf(f)
  const prev = files[(idx - 1 + files.length) % files.length]
  const next = files[(idx + 1) % files.length]
  const related = summaries.filter((s) => s.category === f.category && s.slug !== f.slug).slice(0, 4)
  const raw = RAW_BASE + f.path
  const lines = content.split("\n")

  return (
    <div className="container-page py-10">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem><BreadcrumbLink asChild><Link href="/">Atlas</Link></BreadcrumbLink></BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem><BreadcrumbLink asChild><Link href={`/?category=${f.category}#catalog`}>{cat.label}</Link></BreadcrumbLink></BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem><BreadcrumbPage>{f.name}</BreadcrumbPage></BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-6 overflow-hidden rounded-3xl border">
        <div className="flex h-28 sm:h-36">
          {f.palette.map((c, i) => <span key={i} className="flex-1" style={{ background: c }} />)}
        </div>
        <div className="flex flex-col gap-6 border-t bg-card p-6 sm:p-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground">
              <span className="size-1.5 rounded-full" style={{ background: cat.color }} />{cat.label}
            </span>
            <h1 className="mt-3 text-4xl font-semibold tracking-tighter sm:text-6xl">{f.name}</h1>
            <p className="mt-3 text-pretty text-muted-foreground">{f.description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <CopyButton value={content} label="Copy DESIGN.md" toastLabel={`${f.name} DESIGN.md copied`} className="h-9 px-3" />
            <DownloadButton content={content} variant="outline" className="h-9 px-3"><DownloadIcon />Download</DownloadButton>
            <Button variant="outline" className="h-9 px-3" asChild>
              <a href={`${GITHUB_URL}/blob/main/${f.path}`} target="_blank" rel="noopener"><GitHubIcon className="size-4" />GitHub</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-[minmax(0,1fr)] gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <Tabs defaultValue="preview" className="min-w-0">
          <TabsList className="h-10">
            <TabsTrigger value="preview" className="px-3"><PaletteIcon />Preview</TabsTrigger>
            <TabsTrigger value="tokens" className="px-3"><TypeIcon />Tokens</TabsTrigger>
            <TabsTrigger value="source" className="px-3"><FileCodeIcon />Source</TabsTrigger>
          </TabsList>

          <TabsContent value="preview" className="mt-6"><TokenPreview f={f} /></TabsContent>

          <TabsContent value="tokens" className="mt-6 space-y-10">
            <div>
              <h2 className="mb-4 text-lg font-semibold tracking-tight">Colors <span className="ml-1 text-sm font-normal text-muted-foreground">{Object.keys(f.colors).length} tokens · click to copy</span></h2>
              <ColorGrid colors={f.colors} />
            </div>
            <div>
              <h2 className="mb-4 text-lg font-semibold tracking-tight">Typography</h2>
              <div className="divide-y rounded-2xl border bg-card">
                {Object.entries(f.typography).filter(([, v]) => v && typeof v === "object").map(([role, v]) => (
                  <div key={role} className="grid gap-2 p-4 sm:grid-cols-[140px_1fr] sm:items-center">
                    <div>
                      <div className="font-mono text-xs">{role}</div>
                      <div className="font-mono text-[11px] text-muted-foreground">{[v.fontSize, v.fontWeight, v.lineHeight && `lh ${v.lineHeight}`].filter(Boolean).join(" · ")}</div>
                    </div>
                    <div className="min-w-0">
                      <div className="truncate" style={{ fontFamily: fontStack(v.fontFamily), fontWeight: v.fontWeight as number, letterSpacing: v.letterSpacing, fontSize: `clamp(14px, ${v.fontSize ?? "1rem"}, 40px)`, lineHeight: 1.2 }}>
                        The quick brown fox jumps
                      </div>
                      <div className="truncate font-mono text-[11px] text-muted-foreground">{v.fontFamily}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-lg font-semibold tracking-tight">Radius</h2>
                <div className="flex flex-wrap gap-4">
                  {Object.entries(f.rounded).map(([k, v]) => (
                    <div key={k} className="text-center">
                      <div className="size-16 border-2 border-foreground/70 bg-muted" style={{ borderRadius: px(v) === "9999px" ? 9999 : px(v) }} />
                      <div className="mt-1.5 font-mono text-[11px]">{k}</div>
                      <div className="font-mono text-[10px] text-muted-foreground">{px(v)}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="mb-4 text-lg font-semibold tracking-tight">Spacing</h2>
                <div className="space-y-2">
                  {Object.entries(f.spacing).map(([k, v]) => (
                    <div key={k} className="flex items-center gap-3">
                      <span className="w-14 font-mono text-[11px]">{k}</span>
                      <span className="h-3 rounded-sm bg-[linear-gradient(90deg,#FF6B4A,#8B7CFF)]" style={{ width: `min(${px(v)}, 100%)`, minWidth: 2 }} />
                      <span className="font-mono text-[11px] text-muted-foreground">{px(v)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="source" className="mt-6">
            <div className="overflow-hidden rounded-2xl border bg-card">
              <div className="flex items-center justify-between border-b px-4 py-2">
                <span className="font-mono text-xs text-muted-foreground">{f.path}</span>
                <CopyButton value={content} variant="ghost" size="icon-sm" toastLabel="DESIGN.md copied" aria-label="Copy source" />
              </div>
              <ScrollArea className="h-[640px]">
                <pre className="p-4 font-mono text-[12.5px] leading-relaxed">
                  {lines.map((l, i) => (
                    <div key={i} className="flex">
                      <span className="w-10 shrink-0 pr-4 text-right text-muted-foreground/40 select-none">{i + 1}</span>
                      <span className={`whitespace-pre-wrap ${l.startsWith("#") ? "font-semibold text-foreground" : l.startsWith(">") ? "text-muted-foreground italic" : ""}`}>{l || " "}</span>
                    </div>
                  ))}
                </pre>
              </ScrollArea>
            </div>
          </TabsContent>
        </Tabs>

        <aside className="space-y-4 lg:sticky lg:top-20 lg:self-start">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><BotIcon className="size-4" />Use with your agent</CardTitle>
              <CardDescription>Save the file as DESIGN.md in your project root, then prompt:</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="rounded-lg border bg-muted/50 p-3 text-sm">{agentPrompt(f)}</p>
              <div className="grid gap-2">
                <CopyButton value={agentPrompt(f)} label="Copy prompt" variant="outline" toastLabel="Prompt copied" className="h-9" />
                <CopyButton value={`curl -o DESIGN.md ${raw}`} label="Copy curl command" variant="outline" toastLabel="curl command copied" className="h-9" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>At a glance</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm">
              <Row k="Color tokens" v={Object.keys(f.colors).length} />
              <Row k="Type roles" v={Object.keys(f.typography).length} />
              <Row k="Fonts" v={f.fonts.slice(0, 3).join(", ")} />
              <Separator />
              {f.source && (
                <a href={f.source} target="_blank" rel="noopener" className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground">
                  <ExternalLinkIcon className="size-3.5" />{f.source.replace(/^https?:\/\//, "")}
                </a>
              )}
            </CardContent>
          </Card>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" className="h-auto justify-start py-2" asChild>
              <Link href={`/s/${prev.slug}/`}><ArrowLeftIcon /><span className="min-w-0 text-left"><span className="block text-[10px] text-muted-foreground">Previous</span><span className="block truncate">{prev.name}</span></span></Link>
            </Button>
            <Button variant="outline" className="h-auto justify-end py-2" asChild>
              <Link href={`/s/${next.slug}/`}><span className="min-w-0 text-right"><span className="block text-[10px] text-muted-foreground">Next</span><span className="block truncate">{next.name}</span></span><ArrowRightIcon /></Link>
            </Button>
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight">More in {cat.label}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => <SystemCard key={r.slug} f={r} category={cat} />)}
          </div>
        </section>
      )}
    </div>
  )
}

function Row({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-muted-foreground">{k}</span>
      <span className="truncate text-right font-medium">{v}</span>
    </div>
  )
}
