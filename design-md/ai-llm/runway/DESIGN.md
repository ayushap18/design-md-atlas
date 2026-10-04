---
version: alpha
name: Runway
description: Cinematic AI studio — black-dominant, film-forward pages with huge clean grotesk headlines, full-bleed video and crisp white UI accents.
source: https://runwayml.com
colors:
  primary: "#FFFFFF"
  on-primary: "#0C0C0C"
  background: "#0C0C0C"
  surface: "#1A1A1A"
  surface-alt: "#262626"
  text: "#FFFFFF"
  text-secondary: "#BDBDBD"
  text-muted: "#7A7A7A"
  border: "#2E2E2E"
  accent: "#3A6FF7"
  light-background: "#FFFFFF"
  light-surface: "#F5F7FA"
  light-surface-alt: "#EEF1F5"
  light-text: "#0C0C0C"
  light-border: "#E5E7EB"
typography:
  display:
    fontFamily: ABC Normal, Inter Tight, Inter, Helvetica Neue, sans-serif
    fontSize: 5.5rem
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: -0.04em
  h1: { fontFamily: "ABC Normal, Inter Tight, sans-serif", fontSize: 3.5rem, fontWeight: 400, lineHeight: 1.0, letterSpacing: -0.03em }
  h2: { fontFamily: "ABC Normal, Inter Tight, sans-serif", fontSize: 2.25rem, fontWeight: 400, lineHeight: 1.1, letterSpacing: -0.02em }
  h3: { fontFamily: "ABC Normal, Inter, sans-serif", fontSize: 1.25rem, fontWeight: 500, lineHeight: 1.3 }
  body: { fontFamily: "ABC Normal, Inter, sans-serif", fontSize: 1rem, fontWeight: 400, lineHeight: 1.5 }
  small: { fontFamily: "ABC Normal, Inter, sans-serif", fontSize: 0.8125rem, fontWeight: 400, lineHeight: 1.4 }
  mono: { fontFamily: "ABC Normal Mono, JetBrains Mono, ui-monospace, monospace", fontSize: 0.75rem, letterSpacing: 0.02em }
rounded:
  sm: 4px
  md: 8px
  lg: 12px
  xl: 20px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 80px
  section: 160px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: 10px 20px
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.text}"
    border: 1px solid rgba(255,255,255,0.3)
    rounded: "{rounded.full}"
    padding: 10px 20px
  video-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: 0
---

# Runway — DESIGN.md

> Inspired by the public website of Runway (runwayml.com). Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Runway presents itself like a film studio rather than a software vendor. Pages open on black with full-bleed generated video, oversized headlines in a clean neo-grotesk set tight, and minimal white controls. Content alternates between dark cinematic sections and bright white editorial sections for research and customer stories. The app itself is a dark creative tool with thin panels and timeline-like layouts.

Adjectives: **cinematic, bold, precise, avant-garde, confident.**

## Colors
| Token | Hex | Role |
|---|---|---|
| background | `#0C0C0C` | Default dark canvas |
| surface | `#1A1A1A` | Cards, app panels |
| surface-alt | `#262626` | Hover, input fill |
| text | `#FFFFFF` | Headlines, body on dark |
| text-secondary | `#BDBDBD` | Supporting copy |
| text-muted | `#7A7A7A` | Captions, credits |
| border | `#2E2E2E` | Dividers |
| primary | `#FFFFFF` | Primary pill buttons on dark |
| accent | `#3A6FF7` | Focus/selection in the app; rare on marketing |
| light-background | `#FFFFFF` | Editorial/research sections |
| light-surface | `#F5F7FA` | Light cards |
| light-surface-alt | `#EEF1F5` | Light hover |
| light-border | `#E5E7EB` | Light dividers |

Black and white dominate. Color comes from video. Blue appears only as a functional UI accent in the product.

## Typography
- **ABC Normal** (Dinamo) for everything. Free fallback: Inter Tight for display, Inter for body.
- Mono variant for small credits/labels (fallback JetBrains Mono, uppercase 12px).

Scale: 88 / 56 / 36 / 20 / 16 / 13px. Display at weight 400 with very tight tracking (-0.04em) and sub-1.0 line height — confident without bolding. Sentence case. Captions like "Made with Gen-4" set in small mono under media.

## Layout
- Full-bleed hero video (100vh or 80vh) with headline bottom-left, CTA pair below.
- Content max width 1440px with 40px side padding; text blocks at ~640px.
- Generous 160px section spacing on marketing; carousels of video cards scroll horizontally.
- App: top bar + left tool panel (~280px), central canvas/preview, bottom timeline or asset tray.

## Elevation & Depth
Flat and cinematic. Depth from video and dark-to-black tonal steps. Overlays on video use `linear-gradient(to top, rgba(12,12,12,0.85), transparent 60%)` for text legibility. Popovers in the app: `#1A1A1A`, 1px `#2E2E2E`, `0 12px 32px rgba(0,0,0,0.5)`.

## Shapes
- Buttons: pills. Video cards: 12px radius. Large hero media: 0 (full-bleed) or 20px when inset.
- Icons: 1.5px line, minimal, 16–20px.
- Imagery: AI-generated film stills and clips — moody, high-contrast, cinematic aspect ratios (16:9, 2.39:1).

## Components
- **Primary button**: white pill, `#0C0C0C` 15px/500 text, 10px × 20px; hover `#E5E5E5`.
- **Secondary button**: transparent pill with 1px white/30% border; hover border solid white.
- **Nav**: 64px, transparent over hero then `#0C0C0C` with 80% opacity + backdrop blur on scroll; wordmark left, 14px links, "Log in" + white "Try Runway" pill right.
- **Video card**: 12px radius, autoplay muted loop, title 16px below, mono caption 12px muted.
- **Model tile (Gen-4, Act-Two…)**: dark card `#1A1A1A`, video top, name 20px, short description 14px `#BDBDBD`, arrow link.
- **App tool panel**: `#1A1A1A`, section headings 12px uppercase `#7A7A7A`, inputs `#262626` 8px radius 36px tall, sliders 2px track.
- **Prompt input**: `#262626` multi-line, 12px radius, generate button white pill with credit cost in muted text.
- **Light editorial section**: white bg, black text, `#F5F7FA` cards with 12px radius.

## Do's and Don'ts
**Do**
- Lead with full-bleed video or film stills.
- Set huge headlines at weight 400 with tight tracking.
- Use white pill CTAs on black.
- Alternate dark cinematic and white editorial sections.

**Don't**
- Don't use bright brand colors in marketing UI.
- Don't bold display headlines.
- Don't box video in heavy frames or shadows.
- Don't use playful illustrations or emoji.

## Agent Prompt Guide
**Base prompt:**
"Design like Runway: black `#0C0C0C` canvas, white text, Inter Tight at weight 400 with -0.04em tracking for huge headlines. Full-bleed cinematic video, white pill primary buttons, outline pill secondaries, `#1A1A1A` cards with 12px radius, small mono captions. Minimal, film-studio feel."

**Examples:**
- "Hero: full-screen video with a bottom gradient, 88px headline bottom-left, white 'Try Runway' pill and outline 'Learn more' pill."
- "Horizontal carousel of 16:9 video cards, 12px radius, title and mono 'Made with Gen-4' caption."
- "App generate panel: dark tool sidebar with uppercase section labels, `#262626` prompt box, white generate pill."
