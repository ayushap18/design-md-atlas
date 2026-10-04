---
version: alpha
name: Webflow
description: Builder-grade confidence — near-black and white with a saturated Webflow blue, large engineered headlines and dense product UI.
source: https://webflow.com
colors:
  primary: "#146EF5"
  on-primary: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#F7F7F7"
  surface-dark: "#080808"
  text: "#080808"
  text-muted: "#5A5A5A"
  border: "#D8D8D8"
  accent: "#146EF5"
  accent-purple: "#7A3DFF"
  accent-pink: "#ED52CB"
  accent-green: "#00D722"
  accent-orange: "#FF6B00"
  accent-yellow: "#FFAE13"
typography:
  display:
    fontFamily: WF Visual Sans, Inter
    fontSize: 5rem
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: -0.02em
  h1: { fontFamily: "WF Visual Sans, Inter", fontSize: 3.5rem, fontWeight: 600, lineHeight: 1.08, letterSpacing: -0.02em }
  h2: { fontFamily: "WF Visual Sans, Inter", fontSize: 2.5rem, fontWeight: 600, lineHeight: 1.1 }
  body: { fontFamily: "WF Visual Sans, Inter", fontSize: 1.125rem, fontWeight: 400, lineHeight: 1.6 }
  eyebrow: { fontFamily: "WF Visual Sans, Inter", fontSize: 0.875rem, fontWeight: 500, letterSpacing: 0.06em, textTransform: uppercase }
  mono: { fontFamily: "Inconsolata, JetBrains Mono", fontSize: 0.875rem }
rounded:
  sm: 2px
  md: 4px
  lg: 8px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  section: 140px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 16px 24px
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    border: 1px solid {colors.text}
    rounded: "{rounded.md}"
    padding: 16px 24px
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: 32px
---

# Webflow — DESIGN.md

> Inspired by the public website of Webflow. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Webflow presents itself as a professional visual development platform: sharp, engineered and enterprise-ready, with a single vivid blue as its signature. Pages alternate between crisp white sections and near-black #080808 slabs, with product UI shown at large scale. Secondary accents (purple, pink, green, orange) appear as small highlights on product illustrations, not as backgrounds.

Hold onto: **precise, professional, high-contrast, technical, ambitious**. Medium density, more copy than most design-tool sites.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary / accent | #146EF5 | CTAs, links, highlighted words |
| on-primary | #FFFFFF | Text on blue |
| background | #FFFFFF | Light sections |
| surface | #F7F7F7 | Cards on white |
| surface-dark | #080808 | Dark hero/feature slabs |
| text | #080808 | Headlines and body |
| text-muted | #5A5A5A | Supporting copy |
| border | #D8D8D8 | Dividers, card outlines |
| accent-purple | #7A3DFF | Illustration highlight |
| accent-pink | #ED52CB | Illustration highlight |
| accent-green | #00D722 | Status/success, illustration |
| accent-orange | #FF6B00 | Illustration highlight |
| accent-yellow | #FFAE13 | Illustration highlight |

Blue + black + white make up nearly everything. The rainbow accents live inside product mockups and small icons only.

## Typography
- **Primary:** WF Visual Sans (custom). Free fallback: **Inter** (or **Manrope** for a slightly wider feel).
- Headlines semi-bold 600, tracking -0.02em, line-height ~1.05.
- Body 18px/1.6, regular weight, #080808 or #5A5A5A.
- Eyebrows: 14px uppercase, 500 weight, +0.06em tracking, often blue.
- Sentence case for headlines.

## Layout
- 12-column grid, max width 1280px, 32px gutters (20px mobile).
- Section rhythm 120–140px; dark sections run full-bleed.
- Common patterns: left text / right product UI split, 3–4 column feature grids, logo walls of enterprise customers.
- Content is left-aligned more often than centered.

## Elevation & Depth
- Largely flat with hairline borders.
- Product UI mockups carry a soft shadow: `0 24px 48px -12px rgba(8,8,8,0.18)`.
- Dark sections use #1A1A1A cards with 1px #2E2E2E borders instead of shadows.

## Shapes
- Tight corners: buttons 4px, cards 8px. Avoid pills except for tags.
- Icons: 24px line icons, 1.5–2px stroke, square-ish terminals, black or blue.
- Imagery: high-fidelity Designer UI panels, canvas screenshots, small floating property panels.

## Components
- **Primary button:** #146EF5, white 16px/500 text, 4px radius, 16px 24px padding. Hover: #0055D4. Often paired with a trailing arrow that nudges 4px right on hover.
- **Secondary button:** transparent, 1px #080808 border, black text; on dark: 1px white border, white text.
- **Nav:** 72px white bar, logo left, mega-menu triggers (Platform, Solutions, Resources, Enterprise, Pricing) 15px/500, right side "Log in", "Contact sales" text and blue "Get started — it's free" button.
- **Feature card:** #F7F7F7, 8px radius, 32px padding, 24px/600 title, 16px muted body, blue "Learn more →" link.
- **Input:** 48px tall, white, 1px #D8D8D8 border, 4px radius; focus border #146EF5 with 3px rgba(20,110,245,0.2) ring.
- **Tag:** pill, 1px #D8D8D8 border, 13px/500 text.
- **Stat block:** 56px/600 number in #080808, 14px uppercase label below.

## Do's and Don'ts
**Do**
- Lead with #146EF5 for every primary action.
- Alternate white and #080808 sections for rhythm.
- Keep radii small (2–8px) for an engineered feel.
- Show real builder UI (panels, style properties, canvas).

**Don't**
- Don't use accent rainbow colors as section backgrounds.
- Don't use rounded pill CTAs.
- Don't go lighter than 400 for body or heavier than 700 for headlines.
- Don't center long paragraphs.

## Agent Prompt Guide
**Base prompt:**
"Design like Webflow's site: white and #080808 alternating sections, Inter 600 headlines with -0.02em tracking, 18px body at 1.6 line height, Webflow blue #146EF5 for CTAs and links. Buttons have 4px radius, cards 8px on #F7F7F7. Show large product UI mockups with a soft shadow. Uppercase blue eyebrows above headlines."

**Examples:**
- "Hero on #080808: 80px white headline, gray subhead, blue 'Start building' button and outlined white 'Contact sales', with a Designer canvas screenshot below."
- "Split section: eyebrow 'CMS', 48px headline, 3 bullet features left; product panel mockup right."
- "Logo wall: 6 grayscale enterprise logos in a row, 1px #D8D8D8 dividers."
