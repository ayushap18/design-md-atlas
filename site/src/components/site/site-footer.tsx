import Link from "next/link"
import { GitHubIcon, Logo } from "@/components/site/logo"
import { Separator } from "@/components/ui/separator"
import { GITHUB_URL, categories } from "@/lib/atlas"

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t">
      <div className="h-px w-full bg-[linear-gradient(90deg,#FF6B4A,#FFC84A,#4AD6A8,#8B7CFF)]" />
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-3">
          <Link href="/" className="flex items-center gap-2.5 font-semibold"><Logo />DESIGN.md Atlas</Link>
          <p className="max-w-sm text-sm text-muted-foreground">
            An open catalog of DESIGN.md files for AI coding agents. Brand files are inspired by public websites. They are not official documents, and trademarks belong to their owners.
          </p>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-medium">Categories</h3>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-muted-foreground">
            {Object.entries(categories).map(([k, c]) => (
              <li key={k}><Link href={`/?category=${k}#catalog`} className="hover:text-foreground">{c.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-medium">Resources</h3>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li><a className="hover:text-foreground" href="https://github.com/google-labs-code/design.md" target="_blank" rel="noopener">DESIGN.md spec</a></li>
            <li><a className="hover:text-foreground" href={`${GITHUB_URL}/blob/main/TEMPLATE.md`} target="_blank" rel="noopener">Template</a></li>
            <li><a className="hover:text-foreground" href={`${GITHUB_URL}/blob/main/REPOS.md`} target="_blank" rel="noopener">REPOS.md</a></li>
            <li><a className="hover:text-foreground" href={`${GITHUB_URL}#-contributing`} target="_blank" rel="noopener">Contribute</a></li>
          </ul>
        </div>
      </div>
      <Separator />
      <div className="container-page flex flex-wrap items-center justify-between gap-3 py-6 text-xs text-muted-foreground">
        <span>MIT licensed · Built with Next.js, shadcn/ui and Magic UI</span>
        <a href={GITHUB_URL} className="flex items-center gap-1.5 hover:text-foreground" target="_blank" rel="noopener"><GitHubIcon className="size-3.5" />ayushap18/design-md-atlas</a>
      </div>
    </footer>
  )
}
