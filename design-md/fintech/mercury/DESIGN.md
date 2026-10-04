---
version: alpha
name: Mercury
description: Quietly luxurious startup banking — ink-violet type, soft cool neutrals, airy serif-sans pairing and atmospheric gradient skies.
source: https://mercury.com
colors:
  primary: "#5266EB"
  on-primary: "#FFFFFF"
  background: "#FBFCFD"
  surface: "#F4F5F9"
  surface-dark: "#171721"
  text: "#272735"
  text-muted: "#535461"
  border: "#E2E3EA"
  accent: "#5266EB"
  accent-soft: "#E8EBFD"
  positive: "#188554"
typography:
  display:
    fontFamily: Arcadia Display, Inter Display
    fontSize: 4.5rem
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -0.03em
  h1: { fontFamily: "Arcadia Display, Inter Display", fontSize: 3rem, fontWeight: 400, lineHeight: 1.1, letterSpacing: -0.025em }
  h2: { fontFamily: "Arcadia Display, Inter Display", fontSize: 2rem, fontWeight: 400, lineHeight: 1.2, letterSpacing: -0.015em }
  body: { fontFamily: "Arcadia, Inter", fontSize: 1.0625rem, fontWeight: 400, lineHeight: 1.6 }
  small: { fontFamily: "Arcadia, Inter", fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.5 }
  mono: { fontFamily: IBM Plex Mono, fontSize: 0.8125rem }
rounded:
  sm: 6px
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
  section: 160px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: 12px 22px
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    border: 1px solid {colors.border}
    rounded: "{rounded.full}"
    padding: 12px 22px
  card:
    backgroundColor: "{colors.background}"
    rounded: "{rounded.lg}"
    padding: 32px
---

# Mercury — DESIGN.md

> Inspired by the public website of Mercury. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Mercury banks startups, and its site feels more like a design studio than a bank: hushed, cool off-white canvases, ink-violet (#272735) type set light and large, dreamy sky/landscape gradient imagery, and beautifully detailed product dashboards. Nothing shouts; quality is signaled through restraint and precision.

Hold onto: **refined, calm, premium, airy, precise**. Low density; very generous whitespace.

## Colors
| Token | Hex | Role |
|---|---|---|
| text | #272735 | Ink — headlines and body |
| text-muted | #535461 | Secondary copy |
| background | #FBFCFD | Cool off-white page |
| surface | #F4F5F9 | Panels, input fills |
| surface-dark | #171721 | Dark hero/feature sections |
| border | #E2E3EA | Hairlines, outlined buttons |
| primary / accent | #5266EB | Indigo CTAs, links, focus |
| on-primary | #FFFFFF | Text on indigo |
| accent-soft | #E8EBFD | Tinted tags, chart fills |
| positive | #188554 | Incoming money in UI |

Neutrals with a violet undertone dominate. Indigo is used sparingly for the main action. Atmospheric imagery (dusk skies, misty gradients in lavender/peach) supplies color.

## Typography
- **Primary:** Arcadia / Arcadia Display (custom). Free fallback: **Inter Display** for headlines and **Inter** for text (or **Geist**).
- Display set at regular 400 — light and large — with -0.03em tracking.
- Body 17px/1.6, regular, in #272735 or #535461.
- Sentence case; understated copy ("Banking for startups").
- Tabular numbers for balances.

## Layout
- Container max ~1200px; text columns narrow (~560px).
- Hero: centered or left headline with a dashboard floating over a soft gradient landscape.
- Feature sections: one idea per viewport, text + large product crop; bento grids for secondary features.
- Very large section spacing (140–160px).

## Elevation & Depth
- Dashboard mockups: delicate layered shadows `0 1px 2px rgba(39,39,53,0.06), 0 16px 48px rgba(39,39,53,0.12)`.
- Cards: 1px #E2E3EA borders, otherwise flat.
- Dark sections: #171721 with subtle radial gradient glows (lavender/indigo at 20% opacity).
- Nav: off-white with `backdrop-filter: blur(12px)`.

## Shapes
- Buttons: pill. Cards: 16px. Product frames: 12–16px.
- Icons: 20px, 1.5px stroke line icons, ink color.
- Imagery: soft gradient skies, dawn landscapes, product UI. No illustration characters.

## Components
- **Primary button:** #5266EB, white 15px/500, pill, 44px tall, 12px 22px. Hover #4255D4.
- **Secondary button:** transparent, 1px #E2E3EA border, ink text, pill. Hover #F4F5F9 fill.
- **Nav:** 64px, logo left, links (Products, Pricing, Resources, About) 15px/400 in #535461, "Log in" text + indigo "Open account" pill.
- **Email capture:** 48px pill input with #F4F5F9 fill, inline indigo "Open account" pill inside on the right.
- **Dashboard card (UI):** white, 1px #E2E3EA, 12px radius, balance in 32px/400 tabular, small area chart in indigo with #E8EBFD fill.
- **Transaction row:** 48px, merchant logo 24px circle, name 14px, amount right-aligned tabular; incoming in #188554.
- **Feature tile:** #F4F5F9, 16px radius, 32px padding, 20px/400 title, muted body.
- **Footnote:** 13px #535461, legal "Mercury is a fintech company, not a bank…" style disclosure in footer.

## Do's and Don'ts
**Do**
- Use regular (400) weights for big headlines; let size do the work.
- Keep backgrounds cool off-white and text ink-violet, never pure black.
- Use atmospheric gradient imagery behind product shots.
- Give everything lots of space.

**Don't**
- Don't use bright multi-color palettes or loud badges.
- Don't use heavy shadows or bold weights.
- Don't crowd sections with multiple CTAs.
- Don't use cartoon illustrations.

## Agent Prompt Guide
**Base prompt:**
"Design like Mercury: cool off-white #FBFCFD background, ink #272735 text, Inter Display 400 large headlines with -0.03em tracking, Inter 17px body, muted #535461. Indigo #5266EB pill primary buttons, outlined pill secondaries with #E2E3EA borders. Delicate dashboard mockups with soft layered shadows floating over dreamy lavender/peach sky gradients. Very generous whitespace."

**Examples:**
- "Hero: 72px centered headline 'Banking for ambitious companies', pill email input with indigo button inside, dashboard floating over a dusk gradient."
- "Feature: left narrow text column, right a transactions table crop with tabular amounts."
- "Dark section: #171721 with faint indigo glow, white 48px headline, three feature tiles."
