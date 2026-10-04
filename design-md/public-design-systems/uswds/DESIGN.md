---
version: alpha
name: U.S. Web Design System
description: Civic, accessible federal-website toolkit with a deep government blue, Source Sans and Merriweather type, and a tokenized 8px unit system.
source: https://designsystem.digital.gov
colors:
  primary: "#005EA2"
  primary-dark: "#1A4480"
  primary-darker: "#162E51"
  primary-vivid: "#0050D8"
  on-primary: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#F0F0F0"
  surface-lighter: "#DFE1E2"
  text: "#1B1B1B"
  text-muted: "#565C65"
  border: "#DFE1E2"
  border-strong: "#565C65"
  secondary: "#D83933"
  accent-cool: "#00BDE3"
  accent-warm: "#FA9441"
  error: "#D54309"
  warning: "#FFBE2E"
  success: "#00A91C"
  info: "#00BDE3"
  emergency: "#9C3D10"
  focus: "#2491FF"
  visited: "#54278F"
  accent: "#00BDE3"
typography:
  display:
    fontFamily: Merriweather
    fontSize: 2.44rem
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0
  h1: { fontFamily: Merriweather, fontSize: 2.44rem, fontWeight: 700, lineHeight: 1.2 }
  h2: { fontFamily: Merriweather, fontSize: 1.95rem, fontWeight: 700, lineHeight: 1.2 }
  h3: { fontFamily: Merriweather, fontSize: 1.34rem, fontWeight: 700, lineHeight: 1.2 }
  body: { fontFamily: Source Sans Pro, fontSize: 1.06rem, fontWeight: 400, lineHeight: 1.5 }
  lead: { fontFamily: Merriweather, fontSize: 1.34rem, fontWeight: 400, lineHeight: 1.7 }
  mono: { fontFamily: Roboto Mono, fontSize: 0.95rem }
rounded:
  sm: 2px
  md: 0.25rem
  lg: 0.5rem
  full: 99rem
spacing:
  xs: 0.25rem
  sm: 0.5rem
  md: 1rem
  lg: 2rem
  xl: 4rem
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 0.75rem 1.25rem
    fontWeight: 700
  text-input:
    backgroundColor: "{colors.background}"
    borderColor: "{colors.border-strong}"
    rounded: "{rounded.sm}"
    height: 2.5rem
---

# U.S. Web Design System — DESIGN.md

> Inspired by the public website of U.S. Web Design System. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
USWDS is the shared toolkit behind hundreds of U.S. federal websites. It reads as institutional but modern: a serious government blue, a humanist sans for interface text, a friendly slab-ish serif (Merriweather) for headings, and a red flag-adjacent secondary color used sparingly. Every color, size and space value is a token tied to a grade system that guarantees contrast.

Adjectives: **civic, accessible, trustworthy, modular, measured**.

Sites open with the "official website of the United States government" banner, a header with agency name, and clear content hierarchy. Accessibility (Section 508, WCAG 2.1 AA) is the baseline, not a feature.

## Colors
USWDS colors carry a **grade** (5–90); a difference of 50+ guarantees 4.5:1 contrast ("magic number").

| Theme token | System token | Hex | Role |
|---|---|---|---|
| `primary` | blue-60v | `#005EA2` | Buttons, links, header accents |
| `primary-dark` | blue-warm-70v | `#1A4480` | Hover |
| `primary-darker` | blue-warm-80v | `#162E51` | Active, footer, dark sections |
| `primary-vivid` | blue-warm-60v | `#0050D8` | Emphasis |
| `primary-lighter` | blue-10 | `#D9E8F6` | Tinted backgrounds |
| `secondary` | red-50v | `#D83933` | Secondary buttons, highlights |
| `accent-cool` | cyan-30v | `#00BDE3` | Cool accent buttons, info |
| `accent-warm` | orange-30v | `#FA9441` | Warm accent |
| `base-lightest` | gray-5 | `#F0F0F0` | Section backgrounds, hover |
| `base-lighter` | gray-cool-10 | `#DFE1E2` | Borders, dividers |
| `base` | gray-cool-50 | `#71767A` | Disabled-ish, meta |
| `base-dark` | gray-cool-60 | `#565C65` | Secondary text, input borders |
| `ink` | gray-90 | `#1B1B1B` | Body text |
| `error` | red-warm-50v | `#D54309` | Errors |
| `warning` | gold-20v | `#FFBE2E` | Warnings (dark text) |
| `success` | green-cool-40v | `#00A91C` | Success |
| `info` | cyan-30v | `#00BDE3` | Info |
| `emergency` | red-warm-60v | `#9C3D10` | Emergency banners |
| focus | blue-40v | `#2491FF` | Focus outline |
| visited | violet-70v | `#54278F` | Visited links |

White and ink dominate; primary blue carries interaction; secondary red appears in at most one place per screen.

## Typography
- **Families:** Source Sans Pro / Source Sans 3 (`sans`, UI and body), Merriweather (`serif`, headings and lead), Roboto Mono (`mono`). Public Sans is a common alternative sans. Fallbacks: `Helvetica Neue, Helvetica, Roboto, Arial, sans-serif` and `Georgia, Cambria, Times New Roman, serif`.
- **Size tokens (normalized per family):** 3xs, 2xs, xs, sm, md, lg, xl, 2xl, 3xl. For Source Sans: 13/14/15/16/17/22/32/40/48px. Default body is `sm`/`md` ≈ 1.06rem.
- **Headings:** h1 `xl`/`2xl` serif bold; h2 `xl`; h3 `lg`; h4 `sm` sans bold; h5–h6 uppercase small sans with `ls-1` tracking.
- **Line-height tokens:** 1=1, 2=1.2, 3=1.35, 4=1.5, 5=1.62, 6=1.75. Body uses 5; headings 2.
- **Measure:** text capped at 68ex (`measure-4`) for paragraphs.

## Layout
- Spacing units: 1 unit = 8px. Tokens 05=4px, 1=8px, 105=12px, 2=16px, 205=20px, 3=24px, 4=32px, 5=40px, 6=48px, 7=56px, 8=64px, 9=72px, 10=80px, 15=120px.
- Layout grid: 12 columns, `grid-container` max-width `desktop` = 64rem (1024px) by default, `widescreen` 87.5rem; gutters 2 units (16px) / 4 units (32px) on desktop.
- Breakpoints: mobile-lg 480px, tablet 640px, desktop 1024px, widescreen 1400px.
- Sections (`usa-section`) pad 4 units mobile, 8 units desktop (64px).
- Sidenav + content pattern: 1/4 sidebar, 3/4 main.

## Elevation & Depth
- Mostly flat; borders and background tints separate content.
- Shadow tokens: 1 `0 1px 4px rgba(0,0,0,0.1)`, 2 `0 4px 8px rgba(0,0,0,0.1)`, 3 `0 8px 16px rgba(0,0,0,0.1)`, 4 `0 12px 24px rgba(0,0,0,0.1)`, 5 `0 16px 32px rgba(0,0,0,0.1)`.
- Cards default to a 2px `#DFE1E2` border, no shadow. Modals use shadow 3 over a `rgba(0,0,0,0.7)` overlay.
- Focus: `0.25rem` solid `#2491FF` outline with 0 offset.

## Shapes
- Radius tokens: 0, sm 2px, md 0.25rem (4px), lg 0.5rem (8px), pill 99rem.
- Buttons 4px; inputs 0 (square) in default theme; cards lg 8px; tags 2px.
- Icons: USWDS icon set (Material-derived + custom), filled glyphs, 1em sizing.
- Imagery: real photography of people and places served by the agency; hero images often darkened with an ink overlay.

## Components
- **Banner:** gray-5 strip at very top, 12px text "An official website of the United States government" with flag icon and "Here's how you know" toggle.
- **Button:** `#005EA2` bg, white 1.06rem bold text, padding 0.75rem 1.25rem, 4px radius. Hover `#1A4480`, active `#162E51`. Variants: secondary `#D83933`, accent-cool `#00BDE3` (ink text), base `#71767A`, outline (2px inset blue border, transparent), big (1.46rem, 1rem 1.5rem padding), unstyled (link look).
- **Text input:** 2.5rem tall, 1px `#565C65` border, 0.5rem padding, square; max-width 30rem. Error: 0.25rem `#B50909` left border on the form group, bold red message.
- **Checkbox / radio:** 1.25rem custom boxes, `#005EA2` when checked; tile variant with 2px border and 4px radius.
- **Alert:** 0.5rem left border in status color on a light tint (info `#E7F6F8` with `#00BDE3` bar), icon left.
- **Card:** white, 2px `#DFE1E2` border, 8px radius, header/media/body/footer slots, 1.5rem padding.
- **Header:** basic or extended; logo text in serif bold, primary nav items 1rem bold with 0.25rem blue underline on current.
- **Footer:** `#F0F0F0` primary section, `#DFE1E2` secondary; big footer variant uses `#162E51`.
- **Tag:** uppercase 0.93rem, `#565C65` bg, white text, 2px radius.
- **Step indicator:** segmented bars; complete `#162E51`, current `#005EA2`, upcoming `#DFE1E2`.

## Do's and Don'ts
**Do**
- Pick colors by grade so contrast is guaranteed (50+ difference for text).
- Use Merriweather for headings and Source Sans for everything interactive.
- Include the official government banner on federal-style sites.
- Cap paragraphs at ~68 characters.
- Use the 8px unit tokens rather than arbitrary pixel values.

**Don't**
- Don't use secondary red as a dominant background.
- Don't put white text on `#FFBE2E` or `#00BDE3` — use ink.
- Don't remove the visible `#2491FF` focus outline.
- Don't use heavy shadows on cards; prefer the 2px border.
- Don't imply official U.S. government affiliation in non-government products.

## Agent Prompt Guide
**Base prompt:**
"Design in the style of the U.S. Web Design System. White page, 1024px grid container, 12 columns. Headings in Merriweather bold, body in Source Sans Pro (or Public Sans) at ~17px/1.62, ink `#1B1B1B`. Primary `#005EA2` buttons (hover `#1A4480`), 4px radius, 0.75rem 1.25rem padding, bold. Borders `#DFE1E2`, backgrounds `#F0F0F0`. Focus outline 4px `#2491FF`. 8px spacing units. Accessible, civic, plain language."

**Example components:**
1. "A hero: full-width photo with dark overlay, white callout box (max 30rem) containing a blue 'Apply for benefits' serif heading, two lines of body text and a primary button."
2. "A three-up card group: white cards with 2px `#DFE1E2` borders and 8px radius, serif card heading, body text, outline button 'Learn more' at bottom."
3. "An info alert: `#E7F6F8` background, 8px left bar in `#00BDE3`, info icon, bold 'Deadline extended' heading and one line of body text with an underlined `#005EA2` link."
