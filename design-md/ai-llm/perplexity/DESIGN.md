---
version: alpha
name: Perplexity
description: Scholarly-tech answer engine — paper-white or deep teal-black canvases, a signature "true turquoise" accent, and clean grotesk type with numbered citations.
source: https://www.perplexity.ai
colors:
  primary: "#20808D"
  on-primary: "#FFFFFF"
  background: "#FBFAF4"
  surface: "#F3F3EE"
  surface-alt: "#E8E8E3"
  text: "#13343B"
  text-secondary: "#4F5A5C"
  text-muted: "#8A9294"
  border: "#E1E1DC"
  accent: "#1FB8CD"
  peacock: "#2E565E"
  inky-blue: "#091717"
  dark-background: "#191A1A"
  dark-surface: "#202222"
  dark-border: "#2F3131"
typography:
  display:
    fontFamily: FK Grotesk, Inter, Helvetica Neue, sans-serif
    fontSize: 3.5rem
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -0.025em
  h1: { fontFamily: "FK Grotesk, Inter, sans-serif", fontSize: 2.25rem, fontWeight: 500, lineHeight: 1.15, letterSpacing: -0.02em }
  h2: { fontFamily: "FK Grotesk, Inter, sans-serif", fontSize: 1.5rem, fontWeight: 500, lineHeight: 1.25 }
  h3: { fontFamily: "FK Grotesk, Inter, sans-serif", fontSize: 1.125rem, fontWeight: 500, lineHeight: 1.35 }
  body: { fontFamily: "FK Grotesk, Inter, sans-serif", fontSize: 1rem, fontWeight: 400, lineHeight: 1.65 }
  answer: { fontFamily: "FK Grotesk, Inter, sans-serif", fontSize: 1.0625rem, fontWeight: 400, lineHeight: 1.7 }
  caption: { fontFamily: "FK Grotesk, Inter, sans-serif", fontSize: 0.8125rem, fontWeight: 400, lineHeight: 1.4 }
  mono: { fontFamily: "Berkeley Mono, JetBrains Mono, ui-monospace, monospace", fontSize: 0.875rem }
rounded:
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  section: 96px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: 8px 16px
  search-box:
    backgroundColor: "#FFFFFF"
    border: 1px solid {colors.border}
    rounded: "{rounded.xl}"
    padding: 16px 16px 12px
  source-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: 8px 10px
  citation-chip:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.text-secondary}"
    rounded: "{rounded.sm}"
    padding: 0 6px
---

# Perplexity — DESIGN.md

> Inspired by the public website and product of Perplexity. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Perplexity looks like a research library rebuilt as software. The light theme sits on an off-white "paper" tone; the dark theme on a near-black with a green-teal cast. One color — a cool turquoise — signals the brand: the logo, focus rings, the submit button and links. Answers are laid out like footnoted prose, with small numbered citation chips and a row of source cards above the text. The overall feel is precise and trustworthy rather than playful.

Adjectives: **curious, precise, scholarly, calm, trustworthy.**

## Colors
| Token | Hex | Role |
|---|---|---|
| background | `#FBFAF4` | Paper white canvas (light) |
| surface | `#F3F3EE` | Source cards, sidebar, hover fills |
| surface-alt | `#E8E8E3` | Citation chips, pressed states |
| text | `#13343B` | Offblack-teal body text |
| text-secondary | `#4F5A5C` | Secondary copy |
| text-muted | `#8A9294` | Metadata, placeholders |
| border | `#E1E1DC` | Input borders, dividers |
| primary | `#20808D` | True turquoise — buttons, logo, links |
| accent | `#1FB8CD` | Brighter turquoise for dark mode accents and focus |
| peacock | `#2E565E` | Deep teal for marketing panels |
| inky-blue | `#091717` | Marketing dark backgrounds |
| dark-background | `#191A1A` | App dark mode canvas |
| dark-surface | `#202222` | Dark cards, composer |
| dark-border | `#2F3131` | Dark dividers |

Neutrals carry the UI. Turquoise appears in at most a few places per screen. Marketing pages occasionally pair turquoise with "plex blue" `#BADEDD` washes.

## Typography
- **FK Grotesk** (Florian Karsten) for UI and headings. Free fallback: Inter, or Space Grotesk for a slightly quirkier feel.
- **Mono** (Berkeley Mono-like) for code blocks and model labels. Fallback: JetBrains Mono.

Scale: 56 / 36 / 24 / 18 / 16–17 / 13px. Display weight 400 with tight tracking; section headings 500. Answer body is 17px with 1.7 line height for reading comfort. Sentence case. Citations are tiny 11–12px numerals.

## Layout
- App: collapsible left sidebar (~220px), centered thread column max ~760px.
- Home: a centered logotype and search box vertically centered on the page, with suggestion chips below.
- Answer page: question as an H1, then "Sources" row (horizontal scroll of 4 source cards), then the answer, then "Related" follow-ups list with + icons.
- Marketing: 1200px max width, 96px section rhythm, large left-aligned headlines.

## Elevation & Depth
Flat with hairline borders. The search box has a 1px `#E1E1DC` border and, on focus, a 1px turquoise border with `0 0 0 3px rgba(32,128,141,0.15)`. Popovers: `0 8px 24px rgba(0,0,0,0.08)`. Dark mode uses tonal steps only.

## Shapes
- Search composer: 16px radius. Cards: 8–12px. Buttons: pills or 8px.
- Icons: 1.5px stroke line icons (Tabler-like), 18–20px.
- The logo is a geometric, folded-paper asterisk/book glyph — stroke only, turquoise or offblack.
- Imagery: thumbnail-sized source favicons, inline image grids with 8px radius.

## Components
- **Search box**: white (light) / `#202222` (dark), 16px radius, 1px border, 56px min height, multi-line. Bottom row: "Focus" and attach icons left, model selector and circular turquoise submit (32px, arrow-right icon) right.
- **Primary button**: `#20808D` fill, white 14px/500 text, full pill, 8px × 16px. Hover: `#1A6B76`.
- **Ghost button**: transparent, `#4F5A5C` text, hover `#F3F3EE` fill, 8px radius.
- **Source card**: `#F3F3EE`, 8px radius, ~150px wide, 2-line title 12px/500, favicon + domain 11px muted, index number.
- **Citation chip**: inline, `#E8E8E3`, 4–6px radius, 11px numerals, hover shows a popover preview of the source.
- **Related list**: rows separated by 1px dividers, 15px text, trailing "+" icon in turquoise.
- **Sidebar**: `#F3F3EE`, items 14px with icon, active item `#E8E8E3` fill, 8px radius.
- **Tabs (Answer / Images / Sources)**: text tabs with 2px turquoise underline on active.

## Do's and Don'ts
**Do**
- Use the paper-white `#FBFAF4` rather than pure white for the canvas.
- Show sources prominently and number citations inline.
- Reserve turquoise for the brand mark, submit, links and active states.
- Keep the reading column narrow (~760px) with 1.7 line height.

**Don't**
- Don't use purple, pink or gradient brand accents.
- Don't wrap answers in chat bubbles — answers are documents.
- Don't use heavy shadows or bold 700+ headlines.
- Don't crowd the home screen; it is a search box and little else.

## Agent Prompt Guide
**Base prompt:**
"Design like Perplexity: paper-white `#FBFAF4` canvas, offblack-teal text `#13343B`, single turquoise accent `#20808D`. Inter (or FK Grotesk) at weight 400–500. Flat surfaces `#F3F3EE`, hairline `#E1E1DC` borders, 16px-radius search composer, numbered citation chips and source cards. Scholarly and calm."

**Examples:**
- "Answer page: H1 question, a row of 4 source cards (8px radius, `#F3F3EE`), then 17px answer prose with inline citation chips, and a 'Related' list with turquoise + icons."
- "Home: centered wordmark, a 720px-wide 16px-radius search box with a turquoise round submit, three suggestion pills below."
- "Dark mode sidebar `#202222` on a `#191A1A` canvas, active item highlighted `#2F3131`, accent `#1FB8CD`."
