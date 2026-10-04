---
version: alpha
name: The Verge
description: Loud, poster-like tech publication with hyper-saturated purple and mint on near-black, PolySans display type and boxy, bordered story streams.
source: https://www.theverge.com
colors:
  primary: "#5200FF"
  on-primary: "#FFFFFF"
  accent: "#3CFFD0"
  on-accent: "#000000"
  background: "#131313"
  background-light: "#FFFFFF"
  surface: "#1F1F1F"
  surface-light: "#F4F4F4"
  text: "#FFFFFF"
  text-light: "#000000"
  text-muted: "#949494"
  border: "#313131"
  border-light: "#E1E1E1"
  highlight: "#FFDB00"
  error: "#EC2026"
typography:
  display:
    fontFamily: "PolySans, Space Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: 5rem
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: -0.02em
  h1: { fontFamily: "PolySans, Space Grotesk", fontSize: 3rem, fontWeight: 700, lineHeight: 1.0 }
  h2: { fontFamily: "PolySans, Space Grotesk", fontSize: 1.5rem, fontWeight: 700, lineHeight: 1.1 }
  body: { fontFamily: "FK Roman Standard, Source Serif 4, Georgia, serif", fontSize: 1.1875rem, fontWeight: 400, lineHeight: 1.6 }
  label: { fontFamily: "PolySans Mono, Space Mono, monospace", fontSize: 0.6875rem, fontWeight: 400, letterSpacing: 0.1em, textTransform: uppercase }
  mono: { fontFamily: "PolySans Mono, Space Mono, monospace", fontSize: 0.75rem }
rounded:
  none: 0px
  sm: 2px
  md: 4px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.none}"
    padding: 10px 16px
  story-card:
    border: 1px solid {colors.border}
    rounded: "{rounded.none}"
---

# The Verge — DESIGN.md

> Inspired by the public website of The Verge. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
The Verge's 2022+ identity is a deliberate break from polite news design: a near-black canvas, electric "hyper-blurple" (#5200FF) and mint (#3CFFD0), massive tightly set PolySans headlines, tiny uppercase mono labels and a hard-edged, bordered grid that feels like a printed zine for the internet. The homepage is a mixed stream — big lead stories, a running "Quick Posts" feed, and colored blocks — with editorial art that's bold, collage-like and saturated.

Adjectives: **loud, editorial, irreverent, techy, graphic.**

## Colors
| Token | Hex | Role |
|---|---|---|
| background | #131313 | Default dark canvas (homepage, hubs) |
| background-light | #FFFFFF | Article pages in light mode |
| surface | #1F1F1F | Feed cards, nav dropdowns |
| surface-light | #F4F4F4 | Light-mode panels |
| primary | #5200FF | Hyper-blurple — section blocks, hover fills, highlighted headlines |
| accent | #3CFFD0 | Mint — CTAs, links on dark, "Quick Post" accents, logo |
| text | #FFFFFF | Text on dark |
| text-light | #000000 | Text on light |
| text-muted | #949494 | Bylines, timestamps |
| border | #313131 | Card and feed dividers on dark |
| border-light | #E1E1E1 | Dividers on light |
| highlight | #FFDB00 | Occasional yellow callouts |
| error | #EC2026 | Errors, breaking labels |

Dark backgrounds dominate; purple and mint are used in big, confident blocks rather than timid accents.

## Typography
- **Families:** PolySans (Slim/Neutral/Median/Bulky) for headlines and UI; PolySans Mono for labels; FK Roman Standard serif for article body. Free fallbacks: **Space Grotesk** (700) for PolySans, **Space Mono** for mono, **Source Serif 4** for body.
- **Scale:** 80px lead headline (line-height 0.9) / 48px article title / 24–32px feed headlines / 19px article body / 11–12px uppercase mono labels.
- Headlines are bold, tightly leaded and often set huge relative to the column.
- Labels/kickers ("TECH", "REVIEWS", bylines) in uppercase mono with +0.1em tracking.

## Layout
- Max width ~1400px, 12-column grid with visible 1px rules between columns and stories.
- Homepage: top stories on the left in large type, a "Most Popular" numbered list, and a center "Quick Posts" stream of short items with mint accents.
- Article: centered ~700px text column, full-bleed lead art, sidebar rail of related links on wide screens.
- Vertical rhythm 24–48px; dense but well-ruled.

## Elevation & Depth
- No shadows. Structure comes from 1px rules (#313131 on dark), solid color blocks and hard edges.
- Hover: headline gets mint or purple underline/fill; images may tint.
- Sticky nav: solid #131313 with bottom 1px border.

## Shapes
- Square corners everywhere (0–2px). Pills only for tiny tag chips.
- Images: hard-edged, often full-bleed; illustrations collage-style and highly saturated.
- Icons: simple geometric line icons, 16–20px.
- The "V" logo mark in mint on dark.

## Components
- **Primary button:** #3CFFD0 fill, black 14px/700 PolySans, 0 radius, 10px 16px; hover #5200FF with white text.
- **Outline button:** 1px white border, white text, square; hover mint border/text.
- **Feed headline card:** no background, top 1px #313131 rule, uppercase mono kicker in mint, 24px/700 headline, mono byline + time in #949494.
- **Lead story:** huge 64–80px headline over/next to full-bleed art, dek in 18px, author line in mono.
- **Quick Post:** small card with mint left rule (4px), compact headline and comment count bubble.
- **Most Popular list:** big outlined numerals (1–5) in purple, headlines 18px/700.
- **Nav:** 60px; mint Verge wordmark left, uppercase section links 13px, search/menu icons; sign-in mint button right.
- **Tag chip:** #313131 fill, white 11px uppercase mono, pill.

## Do's and Don'ts
**Do**
- Commit to the dark canvas with big blocks of #5200FF and #3CFFD0.
- Set headlines huge and tight in a geometric grotesk.
- Use uppercase mono labels for kickers, bylines and timestamps.
- Divide content with visible 1px rules, not shadows or cards.

**Don't**
- Don't round corners or add soft shadows.
- Don't use muted pastel palettes or timid accent dots.
- Don't set article body in sans — use a readable serif.
- Don't center-align feed content.

## Agent Prompt Guide
**Base prompt:**
"Design a Verge-inspired tech news page: #131313 background, white text, hyper-blurple #5200FF and mint #3CFFD0 as bold block colors, Space Grotesk 700 headlines with line-height 0.9 and tight tracking, Space Mono 11px uppercase kickers/bylines with +0.1em tracking, Source Serif 4 19px for article body, square corners, 1px #313131 rules between stories, no shadows."

**Example component prompts:**
1. "Lead story block: full-bleed saturated illustration, 72px white headline, 18px dek, mono byline 'BY NILAY PATEL / 9:00 AM' in #949494."
2. "Quick Posts feed: stacked items each with a 4px mint left rule, 18px/700 headline, mono timestamp, comment count chip."
3. "Newsletter promo: #5200FF block, 40px white headline, email input with square edges and mint 'Subscribe' button."
