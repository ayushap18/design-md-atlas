---
version: alpha
name: MongoDB
description: Confident developer-data brand built on deep slate-teal, a vivid spring green and warm off-white, set in a precise Swiss grotesk.
source: https://www.mongodb.com
colors:
  primary: "#00ED64"
  on-primary: "#001E2B"
  forest: "#00684A"
  background: "#FFFFFF"
  cream: "#FDFFF5"
  surface: "#F1F5EB"
  surface-gray: "#E4E8E0"
  slate: "#001E2B"
  slate-deep: "#061621"
  slate-mid: "#21313A"
  text: "#001E2B"
  text-muted: "#404F54"
  text-subtle: "#9EA2A1"
  border: "#E4E8E0"
  blue: "#006CFA"
typography:
  display:
    fontFamily: Sohne
    fontSize: 4.5rem
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: -0.03em
  h1: { fontFamily: Sohne, fontSize: 3.25rem, fontWeight: 500, lineHeight: 1.08, letterSpacing: -0.02em }
  h2: { fontFamily: Sohne, fontSize: 2.5rem, fontWeight: 500, lineHeight: 1.12 }
  h3: { fontFamily: Sohne, fontSize: 1.375rem, fontWeight: 500, lineHeight: 1.3 }
  body: { fontFamily: Sohne, fontSize: 1.0625rem, fontWeight: 400, lineHeight: 1.6 }
  eyebrow: { fontFamily: Sohne Mono, fontSize: 0.8125rem, fontWeight: 400, letterSpacing: 0.06em, textTransform: uppercase }
  mono: { fontFamily: Sohne Mono, fontSize: 0.875rem }
rounded:
  sm: 4px
  md: 6px
  lg: 16px
  xl: 24px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 40px
  xl: 96px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    borderColor: "{colors.forest}"
    rounded: "{rounded.md}"
    padding: 12px 24px
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.slate}"
    borderColor: "{colors.slate}"
    rounded: "{rounded.md}"
    padding: 12px 24px
  card:
    backgroundColor: "{colors.background}"
    borderColor: "{colors.border}"
    rounded: "{rounded.lg}"
    padding: 32px
---

# MongoDB — DESIGN.md

> Inspired by the public website of MongoDB. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
MongoDB's brand is assertive and grown-up: a near-black slate-teal (#001E2B) anchors the hero, a punchy spring green (#00ED64) delivers energy, and warm cream sections soften long pages. Type is a refined Swiss grotesk in medium weight with a matching mono for code and labels. Visuals combine product UI (Atlas, Compass), document-shaped JSON snippets and bold geometric illustrations with leaf motifs.

Adjectives: **assertive, modern, organic, precise, enterprise-ready**.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #00ED64 | Spring green: CTAs, highlights, leaf logo |
| forest | #00684A | Button borders, green text on light bg, links |
| slate | #001E2B | Hero/dark sections, headings, text |
| slate-deep / slate-mid | #061621 / #21313A | Dark card layering |
| background | #FFFFFF | Main canvas |
| cream | #FDFFF5 | Warm alternative section |
| surface / surface-gray | #F1F5EB / #E4E8E0 | Cards, dividers |
| text-muted | #404F54 | Body copy |
| text-subtle | #9EA2A1 | Captions |
| blue | #006CFA | Inline links in docs, info states |

Slate + white/cream dominate; green is the spotlight (~8%).

## Typography
- **Sans:** Söhne (Klim). Free fallbacks: *Inter* or *Hanken Grotesk*; `system-ui`.
- **Mono:** Söhne Mono; free fallback *Source Code Pro* or *IBM Plex Mono*.
- Medium (500) headlines with tight tracking; no bold 700 shouting.
- Eyebrows: mono uppercase 13px, 0.06em tracking, forest green on light / spring green on dark.
- Body 17px, slate-gray #404F54.

## Layout
- 1280px container, 12 columns, 32px gutters.
- Hero on slate #001E2B: headline left, CTA pair, product/illustration right; green glow lines.
- Content bands alternate white, cream and slate.
- Use-case tabs and customer stories in wide cards.
- 96–128px section spacing.

## Elevation & Depth
- Light sections: cards flat with 1px #E4E8E0, hover `0 8px 24px rgba(0,30,43,.08)`.
- Dark sections: layered slate panels (#061621 → #21313A) with 1px rgba(255,255,255,.08) borders.
- Occasional green radial glow behind product shots.

## Shapes
- Buttons 6px, cards 16px, feature media 24px.
- Icons: thick-stroke (2px) line icons in slate with green accents.
- Illustrations: bold flat geometry, leaves, document/JSON cards; product screenshots.

## Components
- **Primary button:** #00ED64 fill, 1px #00684A border, #001E2B 16px/500 text, 6px radius, 48px; hover #00C454-ish with slight lift.
- **Secondary button:** transparent, 1px slate border, slate text; on dark, white border/text.
- **Nav:** 72px white bar with green leaf logo, mega-menu (Products, Resources, Solutions, Company, Pricing), "Sign in" + green "Get Started" right. Top utility bar in slate.
- **JSON document card:** #001E2B, Söhne Mono 14px, keys in #00ED64, strings in #E4E8E0, 16px radius.
- **Feature card:** white, 1px #E4E8E0, 16px radius, 32px padding, mono eyebrow, 22px/500 title.
- **Tab bar:** text tabs with 2px green underline on active.
- **Input:** 48px, 1px #9EA2A1, 6px radius, focus ring `0 0 0 3px rgba(0,104,74,.25)`.

## Do's and Don'ts
**Do**
- Pair slate #001E2B with spring green for hero moments.
- Use cream sections to warm up long pages.
- Use medium-weight grotesk and mono eyebrows.
- Show JSON documents as visual motifs.

**Don't**
- Don't put white text on spring green (use slate).
- Don't use pure #000000 — use slate.
- Don't use more than one bright accent.
- Don't over-round buttons (keep 6px).

## Agent Prompt Guide
**Base prompt:**
"Design like MongoDB: slate #001E2B hero and dark bands, spring green #00ED64 primary buttons with 1px #00684A border and slate text, white and cream #FDFFF5 content bands, Söhne-style grotesk (Inter fallback) at weight 500, mono uppercase eyebrows, 16px-radius cards with #E4E8E0 borders."

**Examples:**
- "Hero: 'The world's leading modern database', green 'Get Started' + outline 'Watch demo', JSON document card on the right with green keys."
- "Use-case tabs (AI, Payments, Gaming, IoT) with green underline and a cream content panel."
- "Customer story card with logo, mono eyebrow 'CASE STUDY', title and stat."
