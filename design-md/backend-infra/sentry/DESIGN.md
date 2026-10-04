---
version: alpha
name: Sentry
description: Irreverent, dark-purple developer brand with neon pink and lime highlights, chunky Rubik type and comic-style illustrations.
source: https://sentry.io
colors:
  primary: "#6C5FC7"
  on-primary: "#FFFFFF"
  background: "#1F1633"
  background-deep: "#181225"
  surface: "#2B2141"
  surface-light: "#FFFFFF"
  purple-deep: "#4E2A9A"
  pink: "#FD44B0"
  lime: "#C2EF4E"
  lavender: "#B392F0"
  text: "#FFFFFF"
  text-muted: "#C5BFD6"
  text-dark: "#1F1633"
  border: "#3E3446"
  error: "#F55459"
typography:
  display:
    fontFamily: Rubik
    fontSize: 4rem
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.01em
  h1: { fontFamily: Rubik, fontSize: 3rem, fontWeight: 700, lineHeight: 1.1 }
  h2: { fontFamily: Rubik, fontSize: 2.25rem, fontWeight: 600, lineHeight: 1.15 }
  h3: { fontFamily: Rubik, fontSize: 1.25rem, fontWeight: 500, lineHeight: 1.3 }
  body: { fontFamily: Rubik, fontSize: 1rem, fontWeight: 400, lineHeight: 1.6 }
  mono: { fontFamily: Roboto Mono, fontSize: 0.875rem }
rounded:
  sm: 4px
  md: 6px
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
    backgroundColor: "{colors.pink}"
    textColor: "{colors.text-dark}"
    rounded: "{rounded.md}"
    padding: 12px 20px
    shadow: "4px 4px 0 #181225"
  button-secondary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 12px 20px
  card:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.border}"
    rounded: "{rounded.lg}"
    padding: 24px
---

# Sentry — DESIGN.md

> Inspired by the public website of Sentry. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Sentry turns error monitoring into something with a sense of humor. The site lives on a deep aubergine-purple night, with neon pink and acid-lime pops, chunky rounded Rubik type, and cartoonish illustrations of bugs, fire and frazzled devs. Product screenshots of stack traces and performance waterfalls sit inside the playfulness, so it still reads as a serious tool. Buttons often have hard offset "sticker" shadows.

Adjectives: **cheeky, bold, dark-purple, punchy, developer-native**.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #6C5FC7 | Sentry purple: product UI buttons, links |
| background | #1F1633 | Marketing canvas |
| background-deep | #181225 | Deeper bands, hard shadows |
| surface | #2B2141 | Cards on dark |
| purple-deep | #4E2A9A | Gradients, illustration fills |
| pink | #FD44B0 | Hot CTA and highlight color |
| lime | #C2EF4E | Secondary highlight, badges, underlines |
| lavender | #B392F0 | Syntax and soft accents |
| text / text-muted | #FFFFFF / #C5BFD6 | Copy on dark |
| text-dark | #1F1633 | Copy on light or on pink/lime |
| border | #3E3446 | Hairlines on dark |
| error | #F55459 | Error states in product shots |
| surface-light | #FFFFFF | Docs and light sections |

Purple-dark dominates marketing; pink and lime are loud but small.

## Typography
- **Sans:** Rubik (free, Google Fonts) — rounded, friendly, bold.
- **Mono:** Roboto Mono for stack traces and SDK snippets.
- Display 700, slight negative tracking. Highlighted words get a lime or pink marker underline/background.
- Body 16px; muted lavender-gray on dark.

## Layout
- 1200px container; hero left with headline, CTA pair, illustration right.
- Product sections show screenshots in tilted or stacked frames.
- Platform/SDK logo grid (JS, Python, Go, etc.) in a dense tile grid.
- Sections 80–120px apart; occasional diagonal or wavy dividers between bands.

## Elevation & Depth
- Signature hard offset shadows: `4px 4px 0 #181225` (or lime/pink) on buttons and feature cards.
- Screenshots: `0 20px 40px rgba(0,0,0,.4)`.
- Hover on sticker buttons: translate(-2px,-2px) with shadow growing to 6px.

## Shapes
- 6px buttons, 12px cards, pill badges.
- Icons: chunky rounded line icons, 2px stroke.
- Illustrations: comic, hand-inked style in purple/pink/lime with thick outlines.

## Components
- **Primary CTA:** #FD44B0 fill, #1F1633 16px/600 text, 6px radius, hard shadow 4px #181225, 44px tall.
- **Secondary:** #6C5FC7 fill, white text; or transparent with 1px white border on dark.
- **Nav:** dark #1F1633 64px, logo left, Product/Pricing/Docs/Resources/Sandbox, "Sign In" text + "Get Started" pink/purple button.
- **Issue card:** #2B2141, 12px radius, error title in white 600, culprit path in mono #C5BFD6, event count badge, red severity bar on the left edge.
- **Highlight text:** lime background `linear-gradient(transparent 60%, #C2EF4E 60%)` behind a phrase.
- **Badge:** pill, lime fill with #1F1633 12px/600 text ("NEW").
- **Input:** 44px, #181225 fill, 1px #3E3446, focus border #6C5FC7.

## Do's and Don'ts
**Do**
- Use the dark aubergine canvas with pink and lime pops.
- Give CTAs hard offset sticker shadows.
- Pair jokes/illustrations with real stack-trace UI.
- Use Rubik bold for headlines.

**Don't**
- Don't use soft blurry shadows on CTAs.
- Don't put pink and lime on the same small element.
- Don't make it corporate gray or light-first.
- Don't use thin elegant serifs.

## Agent Prompt Guide
**Base prompt:**
"Design like Sentry: #1F1633 aubergine canvas, Rubik bold headlines in white, #C5BFD6 muted body, hot pink #FD44B0 CTAs with #1F1633 text and a hard 4px offset shadow, lime #C2EF4E highlights and badges, #2B2141 cards with 12px radius, Roboto Mono stack traces, playful comic illustrations."

**Examples:**
- "Hero: 'Code breaks, fix it faster', lime marker behind 'fix it faster', pink sticker CTA 'Try Sentry for free', illustration of a cartoon bug."
- "Issue list with three error rows: title, file path in mono, events count, users affected, red severity bar."
- "SDK logo grid of 12 platforms on dark tiles."
