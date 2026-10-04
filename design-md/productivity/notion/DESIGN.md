---
version: alpha
name: Notion
description: Calm, paper-like workspace aesthetic — warm off-white, soft black ink, Inter type and hand-drawn black-and-white illustrations.
source: https://www.notion.com
colors:
  primary: "#0075DE"
  on-primary: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#F7F6F3"
  surface-hover: "#EFEEEB"
  text: "#191918"
  text-body: "#37352F"
  text-muted: "#787774"
  border: "#E9E9E7"
  blue: "#097FE8"
  red: "#F64932"
  yellow: "#FFB110"
  green: "#1AAE39"
  indigo: "#1313BA"
  dark-background: "#191919"
typography:
  display:
    fontFamily: Inter
    fontSize: 4rem
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.03em
  h1: { fontFamily: Inter, fontSize: 3rem, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.025em }
  h2: { fontFamily: Inter, fontSize: 2.25rem, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.02em }
  h3: { fontFamily: Inter, fontSize: 1.25rem, fontWeight: 600, lineHeight: 1.3 }
  body: { fontFamily: Inter, fontSize: 1rem, fontWeight: 400, lineHeight: 1.5 }
  serif: { fontFamily: Lyon Text, fontSize: 1.125rem, fontWeight: 400, lineHeight: 1.6 }
  mono: { fontFamily: SFMono-Regular, fontSize: 0.875rem }
rounded:
  sm: 4px
  md: 8px
  lg: 12px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 80px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 8px 16px
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: 8px 16px
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: 24px
---

# Notion — DESIGN.md

> Inspired by the public website of Notion. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Notion feels like a clean sheet of paper with a sense of humor. The canvas is white and warm off-white, text is a soft near-black, and personality comes from monochrome line-drawn characters and the occasional bright tag color. The product UI — blocks, toggles, databases, slash menus — is shown directly. Nothing shouts; content and illustrations carry the page.

Adjectives: **calm, papery, minimal, witty, structured**.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #0075DE | CTA blue ("Get Notion free") |
| background | #FFFFFF | Canvas |
| surface | #F7F6F3 | Warm gray cards, callouts, secondary buttons |
| surface-hover | #EFEEEB | Hover on rows/buttons |
| text | #191918 | Headlines |
| text-body | #37352F | Classic Notion ink for body and UI |
| text-muted | #787774 | Placeholders, metadata |
| border | #E9E9E7 | Dividers, table lines |
| blue / red / yellow / green / indigo | #097FE8 / #F64932 / #FFB110 / #1AAE39 / #1313BA | Feature accents, product tiles, illustration spots |
| dark-background | #191919 | Dark mode canvas |

95% black/white/warm gray. Bright accents appear as small icons or section color-codes, never large fills behind text.

## Typography
- **Sans:** Inter (Notion ships a tuned "NotionInter"); fallback `-apple-system, "Segoe UI", Helvetica`.
- **Serif:** Lyon Text for editorial/quote moments; free fallback *Source Serif 4*.
- **Mono:** `SFMono-Regular, Menlo, Consolas`.
- Headlines bold 700 with tight tracking; body 16px/1.5. Sentence case always.
- Product UI text 14px #37352F; page titles in-app 40px/700.

## Layout
- 1252px max content, centered hero with large headline, subline, two buttons, then a product video/illustration.
- Feature sections: tabbed carousels (Docs, Wikis, Projects, AI) with a big framed product screenshot.
- Bento-like grids of feature tiles on #F7F6F3.
- Spacing 80–120px between sections; text widths capped ~640px.

## Elevation & Depth
- Very soft. Menus/popovers: `0 0 0 1px rgba(15,15,15,.05), 0 3px 6px rgba(15,15,15,.1), 0 9px 24px rgba(15,15,15,.2)`.
- Marketing cards: flat warm gray, no border; screenshots get a subtle 1px border + light shadow.

## Shapes
- 8px buttons, 12px cards, 4px tags and in-app blocks.
- Icons: emoji and simple monochrome line icons.
- Illustrations: black-ink, hand-drawn characters (Roberto Marrone-style) with small color spots.

## Components
- **Primary button:** #0075DE fill, white 15px/500, 8px radius, 36–40px tall; hover #005BAB.
- **Secondary button:** #F7F6F3 or transparent with 1px #E9E9E7, #191918 text.
- **Nav:** white 64px, logo + Product/Download/Solutions/Resources/Pricing, right side "Request a demo", "Log in", blue "Get Notion free". Bottom hairline on scroll.
- **Feature tile:** #F7F6F3, 12px radius, 24px padding, colored small icon (e.g. red for Projects, blue for Docs), 20px/600 title, muted copy.
- **In-app block:** 4px radius hover background rgba(55,53,47,.06), drag handle ⋮⋮ on hover.
- **Tag/select:** 3px radius chips with pastel fills (e.g. #E3E2E0 gray, #D3E5EF blue, #FDECC8 yellow).
- **Callout:** #F1F1EF fill, emoji left, 4px radius.
- **Input:** 36px, rgba(242,241,238,.6) fill, 1px inset rgba(15,15,15,.1), 6px radius.

## Do's and Don'ts
**Do**
- Keep pages mostly white with warm-gray panels.
- Use #37352F for UI text, not pure black.
- Use monochrome line illustrations for personality.
- Show real blocks, databases and slash menus.

**Don't**
- Don't use saturated full-bleed color backgrounds.
- Don't add heavy shadows or gradients.
- Don't use uppercase headings.
- Don't put more than one blue CTA per viewport.

## Agent Prompt Guide
**Base prompt:**
"Design like Notion: white canvas, warm off-white #F7F6F3 tiles with 12px radius and no borders, Inter bold headlines tightly tracked, #37352F body ink, #787774 muted text, single blue #0075DE CTA with 8px radius, soft layered popover shadows, black-ink hand-drawn illustrations and small colored icons."

**Examples:**
- "Tabbed feature section: tabs Docs / Wikis / Projects / AI; selected tab shows a framed workspace screenshot."
- "Database table view with pastel select tags, 14px #37352F text and #E9E9E7 grid lines."
- "Slash command menu popover listing Text, Heading 1, To-do list, Toggle, Callout with icons."
