---
version: alpha
name: Neon
description: Serverless Postgres branding with a near-black, green-tinted dark canvas, a luminous neon-green accent, and crisp engineering typography.
source: https://neon.com
colors:
  primary: "#00E599"
  on-primary: "#0C0D0D"
  background: "#0C0D0D"
  surface: "#111315"
  surface-raised: "#18191B"
  surface-tint: "#0D221A"
  text: "#FFFFFF"
  text-muted: "#94979E"
  text-subtle: "#61646B"
  border: "#242628"
  border-strong: "#303236"
  mint: "#CAE6DC"
  mint-soft: "#E4F1EB"
  accent: "#FF3621"
typography:
  display:
    fontFamily: Inter
    fontSize: 4.5rem
    fontWeight: 500
    lineHeight: 1
    letterSpacing: -0.04em
  h1: { fontFamily: Inter, fontSize: 3rem, fontWeight: 500, lineHeight: 1.05, letterSpacing: -0.03em }
  h2: { fontFamily: Inter, fontSize: 2rem, fontWeight: 500, lineHeight: 1.15, letterSpacing: -0.02em }
  h3: { fontFamily: Inter, fontSize: 1.25rem, fontWeight: 500, lineHeight: 1.3 }
  body: { fontFamily: Inter, fontSize: 1rem, fontWeight: 400, lineHeight: 1.6 }
  eyebrow: { fontFamily: Geist Mono, fontSize: 0.75rem, fontWeight: 500, letterSpacing: 0.08em, textTransform: uppercase }
  mono: { fontFamily: Geist Mono, fontSize: 0.875rem, fontWeight: 400 }
rounded:
  sm: 2px
  md: 4px
  lg: 8px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 40px
  xl: 80px
  section: 160px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: 10px 22px
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    borderColor: "{colors.border-strong}"
    rounded: "{rounded.full}"
    padding: 10px 22px
  card:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.border}"
    rounded: "{rounded.lg}"
    padding: 32px
---

# Neon — DESIGN.md

> Inspired by the public website of Neon. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Neon sells instant, branchable Postgres, and the site feels like a lab at night: a deep almost-black canvas with a faint green undertone, tight geometric type, and the brand's electric green glowing off buttons and diagrams. Branching is shown literally — thin green lines splitting like git graphs. Copy is short and confident; numbers ("<500ms cold start") are typeset large.

Adjectives: **nocturnal, electric, precise, minimal, engineered**.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #00E599 | Neon green: CTA fill, glow lines, active states |
| background | #0C0D0D | Page canvas |
| surface | #111315 | Cards and panels |
| surface-raised | #18191B | Hover rows, nested panels |
| surface-tint | #0D221A | Green-tinted panels behind highlighted features |
| text | #FFFFFF | Headlines |
| text-muted | #94979E | Body and descriptions |
| text-subtle | #61646B | Captions, axis labels |
| border / border-strong | #242628 / #303236 | Hairlines and outlines |
| mint / mint-soft | #CAE6DC / #E4F1EB | Light sections and pale-green illustration fills |
| accent | #FF3621 | Rare warm accent (partner/Databricks callouts) |

Dark dominates (~90%). Green appears as thin lines, glows and one CTA per viewport.

## Typography
- **Sans:** Inter (or a similar neo-grotesk); fallbacks *Inter*, `system-ui`.
- **Mono:** Geist Mono or IBM Plex Mono for eyebrows, CLI and metrics labels.
- Headlines medium (500) with aggressive negative tracking (-0.03 to -0.04em) and line-height near 1.
- Eyebrows: mono uppercase 12px with 0.08em tracking, in `text-subtle` or green.
- Body 16px/1.6 in `text-muted`; never pure white for paragraphs.

## Layout
- Max width 1216px; 20px mobile gutters.
- Hero left-aligned on desktop with a large diagram or glowing illustration on the right.
- Feature rows alternate text/diagram; bento grids for capabilities with 1px gaps that read as borders.
- Generous vertical rhythm: 120–160px between sections.

## Elevation & Depth
- Flat surfaces; depth from light, not shadow. Green glows: `box-shadow: 0 0 40px rgba(0,229,153,.25)` on the primary CTA hover and on diagram nodes.
- Subtle radial gradients from the top of sections (`rgba(0,229,153,.06)`).
- 1px borders define cards; hover lifts border to #303236.

## Shapes
- Small radii: 4px inputs, 8px cards; buttons are full pills.
- Icons: thin 1.25px strokes, monochrome gray, green when active.
- Illustrations: wireframe-like line art, branching graphs, dot grids; no photography.

## Components
- **Primary button:** pill, #00E599 fill, #0C0D0D 14–15px/500 text, 40px height. Hover: glow + slightly lighter green (#33EBAD).
- **Secondary button:** transparent pill, 1px #303236 border, white text; hover fill #18191B.
- **Nav:** 64px, transparent over canvas, logo left, menu center, "Log in" text + green pill "Sign up" right. Mobile: hamburger opening full-screen #0C0D0D sheet.
- **Bento card:** #111315, 1px #242628 border, 8px radius, 32px padding, mono eyebrow, 20px title, muted body, diagram anchored bottom.
- **Metric block:** 56px medium number in white, mono 12px label beneath in `text-subtle`.
- **Code snippet:** #111315 with green prompt `$`, Geist Mono 14px, copy button top-right.
- **Input:** 40px, #111315 fill, #303236 border, 4px radius, green 1px focus border.

## Do's and Don'ts
**Do**
- Keep backgrounds near-black with a hint of green warmth.
- Use green as light: lines, glows, a single filled CTA.
- Set headlines tight and medium weight.
- Show branching diagrams and real latency numbers.

**Don't**
- Don't use green for large fills or body text.
- Don't add soft drop shadows; use glows or borders.
- Don't use rounded 16px+ cards — keep it engineered.
- Don't mix in blues or purples.

## Agent Prompt Guide
**Base prompt:**
"Design like Neon: #0C0D0D canvas, #111315 cards with 1px #242628 borders and 8px radius, Inter medium headlines with -0.03em tracking, Geist Mono uppercase eyebrows, #94979E body text, and electric green #00E599 for pill CTAs, thin diagram lines and soft glows. No shadows, no other hues."

**Examples:**
- "Hero: left-aligned 64px headline 'Ship faster with Postgres', muted subline, green pill 'Start for free' + outline pill 'Read the docs', right side a git-branch diagram drawn in 1px green lines."
- "Bento grid of 5 capability cards (Branching, Autoscaling, Scale to zero, Read replicas, Point-in-time restore) separated by 1px borders."
- "Metrics strip: three 56px numbers with mono captions on a #0D221A tinted band."
