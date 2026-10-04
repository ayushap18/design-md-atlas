---
version: alpha
name: Stripe
description: Engineered elegance — deep navy type, signature blurple, flowing mesh gradients and meticulously aligned technical diagrams.
source: https://stripe.com
colors:
  primary: "#635BFF"
  on-primary: "#FFFFFF"
  primary-hover: "#0A2540"
  background: "#FFFFFF"
  surface: "#F6F9FC"
  surface-dark: "#0A2540"
  text: "#0A2540"
  text-muted: "#425466"
  border: "#E3E8EE"
  accent: "#00D4FF"
  accent-orange: "#FF6201"
  accent-yellow: "#FFCB57"
  accent-pink: "#FF5996"
typography:
  display:
    fontFamily: Sohne, Inter
    fontSize: 5rem
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: -0.035em
  h1: { fontFamily: "Sohne, Inter", fontSize: 3.25rem, fontWeight: 500, lineHeight: 1.1, letterSpacing: -0.02em }
  h2: { fontFamily: "Sohne, Inter", fontSize: 2.25rem, fontWeight: 500, lineHeight: 1.15, letterSpacing: -0.015em }
  body: { fontFamily: "Sohne, Inter", fontSize: 1.125rem, fontWeight: 300, lineHeight: 1.55 }
  small: { fontFamily: "Sohne, Inter", fontSize: 0.9375rem, fontWeight: 400, lineHeight: 1.5 }
  mono: { fontFamily: "Sohne Mono, Source Code Pro", fontSize: 0.875rem }
rounded:
  sm: 4px
  md: 8px
  lg: 16px
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
    rounded: "{rounded.full}"
    padding: 9px 16px
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: 9px 16px
  card:
    backgroundColor: "{colors.background}"
    rounded: "{rounded.md}"
    padding: 32px
---

# Stripe — DESIGN.md

> Inspired by the public website of Stripe. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Stripe's site is the benchmark for developer-facing fintech marketing: precise grids, light-weight type in deep navy, and the signature blurple. Hero areas feature animated, flowing mesh gradients (blurple, cyan, orange, pink) that feel alive, while the rest of the page is disciplined white space with immaculate diagrams, code samples and dashboard UI.

Hold onto: **precise, premium, technical, luminous, trustworthy**. Medium density; lots of small, well-aligned detail.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #635BFF | Blurple — CTAs, links, highlights |
| primary-hover | #0A2540 | Buttons darken to navy on hover |
| text / surface-dark | #0A2540 | Headlines, body, dark sections |
| text-muted | #425466 | Body paragraphs, descriptions |
| background | #FFFFFF | Page |
| surface | #F6F9FC | Alternating sections, code wells |
| border | #E3E8EE | Card borders, dividers |
| accent | #00D4FF | Cyan in gradients and diagrams |
| accent-orange / yellow / pink | #FF6201 / #FFCB57 / #FF5996 | Gradient mesh stops, product color coding |

White and navy dominate; blurple marks action. Multi-color appears inside the hero gradient and product illustrations only.

## Typography
- **Primary:** Söhne (Klim). Free fallback: **Inter** (use 300/400 for body, 500 for headings).
- **Mono:** Söhne Mono. Fallback: **Source Code Pro** / **JetBrains Mono**.
- Headlines medium 500 with tight tracking (-0.02 to -0.035em). Body often light 300 at 18px for an airy, refined texture.
- Muted body (#425466) with a navy lead-in phrase is a signature pattern: "**Payments.** Accept payments online, in person..."
- Sentence case throughout.

## Layout
- 12-col grid with visible-feeling alignment; max width 1080–1232px; 16px gutters mobile, 32px desktop.
- Hero headline sits on top of a skewed or full-bleed animated gradient.
- Feature sections: copy column left (4–5 cols) + product UI / diagram right.
- Thin vertical guideline lines (dashed #E3E8EE) are occasionally visible in backgrounds.
- Section spacing 96–128px.

## Elevation & Depth
- Card shadow (Stripe-style layered): `0 50px 100px -20px rgba(50,50,93,0.25), 0 30px 60px -30px rgba(0,0,0,0.3)`.
- Small UI shadow: `0 2px 5px -1px rgba(50,50,93,0.25), 0 1px 3px -1px rgba(0,0,0,0.3)`.
- Gradients glow; UI floats over them with crisp shadows.
- Dark navy sections use #0A2540 with cards in rgba(255,255,255,0.06).

## Shapes
- Buttons: pill. Cards: 8px (sometimes 16px for large panels). Inputs: 6px.
- Icons: 24–32px, duotone (blurple + cyan/light tint), geometric.
- Imagery: dashboard screenshots, phone checkout UI, globe and network diagrams, code blocks with syntax color.

## Components
- **Primary button:** #635BFF, white 15px/500, pill, 9px 16px, trailing chevron "›" that shifts 3px on hover; hover bg #0A2540.
- **Secondary button:** transparent, #635BFF text with chevron; hover color #0A2540.
- **Nav:** 64px, transparent over gradient (white/navy text), links (Products, Solutions, Developers, Resources, Pricing) 15px/500, mega-menu panels with icon + title + description; right "Sign in ›" and blurple "Contact sales ›" pill.
- **Feature card:** white, 8px radius, 32px padding, Stripe-style layered shadow, 24px duotone icon, 18px/500 title.
- **Code block:** #0A2540 background (or #F6F9FC light), 8px radius, Source Code Pro 14px, tabbed language switcher.
- **Stat row:** 32px/500 navy figure ("135+ currencies"), 15px #425466 label, left-aligned with a 1px blurple left rule.
- **Input:** 40px, 1px #E3E8EE border, 6px radius, focus ring 3px rgba(99,91,255,0.25).
- **Badge:** pill, #F6F9FC fill, 12px/500 #425466; "New" variant blurple tint.

## Do's and Don'ts
**Do**
- Use light/regular weights and tight tracking for a refined headline voice.
- Put blurple on every primary action; chevrons on CTA text.
- Use animated mesh gradients only in heroes and big moments.
- Align everything to a strict grid; show real product UI and code.

**Don't**
- Don't use pure black (#000) text; use navy #0A2540.
- Don't add heavy bold weights (700+).
- Don't apply gradients to buttons or small UI.
- Don't use square-cornered CTAs.

## Agent Prompt Guide
**Base prompt:**
"Design like Stripe: white page with #F6F9FC alternating sections, navy #0A2540 headlines in Inter 500 with -0.03em tracking, body Inter 300 18px in #425466. Blurple #635BFF pill buttons with a trailing chevron, hover to navy. Hero sits on an animated mesh gradient (#635BFF, #00D4FF, #FF6201, #FF5996). Cards: white, 8px radius, layered blue-tinted shadows. Precise grid, real dashboard UI and code samples."

**Examples:**
- "Hero: 80px headline over a skewed mesh gradient, blurple 'Start now ›' pill and 'Contact sales ›' link, floating phone checkout mockup with deep shadow."
- "Product section: 'Payments.' bold navy lead-in + muted description, right-side dashboard card."
- "Developer block: navy code window with tabs (Node, Python, Ruby) next to a short feature list."
