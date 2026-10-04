---
version: alpha
name: Fly.io
description: Whimsical, illustrated app-hosting brand mixing an editorial serif, a lilac-and-violet palette and hand-drawn hot-air-balloon art.
source: https://fly.io
colors:
  primary: "#7C3AED"
  on-primary: "#FFFFFF"
  violet-soft: "#996BEC"
  lilac: "#D5CFEF"
  lilac-pale: "#E6E0FE"
  background: "#FFFFFF"
  surface: "#F4F3FB"
  cream: "#F4F6EB"
  text: "#2E2E2E"
  text-muted: "#686082"
  border: "#D4C4FD"
  blue: "#4D7CFE"
  dark-background: "#1A1530"
typography:
  display:
    fontFamily: Mackinac
    fontSize: 4rem
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.01em
  h1: { fontFamily: Mackinac, fontSize: 3rem, fontWeight: 700, lineHeight: 1.1 }
  h2: { fontFamily: Mackinac, fontSize: 2.25rem, fontWeight: 500, lineHeight: 1.15 }
  h3: { fontFamily: Inter, fontSize: 1.25rem, fontWeight: 600, lineHeight: 1.3 }
  body: { fontFamily: Inter, fontSize: 1.0625rem, fontWeight: 400, lineHeight: 1.65 }
  mono: { fontFamily: Fragment Mono, fontSize: 0.875rem }
rounded:
  sm: 6px
  md: 10px
  lg: 16px
  xl: 24px
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
    padding: 12px 22px
  button-secondary:
    backgroundColor: "{colors.lilac-pale}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: 12px 22px
  card:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.border}"
    rounded: "{rounded.lg}"
    padding: 28px
---

# Fly.io — DESIGN.md

> Inspired by the public website of Fly.io. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Fly.io is the infra company that refuses to look like one. Hand-drawn illustrations of hot-air balloons, birds and tiny workers sit beside an expressive editorial serif and a soft lilac palette. Writing is witty and opinionated (their blog is famous), and the design gives that voice room: wide margins, big serif headlines, and code blocks that feel like part of a story. It's warm, a bit quirky and very human.

Adjectives: **whimsical, literate, warm, lilac, opinionated**.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #7C3AED | Violet buttons, links, active nav |
| violet-soft | #996BEC | Hover, illustration lines |
| lilac / lilac-pale | #D5CFEF / #E6E0FE | Section washes, secondary buttons, chips |
| background | #FFFFFF | Canvas |
| surface | #F4F3FB | Cards, code backdrops |
| cream | #F4F6EB | Warm alternative band behind illustrations |
| text | #2E2E2E | Headlines and body |
| text-muted | #686082 | Purple-gray secondary copy |
| border | #D4C4FD | Lilac hairlines |
| blue | #4D7CFE | Illustration sky, occasional link |
| dark-background | #1A1530 | Footer / dark code |

Light and pastel overall; violet is the only saturated UI color.

## Typography
- **Display:** Mackinac (a chunky, characterful serif). Free fallbacks: *Fraunces* (opsz high, 700) or *Recoleta*-like *DM Serif Display*.
- **Body:** Inter (variable), fallback `system-ui`.
- **Mono:** Fragment Mono (free on Google Fonts).
- Serif for headlines and pull quotes; sans for UI and body. Body slightly large (17px) for long reads.

## Layout
- 1140px container; hero with serif headline left, big illustration right.
- Docs/blog: 720px reading column, sidebar nav on docs.
- Section padding 80–120px; illustrations often break the grid edge.
- Feature lists as 3-column cards with small spot illustrations.

## Elevation & Depth
- Gentle: cards `0 1px 2px rgba(46,46,46,.06), 0 6px 20px rgba(104,96,130,.10)`.
- Depth mostly from illustration layering and pastel bands.
- No glassmorphism or neon glow.

## Shapes
- Friendly mid radii: 10px buttons, 16px cards, 24px illustration frames.
- Icons: hand-drawn feel or rounded line icons, violet.
- Imagery: whimsical ink-and-watercolor style illustrations (balloons, birds, clouds); never stock photos.

## Components
- **Primary button:** #7C3AED fill, white 16px/600 Inter, 10px radius, 44px; hover #6D28D9.
- **Secondary button:** #E6E0FE fill, #7C3AED text; hover #D5CFEF.
- **Nav:** white 72px, balloon logo left, Articles/Blog/Docs/Pricing/Community links, "Sign In" text + violet "Get Started" right.
- **Code block:** #F4F3FB fill (or #1A1530 dark), Fragment Mono 14px, 10px radius, `fly launch`/`fly deploy` commands with violet prompt.
- **Feature card:** #F4F3FB, 1px #D4C4FD, 16px radius, spot illustration top, serif 22px title, muted body.
- **Callout:** lilac-pale band with serif italic quote.
- **Input:** 44px, 1px #D4C4FD, 10px radius, focus ring `0 0 0 3px rgba(124,58,237,.2)`.

## Do's and Don'ts
**Do**
- Pair a bold serif with clean Inter.
- Use whimsical illustrations as hero and spot art.
- Keep palettes pastel lilac with violet actions.
- Write and design for long-form reading.

**Don't**
- Don't go dark-terminal for marketing pages.
- Don't use geometric 3D renders or stock photography.
- Don't set body copy in the serif.
- Don't use sharp 0–2px corners.

## Agent Prompt Guide
**Base prompt:**
"Design like Fly.io: white and pale lilac (#F4F3FB, #E6E0FE) surfaces, Mackinac-style bold serif headlines (Fraunces fallback), Inter body at 17px, violet #7C3AED buttons with 10px radius, #686082 muted text, Fragment Mono code, whimsical hand-drawn balloon illustrations and soft shadows."

**Examples:**
- "Hero: serif headline 'Run your apps close to your users', violet 'Get started' + lilac 'Docs' buttons, balloon illustration right."
- "CLI walkthrough card with three numbered steps (fly launch, fly deploy, fly scale) in Fragment Mono."
- "Blog post layout with 720px column, serif title, author byline, lilac pull-quote callout."
