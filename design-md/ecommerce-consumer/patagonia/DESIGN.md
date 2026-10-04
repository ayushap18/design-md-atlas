---
version: alpha
name: Patagonia
description: Rugged outdoor-activist retail — expansive landscape photography, black and off-white chrome, condensed headline type and earnest storytelling.
source: https://www.patagonia.com
colors:
  primary: "#000000"
  on-primary: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#F4F1EC"
  surface-dark: "#1A1A1A"
  text: "#000000"
  text-muted: "#5C5C5C"
  border: "#D9D9D9"
  accent: "#E7552A"
  activism: "#1B3A2E"
  link: "#000000"
  sale: "#B5231B"
typography:
  display:
    fontFamily: "Avenir Next Condensed, Barlow Condensed, Oswald, sans-serif"
    fontSize: 4.5rem
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: -0.01em
    textTransform: uppercase
  h1: { fontFamily: "Avenir Next, Nunito Sans, Helvetica, Arial, sans-serif", fontSize: 2.5rem, fontWeight: 700, lineHeight: 1.1 }
  h2: { fontFamily: "Avenir Next, Nunito Sans", fontSize: 1.75rem, fontWeight: 600, lineHeight: 1.2 }
  body: { fontFamily: "Avenir Next, Nunito Sans, Helvetica, Arial", fontSize: 1rem, fontWeight: 400, lineHeight: 1.6 }
  serif: { fontFamily: "Tiempos Text, Source Serif 4, Georgia, serif", fontSize: 1.125rem, fontWeight: 400, lineHeight: 1.65 }
  mono: { fontFamily: ui-monospace, fontSize: 0.875rem }
rounded:
  none: 0px
  sm: 2px
  md: 4px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 40px
  xl: 80px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    padding: 14px 32px
  button-ghost-on-image:
    backgroundColor: transparent
    textColor: "#FFFFFF"
    border: 2px solid #FFFFFF
    rounded: "{rounded.sm}"
---

# Patagonia — DESIGN.md

> Inspired by the public website of Patagonia. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Patagonia's site feels like a field journal from a company with a mission. Full-bleed landscape and athlete photography — granite walls, cold surf, wind-swept ridgelines — fills the screen, overlaid with tight condensed uppercase headlines in white. Around the imagery, the UI is plain black and white with Avenir Next, square-ish buttons and very little decoration. Editorial and activism content (Worn Wear, environmental campaigns) sits alongside product, often on warm off-white paper tones.

Adjectives: **rugged, earnest, outdoorsy, unpretentious, mission-driven.**

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #000000 | Buttons, text, icons |
| background | #FFFFFF | Commerce pages |
| surface | #F4F1EC | Warm paper tone for stories, Worn Wear, footer bands |
| surface-dark | #1A1A1A | Footer, dark story bands |
| text | #000000 | Primary text |
| text-muted | #5C5C5C | Captions, product color names |
| border | #D9D9D9 | Dividers, swatch outlines |
| accent | #E7552A | Warm sunset orange for occasional highlights (from the logo's sky) |
| activism | #1B3A2E | Deep forest green for campaign modules |
| sale | #B5231B | Sale prices |

Black and white with natural photography do almost all the work. The logo's sunset palette (purple, red, orange, blue) stays in the logo.

## Typography
- **Families:** Avenir Next (UI/body) with a condensed bold variant for display. Free fallbacks: **Nunito Sans** / **Mulish** for Avenir Next; **Barlow Condensed** or **Oswald** for condensed display. Editorial long-form uses a book serif (fallback **Source Serif 4**).
- **Display:** 56–96px, uppercase, condensed bold, line-height ~0.95, white over imagery.
- **Scale:** 40px page title / 28px section / 20px card title / 16px body / 13px meta and caption.
- Eyebrows: 12–13px, 600, uppercase, +0.08em tracking ("WORN WEAR", "ACTIVISM").
- Product names are sentence/title case 16px/600, e.g. "Men's Better Sweater® Fleece Jacket".

## Layout
- Full-bleed heroes (90vh) with headline and CTA bottom-left.
- Content max width 1440px with 40px gutters; editorial text column ~720px.
- PLP: 4 columns desktop, 2 mobile, 16px gaps; minimal filter bar.
- Story modules: 50/50 image + text, text block on #F4F1EC with 64px padding.
- Section spacing 80px; footer is dark and spacious with mission statements.

## Elevation & Depth
- No shadows; flat panels and photography.
- Text over image relies on a bottom gradient scrim `linear-gradient(to top, rgba(0,0,0,0.55), transparent 60%)`.
- Header is white with a 1px #D9D9D9 bottom border once scrolled; transparent with white logo over heroes.

## Shapes
- Buttons: 2–4px radius, near-square. Swatches: circles 24px with 1px border; selected gets a 2px black ring with 2px gap.
- Images: 0 radius, full-bleed or edge-to-edge in grids.
- Icons: simple 1.5px line icons, 20–24px.
- Imagery: documentary-style, natural light, people small in big landscapes; avoid studio glam.

## Components
- **Primary button:** #000 fill, white 14px/600 uppercase with +0.05em tracking, 14px 32px padding, 2px radius. Hover: #333.
- **Ghost on image:** transparent, 2px white border, white text; hover white fill with black text.
- **Text link CTA:** 14px/600 uppercase with 1px underline offset 4px ("SHOP NOW", "READ THE STORY").
- **Product card:** image on light grey #F6F6F6, color swatches row, name 16px/600, price 16px/400; sale price #B5231B with struck-through original.
- **Nav:** 64px; logo left, category links 14px/600 (Shop, Activism, Sports, Stories), search, account, cart icons right; mega-menu with columns and featured image.
- **Story card:** 4:5 image, eyebrow uppercase, 22px/600 title, 2-line excerpt in serif.
- **Badge:** small black rectangle, white 11px/700 uppercase ("NEW", "FAIR TRADE").

## Do's and Don'ts
**Do**
- Lead with immersive, real outdoor photography.
- Use condensed uppercase white headlines on images, short and punchy.
- Keep buttons near-square and black/white.
- Pair commerce with storytelling modules on warm #F4F1EC.

**Don't**
- Don't use pill buttons, gradients, or glossy effects.
- Don't use bright saturated UI colors.
- Don't overload pages with promos or countdown banners.
- Don't use studio-perfect lifestyle imagery that feels staged.

## Agent Prompt Guide
**Base prompt:**
"Create a Patagonia-inspired outdoor brand page: full-bleed landscape photo hero with bottom gradient scrim, white uppercase condensed headline (Barlow Condensed 700, 80px, line-height 0.95), black near-square buttons (2px radius, uppercase 14px/600), Nunito Sans body, white and warm #F4F1EC sections, no shadows, documentary photography."

**Example component prompts:**
1. "Story module: 50/50 split, image left, right side #F4F1EC with eyebrow 'ACTIVISM', 32px/600 headline, serif excerpt, and underlined 'READ THE STORY' link."
2. "Product card: image on #F6F6F6, four 24px circle swatches, 'Better Sweater Fleece Jacket' 16px/600, '$159'."
3. "Hero: 90vh photo of a climber, bottom-left 'BUILT TO LAST' 96px white condensed uppercase, and a white-outline button 'Shop Fleece'."
