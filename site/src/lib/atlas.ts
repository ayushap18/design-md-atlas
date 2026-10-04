import data from "@/data/atlas.json"

export type TypeToken = {
  fontFamily?: string
  fontSize?: string
  fontWeight?: number | string
  lineHeight?: number | string
  letterSpacing?: string
}

export type DesignFile = {
  slug: string
  category: string
  name: string
  description: string
  source: string
  path: string
  palette: string[]
  colors: Record<string, string>
  fonts: string[]
  typography: Record<string, TypeToken>
  rounded: Record<string, string | number>
  spacing: Record<string, string | number>
}

export type Repo = { group: string; name: string; stars: number; description: string; url: string }

export const REPO = data.repo
export const RAW_BASE = `https://raw.githubusercontent.com/${data.repo}/main/`
export const GITHUB_URL = `https://github.com/${data.repo}`
export const categories = data.categories as Record<string, { label: string; color: string }>
export const repoGroups = data.repoGroups as Record<string, string>
export const files = data.files as unknown as DesignFile[]
export const repos = data.repos as Repo[]

export const getFile = (slug: string) => files.find((f) => f.slug === slug)
export const categoryOf = (f: Pick<DesignFile, "category">) =>
  categories[f.category] ?? { label: f.category, color: "#888888" }

/** Slim shape shipped to client components (no full token maps). */
export type FileSummary = Pick<DesignFile, "slug" | "category" | "name" | "description" | "palette" | "fonts">
export const summaries: FileSummary[] = files.map(({ slug, category, name, description, palette, fonts }) => ({
  slug, category, name, description, palette, fonts,
}))

export const stats = {
  files: files.length,
  categories: new Set(files.map((f) => f.category)).size,
  colors: files.reduce((n, f) => n + Object.keys(f.colors).length, 0),
  repos: repos.length,
}

// ---- color helpers ----
export function rgb(c: string): [number, number, number] | null {
  const s = String(c).trim()
  const hex = s.match(/^#([0-9a-f]{3,8})$/i)
  if (hex) {
    let h = hex[1]
    if (h.length <= 4) h = [...h].map((x) => x + x).join("")
    return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16)) as [number, number, number]
  }
  const fn = s.match(/^rgba?\(([^)]+)\)/i)
  return fn ? (fn[1].split(/[ ,/]+/).slice(0, 3).map(Number) as [number, number, number]) : null
}

export const vividness = (c: string) => {
  const v = rgb(c)
  return v ? (Math.max(...v) - Math.min(...v)) / 255 : 0
}

export const byVividness = (palette: string[]) => [...palette].sort((a, b) => vividness(b) - vividness(a))

export function luminance(c: string) {
  const v = rgb(c)
  if (!v) return 0.5
  const [r, g, b] = v.map((x) => {
    x /= 255
    return x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

export const onColor = (c: string) => (luminance(c) > 0.45 ? "#111111" : "#FFFFFF")

export function pick(o: Record<string, unknown> | undefined, ...keys: string[]) {
  for (const k of keys) {
    const v = o?.[k]
    if (v != null && String(v).trim()) return String(v)
  }
}

/** Append a generic fallback so missing brand fonts degrade to the right family, not Times. */
export function fontStack(family?: string) {
  if (!family || family === "inherit") return "inherit"
  if (/\b(sans-serif|serif|monospace|system-ui)\b/.test(family)) return family
  const generic = /mono|code|courier|vt323|plex mono/i.test(family)
    ? "ui-monospace, monospace"
    : /serif|garamond|playfair|georgia|times|caslon|tiempos|mincho|bodoni|didot|lora|spectral|editorial|recoleta|fraunces/i.test(family) && !/sans/i.test(family)
      ? "ui-serif, Georgia, serif"
      : "ui-sans-serif, system-ui, sans-serif"
  return `${family}, ${generic}`
}

/** Resolve the handful of tokens the live preview needs, with sensible fallbacks. */
export function previewTokens(f: DesignFile) {
  const c = f.colors
  const bg = pick(c, "background", "surface", "canvas") ?? "#FFFFFF"
  const text = pick(c, "text", "on-background", "foreground", "text-primary") ?? onColor(bg)
  const primary = pick(c, "primary", "accent", "brand") ?? text
  const t = f.typography
  const fam = (k: string) => t[k]?.fontFamily
  const display = fam("display") ?? fam("h1") ?? fam("heading") ?? Object.values(t).find((x) => x?.fontFamily)?.fontFamily ?? "inherit"
  const radius = pick(f.rounded, "md", "default", "sm", "lg") ?? "8px"
  return {
    bg, text, primary,
    muted: pick(c, "text-muted", "text-secondary", "muted") ?? text,
    onPrimary: pick(c, "on-primary") ?? onColor(primary),
    surface: pick(c, "surface", "surface-alt", "card") ?? bg,
    border: pick(c, "border", "border-subtle", "outline") ?? pick(c, "text-muted") ?? text,
    accent: pick(c, "accent", "secondary", "tertiary") ?? primary,
    display: fontStack(String(display)),
    body: fontStack(String(fam("body") ?? fam("body-md") ?? display)),
    radius: /^\d+$/.test(radius) ? `${radius}px` : radius,
    radiusLg: pick(f.rounded, "lg", "xl", "md") ?? radius,
    radiusBtn: pick(f.rounded, "button") ?? radius,
  }
}

export const agentPrompt = (f: Pick<DesignFile, "name">) =>
  `Read DESIGN.md (the ${f.name} design system) and build a landing page that follows its tokens, typography and component rules exactly.`
