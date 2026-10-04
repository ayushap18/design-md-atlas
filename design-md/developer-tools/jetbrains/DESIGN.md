---
version: alpha
name: JetBrains
description: Black canvas with electric multi-product gradients — each IDE owns a neon color pair, set against bold JetBrains Sans headlines and clean dark UI.
source: https://www.jetbrains.com
colors:
  primary: "#FFFFFF"
  on-primary: "#000000"
  background: "#000000"
  surface: "#19191C"
  surface-alt: "#27282C"
  text: "#FFFFFF"
  text-secondary: "rgba(255,255,255,0.80)"
  text-muted: "rgba(255,255,255,0.60)"
  border: "rgba(255,255,255,0.20)"
  brand-magenta: "#FF318C"
  brand-purple: "#7256FF"
  brand-blue: "#007DFE"
  brand-cyan: "#00C4F4"
  brand-green: "#00D886"
  brand-yellow: "#F0EB18"
  brand-orange: "#FC801D"
  brand-red: "#FE2857"
  light-background: "#FFFFFF"
  light-surface: "#F4F4F4"
  light-text: "#19191C"
typography:
  display:
    fontFamily: JetBrains Sans, Inter, Helvetica Neue, sans-serif
    fontSize: 4.5rem
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: -0.02em
  h1: { fontFamily: JetBrains Sans, Inter, sans-serif, fontSize: 3.25rem, fontWeight: 600, lineHeight: 1.1, letterSpacing: -0.015em }
  h2: { fontFamily: JetBrains Sans, Inter, sans-serif, fontSize: 2.25rem, fontWeight: 600, lineHeight: 1.15 }
  h3: { fontFamily: JetBrains Sans, Inter, sans-serif, fontSize: 1.25rem, fontWeight: 600, lineHeight: 1.3 }
  body: { fontFamily: JetBrains Sans, Inter, sans-serif, fontSize: 1rem, fontWeight: 400, lineHeight: 1.5 }
  small: { fontFamily: JetBrains Sans, Inter, sans-serif, fontSize: 0.8125rem, fontWeight: 400, lineHeight: 1.45 }
  mono: { fontFamily: JetBrains Mono, ui-monospace, monospace, fontSize: 0.875rem }
rounded:
  sm: 4px
  md: 6px
  lg: 12px
  xl: 24px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  section: 96px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 12px 24px
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.text}"
    border: 1px solid {colors.border}
    rounded: "{rounded.md}"
    padding: 12px 24px
  product-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: 24px
---

# JetBrains — DESIGN.md

> Inspired by the public website of JetBrains. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
JetBrains runs a family of IDEs, and its brand is a family of gradients. On a black canvas, each product (IntelliJ IDEA, PyCharm, WebStorm, GoLand, Rider, Kotlin…) gets its own luminous two- or three-color blend — magenta-to-orange, green-to-yellow, cyan-to-purple — appearing in square logos, hero art and abstract generative patterns. Typography is bold and modern in JetBrains Sans, and the UI around the color is clean and direct.

Adjectives: **energetic, professional, multi-product, bold, technical.**

## Colors
| Token | Hex | Role |
|---|---|---|
| background | `#000000` | Canvas on product/marketing pages |
| surface | `#19191C` | Cards, sections |
| surface-alt | `#27282C` | Hover, inputs |
| text | `#FFFFFF` | Primary text |
| text-secondary | `rgba(255,255,255,0.8)` | Body |
| text-muted | `rgba(255,255,255,0.6)` | Meta |
| border | `rgba(255,255,255,0.2)` | Outlines |
| brand-magenta | `#FF318C` | Gradient stop (IDEA, Rider) |
| brand-purple | `#7256FF` | Gradient stop (Kotlin, Fleet) |
| brand-blue / brand-cyan | `#007DFE` / `#00C4F4` | Gradient stops (GoLand, WebStorm) |
| brand-green / brand-yellow | `#00D886` / `#F0EB18` | Gradient stops (PyCharm) |
| brand-orange / brand-red | `#FC801D` / `#FE2857` | Gradient stops (IDEA, Rider) |
| light-background / light-text | `#FFFFFF` / `#19191C` | Light pages (docs, store) |

UI is black/white; gradients are the color. Each product page uses only its own pair.

## Typography
- **JetBrains Sans** (custom, derived from Inter) for everything. Fallback: Inter.
- **JetBrains Mono** (free, OFL) for code.

Scale: 72 / 52 / 36 / 20 / 16 / 13px. Headings 600 with slight negative tracking. Body 16px. Product names set bold. Sentence case; some headings mix in a gradient-filled word.

## Layout
- 1276px max width, 12-col grid, 22–32px gutters.
- Hero: big headline + subhead + "Download" white button, product gradient art filling the right half or background.
- Product grid: 4-column cards with the square product logo, name, and one-line description.
- Section spacing 96px; dark sections throughout, light sections for store/docs.

## Elevation & Depth
Flat dark surfaces; depth from luminous gradients and generative art. Cards: `#19191C`, no shadow, hover lifts to `#27282C`. Light pages: `0 2px 8px rgba(0,0,0,0.08)` on cards.

## Shapes
- Buttons 6px, cards 12px, large art panels 24px.
- Product logos: squares with a black inner square and the product's 2-letter monogram (e.g. "IJ", "PC") over a gradient field.
- Icons: 20px line icons.
- Imagery: generative abstract art (flowing lines, particles) in product gradients; IDE screenshots in dark theme.

## Components
- **Primary button**: white fill, black 16px/600 text, 6px radius, 48px tall; hover `rgba(255,255,255,0.8)`.
- **Secondary button**: transparent, 1px `rgba(255,255,255,0.2)`, white text; hover `rgba(255,255,255,0.1)` fill.
- **Product-colored button**: a gradient fill (e.g. `linear-gradient(90deg, #00D886, #F0EB18)`) with black text — only on that product's page.
- **Nav**: 64px, black, logo left, 15px links (AI, Developer Tools, Team Tools, Education, Solutions, Support, Store), search and account icons right; mega-menu panels `#19191C`.
- **Product card**: `#19191C`, 12px radius, 24px padding, 48px product logo, 20px/600 name, 14px muted description; hover `#27282C`.
- **Pricing card**: light `#FFFFFF` with 1px `#E0E0E0`, 12px radius, price 40px/600, "Buy" black button.
- **Tag**: 4px radius, 12px text, `rgba(255,255,255,0.1)` fill.
- **Input**: 40px, `#27282C`, 6px radius, focus 2px product color.

## Do's and Don'ts
**Do**
- Use a black canvas with luminous product gradients.
- Keep each page to one product's gradient pair.
- Use white primary buttons on dark.
- Show IDE screenshots in dark themes.

**Don't**
- Don't mix all product gradients in one component (except the logo wall).
- Don't use gradients on body text.
- Don't use pastel or desaturated versions of the brand colors.
- Don't use pill buttons.

## Agent Prompt Guide
**Base prompt:**
"Design like JetBrains: black `#000000` canvas, `#19191C` cards, white text, Inter 600 headlines (as JetBrains Sans), JetBrains Mono for code. Neon product gradients such as `#FF318C → #FC801D` or `#00D886 → #F0EB18` for logos and hero art. White 6px-radius primary button, outlined secondary, 12px cards, generative abstract art."

**Examples:**
- "PyCharm-style hero: 72px headline, white Download button, green-to-yellow generative line art on the right."
- "Product grid: 4 columns of dark cards with gradient square logos and short descriptions."
- "Pricing on white: three cards with 1px borders, black 'Buy' buttons, monthly/yearly toggle."
