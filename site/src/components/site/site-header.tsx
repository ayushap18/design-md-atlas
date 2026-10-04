import { MenuIcon, StarIcon } from "lucide-react"
import Link from "next/link"
import { SearchTrigger } from "@/components/site/command-menu"
import { GitHubIcon, Logo } from "@/components/site/logo"
import { ThemeToggle } from "@/components/site/theme-toggle"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { GITHUB_URL } from "@/lib/atlas"

const NAV = [
  { href: "/#catalog", label: "Catalog" },
  { href: "/#how", label: "How it works" },
  { href: "/#repos", label: "Ecosystem" },
  { href: "/#faq", label: "FAQ" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/75 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container-page flex h-14 items-center gap-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu"><MenuIcon /></Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72">
            <SheetHeader><SheetTitle className="flex items-center gap-2"><Logo />DESIGN.md Atlas</SheetTitle></SheetHeader>
            <nav className="grid gap-1 px-4">
              {NAV.map((n) => (
                <Link key={n.href} href={n.href} className="rounded-md px-3 py-2 text-sm hover:bg-accent">{n.label}</Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <Logo />
          <span className="whitespace-nowrap">DESIGN.md <span className="font-serif text-lg font-normal italic">Atlas</span></span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <Button key={n.href} variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-foreground">
              <Link href={n.href}>{n.label}</Link>
            </Button>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-1.5">
          <SearchTrigger className="w-auto sm:w-56 lg:w-64" />
          <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex">
            <a href={GITHUB_URL} target="_blank" rel="noopener"><GitHubIcon className="size-4" /><StarIcon className="size-3.5" />Star</a>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
