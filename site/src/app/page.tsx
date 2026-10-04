import { BrandMarquee } from "@/components/home/brand-marquee"
import { Catalog } from "@/components/home/catalog"
import { Cta } from "@/components/home/cta"
import { Faq } from "@/components/home/faq"
import { Hero } from "@/components/home/hero"
import { How } from "@/components/home/how"
import { Repos } from "@/components/home/repos"
import { SectionHeading } from "@/components/home/section-heading"
import { Stats } from "@/components/home/stats"
import { categories, repoGroups, repos, summaries } from "@/lib/atlas"

export default function Home() {
  return (
    <>
      <Hero />
      <BrandMarquee items={summaries} />
      <Stats />
      <section id="catalog" className="container-page pt-12">
        <SectionHeading eyebrow="01 · Catalog" title={<>Pick a <span className="font-serif font-normal italic">system</span></>}>
          Every card is a complete DESIGN.md file. Open one to preview its tokens live, copy it, or grab a curl command.
        </SectionHeading>
        <Catalog items={summaries} categories={categories} />
      </section>
      <How />
      <Repos repos={repos} groups={repoGroups} />
      <Faq />
      <Cta />
    </>
  )
}
