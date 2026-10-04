---
version: alpha
name: Ramp
description: Sharp, no-nonsense finance automation — black and warm off-white with a high-voltage chartreuse, tight grotesk type and dense product proof.
source: https://ramp.com
colors:
  primary: "#E4F222"
  on-primary: "#000000"
  background: "#F4F2EF"
  surface: "#FFFFFF"
  surface-dark: "#000000"
  text: "#000000"
  text-muted: "#6B6862"
  border: "#DAD6D0"
  accent: "#E4F222"
  positive: "#1F8A4C"
  negative: "#D93B2B"
typography:
  display:
    fontFamily: Lausanne, Inter Tight
    fontSize: 5rem
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: -0.04em
  h1: { fontFamily: "Lausanne, Inter Tight", fontSize: 3.5rem, fontWeight: 500, lineHeight: 1.05, letterSpacing: -0.035em }
  h2: { fontFamily: "Lausanne, Inter Tight", fontSize: 2.25rem, fontWeight: 500, lineHeight: 1.1, letterSpacing: -0.025em }
  body: { fontFamily: "Lausanne, Inter", fontSize: 1.0625rem, fontWeight: 400, lineHeight: 1.5 }
  small: { fontFamily: "Lausanne, Inter", fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.45 }
  mono: { fontFamily: IBM Plex Mono, fontSize: 0.8125rem, letterSpacing: 0.02em }
rounded:
  sm: 2px
  md: 4px
  lg: 8px
  xl: 12px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  section: 128px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 12px 20px
  button-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: 12px 20px
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: 28px
---

# Ramp — DESIGN.md

> Inspired by the public website of Ramp. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Ramp sells spend management with a "save time and money" message, and the site feels fast and exact: warm off-white paper backgrounds, pure black type, a sharp chartreuse yellow-green for action and emphasis, and lots of real product UI and hard numbers. Corners are tight, type is tightly tracked, and the voice is direct.

Hold onto: **sharp, fast, efficient, confident, numbers-driven**. Medium-high density; proof (logos, metrics, UI) everywhere.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary / accent | #E4F222 | Ramp chartreuse — CTAs, highlight marks, card render |
| on-primary | #000000 | Text on chartreuse |
| background | #F4F2EF | Warm off-white page |
| surface | #FFFFFF | Cards, UI panels |
| surface-dark | #000000 | Dark bands, alternate CTA |
| text | #000000 | Headlines and body |
| text-muted | #6B6862 | Supporting copy |
| border | #DAD6D0 | Hairlines |
| positive | #1F8A4C | Savings in UI |
| negative | #D93B2B | Errors, policy violations |

Off-white + black dominate. Chartreuse appears in CTAs, highlighted words (as a marker-style background), and the card. Use it as a fill, never as text on light backgrounds.

## Typography
- **Primary:** Lausanne (Swiss grotesk). Free fallback: **Inter Tight** for headlines, **Inter** for body.
- Headlines medium 500, very tight tracking (-0.035 to -0.04em), line-height ~1.0.
- Body 17px/1.5. Mono (IBM Plex Mono) for small eyebrow labels and figures.
- Sentence case; punchy claims with numbers ("Save 5% on average").

## Layout
- Container max ~1280px, 24/40px gutters, 12-column grid.
- Hero: left-aligned headline + email capture, product UI right or below.
- Logo wall directly under hero; metric strips (large numbers with captions) in 3–4 columns.
- Feature sections: tabbed product walkthroughs (Cards, Bill Pay, Procurement, Travel).
- Section spacing 96–128px; dark black bands for emphasis.

## Elevation & Depth
- Flat with hairline borders; minimal shadows.
- Product UI panels: `0 1px 2px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.08)`.
- No gradients, no glass.

## Shapes
- Buttons: 4px radius (crisp). Cards: 8px. Inputs: 4px.
- Icons: 20px, 1.5px stroke, square terminals, black.
- Imagery: dense product UI, the chartreuse corporate card render, customer photos in tight crops.

## Components
- **Primary button:** #E4F222, black 15px/500, 4px radius, 44px tall, 12px 20px. Hover #D4E20F.
- **Dark button:** #000, white text, 4px radius. Hover #262626.
- **Nav:** 64px, off-white, Ramp logo left, links (Product, Solutions, Customers, Resources, Pricing) 15px/400, "Sign in" text, black "Get started" button right.
- **Email capture:** 48px input (white, 1px #DAD6D0, 4px radius) + chartreuse "Get started" button adjacent.
- **Metric strip:** 56px/500 numeral, 14px #6B6862 caption, separated by 1px vertical #DAD6D0 rules.
- **Feature card:** white, 8px radius, 28px padding, mono uppercase eyebrow, 22px/500 title, UI crop.
- **Highlight mark:** chartreuse background behind a word in a headline (padding 0 4px).
- **Tab switcher:** text tabs 15px/500 with 2px black underline on active.

## Do's and Don'ts
**Do**
- Use warm off-white #F4F2EF backgrounds and pure black type.
- Keep corners tight (2–8px) and tracking tight.
- Back every claim with a number, logo or UI.
- Use chartreuse as a fill for CTAs and highlights.

**Don't**
- Don't use chartreuse text on light backgrounds.
- Don't use pill buttons or large radii.
- Don't use gradients, glows or soft illustrative scenes.
- Don't write fluffy copy; be direct.

## Agent Prompt Guide
**Base prompt:**
"Design like Ramp: warm off-white #F4F2EF background, pure black text, Inter Tight 500 headlines with -0.04em tracking and Inter body. Chartreuse #E4F222 primary buttons with black text and 4px radius; black secondary buttons. White 8px-radius cards with hairline #DAD6D0 borders, dense product UI, metric strips and logo walls. Highlight key headline words with a chartreuse marker background."

**Examples:**
- "Hero: left 80px headline 'Time is money. Save both.' with chartreuse highlight on 'Save both', email input + chartreuse button, UI panel right."
- "Metrics row: four big numbers with captions divided by vertical hairlines."
- "Black band: white headline, chartreuse CTA, chartreuse card render."
