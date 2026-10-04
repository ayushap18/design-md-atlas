---
version: alpha
name: OpenAI
description: Stark monochrome editorial — white canvas, black type, pill-shaped controls and large-format imagery, with color reserved for art and product media.
source: https://openai.com
colors:
  primary: "#000000"
  on-primary: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#F4F4F4"
  surface-alt: "#ECECEC"
  text: "#0D0D0D"
  text-secondary: "#5D5D5D"
  text-muted: "#8F8F8F"
  border: "#E5E5E5"
  accent: "#10A37F"
  dark-background: "#0D0D0D"
  dark-surface: "#212121"
  dark-surface-alt: "#2F2F2F"
  dark-text: "#ECECEC"
typography:
  display:
    fontFamily: OpenAI Sans, Söhne, Inter, Helvetica Neue, sans-serif
    fontSize: 4rem
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: -0.03em
  h1: { fontFamily: "OpenAI Sans, Inter, sans-serif", fontSize: 2.75rem, fontWeight: 500, lineHeight: 1.1, letterSpacing: -0.02em }
  h2: { fontFamily: "OpenAI Sans, Inter, sans-serif", fontSize: 2rem, fontWeight: 500, lineHeight: 1.2, letterSpacing: -0.015em }
  h3: { fontFamily: "OpenAI Sans, Inter, sans-serif", fontSize: 1.25rem, fontWeight: 500, lineHeight: 1.3 }
  body: { fontFamily: "OpenAI Sans, Inter, sans-serif", fontSize: 1rem, fontWeight: 400, lineHeight: 1.6 }
  body-large: { fontFamily: "OpenAI Sans, Inter, sans-serif", fontSize: 1.125rem, fontWeight: 400, lineHeight: 1.6 }
  caption: { fontFamily: "OpenAI Sans, Inter, sans-serif", fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.4 }
  mono: { fontFamily: "Söhne Mono, JetBrains Mono, ui-monospace, monospace", fontSize: 0.875rem }
rounded:
  sm: 6px
  md: 12px
  lg: 20px
  xl: 28px
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
    padding: 10px 18px
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.full}"
    padding: 10px 18px
  card:
    backgroundColor: "{colors.background}"
    rounded: "{rounded.md}"
    padding: 0
  composer:
    backgroundColor: "{colors.dark-surface-alt}"
    rounded: "{rounded.xl}"
    padding: 12px 16px
---

# OpenAI — DESIGN.md

> Inspired by the public website of OpenAI (openai.com, chatgpt.com). Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
OpenAI's site is a gallery: a white page, black text, almost no chrome, and large commissioned artwork or product video doing the emotional work. The brand avoids a signature UI color; instead it relies on its custom grotesk, generous whitespace and pill-shaped buttons. ChatGPT's product UI translates the same restraint into neutral grays with a dark mode that is near-black rather than blue-black.

Adjectives: **minimal, confident, editorial, neutral, quiet.**

## Colors
| Token | Hex | Role |
|---|---|---|
| background | `#FFFFFF` | Page canvas |
| surface | `#F4F4F4` | Secondary buttons, hover fills, input backgrounds |
| surface-alt | `#ECECEC` | Pressed states, user chat bubbles |
| text / primary | `#0D0D0D` / `#000000` | Headlines, body, primary buttons |
| text-secondary | `#5D5D5D` | Subheads, descriptions |
| text-muted | `#8F8F8F` | Dates, categories, footnotes |
| border | `#E5E5E5` | Dividers, table rules |
| accent | `#10A37F` | Legacy ChatGPT green; use sparingly for success/brand nods |
| dark-background | `#0D0D0D` | Dark sections, ChatGPT dark shell |
| dark-surface | `#212121` | Dark main panel |
| dark-surface-alt | `#2F2F2F` | Dark composer, bubbles |

Black and white dominate completely. Color arrives only through imagery — soft painterly gradients, abstract textures and product video. Never introduce a brand-blue CTA.

## Typography
- **OpenAI Sans** (custom, successor to Söhne) for everything. Free fallback: Inter (tighten tracking) or Hanken Grotesk.
- Mono for code: Söhne Mono → JetBrains Mono / IBM Plex Mono.

Scale: 64 / 44 / 32 / 20 / 16 / 14px. Headlines use weight 500 with negative tracking (-0.02 to -0.03em); never 700+. Body is 16–18px at 1.6 line height. Sentence case for all headings and buttons. Article titles in listings are short, plain, and unadorned.

## Layout
- Max width ~1280px; article body column ~680px centered.
- Homepage uses a stacked feed of large media tiles in 2–3 column grids, 24px gutters.
- Section spacing 96–128px; tiles have 12–16px between image and title.
- Left sidebar nav on product pages (ChatGPT, Platform docs), 260px wide.
- Mobile: single column, 20px side padding, full-bleed media.

## Elevation & Depth
Flat. Separation is through whitespace and 1px `#E5E5E5` dividers. Popovers and menus get `0 8px 24px rgba(0,0,0,0.08)` with a 1px border and 16px radius. In ChatGPT dark mode, layers step from `#0D0D0D` → `#212121` → `#2F2F2F`; no shadows.

## Shapes
- Buttons: full pill. Media tiles: 12–16px radius. Composer: 28px radius.
- Icons: 1.5px stroke line icons, 20px, rounded joins.
- The hexagonal "blossom" logo appears in black or white only.
- Imagery: soft-focus, painterly gradients (pastel blues, oranges, greens), abstract and atmospheric. Product shots on solid soft backgrounds.

## Components
- **Primary button**: black pill, white 14–15px/500 text, 10px × 18px padding, 40px height. Hover: `#333333`.
- **Secondary button**: `#F4F4F4` pill, black text; hover `#ECECEC`.
- **Text link CTA**: "Learn more" with a trailing arrow ↗/→, black, underline on hover only.
- **Nav**: 56–64px, white, logo left, centered menu items 14px, "Log in" + black "Try ChatGPT" pill right. Mega-menu dropdowns are white panels with 2-column text lists.
- **Media card**: image 12px radius, 16:9 or 1:1, then 16px gap, title 18px/500, meta row 14px `#8F8F8F` ("Product · 5 min read"). No card background or border.
- **Chat composer**: `#F4F4F4` (light) / `#2F2F2F` (dark) field, 28px radius, attach "+" left, mic and black circular send button (32px) right.
- **User bubble**: `#F4F4F4` (light) / `#2F2F2F` (dark), 20px radius, right aligned, max-width 70%. Assistant replies are unboxed body text.
- **Inputs**: 44px, 1px `#E5E5E5`, 12px radius, focus border `#0D0D0D`.

## Do's and Don'ts
**Do**
- Keep the UI black/white/gray and let imagery bring color.
- Use pill buttons everywhere.
- Use weight 500 headlines with tight tracking.
- Give media tiles large radii and plain titles beneath.

**Don't**
- Don't use colored CTA buttons or brand gradients on UI elements.
- Don't add borders or shadows to content cards.
- Don't use bold (700) display type or all-caps headlines.
- Don't use blue-tinted dark mode; keep neutrals pure.

## Agent Prompt Guide
**Base prompt:**
"Design in an OpenAI-like style: white `#FFFFFF` canvas, `#0D0D0D` text, Inter at weight 500 with -0.03em tracking for headlines. Black pill primary buttons, `#F4F4F4` pill secondary buttons. No accent color in UI; color comes from soft painterly imagery. Flat, generous whitespace, 12px-radius media tiles."

**Examples:**
- "News grid: 3 columns of media tiles with 12px-radius images, title 18px/500 below, meta 14px `#8F8F8F`, no card containers."
- "Dark chat UI: `#212121` main panel, `#171717` sidebar 260px, `#2F2F2F` 28px-radius composer with a white circular send button."
- "Pricing: three plain columns separated by 1px `#E5E5E5`, black pill CTA on the featured plan, gray pill on others."
