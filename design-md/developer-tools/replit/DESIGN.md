---
version: alpha
name: Replit
description: Builder-friendly warmth — cream and charcoal neutrals, a vivid orange brand mark, Replit Diatype type, and rounded, approachable app UI.
source: https://replit.com
colors:
  primary: "#FF3C00"
  on-primary: "#FFFFFF"
  background: "#FAF6F1"
  surface: "#FFFFFF"
  surface-alt: "#F0EBE4"
  text: "#191818"
  text-secondary: "#4B5563"
  text-muted: "#6F6C6A"
  border: "#E5DFD7"
  charcoal: "#312E2E"
  blue: "#0079F2"
  green: "#00C08B"
  yellow: "#FFC700"
  dark-background: "#0E1525"
  dark-surface: "#1C2333"
  dark-surface-alt: "#2B3245"
  dark-text: "#F5F9FC"
  dark-border: "#3C445C"
typography:
  display:
    fontFamily: Replit Diatype, ABC Diatype, Inter, sans-serif
    fontSize: 4.25rem
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: -0.03em
  h1: { fontFamily: Replit Diatype, Inter, sans-serif, fontSize: 3rem, fontWeight: 500, lineHeight: 1.08, letterSpacing: -0.025em }
  h2: { fontFamily: Replit Diatype, Inter, sans-serif, fontSize: 2rem, fontWeight: 500, lineHeight: 1.2, letterSpacing: -0.015em }
  h3: { fontFamily: Replit Diatype, Inter, sans-serif, fontSize: 1.25rem, fontWeight: 600, lineHeight: 1.3 }
  body: { fontFamily: Replit Diatype, Inter, sans-serif, fontSize: 1rem, fontWeight: 400, lineHeight: 1.55 }
  small: { fontFamily: Replit Diatype, Inter, sans-serif, fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.45 }
  mono: { fontFamily: Replit Diatype Mono, IBM Plex Mono, JetBrains Mono, ui-monospace, monospace, fontSize: 0.875rem }
rounded:
  sm: 6px
  md: 8px
  lg: 12px
  xl: 20px
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
    rounded: "{rounded.md}"
    padding: 10px 18px
  button-dark:
    backgroundColor: "{colors.text}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: 10px 18px
  prompt-box:
    backgroundColor: "{colors.surface}"
    border: 1px solid {colors.border}
    rounded: "{rounded.xl}"
    padding: 16px 20px
  card:
    backgroundColor: "{colors.surface}"
    border: 1px solid {colors.border}
    rounded: "{rounded.lg}"
    padding: 24px
---

# Replit — DESIGN.md

> Inspired by the public website of Replit. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Replit has shifted from a dark coding-IDE look to a warm, inviting "anyone can build apps" brand. The marketing site sits on cream with charcoal type, a big friendly prompt box ("What do you want to build?") front and center, and a fiery orange-red brand mark. Type is Replit's own Diatype — a clean, slightly quirky grotesk. The workspace app keeps a navy-tinted dark theme for coding. Everything is rounded and approachable.

Adjectives: **welcoming, energetic, creative, approachable, fast.**

## Colors
| Token | Hex | Role |
|---|---|---|
| background | `#FAF6F1` | Cream canvas (marketing) |
| surface | `#FFFFFF` | Cards, prompt box |
| surface-alt | `#F0EBE4` | Hover, chips |
| text | `#191818` | Primary text, dark buttons |
| charcoal | `#312E2E` | Secondary headings, dark sections |
| text-secondary | `#4B5563` | Body |
| text-muted | `#6F6C6A` | Meta |
| border | `#E5DFD7` | Warm hairlines |
| primary | `#FF3C00` | Brand orange-red: logo, primary CTA |
| blue / green / yellow | `#0079F2` / `#00C08B` / `#FFC700` | Product accents, file icons, status |
| dark-background | `#0E1525` | Workspace dark theme |
| dark-surface / dark-surface-alt | `#1C2333` / `#2B3245` | Workspace panels |
| dark-text / dark-border | `#F5F9FC` / `#3C445C` | Workspace text/borders |

Warm neutrals dominate marketing; orange is the brand flash. The workspace leans navy-dark with blue for actions.

## Typography
- **Replit Diatype** (custom, ABC Diatype-based). Free fallback: Inter or Geist.
- **Replit Diatype Mono** for code. Fallback: IBM Plex Mono / JetBrains Mono.

Scale: 68 / 48 / 32 / 20 / 16 / 14px. Headlines weight 500 with tight tracking; product UI 14px. Sentence case; friendly, verb-led copy ("Turn your ideas into apps").

## Layout
- Marketing: 1200px max, centered hero with prompt box 720px wide, starter chips beneath, then showcase grid of app screenshots.
- 112px section spacing; 3-column feature cards; logo wall.
- Workspace: top bar 48px, left file tree 240px, editor center, preview/console right, Agent chat panel on the left in newer layouts.

## Elevation & Depth
Soft and friendly. Prompt box: `0 8px 30px rgba(25,24,24,0.08)` + 1px border. Cards: 1px border, hover `0 4px 16px rgba(25,24,24,0.06)`. Workspace dark panels separated by 1px `#3C445C`.

## Shapes
- Buttons 8px, cards 12px, prompt box 20px, chips full pill.
- Logo: three stacked rounded rectangles forming an abstract "R" in orange.
- Icons: 16–20px rounded line icons; colorful file-type icons.
- Imagery: screenshots of user-built apps, colorful illustrations of people building.

## Components
- **Primary button**: `#FF3C00` fill, white 15px/500, 8px radius, 40px tall; hover `#E63600`.
- **Dark button**: `#191818` fill, white text; used for "Start building."
- **Secondary button**: white, 1px `#E5DFD7`, text `#191818`; hover `#F0EBE4`.
- **Nav**: 64px, cream, logo left, 15px links (Products, For Work, Resources, Pricing, Careers), "Log in" + dark "Sign up" right.
- **Prompt box**: white, 20px radius, 1px border, soft shadow, 18px placeholder "Describe your app idea…", bottom row with attach icon left and orange circular "Start" button right.
- **Starter chip**: `#FFFFFF` pill, 1px border, 14px text with emoji/icon, hover `#F0EBE4`.
- **App showcase card**: white, 12px radius, screenshot top, title 16px/600, author avatar + name 14px muted.
- **Workspace tab**: 32px tall, `#1C2333`, active `#2B3245` with top 2px `#0079F2`.
- **Run button (workspace)**: `#00C08B` green pill, 32px tall, white "▶ Run" text.

## Do's and Don'ts
**Do**
- Use cream `#FAF6F1` and charcoal for marketing.
- Lead with the prompt box — building starts there.
- Use orange `#FF3C00` for the brand and the key CTA.
- Keep shapes rounded and friendly.

**Don't**
- Don't make the marketing site dark and hacker-themed.
- Don't use orange for body text or large fills.
- Don't use sharp corners or tiny dense type on marketing.
- Don't use stock photography.

## Agent Prompt Guide
**Base prompt:**
"Design like Replit: cream `#FAF6F1` canvas, charcoal `#191818` text, warm borders `#E5DFD7`, orange-red `#FF3C00` brand accent. Inter weight 500 headlines with -0.03em tracking (as Replit Diatype). A big white 20px-radius prompt box with soft shadow, pill starter chips, 8px-radius buttons, 12px cards. Friendly and inviting."

**Examples:**
- "Hero: centered 68px headline 'What will you build?', prompt box with orange start button, row of starter chips."
- "Showcase grid of user-built apps: screenshot cards with titles and author avatars."
- "Workspace dark UI on `#0E1525` with file tree, editor tabs, green Run button and Agent chat panel."
