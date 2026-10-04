---
version: alpha
name: Resend
description: Pitch-black developer email brand with an elegant serif display, silver-gray type, monospaced code, and luminous 3D-rendered hero objects.
source: https://resend.com
colors:
  primary: "#FFFFFF"
  on-primary: "#000000"
  background: "#000000"
  surface: "#0A0A0A"
  surface-raised: "#111111"
  text: "#EBECED"
  text-muted: "#A0A0A0"
  text-subtle: "#6C6C6C"
  border: "#1F1F1F"
  border-strong: "#2E2E2E"
  accent: "#62FFB3"
  accent-blue: "#70B8FF"
  accent-orange: "#F76004"
typography:
  display:
    fontFamily: Domaine Display
    fontSize: 4.75rem
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -0.02em
  h1: { fontFamily: Domaine Display, fontSize: 3.25rem, fontWeight: 400, lineHeight: 1.05 }
  h2: { fontFamily: ABC Favorit, fontSize: 2rem, fontWeight: 500, lineHeight: 1.15, letterSpacing: -0.02em }
  h3: { fontFamily: ABC Favorit, fontSize: 1.25rem, fontWeight: 500, lineHeight: 1.3 }
  body: { fontFamily: Inter, fontSize: 1rem, fontWeight: 400, lineHeight: 1.6 }
  small: { fontFamily: Inter, fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.5 }
  mono: { fontFamily: Commit Mono, fontSize: 0.875rem, lineHeight: 1.7 }
rounded:
  sm: 6px
  md: 10px
  lg: 16px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  section: 144px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 10px 18px
  button-secondary:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.text}"
    border: "1px solid {colors.border-strong}"
    rounded: "{rounded.md}"
    padding: 10px 18px
  code-block:
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.border}"
    rounded: "{rounded.lg}"
    padding: 20px
---

# Resend — DESIGN.md

> Inspired by the public website of Resend. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Resend markets an email API to developers but styles itself like a luxury product launch. The page is true black, headlines use a refined high-contrast serif, and the hero features a glossy rendered object (a cube, an envelope) floating in darkness. Supporting type is a clean grotesque in silver gray, and code samples sit in quiet bordered panels. It is minimal, slow-paced, and deliberately premium.

Hold onto: **dark, premium, minimal, typographic, developer-native**.

## Colors
| Token | Hex | Role |
|---|---|---|
| background | `#000000` | Page canvas |
| surface | `#0A0A0A` | Code blocks, cards |
| surface-raised | `#111111` | Secondary buttons, hover rows |
| primary | `#FFFFFF` | Primary button fill, headline highlights |
| text | `#EBECED` | Headlines and primary text |
| text-muted | `#A0A0A0` | Body copy (default paragraph color) |
| text-subtle | `#6C6C6C` | Captions, line numbers |
| border | `#1F1F1F` | Card and section hairlines |
| border-strong | `#2E2E2E` | Button outlines, focused cards |
| accent | `#62FFB3` | Success/"delivered" states, syntax strings |
| accent-blue | `#70B8FF` | Syntax keywords, links in docs |
| accent-orange | `#F76004` | Syntax numbers, warnings |

The page is 95% black and gray. Color only appears inside code and status indicators.

## Typography
- **Display:** Domaine Display (Klim, commercial). Free fallback: *Playfair Display* 400 or *Instrument Serif*.
- **Sans headings:** ABC Favorit (Dinamo, commercial). Free fallback: *Inter Tight* 500 or *Geist*.
- **Body:** Inter 16px, colored `#A0A0A0`, line height 1.6.
- **Mono:** Commit Mono. Free (OFL) — use it directly; fallback *JetBrains Mono*.
- Serif only for hero and section-opening titles; never for UI labels.
- Headlines can use a subtle vertical gradient from `#FFFFFF` to `#A0A0A0` via `background-clip: text`.

## Layout
- Narrow, centered: max width 1100px; hero text centered, max 720px.
- Vast vertical spacing (128–160px between sections).
- Feature sections often pair a short paragraph left with a code block or UI render right.
- Logo wall: monochrome customer logos at 40% opacity in a 6-up row.

## Elevation & Depth
- Depth through light, not shadow: the hero object is lit from above; cards have a faint top highlight `inset 0 1px 0 rgba(255,255,255,0.06)`.
- Radial glow behind hero: `radial-gradient(ellipse at top, rgba(255,255,255,0.08), transparent 60%)`.
- Borders `#1F1F1F` separate everything; shadows are effectively invisible on black.

## Shapes
- Buttons 10px radius; cards and code blocks 16px.
- Icons: thin 1.25px stroke, gray `#A0A0A0`, 18px.
- Imagery: 3D renders with glassy/metallic materials, black background, soft rim light.

## Components
- **Primary button:** white bg, black 14px/500 text, 10px radius, 10px 18px. Hover `#E5E5E5`. Often includes a trailing keyboard hint chip.
- **Secondary button:** `#111111` bg, 1px `#2E2E2E` border, light text. Hover border `#444`.
- **Nav:** transparent over black, 64px, logo left, links 14px `#A0A0A0` (hover white), "Sign in" + white "Get started" right. Blur `backdrop-filter: blur(12px)` with `rgba(0,0,0,0.6)` when scrolled.
- **Code block:** `#0A0A0A`, 1px border, 16px radius, tab bar for languages (Node, Python, Go...) with active tab white and underline; Commit Mono 14px.
- **Feature card:** `#0A0A0A`, 1px border, 16px radius, 28px padding, small icon, Favorit 20px title, muted body.
- **Status pill:** full radius, 12px mono, `rgba(98,255,179,0.1)` bg with `#62FFB3` text for "Delivered".
- **Input:** 40px, `#0A0A0A` bg, 1px `#2E2E2E` border, 10px radius; focus border `#6C6C6C` and 3px `rgba(255,255,255,0.08)` ring.

## Do's and Don'ts
**Do**
- Keep the canvas pure `#000000`.
- Default body color to gray `#A0A0A0`; reserve near-white for headings.
- Lead with a serif headline and a real code snippet.
- Use generous vertical whitespace.

**Don't**
- Don't use colored buttons; primary is white on black.
- Don't put drop shadows on dark cards.
- Don't use bright brand color outside code/status.
- Don't crowd sections; one idea per screen.

## Agent Prompt Guide
**Base prompt:**
"Design in a Resend-inspired style: pure black #000 canvas, near-white #EBECED headlines in Instrument Serif or Playfair 400, Inter body in gray #A0A0A0, Commit Mono for code. White primary buttons with black text, 10px radius; cards #0A0A0A with 1px #1F1F1F borders and 16px radius. Minimal, premium, huge whitespace, color only inside code."

**Examples:**
- "Centered hero: 76px serif 'Email for developers', gray subcopy, white 'Get started' + dark outlined 'Documentation', a glowing 3D cube render below."
- "Code section: tabbed code block (Node/Python/Go) with a send-email snippet beside a short explanatory paragraph."
- "Email log table: dark rows, mono timestamps, green 'Delivered' pills, gray hairlines."
