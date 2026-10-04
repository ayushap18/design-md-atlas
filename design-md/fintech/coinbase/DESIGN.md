---
version: alpha
name: Coinbase
description: Trustworthy, regulated-crypto clarity — bright Coinbase blue on white, clean geometric type and tidy data-rich product UI.
source: https://www.coinbase.com
colors:
  primary: "#0052FF"
  on-primary: "#FFFFFF"
  primary-hover: "#014CEC"
  background: "#FFFFFF"
  surface: "#EEF0F3"
  surface-dark: "#0A0B0D"
  text: "#0A0B0D"
  text-muted: "#5B616E"
  border: "#DEE1E7"
  accent: "#0052FF"
  positive: "#098551"
  negative: "#CF202F"
typography:
  display:
    fontFamily: Coinbase Display, Inter
    fontSize: 4.5rem
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -0.02em
  h1: { fontFamily: "Coinbase Display, Inter", fontSize: 3rem, fontWeight: 400, lineHeight: 1.1, letterSpacing: -0.015em }
  h2: { fontFamily: "Coinbase Sans, Inter", fontSize: 2rem, fontWeight: 600, lineHeight: 1.2 }
  body: { fontFamily: "Coinbase Sans, Inter", fontSize: 1.125rem, fontWeight: 400, lineHeight: 1.55 }
  small: { fontFamily: "Coinbase Sans, Inter", fontSize: 0.875rem, fontWeight: 500, lineHeight: 1.4 }
  mono: { fontFamily: "Coinbase Mono, IBM Plex Mono", fontSize: 0.875rem }
rounded:
  sm: 8px
  md: 12px
  lg: 24px
  xl: 40px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  section: 120px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: 16px 32px
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.full}"
    padding: 16px 32px
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: 32px
---

# Coinbase — DESIGN.md

> Inspired by the public website of Coinbase. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Coinbase wants crypto to feel safe and mainstream. Its visual system is restrained: white space, near-black text, a single bright Coinbase Blue, and calm, light-weight display headlines. Product UI (price charts, asset lists, portfolio cards) is presented clearly with green/red for movement. Illustrations are simple, geometric and blue-dominant.

Hold onto: **trustworthy, clear, modern, accessible, calm**. Medium density; data-rich product areas, airy marketing.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary / accent | #0052FF | Coinbase Blue — CTAs, links, logo, charts |
| primary-hover | #014CEC | Hover |
| on-primary | #FFFFFF | Text on blue |
| background | #FFFFFF | Page |
| surface | #EEF0F3 | Secondary buttons, cards, inputs |
| surface-dark | #0A0B0D | Dark sections, footer |
| text | #0A0B0D | Headlines and body |
| text-muted | #5B616E | Secondary text |
| border | #DEE1E7 | Dividers, table lines |
| positive | #098551 | Price up |
| negative | #CF202F | Price down |

White + near-black dominate; blue is the single brand chroma. Green/red only for price direction.

## Typography
- **Display:** Coinbase Display (regular 400, large). Free fallback: **Inter** 400 or **Inter Display**.
- **Text:** Coinbase Sans. Fallback: **Inter**. Mono: Coinbase Mono → **IBM Plex Mono** for prices/addresses.
- Display headlines are notably light (400) and large with -0.02em tracking — confident without shouting.
- Body 18px/1.55 marketing; 14–16px in product.
- Tabular numerals for prices.

## Layout
- Container max 1180–1280px; 24/40px gutters.
- Hero split: headline + email/"Sign up" capture left, phone/app mockup right.
- Asset tables: full-width rows with icon, name/ticker, price, 24h change, sparkline, market cap.
- Section spacing 96–120px; alternating white / #EEF0F3 bands; occasional #0A0B0D band.

## Elevation & Depth
- Flat by default. Cards are #EEF0F3 fills, no shadow.
- Dropdowns/modals: `0 8px 24px rgba(10,11,13,0.12)`, 16px radius.
- Phone mockups carry subtle soft shadows.

## Shapes
- Buttons: full pill (56px tall marketing; 40px product). Cards: 24px. Hero media: 40px.
- Asset icons: 32px circles. Avatars circles.
- Icons: 24px, geometric 2px stroke or solid glyphs.
- Illustrations: flat geometric objects (cubes, coins, shields) in blue, white and soft gray.

## Components
- **Primary button:** #0052FF, white 16px/600, pill, 56px tall, 16px 32px. Hover #014CEC. Disabled 40% opacity.
- **Secondary button:** #EEF0F3, #0A0B0D text, pill. Hover #E3E6EB.
- **Nav:** 72px white, blue "coinbase" wordmark left, links (Cryptocurrencies, Individuals, Businesses, Institutions, Developers, Company) 15px/600, search icon, "Sign in" text + blue "Sign up" pill.
- **Email capture:** 56px pill input with 1px #DEE1E7 border fused visually with a blue "Sign up" pill to its right.
- **Asset row:** 72px tall, 32px coin icon, name 16px/600 + ticker 14px muted, price tabular 16px, change in green/red with arrow, 7-day sparkline, blue "Trade" pill on hover.
- **Price chart:** blue #0052FF line, light gradient fill beneath, timeframe pills (1H 1D 1W 1M 1Y ALL).
- **Feature card:** #EEF0F3, 24px radius, 32px padding, illustration, 24px/600 title.
- **Input:** 56px, 1px #DEE1E7 border, 12px radius; focus 2px #0052FF.

## Do's and Don'ts
**Do**
- Keep blue as the only brand color; everything else neutral.
- Use light-weight large display headlines.
- Show prices with tabular numerals and green/red direction.
- Use pill buttons and generous whitespace.

**Don't**
- Don't use neon, hype or "crypto bro" dark-mode aesthetics.
- Don't use gradients across the UI.
- Don't use green/red for anything other than price movement.
- Don't use bold 700+ for display headlines.

## Agent Prompt Guide
**Base prompt:**
"Design like Coinbase: white page with #EEF0F3 surfaces, near-black #0A0B0D text, Inter 400 large display headlines (-0.02em) and Inter body. Coinbase Blue #0052FF pill CTAs (56px tall), gray pill secondary. 24px-radius cards, flat, no shadows. Price data uses tabular numerals with #098551 up and #CF202F down. Simple geometric blue illustrations."

**Examples:**
- "Hero: 72px headline 'The future of money is here', email pill input + blue 'Sign up' pill, phone app mockup right."
- "Top assets table: rows with coin icon, name/ticker, price, 24h change colored, sparkline, 'Trade' button."
- "Asset detail: large price, blue line chart with timeframe pill selector, Buy/Sell pill buttons."
