---
version: alpha
name: ElevenLabs
description: Audio-first luxury minimalism — warm off-white canvas, black pill buttons, a refined display face, and soft pastel orb gradients that represent voice.
source: https://elevenlabs.io
colors:
  primary: "#000000"
  on-primary: "#FFFFFF"
  background: "#FDFCFC"
  surface: "#F5F3F1"
  surface-alt: "#E0DFDD"
  text: "#0C0A09"
  text-secondary: "#57534E"
  text-muted: "#A59F97"
  border: "#E7E5E4"
  accent-blue: "#0A59D2"
  accent-navy: "#052F70"
  accent-red: "#F41A2F"
  accent-orange: "#FF4704"
  dark-background: "#0C0A09"
  dark-surface: "#1C1917"
typography:
  display:
    fontFamily: Waldenburg, Instrument Sans, Inter, sans-serif
    fontSize: 4rem
    fontWeight: 300
    lineHeight: 1.05
    letterSpacing: -0.02em
  h1: { fontFamily: "Waldenburg, Instrument Sans, Inter, sans-serif", fontSize: 3rem, fontWeight: 300, lineHeight: 1.1, letterSpacing: -0.02em }
  h2: { fontFamily: "Waldenburg, Instrument Sans, Inter, sans-serif", fontSize: 2.25rem, fontWeight: 400, lineHeight: 1.15 }
  h3: { fontFamily: "Inter, sans-serif", fontSize: 1.125rem, fontWeight: 600, lineHeight: 1.35 }
  body: { fontFamily: "Inter, sans-serif", fontSize: 1rem, fontWeight: 400, lineHeight: 1.55 }
  small: { fontFamily: "Inter, sans-serif", fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.45 }
  label: { fontFamily: "Inter, sans-serif", fontSize: 0.75rem, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0.02em }
  mono: { fontFamily: "Geist Mono, JetBrains Mono, ui-monospace, monospace", fontSize: 0.8125rem }
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
  xl: 64px
  section: 112px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: 10px 18px
  button-secondary:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.text}"
    border: 1px solid {colors.border}
    rounded: "{rounded.full}"
    padding: 10px 18px
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
    padding: 24px
  voice-row:
    backgroundColor: "#FFFFFF"
    border: 1px solid {colors.border}
    rounded: "{rounded.lg}"
    padding: 12px 16px
---

# ElevenLabs — DESIGN.md

> Inspired by the public website of ElevenLabs. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
ElevenLabs looks like a premium audio-equipment brand. The page is a near-white with a warm cast, type is a thin, elegant display grotesk paired with Inter, and the only rich color is in soft, blurred "orb" gradients — spheres of blue, peach, lilac and mint that stand in for voices. Controls are black pills. The product dashboard keeps the same neutrality with stone grays and lots of play buttons and waveforms.

Adjectives: **refined, quiet, sonic, premium, human.**

## Colors
| Token | Hex | Role |
|---|---|---|
| background | `#FDFCFC` | Warm white canvas |
| surface | `#F5F3F1` | Cards, demo panels |
| surface-alt | `#E0DFDD` | Hover fills, slider tracks |
| text | `#0C0A09` | Headings and body (stone-950) |
| text-secondary | `#57534E` | Descriptions |
| text-muted | `#A59F97` | Meta, placeholders |
| border | `#E7E5E4` | Card and input borders |
| primary | `#000000` | Buttons, play controls |
| accent-blue | `#0A59D2` | Orb gradients, links, focus |
| accent-navy | `#052F70` | Deep orb shadow tone |
| accent-red | `#F41A2F` | Orb/illustration tone, recording indicator |
| accent-orange | `#FF4704` | Orb/illustration tone |
| dark-background | `#0C0A09` | Dark sections |

Neutrals carry 95% of the interface; saturated color lives only inside orbs, waveform gradients and product imagery.

## Typography
- **Waldenburg** (custom display grotesk) for headlines, often in Light (300). Free fallback: Instrument Sans or Inter Tight at 300.
- **Inter** for UI and body.
- Mono (Geist Mono / JetBrains Mono) for API snippets.

Scale: 64 / 48 / 36 / 18 / 16 / 14 / 12px. Large headlines are light weight with slight negative tracking — elegance over punch. Body 16px, 1.55. Sentence case; product names like "Eleven v3" keep their stylization.

## Layout
- Max width 1280px; 12-col grid, 24px gutters.
- Hero: centered headline + subcopy + two pill CTAs, followed by an interactive text-to-speech demo panel (textarea, voice chips, play button).
- Feature sections alternate text and orb/UI imagery; 112px vertical rhythm.
- Dashboard: 240px left sidebar, content max ~1100px, lists of voices and generations.

## Elevation & Depth
Soft and airy. Cards are flat stone fills; floating panels (demo widget, popovers) use `0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)`. Orbs provide depth through blur and radial gradients. Avoid hard shadows.

## Shapes
- Buttons: pills. Cards: 16–24px radius. Inputs: 10–12px.
- Orbs: perfect circles with radial/conic gradients and soft noise; they can be 24px avatars or 400px hero art.
- Icons: 1.5px line, 16–20px; play/pause as filled glyphs inside black circles.
- Waveforms: thin vertical bars, rounded caps, 2px wide.

## Components
- **Primary button**: black pill, white 14px/500 Inter, 10px × 18px, 40px tall. Hover `#292524`.
- **Secondary button**: white pill, 1px `#E7E5E4`, black text; hover `#F5F3F1`.
- **Nav**: 64px, transparent over warm white, logo "IIElevenLabs" left, 14px links with dropdowns center, "Log in" text + black "Sign up" pill right.
- **TTS demo panel**: white, 24px radius, soft shadow; large textarea 18px, row of voice chips (orb avatar + name) beneath, circular 48px black play button bottom-right, character counter in muted 12px.
- **Voice chip**: white pill with 1px border, 20px orb avatar left, 14px name; selected = black border.
- **Voice row (library)**: orb avatar, name 15px/600, tags (accent, age, use case) as 12px gray pills, play button, "Add" button right.
- **Card**: `#F5F3F1`, 24px radius, 24px padding, image/orb top, 18px/600 title.
- **Inputs**: 40px, 1px `#E7E5E4`, 10px radius, focus ring 2px `#0A59D2` at 30%.
- **Slider**: 4px `#E0DFDD` track, black fill, 16px white thumb with border.

## Do's and Don'ts
**Do**
- Use warm white `#FDFCFC` and stone grays.
- Use light-weight display headlines.
- Represent voices with soft gradient orbs.
- Make play buttons prominent black circles.

**Don't**
- Don't use colored buttons; CTAs are black or white.
- Don't use hard-edged geometric illustrations.
- Don't use bold display type.
- Don't use cold blue-gray neutrals.

## Agent Prompt Guide
**Base prompt:**
"Design like ElevenLabs: warm white `#FDFCFC`, stone neutrals (`#F5F3F1`, `#E7E5E4`, `#57534E`), text `#0C0A09`. Instrument Sans Light for big headlines, Inter for UI. Black pill buttons, 24px-radius cards, soft shadows, and blurred gradient orbs (blue `#0A59D2`, peach, lilac) representing voices."

**Examples:**
- "Hero with centered 64px light headline, two pills (black 'Sign up', white 'Contact sales'), and a TTS demo card with voice chips and a black play button."
- "Voice library list: rows with orb avatars, name, gray tag pills, and play/add actions."
- "Dashboard sidebar 240px on `#FDFCFC`, active item `#F5F3F1` 8px-radius fill."
