---
version: alpha
name: Cohere
description: Enterprise-calm AI — warm stone neutrals, deep forest greens and a coral spark, with an editorial serif display paired to a clean grotesk.
source: https://cohere.com
colors:
  primary: "#17171C"
  on-primary: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#F0EEE9"
  surface-alt: "#F2F2F2"
  text: "#17171C"
  text-secondary: "#2E2E2E"
  text-muted: "#75758A"
  border: "#D7CFC1"
  green-deep: "#062C22"
  green: "#355146"
  green-dark: "#152717"
  coral: "#FF7759"
  blue: "#4C6EE6"
  quartz: "#D18EE2"
typography:
  display:
    fontFamily: CohereText, Tiempos Headline, Fraunces, Georgia, serif
    fontSize: 4.5rem
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -0.02em
  h1: { fontFamily: "CohereText, Fraunces, Georgia, serif", fontSize: 3rem, fontWeight: 400, lineHeight: 1.1, letterSpacing: -0.015em }
  h2: { fontFamily: "Unica77, Inter, Helvetica Neue, sans-serif", fontSize: 2rem, fontWeight: 400, lineHeight: 1.2, letterSpacing: -0.01em }
  h3: { fontFamily: "Unica77, Inter, sans-serif", fontSize: 1.25rem, fontWeight: 500, lineHeight: 1.3 }
  body: { fontFamily: "Unica77, Inter, sans-serif", fontSize: 1rem, fontWeight: 400, lineHeight: 1.55 }
  label: { fontFamily: "CohereMono, Space Mono, ui-monospace, monospace", fontSize: 0.75rem, fontWeight: 400, letterSpacing: 0.04em, textTransform: uppercase }
  mono: { fontFamily: "CohereMono, JetBrains Mono, ui-monospace, monospace", fontSize: 0.875rem }
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
  xl: 72px
  section: 128px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: 12px 22px
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.text}"
    border: 1px solid {colors.text}
    rounded: "{rounded.full}"
    padding: 12px 22px
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: 32px
  dark-band:
    backgroundColor: "{colors.green-deep}"
    textColor: "#FFFFFF"
---

# Cohere — DESIGN.md

> Inspired by the public website of Cohere. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Cohere positions itself as the sober, enterprise-grade AI company, and its site looks like a premium consultancy report: stone-colored panels, a large refined serif for headlines, a crisp Swiss grotesk for everything else, and deep forest-green bands for dramatic sections. Accent color is rare — a coral and a periwinkle blue show up in illustrations, data and the logo's petal shapes. Photography is moody and organic (plants, textures), reinforcing a "grounded" tone.

Adjectives: **grounded, premium, secure, editorial, composed.**

## Colors
| Token | Hex | Role |
|---|---|---|
| background | `#FFFFFF` | Main canvas |
| surface | `#F0EEE9` | Stone panels, cards, feature blocks |
| surface-alt | `#F2F2F2` | Inputs, light hover |
| text / primary | `#17171C` | Headlines, body, primary buttons |
| text-secondary | `#2E2E2E` | Secondary copy |
| text-muted | `#75758A` | Captions, labels |
| border | `#D7CFC1` | Warm dividers and outlines |
| green-deep | `#062C22` | Dark hero/CTA bands |
| green | `#355146` | Mid green panels, illustrations |
| green-dark | `#152717` | Footer, darkest green |
| coral | `#FF7759` | Highlight accent, logo petal |
| blue | `#4C6EE6` | Links, charts, logo petal |
| quartz | `#D18EE2` | Illustration-only tint |

Neutrals and greens dominate. Coral and blue appear in small doses — a highlighted word, a chart series, an icon.

## Typography
- **Display serif** (custom, Tiempos-like) for H1/display. Free fallback: Fraunces (opsz high, SOFT 0) or Newsreader.
- **Grotesk** (Unica77-style) for body and UI. Free fallback: Inter or Hanken Grotesk.
- **Mono** for eyebrow labels and code. Fallback: Space Mono or JetBrains Mono.

Scale: 72 / 48 / 32 / 20 / 16 / 12px. Serif is always regular (400), never bold. Eyebrows are uppercase mono at 12px with +0.04em tracking (e.g. "SECURITY · PRIVATE DEPLOYMENTS"). Sentence case headlines.

## Layout
- 1280px max width, 12-column grid, 32px gutters.
- Asymmetric heroes: headline spanning 7 columns, media in 5.
- 128px between sections; dark green bands span full width and break up long pages.
- Logo walls in grayscale, 5–6 per row.
- Mobile: 20px gutters, serif display scales to 44px.

## Elevation & Depth
Flat and tactile. Stone panels and green bands provide depth; shadows are absent on cards. Dropdowns use `0 12px 32px rgba(23,23,28,0.10)` with a 1px `#D7CFC1` border and 12px radius.

## Shapes
- Buttons: pill. Cards and images: 16px radius. Large media/hero panels: 24px.
- The logo is a cluster of rounded petals — echo with soft organic shapes, never sharp polygons.
- Icons: thin line, 1.5px.
- Imagery: botanical and textural photography, muted greens and earth tones; 3D renders are avoided.

## Components
- **Primary button**: `#17171C` pill, white 15px/500 text, 12px × 22px. Hover: `#2E2E2E`. On green bands invert to white fill / `#062C22` text.
- **Secondary button**: 1px `#17171C` outline pill; hover `#F0EEE9` fill.
- **Nav**: 72px, white, logo left, 15px links with dropdown chevrons, "Request a demo" black pill and "Sign in" text link right.
- **Feature card**: `#F0EEE9`, 16px radius, 32px padding, mono eyebrow, 24px serif title, 16px body, "Learn more →" link.
- **Dark band**: `#062C22` background, white serif headline, `#FFFFFF`/70% body, white pill CTA.
- **Stat block**: 64px serif numeral, 14px label below in muted gray, separated by 1px `#D7CFC1` vertical rules.
- **Inputs**: 48px, `#F2F2F2` fill, no border, 8px radius; focus 1px `#17171C`.
- **Tags**: mono uppercase 11px, 1px `#D7CFC1` border, pill.

## Do's and Don'ts
**Do**
- Pair a regular-weight serif headline with grotesk body.
- Use stone `#F0EEE9` panels and forest-green bands for rhythm.
- Keep accents (coral, blue) under 5% of the surface.
- Use mono uppercase eyebrows to label sections.

**Don't**
- Don't use neon, purple gradients or "AI sparkle" visuals.
- Don't bold the serif.
- Don't use square buttons; CTAs are pills.
- Don't put shadows on cards.

## Agent Prompt Guide
**Base prompt:**
"Design like Cohere: white and stone `#F0EEE9` surfaces, ink `#17171C`, deep forest green `#062C22` bands, tiny coral `#FF7759` and blue `#4C6EE6` accents. Fraunces regular for display headlines, Inter for body, Space Mono uppercase eyebrows. Pill buttons, 16px-radius cards, no shadows, enterprise-calm."

**Examples:**
- "Enterprise hero: 72px serif headline, 18px grotesk subcopy, black pill 'Request a demo' plus outline pill, botanical photo in a 24px-radius frame."
- "Three feature cards on `#F0EEE9` with mono eyebrows and serif titles."
- "Full-width `#062C22` CTA band with a white serif headline and a white pill button."
