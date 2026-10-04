import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SectionHeading } from "./section-heading"

const FAQ = [
  ["What is a DESIGN.md file?", "A plain markdown file describing a visual identity for coding agents. It's a format introduced by Google Stitch: YAML tokens (colors, typography, radii, spacing, components) at the top, then human-readable sections such as Overview, Colors and Do's and Don'ts."],
  ["How do I use one?", "Download a file, save it as DESIGN.md in your project root, and ask your agent to follow it. For example: “Read DESIGN.md and build a settings page that follows it exactly.” Every file ends with an Agent Prompt Guide of paste-ready prompts."],
  ["Are these official brand guidelines?", "No. Brand files are inspired by each company's public website. Values are researched approximations for building UI in a similar spirit. The public design-system files (Carbon, Primer, Polaris, Material 3, GOV.UK…) reference those systems' openly published tokens."],
  ["Which agents support DESIGN.md?", "Any agent that reads markdown from your repo: Claude Code, Cursor, Codex, Gemini CLI, Copilot, Windsurf and Google Stitch, which reads the format natively."],
  ["Can I contribute a system?", "Yes. Copy TEMPLATE.md to design-md/<category>/<slug>/DESIGN.md, run the build script to validate it and regenerate the catalog, then open a pull request. CI runs the same checks."],
]

export function Faq() {
  return (
    <section id="faq" className="container-page grid gap-10 pt-28 lg:grid-cols-[0.8fr_1.2fr]">
      <SectionHeading eyebrow="04 · FAQ" title={<>Questions, <span className="font-serif font-normal italic">answered</span></>} />
      <Accordion type="single" collapsible defaultValue="0" className="rounded-2xl border bg-card px-5">
        {FAQ.map(([q, a], i) => (
          <AccordionItem key={q} value={String(i)}>
            <AccordionTrigger className="text-base">{q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
