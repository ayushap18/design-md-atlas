---
version: alpha
name: Substack
description: Newsletter-publishing platform with Substack orange, clean white reading pages, Spectral serif headlines and simple rounded controls.
source: https://substack.com
colors:
  primary: "#FF6719"
  primary-hover: "#FF5600"
  on-primary: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#F0F0F0"
  surface-warm: "#FFF4ED"
  text: "#363737"
  text-strong: "#000000"
  text-muted: "#777777"
  border: "#E6E6E6"
  border-strong: "#B6B6B6"
  accent: "#FF6719"
  link: "#FF6719"
  dark: "#151515"
typography:
  display:
    fontFamily: "Spectral, Georgia, Times New Roman, serif"
    fontSize: 3.5rem
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -0.01em
  h1: { fontFamily: "Spectral, Lora, Georgia, serif", fontSize: 2.5rem, fontWeight: 700, lineHeight: 1.2 }
  h2: { fontFamily: "Spectral, Lora, Georgia", fontSize: 1.5rem, fontWeight: 600, lineHeight: 1.3 }
  body: { fontFamily: "Spectral, Lora, Georgia, serif", fontSize: 1.25rem, fontWeight: 400, lineHeight: 1.6 }
  ui: { fontFamily: "SF Pro Text, -apple-system, system-ui, Inter, Segoe UI, Helvetica, Arial, sans-serif", fontSize: 0.875rem, fontWeight: 500, lineHeight: 1.4 }
  mono: { fontFamily: "SFMono-Regular, Menlo, Consolas, monospace", fontSize: 0.875rem }
rounded:
  sm: 4px
  md: 8px
  lg: 12px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 10px 20px
  subscribe-form:
    inputBorder: 1px solid {colors.border-strong}
    rounded: "{rounded.md}"
    height: 48px
---

# Substack — DESIGN.md

> Inspired by the public website of Substack. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Substack is a writer's platform first, so the design feels like a well-typeset newsletter: a white page, a centered serif column, a writer's logo and a big subscribe box. The platform wraps it in quiet system-sans UI with one recognisable color — Substack orange (#FF6719) — on subscribe buttons, links and the bookmark-ribbon logo. Each publication can theme its own accent, but the default carries the orange. The app/home feed (Notes, Inbox) is denser and more social, but still white and plain.

Adjectives: **independent, literary, direct, clean, writer-centric.**

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #FF6719 | Subscribe buttons, links, logo, active tab |
| primary-hover | #FF5600 | Hover |
| background | #FFFFFF | Post and publication pages |
| surface | #F0F0F0 | Secondary buttons, input fills, tags |
| surface-warm | #FFF4ED | Orange-tinted promo and paywall panels |
| text | #363737 | Body copy |
| text-strong | #000000 | Headlines |
| text-muted | #777777 | Bylines, dates, captions |
| border | #E6E6E6 | Dividers, cards |
| border-strong | #B6B6B6 | Input borders |
| dark | #151515 | Dark-mode background / footer |

Mostly white; orange is the single brand color (publications may swap it).

## Typography
- **Families:** Spectral (serif headlines and body on many publications) plus a system sans for UI. Free fallbacks: **Spectral** (free on Google Fonts) or **Lora**; UI in system-ui / **Inter**.
- **Scale:** 56px landing display / 40px post title (700) / 24px subtitle (400, muted) / 20px body / 14px UI / 13px meta.
- Post titles bold serif, subtitles regular serif in #777.
- UI labels and buttons in sans 14–16px/600.
- Pull quotes: serif italic 24px with orange 3px left border.

## Layout
- Post column max 728px centered; images up to 1000px wide.
- Publication homepage: centered logo (64px rounded square), name, tagline, subscribe form; then a "featured post" block and a list of posts.
- Top bar 56px: publication logo + name left, "Subscribe" orange button and "Sign in" text right.
- Feed app: left nav 240px, center feed 600px, right sidebar 320px.
- Paragraph spacing 24px; section spacing 64px.

## Elevation & Depth
- Flat; 1px #E6E6E6 borders on cards and inputs.
- Dropdowns/modals: white, 8–12px radius, `0 4px 24px rgba(0,0,0,0.12)`.
- Paywall fade: `linear-gradient(transparent, #FFFFFF)` over truncated text, followed by an orange-tinted panel.

## Shapes
- Buttons and inputs: 8px radius (some pills on the app).
- Publication logo: rounded square 8–12px radius. Author avatars: circles.
- Icons: simple 1.5px line icons (heart, comment, restack arrows, share).
- Post cover images: 16:9, 0–4px radius.

## Components
- **Subscribe button:** #FF6719 fill, white 16px/600 sans, 10px 20px, 8px radius; hover #FF5600.
- **Subscribe form:** 48px email input (white, 1px #B6B6B6, 8px radius) joined to an orange button; below in 13px muted "No thanks →" or "Already have an account? Sign in".
- **Secondary button:** #F0F0F0 fill, #363737 text, 8px radius.
- **Post list item:** title 20px/700 serif, subtitle 16px muted serif, meta row "AUTHOR · MAR 3" 12px uppercase sans with +0.05em tracking, small thumbnail right (16:9, 112px wide).
- **Engagement bar:** like heart, comment, restack, share — 14px muted with counts, separated by 16px; bordered top/bottom.
- **Paid badge:** small orange lock icon with "Paid" 12px.
- **Notes card:** avatar 40px, name 15px/600, note text 16px sans, actions row.

## Do's and Don'ts
**Do**
- Make the subscribe CTA prominent and repeated (top, inline, end).
- Use a single accent color (orange by default) everywhere it means action.
- Set long-form text in a readable serif at 20px.
- Keep everything else neutral and flat.

**Don't**
- Don't add multiple accent colors or gradients.
- Don't put sidebars inside the reading column.
- Don't use heavy shadows or card stacks in posts.
- Don't use all-caps headlines.

## Agent Prompt Guide
**Base prompt:**
"Design a Substack-inspired newsletter page: white background, 728px centered column, Spectral serif for titles (700) and 20px body (#363737, line-height 1.6), system-ui for UI, #FF6719 orange for subscribe buttons and links (8px radius), #E6E6E6 1px dividers, no shadows, a prominent email subscribe form."

**Example component prompts:**
1. "Publication header: 64px rounded-square logo, 40px serif name, 18px muted tagline, 48px email input joined to an orange 'Subscribe' button."
2. "Post list row: serif title 20px/700, muted subtitle, 'JANE DOE · OCT 2' uppercase meta, heart/comment counts, small 16:9 thumbnail right."
3. "Paywall: faded text then #FFF4ED panel with 'This post is for paid subscribers' 24px serif, orange 'Subscribe' and 'Sign in' text link."
