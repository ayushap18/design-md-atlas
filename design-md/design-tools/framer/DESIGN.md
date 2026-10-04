---
version: alpha
name: Framer
description: Pitch-black, cinematic product site with white type, electric-blue highlights and motion-first showcase frames.
source: https://www.framer.com
colors:
  primary: "#FFFFFF"
  on-primary: "#000000"
  background: "#000000"
  surface: "#141414"
  surface-raised: "#1F1F1F"
  text: "#FFFFFF"
  text-muted: "#999999"
  border: "#242424"
  accent: "#0099FF"
  accent-soft: "rgba(0,153,255,0.15)"
typography:
  display:
    fontFamily: Inter Display, Inter Tight
    fontSize: 5rem
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: -0.05em
  h1: { fontFamily: "Inter Display, Inter Tight", fontSize: 3.5rem, fontWeight: 600, lineHeight: 1.05, letterSpacing: -0.04em }
  h2: { fontFamily: "Inter Display, Inter Tight", fontSize: 2.25rem, fontWeight: 600, lineHeight: 1.1, letterSpacing: -0.03em }
  body: { fontFamily: Inter, fontSize: 1rem, fontWeight: 500, lineHeight: 1.5, letterSpacing: -0.01em }
  small: { fontFamily: Inter, fontSize: 0.8125rem, fontWeight: 500, lineHeight: 1.4 }
  mono: { fontFamily: JetBrains Mono, fontSize: 0.8125rem }
rounded:
  sm: 8px
  md: 12px
  lg: 20px
  xl: 30px
  full: 9999px
spacing:
  xs: 4px
  sm: 10px
  md: 20px
  lg: 40px
  xl: 80px
  section: 160px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: 10px 18px
  button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "#FFFFFF"
    rounded: "{rounded.full}"
    padding: 10px 18px
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: 30px
---

# Framer — DESIGN.md

> Inspired by the public website of Framer. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Framer's site feels like a dark film set where the product is the lead actor. Everything sits on true black, type is crisp white and tightly tracked, and the only chroma is a saturated blue that signals interactivity. Sections animate in with scroll-linked motion, and showcase frames of customer sites carry the visual variety.

Hold onto: **dark, cinematic, kinetic, crisp, premium**. Density is low; each viewport tends to hold one idea.

## Colors
| Token | Hex | Role |
|---|---|---|
| background | #000000 | Page background, always black |
| surface | #141414 | Cards, feature panels |
| surface-raised | #1F1F1F | Hover state, inputs, nested panels |
| border | #242424 | 1px card outlines and dividers |
| text | #FFFFFF | Headlines, body |
| text-muted | #999999 | Subheads, captions |
| primary | #FFFFFF | Main CTA fill |
| on-primary | #000000 | Text on white CTA |
| accent | #0099FF | Links, secondary CTA, focus, highlights |
| accent-soft | rgba(0,153,255,0.15) | Tinted badges, glows |

Black and near-black grays take ~90%. Blue is reserved for interactive affordances and a few glow moments. Color in showcase thumbnails comes from user content, not the system.

## Typography
- **Display:** Inter Display at 600 with very tight tracking (-0.04 to -0.05em). Free fallback: **Inter Tight**.
- **Body:** Inter 500 (slightly heavier than usual for legibility on black), -0.01em tracking.
- Headline line-height 1.0–1.1; body 1.5.
- Sentence case; short, punchy headlines ("Design and ship your dream site.").
- Muted subheads use #999 at the same size as body or one step up (18–20px).

## Layout
- Centered, single-column hero with headline max ~12ch per line.
- Max content width ~1200px; gutters 20px mobile, 40px desktop.
- Feature grids: 3 columns of equal cards, 10–20px gaps (tight gaps are characteristic).
- Section spacing 120–160px; content fades/slides up 20px on enter.
- Template/showcase rows scroll horizontally in a marquee.

## Elevation & Depth
- Depth from layered grays (#000 → #141414 → #1F1F1F) plus 1px #242424 borders.
- Subtle inner highlight: `inset 0 1px 0 rgba(255,255,255,0.06)` on cards.
- Occasional blue radial glow behind hero product: `radial-gradient(circle, rgba(0,153,255,0.35), transparent 60%)`.
- Sticky nav uses `backdrop-filter: blur(20px)` over `rgba(0,0,0,0.6)`.

## Shapes
- Buttons and tags: full pill.
- Cards: 20px radius; large showcase frames 30px.
- Icons: 16–20px, simple filled glyphs or 1.5px strokes, white or #999.
- Imagery: crisp screenshots of real sites inside dark frames; no illustration.

## Components
- **Primary button:** white fill, black 14px/600 text, pill, 10px 18px padding, 40px height. Hover: #E6E6E6.
- **Accent button:** #0099FF fill, white text, pill. Hover: brighten to #33ADFF.
- **Ghost button:** rgba(255,255,255,0.1) fill, white text, pill.
- **Nav:** 56px, translucent black with blur, logo left, links 14px/500 in #999 turning white on hover, "Log in" ghost + "Sign up" white pill right.
- **Feature card:** #141414, 1px #242424 border, 20px radius, 30px padding, 20px/600 title, 15px #999 body, product clip at top.
- **Input:** #1F1F1F fill, no border, 10px radius, 40px tall, white text, #666 placeholder; focus ring 1px #0099FF.
- **Badge:** pill, accent-soft fill, #0099FF 12px/600 text.
- **Pricing toggle:** segmented pill on #141414, active segment #FFFFFF with black text.

## Do's and Don'ts
**Do**
- Keep backgrounds pure #000; build hierarchy with #141414/#1F1F1F layers.
- Track headlines tight and keep them short.
- Use blue only where the user can click or where something is "live".
- Add scroll-in motion (opacity + 20px translate, ~0.5s, ease-out).

**Don't**
- Don't introduce light sections or pastel colors.
- Don't use heavy drop shadows; borders and layers suffice.
- Don't use square-cornered buttons.
- Don't fill the page with copy; let showcase visuals carry it.

## Agent Prompt Guide
**Base prompt:**
"Build in the style of Framer's website: pure black background, white Inter Display/Inter Tight headlines at weight 600 with -0.045em tracking, Inter 500 body, muted text #999. Cards are #141414 with 1px #242424 borders and 20px radius. Primary CTA is a white pill with black text; secondary is #0099FF pill. Translucent blurred sticky nav, subtle blue glow behind hero media, scroll-in fade animations."

**Examples:**
- "Hero: centered 80px headline, 20px #999 subhead, white 'Start for free' pill and blue 'Watch video' pill, a large dark-framed site screenshot with blue radial glow behind."
- "Feature grid: 3x2 #141414 cards, 12px gap, each with a short looping UI clip, 20px title and one-line description."
- "Template marquee: horizontally scrolling 30px-radius thumbnails of websites on black."
