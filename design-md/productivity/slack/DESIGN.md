---
version: alpha
name: Slack
description: Friendly, colorful workplace brand anchored by aubergine purple, with the four-color logo palette used as playful accents.
source: https://slack.com
colors:
  primary: "#611F69"
  on-primary: "#FFFFFF"
  aubergine: "#4A154B"
  aubergine-dark: "#3F0E40"
  background: "#FFFFFF"
  surface: "#F4EDE4"
  surface-gray: "#F8F8F8"
  text: "#1D1C1D"
  text-muted: "#616061"
  border: "#DDDDDD"
  blue: "#36C5F0"
  green: "#2EB67D"
  yellow: "#ECB22E"
  red: "#E01E5A"
  link: "#1264A3"
typography:
  display:
    fontFamily: Salesforce Sans
    fontSize: 4rem
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.01em
  h1: { fontFamily: Salesforce Sans, fontSize: 3rem, fontWeight: 700, lineHeight: 1.1 }
  h2: { fontFamily: Salesforce Sans, fontSize: 2.25rem, fontWeight: 700, lineHeight: 1.15 }
  h3: { fontFamily: Salesforce Sans, fontSize: 1.375rem, fontWeight: 700, lineHeight: 1.3 }
  body: { fontFamily: Salesforce Sans, fontSize: 1.125rem, fontWeight: 400, lineHeight: 1.55 }
  app: { fontFamily: Lato, fontSize: 0.9375rem, fontWeight: 400, lineHeight: 1.46668 }
  mono: { fontFamily: Monaco, fontSize: 0.75rem }
rounded:
  sm: 4px
  md: 8px
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
    rounded: "{rounded.sm}"
    padding: 16px 32px
  button-secondary:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.primary}"
    borderColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: 16px 32px
  card:
    backgroundColor: "#FFFFFF"
    rounded: "{rounded.lg}"
    padding: 32px
---

# Slack — DESIGN.md

> Inspired by the public website of Slack. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Slack's brand is the cheerful side of enterprise software. Deep aubergine purple gives it weight, and the logo's blue, green, yellow and red bring a wink of play. Marketing pages are bright and roomy, with large product mockups of channels and huddles, real-looking people avatars and conversational copy. It's warm, inclusive and clearly built for teams.

Adjectives: **friendly, colorful, confident, human, polished**.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #611F69 | CTA buttons, links on marketing |
| aubergine / aubergine-dark | #4A154B / #3F0E40 | Hero bands, app sidebar, footers |
| background | #FFFFFF | Canvas |
| surface | #F4EDE4 | Warm sand bands behind features |
| surface-gray | #F8F8F8 | Neutral panels |
| text | #1D1C1D | Headlines and body |
| text-muted | #616061 | Secondary |
| border | #DDDDDD | Inputs, dividers |
| blue / green / yellow / red | #36C5F0 / #2EB67D / #ECB22E / #E01E5A | Logo colors: illustration, icons, stat accents |
| link | #1264A3 | In-app and help links |

Aubergine + white dominate; logo colors stay small and appear together, never one alone as a theme.

## Typography
- **Marketing:** Salesforce Sans / Larsseit-like geometric grotesk; free fallback *Inter* or *Plus Jakarta Sans*.
- **App UI:** Lato 15px/1.46 (free).
- **Mono:** Monaco / Menlo for code snippets.
- Headlines bold 700, sentence case; body 18px on marketing.

## Layout
- 1280px container; hero split with headline + email/CTA left and big app mockup right, or centered on aubergine.
- Logo wall of enterprise customers.
- Features in alternating 2-column rows with product UI; stats in 3-up blocks ("80% of Fortune 100").
- Section spacing 80–120px; generous whitespace.

## Elevation & Depth
- Product mockups: `0 24px 48px rgba(29,28,29,.18)` with 8–16px radius.
- Cards: `0 4px 12px rgba(0,0,0,.08)`; hover deepens.
- In-app modals: `0 18px 48px rgba(0,0,0,.35)`.

## Shapes
- Buttons 4px (rectangular, sturdy), cards 16px, large media 24px.
- Avatars: rounded squares (8px radius at 36px), a Slack hallmark.
- Icons: bold filled/rounded icons; illustrations use logo colors with rounded shapes.

## Components
- **Primary button:** #611F69 fill, white 16px/700 uppercase-free text, 4px radius, 52px tall on marketing; hover #4A154B.
- **Secondary button:** white, 1px #611F69 border, purple text.
- **Nav:** white 72px; logo, Features/Solutions/Enterprise/Resources/Pricing, right "Sign in", "Talk to sales" outline, "Get started" purple.
- **Message row (app):** 36px rounded-square avatar, bold name 15px, gray timestamp 12px, Lato message; hover bg #F8F8F8.
- **Sidebar:** #3F0E40 (aubergine), white 15px channel names at 70% opacity, active channel #1164A3 fill.
- **Stat block:** 56px/700 number in #611F69, short caption.
- **Input/composer:** 1px #DDDDDD, 8px radius, toolbar row of icons, green send button #007A5A.

## Do's and Don'ts
**Do**
- Use aubergine for primary actions and hero bands.
- Use the four logo colors together as playful accents.
- Show realistic channels, threads and avatars.
- Keep buttons sturdy with small radii.

**Don't**
- Don't make one logo color (e.g. yellow) the dominant theme.
- Don't use pill-shaped primary CTAs.
- Don't use circular avatars — use rounded squares.
- Don't go dark-mode for marketing.

## Agent Prompt Guide
**Base prompt:**
"Design like Slack: white and warm sand #F4EDE4 bands, aubergine #4A154B hero sections, #611F69 4px-radius primary buttons, bold geometric sans headlines (Inter fallback), #1D1C1D text, logo colors #36C5F0 #2EB67D #ECB22E #E01E5A as small accents, large product mockups with soft deep shadows, rounded-square avatars."

**Examples:**
- "Hero on aubergine: white headline 'Where work happens', email field + 'Sign up with email' button, app mockup showing #general channel."
- "Stats row: three purple numbers with captions on sand background."
- "App channel view: aubergine sidebar, message list with rounded-square avatars, composer at bottom."
