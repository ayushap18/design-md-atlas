---
version: alpha
name: PayPal
description: Familiar, trustworthy payments — deep PayPal navy and bright blue on white, rounded pill buttons and clear, friendly product imagery.
source: https://www.paypal.com
colors:
  primary: "#003087"
  on-primary: "#FFFFFF"
  primary-hover: "#001C64"
  background: "#FFFFFF"
  surface: "#F5F7FA"
  surface-dark: "#001C64"
  text: "#001435"
  text-muted: "#545D68"
  border: "#DBDFE5"
  accent: "#0070E0"
  accent-light: "#097FF5"
  checkout-gold: "#FFC439"
  positive: "#0F8514"
  warning: "#FF8F1C"
typography:
  display:
    fontFamily: PayPal Open, Inter
    fontSize: 4rem
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.02em
  h1: { fontFamily: "PayPal Open, Inter", fontSize: 3rem, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.015em }
  h2: { fontFamily: "PayPal Open, Inter", fontSize: 2rem, fontWeight: 700, lineHeight: 1.2 }
  body: { fontFamily: "PayPal Pro Text, Inter", fontSize: 1.125rem, fontWeight: 400, lineHeight: 1.5 }
  small: { fontFamily: "PayPal Pro Text, Inter", fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.45 }
  mono: { fontFamily: IBM Plex Mono, fontSize: 0.875rem }
rounded:
  sm: 4px
  md: 12px
  lg: 20px
  xl: 32px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  section: 96px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: 12px 32px
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    border: 2px solid {colors.primary}
    rounded: "{rounded.full}"
    padding: 12px 32px
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: 32px
---

# PayPal — DESIGN.md

> Inspired by the public website of PayPal. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
PayPal is the household name in online payments, and its site prioritizes trust and clarity for a mass audience. The palette is the classic two-blue pairing — deep navy #003087 and brighter #0070E0 — on white, with bold rounded type, generous pill buttons and warm lifestyle photography. Everything is legible, accessible and calm.

Hold onto: **trustworthy, familiar, clear, friendly, accessible**. Medium density, straightforward hierarchy.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #003087 | PayPal navy — primary buttons, headings, logo "Pay" |
| primary-hover | #001C64 | Hover, deep sections |
| surface-dark | #001C64 | Dark hero bands, footer |
| accent | #0070E0 | Bright blue — links, logo "Pal", secondary emphasis |
| accent-light | #097FF5 | Hover links, illustrations |
| background | #FFFFFF | Page |
| surface | #F5F7FA | Cards, alternating sections |
| text | #001435 | Body and headlines |
| text-muted | #545D68 | Supporting copy |
| border | #DBDFE5 | Inputs, dividers |
| checkout-gold | #FFC439 | The PayPal Checkout button only |
| positive | #0F8514 | Success |
| warning | #FF8F1C | Alerts |

White and navy dominate; bright blue for links; gold strictly for the branded checkout button.

## Typography
- **Primary:** PayPal Open (display) and PayPal Pro Text (custom). Free fallback: **Inter**, or **Plus Jakarta Sans** for a rounder display.
- Headlines bold 700, -0.015 to -0.02em tracking.
- Body 18px/1.5 regular in #001435 or #545D68.
- Sentence case, plain-language copy ("Pay, send and save smarter").

## Layout
- Container max 1200px, 24/48px gutters.
- Hero split: headline + "Sign up" CTAs left, lifestyle photo or phone UI right, often in a large rounded frame.
- Audience toggles (Personal / Business) in the nav; feature grids of 3 cards.
- Alternating white / #F5F7FA sections, 80–96px spacing.

## Elevation & Depth
- Cards: flat #F5F7FA or white with `0 2px 12px rgba(0,20,53,0.08)`.
- Modals/dropdowns: `0 8px 32px rgba(0,20,53,0.16)`, 12px radius.
- Imagery frames have large radii instead of shadows.

## Shapes
- Buttons: full pill, 48px tall. Inputs: 4px radius (with floating labels). Cards: 20px. Image frames: 32px.
- Icons: 24–32px, rounded, duotone navy + bright blue.
- Imagery: warm real-people lifestyle photography, phone UI, friendly spot illustrations.

## Components
- **Primary button:** #003087, white 16px/700, pill, 48px tall, 12px 32px. Hover #001C64.
- **Secondary button:** transparent, 2px #003087 border, navy text, pill. Hover fills #003087 with white text.
- **PayPal checkout button:** #FFC439 fill, PayPal logo centered, pill, 45px tall; hover filter brightness(0.95). Use only for actual checkout.
- **Nav:** 72px white, PayPal logo left, Personal/Business toggles, menu links 16px/500 navy, "Log In" outlined pill + navy "Sign Up" pill.
- **Input:** 64px tall, 1px #DBDFE5 border, 4px radius, floating label 14px #545D68 that shrinks on focus; focus border #0070E0 with 1px inner ring.
- **Feature card:** #F5F7FA, 20px radius, 32px padding, duotone icon, 24px/700 title, body, bright blue text link with arrow.
- **Alert:** 12px radius, tinted background, icon left, 14px text.
- **Footer:** #001C64 or white with small navy links, legal text 12px.

## Do's and Don'ts
**Do**
- Use navy #003087 for primary actions and bright blue #0070E0 for links.
- Keep buttons pill-shaped and large (48px).
- Use floating-label inputs with clear focus states.
- Favor warm, real lifestyle photography.

**Don't**
- Don't use the gold #FFC439 for anything except PayPal Checkout.
- Don't use thin weights or low-contrast gray text.
- Don't introduce unrelated brand colors (purples, greens) for decoration.
- Don't use sharp-cornered buttons.

## Agent Prompt Guide
**Base prompt:**
"Design like PayPal: white page with #F5F7FA alternating sections, #001435 text, Inter/Plus Jakarta Sans bold 700 headlines, 18px body. Navy #003087 pill primary buttons (48px), outlined navy pill secondaries, bright blue #0070E0 links. Floating-label inputs with 4px radius. 20px-radius cards, duotone navy/blue icons, warm lifestyle photos in 32px-radius frames."

**Examples:**
- "Hero: left 56px headline 'Pay, send and save smarter', navy 'Sign Up' pill and outlined 'Log In'; right a phone with the app in a rounded photo frame."
- "Feature trio: #F5F7FA cards (Send money, Pay in 4, Cash back) with icons and blue arrow links."
- "Checkout panel: order summary card, gold PayPal pill button, secondary 'Debit or Credit Card' black pill."
