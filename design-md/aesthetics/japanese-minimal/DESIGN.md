---
version: alpha
name: Japanese Minimal
description: Quiet, paper-like interfaces built on ma (purposeful emptiness) — washi off-whites, sumi ink, a single vermilion seal accent, fine lines, and calm asymmetric balance.
source: https://en.wikipedia.org/wiki/Ma_(negative_space)
colors:
  primary: "#2B2B2B"
  on-primary: "#F7F4EE"
  background: "#F7F4EE"
  surface: "#EFEBE3"
  text: "#2B2B2B"
  text-muted: "#77716A"
  border: "#D9D3C8"
  accent: "#C8402F"
  indigo: "#2E3A59"
  matcha: "#7B8D5E"
typography:
  display:
    fontFamily: Shippori Mincho
    fontSize: 3.5rem
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0.04em
  h1: { fontFamily: Shippori Mincho, fontSize: 2.5rem, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0.04em }
  h2: { fontFamily: Shippori Mincho, fontSize: 1.75rem, fontWeight: 500, lineHeight: 1.45, letterSpacing: 0.04em }
  h3: { fontFamily: Zen Kaku Gothic New, fontSize: 1.125rem, fontWeight: 500, lineHeight: 1.6 }
  body: { fontFamily: Zen Kaku Gothic New, fontSize: 1rem, fontWeight: 400, lineHeight: 1.9, letterSpacing: 0.03em }
  caption: { fontFamily: Zen Kaku Gothic New, fontSize: 0.75rem, fontWeight: 400, lineHeight: 1.6, letterSpacing: 0.12em }
  latin-serif: { fontFamily: Cormorant Garamond, fontSize: 1rem, fontWeight: 400 }
rounded:
  sm: 0px
  md: 2px
  lg: 4px
  full: 9999px
spacing:
  xs: 8px
  sm: 16px
  md: 32px
  lg: 64px
  xl: 128px
  section: 192px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    padding: 14px 36px
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    border: "1px solid {colors.text}"
    rounded: "{rounded.sm}"
    padding: 14px 36px
  hanko:
    backgroundColor: "{colors.accent}"
    textColor: "#F7F4EE"
    rounded: "{rounded.md}"
    size: 40px
---

# Japanese Minimal — DESIGN.md

> A style archetype, not tied to any brand.

## Overview
Japanese minimalism is not emptiness for its own sake; it is *ma* — space that gives what remains its meaning. Interfaces in this mode feel like handmade paper and ink: warm off-whites, soft charcoal text, a few hairlines, generous margins, and one red seal mark. Influences include wabi-sabi (beauty in imperfection), traditional book layout, and contemporary Japanese product brands. Suits craft goods, ryokan/hospitality, tea and ceramics, architecture studios, and reflective editorial.

Hold onto: **quiet, spacious, natural, precise, contemplative**.

## Colors
| Token | Hex | Role |
|---|---|---|
| background | `#F7F4EE` | Washi paper |
| surface | `#EFEBE3` | Slightly deeper paper for panels |
| text / primary | `#2B2B2B` | Sumi ink (soft charcoal, not black) |
| text-muted | `#77716A` | Secondary text, captions |
| border | `#D9D3C8` | Hairlines |
| accent | `#C8402F` | Shu vermilion: seal mark, one highlight per page |
| indigo | `#2E3A59` | Ai (indigo): optional secondary for links or a single band |
| matcha | `#7B8D5E` | Natural green, product/category tag only |

Paper and ink are ~97% of the page. Vermilion appears once — a hanko seal, a small dot, an active indicator.

## Typography
- **Display (mincho/serif):** Shippori Mincho (free). Alternatives: *Noto Serif JP*, *Zen Old Mincho*.
- **Body (gothic/sans):** Zen Kaku Gothic New (free). Alternatives: *Noto Sans JP*, *M PLUS 1p*.
- **Latin accent:** Cormorant Garamond for English subtitles alongside Japanese text.
- Generous line height (1.9 for body), slight positive tracking (+0.03 to +0.04em) — the opposite of tight Western display.
- Optional vertical writing for decorative titles: `writing-mode: vertical-rl`.
- Captions small, widely tracked (+0.12em); section numbers in kanji or roman numerals (一, 二, 三).

## Layout
- Max width 1080px; very large margins (10–15% of viewport on desktop).
- Asymmetric balance: text block offset to one side, image to the other, lots of untouched paper.
- Section spacing 160–200px; content density low — one paragraph or image per screen moment.
- Align to a quiet grid; occasional vertical title running beside the content.
- Mobile: keep the slow rhythm; margins 24px, spacing 96px.

## Elevation & Depth
- Flat. No shadows or blur.
- Separate with hairlines (`1px solid #D9D3C8`), tone shifts (`#F7F4EE` → `#EFEBE3`), and space.
- Optional paper texture: subtle fiber noise at 2–4% opacity.
- Motion: slow fades (800ms), no bounce.

## Shapes
- 0–2px radii; the only circle is the vermilion dot or a ceramic photo.
- Icons: 1px stroke, minimal, or replaced by words.
- Imagery: natural light, muted tones, materials (wood, clay, linen, stone), lots of negative space inside the photo; occasional sumi-e brush strokes as graphics.

## Components
- **Primary button:** ink fill, paper text, 0 radius, 14px 36px, 14px/500 with +0.1em tracking. Hover: indigo `#2E3A59`.
- **Ghost button:** 1px ink border; hover fills ink.
- **Text link:** ink, 1px underline offset 6px; hover vermilion.
- **Nav:** minimal — small wordmark left, 3–5 links in 13px tracked gothic right; no background, no border; on mobile a single "Menu" text button.
- **Hanko seal:** 40px vermilion square (2px radius) with 1–2 paper-colored kanji, placed near the logo or signature.
- **Product card:** image on `#EFEBE3`, no border, name in mincho 18px, price in tracked gothic 13px muted, generous 48px gap.
- **Section header:** kanji numeral + vertical hairline + title in mincho.
- **Input:** transparent, 1px bottom hairline `#D9D3C8`, 48px; focus line ink. Label 12px tracked above.

## Do's and Don'ts
**Do**
- Let empty space dominate; remove before adding.
- Use soft charcoal ink and warm paper, never pure black/white.
- Use vermilion exactly once per view.
- Give type generous leading and slight tracking.

**Don't**
- Don't use shadows, gradients, or bright colors.
- Don't crowd content or use dense grids.
- Don't use bold heavy weights for headlines.
- Don't use cliché motifs (cherry blossoms, torii icons) as decoration.

## Agent Prompt Guide
**Base prompt:**
"Use a Japanese minimal style built on ma: washi paper #F7F4EE background, sumi ink #2B2B2B text, hairlines #D9D3C8, a single vermilion #C8402F accent (seal or dot). Shippori Mincho headings with +0.04em tracking, Zen Kaku Gothic New body at 1.9 line height, Cormorant Garamond for Latin subtitles. Asymmetric layouts, huge margins, 192px section spacing, 0px radius, no shadows, natural-light material photography, slow fades."

**Examples:**
- "Ceramics shop hero: one bowl photo offset right on #EFEBE3, vertical mincho title at left, small tracked caption, vermilion hanko by the wordmark."
- "Ryokan booking page: kanji-numbered sections, underline-only inputs, ink 'Reserve' button, ample whitespace between each room."
- "About page: single centered column, mincho headline, gothic body with generous leading, one brush-stroke divider."
