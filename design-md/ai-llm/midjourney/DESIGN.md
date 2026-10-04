---
version: alpha
name: Midjourney
description: Gallery-dark creative tool — near-black canvas that steps aside for an endless masonry wall of generated images, with tiny type and a single warm-coral highlight.
source: https://www.midjourney.com
colors:
  primary: "#FFFFFF"
  on-primary: "#0B0B0C"
  background: "#0B0B0C"
  surface: "#161618"
  surface-alt: "#232326"
  text: "#F2F2F2"
  text-secondary: "#B4B4B8"
  text-muted: "#7A7A80"
  border: "#2A2A2E"
  accent: "#FF6B57"
  accent-alt: "#F4A261"
  light-background: "#FFFFFF"
  light-surface: "#F4F4F5"
  light-text: "#131316"
typography:
  display:
    fontFamily: Inter, ui-sans-serif, system-ui, sans-serif
    fontSize: 2.5rem
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -0.02em
  h1: { fontFamily: "Inter, system-ui, sans-serif", fontSize: 1.75rem, fontWeight: 600, lineHeight: 1.2 }
  h2: { fontFamily: "Inter, system-ui, sans-serif", fontSize: 1.25rem, fontWeight: 600, lineHeight: 1.3 }
  h3: { fontFamily: "Inter, system-ui, sans-serif", fontSize: 1rem, fontWeight: 600, lineHeight: 1.4 }
  body: { fontFamily: "Inter, system-ui, sans-serif", fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.5 }
  small: { fontFamily: "Inter, system-ui, sans-serif", fontSize: 0.75rem, fontWeight: 500, lineHeight: 1.4 }
  wordmark: { fontFamily: "DM Serif Display, Playfair Display, Georgia, serif", fontSize: 1.25rem, fontWeight: 400, fontStyle: italic }
  mono: { fontFamily: "JetBrains Mono, ui-monospace, monospace", fontSize: 0.8125rem }
rounded:
  sm: 6px
  md: 10px
  lg: 14px
  xl: 20px
  full: 9999px
spacing:
  xs: 2px
  sm: 6px
  md: 12px
  lg: 24px
  xl: 48px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: 6px 14px
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.text-secondary}"
    rounded: "{rounded.md}"
    padding: 6px 10px
  prompt-bar:
    backgroundColor: "{colors.surface}"
    border: 1px solid {colors.border}
    rounded: "{rounded.full}"
    padding: 10px 16px
  image-tile:
    rounded: "{rounded.md}"
    padding: 0
---

# Midjourney — DESIGN.md

> Inspired by the public website and web app of Midjourney. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Midjourney's interface is a darkened gallery. The images are the content and the brand; the chrome is reduced to a slim left rail, a floating prompt bar and small, quiet labels. Everything recedes into near-black so the masonry wall of generations glows. The sailboat logo and occasional italic-serif wordmark hint at an artsy, slightly mysterious personality. A light theme exists but the dark theme is the canonical look.

Adjectives: **immersive, artful, minimal, mysterious, image-first.**

## Colors
| Token | Hex | Role |
|---|---|---|
| background | `#0B0B0C` | Canvas behind images |
| surface | `#161618` | Prompt bar, sidebar, panels |
| surface-alt | `#232326` | Hover states, selected rail item |
| text | `#F2F2F2` | Primary text |
| text-secondary | `#B4B4B8` | Labels, nav items |
| text-muted | `#7A7A80` | Metadata, prompt parameters |
| border | `#2A2A2E` | Hairline dividers |
| primary | `#FFFFFF` | Primary buttons (white on dark) |
| accent | `#FF6B57` | Warm coral: notifications, "new" dots, likes |
| accent-alt | `#F4A261` | Secondary warm highlight |
| light-background | `#FFFFFF` | Light theme canvas |
| light-surface | `#F4F4F5` | Light theme panels |

Color is near-absent from UI; generated imagery provides all chroma. Accent coral appears as dots and small icons only.

## Typography
- **Inter** / system UI at small sizes. Free and standard.
- An italic display serif for occasional wordmark/editorial moments (fallback: DM Serif Display Italic).
- Mono for prompt parameters like `--ar 16:9 --v 7` (JetBrains Mono).

Scale is compact: 40 / 28 / 20 / 16 / 14 / 12px. Most UI text is 13–14px. Weight 500–600 for labels, 400 for prompts. Sentence case, short labels ("Explore", "Create", "Organize").

## Layout
- App shell: fixed 64–220px left rail (icon-only collapsed, labels expanded), main area is a full-bleed masonry grid.
- Masonry: 4–6 columns on desktop, 2 on mobile, 4–6px gutters — images nearly touch.
- Prompt bar floats at the top of the content area, ~720px wide, centered.
- Detail view: image large on the left (fills height), right panel 360px with prompt text, parameters and actions.

## Elevation & Depth
Depth comes from images and from hover overlays. Image tiles on hover reveal a bottom gradient `linear-gradient(transparent, rgba(0,0,0,0.7))` with prompt text and actions. Panels use a 1px `#2A2A2E` border; popovers add `0 16px 40px rgba(0,0,0,0.5)`. Backdrop blur (12–20px) on floating bars over imagery.

## Shapes
- Image tiles: 8–10px radius. Prompt bar: full pill. Buttons: pills or 10px.
- Icons: 1.5px line, 20px, rounded; filled when active.
- The sailboat logo in white, small.
- Imagery: user generations only — never stock photos or illustrations in UI.

## Components
- **Prompt bar**: `#161618` pill, 1px `#2A2A2E`, 48px tall, placeholder "What will you imagine?" in muted gray, image-attach icon left, settings sliders icon right. Focus: border `#3A3A3F`.
- **Primary button**: white pill, black 13px/600 text, 6px × 14px.
- **Ghost button**: transparent, `#B4B4B8` text, hover `#232326` fill, 10px radius.
- **Left rail item**: 40px tall, icon + 14px label, active = `#232326` fill with white text, 10px radius.
- **Image tile**: 10px radius, no border; hover shows gradient overlay with truncated prompt (12px), heart, and "…" menu.
- **Detail panel**: `#161618`, prompt text 14px `#F2F2F2`, parameter chips in mono 12px on `#232326`, action buttons in a 2-column grid (Vary, Upscale, Remix, Pan) as 10px-radius `#232326` buttons.
- **Tabs (Top / Hot / Likes)**: pill segmented control, active white text on `#232326`.
- **Settings sliders**: thin 2px track `#2A2A2E`, white fill, 14px white thumb.

## Do's and Don'ts
**Do**
- Keep the canvas near-black and the chrome minimal.
- Let images run edge-to-edge with tiny gutters.
- Show prompts and parameters in small, readable type.
- Use hover overlays rather than permanent captions.

**Don't**
- Don't add colorful buttons or banners that compete with images.
- Don't place thick borders or shadows around image tiles.
- Don't use large marketing headlines inside the app.
- Don't use illustrations in UI; imagery is user art.

## Agent Prompt Guide
**Base prompt:**
"Design like Midjourney's web app: near-black `#0B0B0C` canvas, `#161618` panels, `#F2F2F2` text, Inter at 13–14px. Full-bleed masonry image grid with 6px gutters and 10px-radius tiles, a floating pill prompt bar, slim left icon rail, white pill primary buttons, tiny coral `#FF6B57` notification dots."

**Examples:**
- "Explore page: left rail with Explore/Create/Organize, centered pill prompt bar, 5-column masonry of images with hover overlays."
- "Image detail: large image left, 360px `#161618` side panel with prompt, mono parameter chips and a 2×2 grid of action buttons."
- "Settings popover with segmented pills for aspect ratio and thin white sliders for stylize/chaos."
