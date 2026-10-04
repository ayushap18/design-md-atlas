---
version: alpha
name: Cursor
description: Warm, crafted editor brand — parchment off-whites and espresso near-black, a custom grotesk with an editorial serif, and IDE screenshots framed like objects.
source: https://cursor.com
colors:
  primary: "#14120B"
  on-primary: "#F7F7F4"
  background: "#F7F7F4"
  surface: "#EDECEC"
  surface-alt: "#E1DFDB"
  text: "#14120B"
  text-secondary: "#47433C"
  text-muted: "#8B867D"
  border: "#D9D5CF"
  accent: "#C08532"
  accent-alt: "#F54E00"
  dark-background: "#14120B"
  dark-surface: "#1C1C1E"
  dark-surface-alt: "#2C2C2E"
  dark-text: "#EDECEC"
  dark-border: "#3C3935"
typography:
  display:
    fontFamily: CursorGothic, Inter Tight, Inter, sans-serif
    fontSize: 4rem
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -0.025em
  h1: { fontFamily: "CursorGothic, Inter Tight, sans-serif", fontSize: 2.75rem, fontWeight: 400, lineHeight: 1.1, letterSpacing: -0.02em }
  h2: { fontFamily: "CursorGothic, Inter Tight, sans-serif", fontSize: 2rem, fontWeight: 400, lineHeight: 1.15, letterSpacing: -0.015em }
  h3: { fontFamily: "CursorGothic, Inter, sans-serif", fontSize: 1.25rem, fontWeight: 500, lineHeight: 1.3 }
  serif: { fontFamily: "Iowan Old Style, Palatino Linotype, EB Garamond, Georgia, serif", fontSize: 1.375rem, fontWeight: 400, lineHeight: 1.4 }
  body: { fontFamily: "CursorGothic, Inter, sans-serif", fontSize: 1rem, fontWeight: 400, lineHeight: 1.55 }
  small: { fontFamily: "CursorGothic, Inter, sans-serif", fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.45 }
  mono: { fontFamily: "Berkeley Mono, JetBrains Mono, ui-monospace, monospace", fontSize: 0.8125rem }
rounded:
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  section: 120px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: 10px 18px
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.full}"
    padding: 10px 18px
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: 28px
  editor-frame:
    backgroundColor: "{colors.dark-surface}"
    rounded: "{rounded.lg}"
    border: 1px solid {colors.dark-border}
---

# Cursor — DESIGN.md

> Inspired by the public website of Cursor (cursor.com). Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Cursor's site moved away from generic dark-mode SaaS toward something warmer and more crafted: a parchment off-white background, espresso near-black type, a custom grotesk set at a gentle regular weight, and a classical serif for testimonials and pull quotes. The IDE itself is shown as a framed dark object, often over painterly landscape backgrounds. The effect is "tool made by people who care about craft."

Adjectives: **warm, crafted, calm, literate, capable.**

## Colors
| Token | Hex | Role |
|---|---|---|
| background | `#F7F7F4` | Parchment canvas |
| surface | `#EDECEC` | Cards, secondary buttons |
| surface-alt | `#E1DFDB` | Hover, dividers |
| text / primary | `#14120B` | Espresso ink — text and primary buttons |
| text-secondary | `#47433C` | Body secondary |
| text-muted | `#8B867D` | Meta, captions |
| border | `#D9D5CF` | Hairlines |
| accent | `#C08532` | Warm amber highlight (links, small marks) |
| accent-alt | `#F54E00` | Rare orange spark (badges, "new") |
| dark-background | `#14120B` | Dark sections |
| dark-surface | `#1C1C1E` | Editor frame |
| dark-surface-alt | `#2C2C2E` | Editor panels |
| dark-border | `#3C3935` | Editor borders |

Warm neutrals dominate; accents are sparing. The editor screenshots bring syntax colors.

## Typography
- **CursorGothic** (custom grotesk) for UI and headlines. Free fallback: Inter Tight / Inter, or Geist.
- **Serif** for quotes and editorial accents: Iowan Old Style → EB Garamond / Georgia.
- **Mono** for code: Berkeley Mono → JetBrains Mono.

Scale: 64 / 44 / 32 / 20 / 16 / 14px. Headlines regular weight (400) with modest negative tracking. Testimonials in 22px serif. Sentence case, understated copy.

## Layout
- Max width ~1200px, 24–32px side padding.
- Hero: left-aligned headline + subhead + download button; below, a wide editor frame set on a painted landscape background panel with 16px radius.
- Feature sections: text column (~480px) beside editor/agent screenshots; 120px vertical rhythm.
- Testimonials: grid of serif quotes with small avatar + name in sans.

## Elevation & Depth
Mostly flat, with framed product shots as the "objects." Editor frames: 1px `#3C3935` border, `0 24px 60px rgba(20,18,11,0.18)` shadow, sitting on an image panel. Cards: tonal fill, no shadow.

## Shapes
- Buttons: full pill. Cards: 12px. Image panels: 16px.
- Icons: custom icon font (16px), simple line glyphs.
- Logo: a faceted cube/cursor glyph — monochrome.
- Imagery: painterly/impressionist landscapes as backgrounds for UI shots; no stock photos.

## Components
- **Primary button**: `#14120B` pill, `#F7F7F4` 15px text, 10px × 18px; often "Download for macOS" with an Apple glyph. Hover `#2C2C2E`.
- **Secondary button**: `#EDECEC` pill, ink text; hover `#E1DFDB`.
- **Nav**: 60px, parchment background, logo left, 14px links (Features, Enterprise, Pricing, Blog, Docs), "Sign in" + ink pill "Download" right.
- **Editor frame**: `#1C1C1E`, 12px radius, macOS traffic lights, file tabs 12px, chat/agent side panel `#2C2C2E` with 13px text; diff lines green `#3FB950` / red `#F85149` tinted backgrounds.
- **Feature card**: `#EDECEC`, 12px radius, 28px padding, 20px/500 title, 15px body secondary.
- **Testimonial**: 20–22px serif quote in ink, then 32px circular avatar, name 14px/500, role 14px muted.
- **Pricing card**: parchment with 1px `#D9D5CF`, 12px radius; plan name 20px, price 40px, feature list with small check glyphs.
- **Inputs**: 40px, `#FFFFFF`, 1px border, 8px radius, focus border ink.

## Do's and Don'ts
**Do**
- Use parchment `#F7F7F4` and espresso `#14120B` instead of pure white/black.
- Pair regular-weight grotesk headlines with serif quotes.
- Frame the dark editor as an object on a painted background.
- Keep CTAs as ink pills.

**Don't**
- Don't use neon/purple gradients or glowing dark heroes.
- Don't bold headlines.
- Don't use cold blue-gray neutrals.
- Don't overuse the orange accent.

## Agent Prompt Guide
**Base prompt:**
"Design like Cursor: parchment `#F7F7F4` canvas, espresso ink `#14120B`, warm grays `#EDECEC`/`#D9D5CF`. Inter Tight at weight 400 for headlines, a classic serif (EB Garamond) for quotes, JetBrains Mono for code. Ink pill buttons, 12px-radius cards, a dark editor screenshot framed on a painterly landscape panel."

**Examples:**
- "Hero: left-aligned 64px headline, subhead, ink 'Download for macOS' pill, and a framed dark IDE with an agent chat panel."
- "Testimonial wall: 3-column grid of serif quotes with small avatars and names."
- "Pricing: three parchment cards with 1px warm borders and ink pill CTAs."
