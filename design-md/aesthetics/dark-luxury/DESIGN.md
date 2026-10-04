---
version: alpha
name: Dark Luxury
description: Hushed, high-end dark interface — deep warm blacks, champagne-gold details, refined serif display, wide-tracked small caps, and slow, cinematic pacing.
source: https://www.nngroup.com/articles/dark-mode/
colors:
  primary: "#C9A96E"
  on-primary: "#0B0A08"
  background: "#0B0A08"
  surface: "#14120F"
  surface-raised: "#1C1915"
  text: "#F2EDE4"
  text-muted: "#A39B8E"
  text-subtle: "#6E675C"
  border: "#2A2620"
  border-gold: "rgba(201,169,110,0.35)"
  accent: "#E6CF9F"
  wine: "#5A1E28"
typography:
  display:
    fontFamily: Cormorant Garamond
    fontSize: 5.5rem
    fontWeight: 300
    lineHeight: 1.0
    letterSpacing: -0.01em
  h1: { fontFamily: Cormorant Garamond, fontSize: 3.5rem, fontWeight: 400, lineHeight: 1.05 }
  h2: { fontFamily: Cormorant Garamond, fontSize: 2.25rem, fontWeight: 400, lineHeight: 1.15 }
  h3: { fontFamily: Cormorant Garamond, fontSize: 1.5rem, fontWeight: 500, lineHeight: 1.25 }
  body: { fontFamily: Jost, fontSize: 1rem, fontWeight: 300, lineHeight: 1.75 }
  eyebrow: { fontFamily: Jost, fontSize: 0.75rem, fontWeight: 500, letterSpacing: 0.3em, textTransform: uppercase }
  price: { fontFamily: Jost, fontSize: 1rem, fontWeight: 400, letterSpacing: 0.08em }
rounded:
  sm: 0px
  md: 2px
  lg: 4px
  full: 9999px
spacing:
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 96px
  section: 176px
components:
  button-primary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    border: "1px solid {colors.primary}"
    rounded: "{rounded.sm}"
    padding: 16px 40px
  button-solid:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    padding: 16px 40px
  card:
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.border}"
    rounded: "{rounded.sm}"
    padding: 40px
---

# Dark Luxury — DESIGN.md

> A style archetype, not tied to any brand.

## Overview
Dark Luxury is the visual language of high jewelry, watchmakers, members' clubs, premium hospitality, and fine spirits translated to screens. Warm blacks rather than cold ones, champagne gold used like thin metal inlay, a light-weight high-contrast serif, wide-tracked uppercase eyebrows, and lavish negative space. Motion is slow and deliberate. Every element should look expensive by having less, not more.

Hold onto: **restrained, warm-dark, golden, cinematic, exclusive**.

## Colors
| Token | Hex | Role |
|---|---|---|
| background | `#0B0A08` | Warm near-black canvas |
| surface | `#14120F` | Cards, panels |
| surface-raised | `#1C1915` | Menus, hover states |
| text | `#F2EDE4` | Ivory primary text |
| text-muted | `#A39B8E` | Body copy, descriptions |
| text-subtle | `#6E675C` | Captions, legal |
| border | `#2A2620` | Hairlines |
| border-gold | `rgba(201,169,110,0.35)` | Gold hairlines, frames |
| primary | `#C9A96E` | Champagne gold: CTA outlines, icons, dividers |
| accent | `#E6CF9F` | Light gold for hover and highlights |
| wine | `#5A1E28` | Optional deep accent for a single campaign block |

Black and ivory dominate; gold is jewelry — thin lines, small icons, a single word. Gold fill only on the one most important button.

Gold foil text (sparingly): `linear-gradient(100deg, #A8844A, #E6CF9F 45%, #C9A96E 60%, #8C6B36)` with `background-clip: text`.

## Typography
- **Display:** Cormorant Garamond 300–500 (free). Alternatives: *Bodoni Moda*, *Playfair Display* 400, *Italiana* for logos.
- **Body/UI:** Jost 300–500 (free, Futura-like). Alternatives: *Montserrat* 300, *Josefin Sans*.
- Display large and light; italic for emotional words.
- Eyebrows: 12px uppercase, +0.3em tracking, gold.
- Body 16px light, 1.75 line height, muted ivory; short paragraphs.
- Prices and specs in uppercase tracked Jost, never bold.

## Layout
- Max width 1280px; content often narrower (560–720px) and centered.
- Huge section spacing (160–200px); first viewport is one image and one line of type.
- Alternating full-bleed imagery and centered text moments.
- Product grids sparse: 2–3 per row with 48px+ gaps.
- Symmetry is welcome — centered compositions feel ceremonial.

## Elevation & Depth
- No drop shadows. Depth via photographic lighting and tonal steps (`#0B0A08` → `#14120F` → `#1C1915`).
- Gold hairline frames (`1px solid rgba(201,169,110,0.35)`) inset 12px inside image containers.
- Vignettes on hero imagery: `radial-gradient(ellipse at center, transparent 50%, rgba(11,10,8,0.7))`.
- Slow fades (600–900ms, `cubic-bezier(0.22,1,0.36,1)`) and gentle parallax.

## Shapes
- 0–2px radii. Thin 1px lines. Circles only for small monogram marks.
- Icons: 1px stroke, gold, minimal (arrow, plus, bag, search).
- Imagery: low-key photography — product lit against black, rich shadows, warm highlights, film grain.

## Components
- **Primary button (outline):** transparent, 1px gold border, gold 12px uppercase +0.25em text, 16px 40px, 0 radius. Hover: gold fill, black text, 400ms.
- **Solid button:** gold fill, black text — one per page (e.g. "Reserve").
- **Text link:** ivory, 1px gold underline offset 6px, grows from left on hover.
- **Nav:** transparent over hero, centered serif wordmark, uppercase tracked links split left/right, icons right; on scroll background `rgba(11,10,8,0.85)` with blur 8px and a gold hairline bottom.
- **Product card:** image 4:5 on `#14120F`, name in Cormorant 22px, price in tracked Jost 14px muted, "Discover" link appears on hover.
- **Divider:** 1px gold line 64px wide centered, or ornament ◆ between hairlines.
- **Input:** transparent, 1px bottom border `#2A2620`, ivory text, uppercase tracked label above; focus border gold.
- **Modal/drawer:** `#14120F`, 1px gold-tinted border, ivory serif heading.

## Do's and Don'ts
**Do**
- Use warm blacks (`#0B0A08`), never pure `#000` with blue undertone.
- Treat gold as inlay — thin lines, small type, icons.
- Give each section one image and one idea, with vast space.
- Animate slowly and subtly.

**Don't**
- Don't use bright saturated colors or neon.
- Don't use rounded, bubbly components or pills.
- Don't bold the serif display.
- Don't crowd product grids or show discount badges.

## Agent Prompt Guide
**Base prompt:**
"Use a dark luxury style: warm near-black #0B0A08 background, #14120F panels, ivory #F2EDE4 text, champagne gold #C9A96E for hairlines, icons and outline buttons. Cormorant Garamond light display type, Jost 300 body at 1.75 line height, 12px uppercase eyebrows tracked +0.3em in gold. 0px radius, no shadows, 1px gold-tinted frames, huge 176px section spacing, cinematic low-key photography, slow fades."

**Examples:**
- "Hero: full-bleed low-key photo of a watch, vignette, centered gold eyebrow 'MAISON — EST. 1898', 88px Cormorant headline, outlined gold 'Discover' button."
- "Collection grid: three 4:5 product images on #14120F, serif names, tracked prices, generous 48px gaps."
- "Reservation form: underline-only inputs, uppercase gold labels, single solid gold 'Reserve' button."
