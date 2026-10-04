---
version: alpha
name: Anthropic / Claude
description: Warm, bookish minimalism — ivory paper, near-black ink, and a single terracotta "clay" accent, set in a humanist sans and an editorial serif.
source: https://www.anthropic.com
colors:
  primary: "#141413"
  on-primary: "#FAF9F5"
  background: "#FAF9F5"
  surface: "#F0EEE6"
  surface-alt: "#E8E6DC"
  text: "#141413"
  text-secondary: "#3D3D3A"
  text-muted: "#87867F"
  border: "#D1CFC5"
  border-subtle: "#E8E6DC"
  accent: "#D97757"
  accent-strong: "#C6613F"
  link: "#3898EC"
  dark-background: "#141413"
  dark-surface: "#262624"
typography:
  display:
    fontFamily: Anthropic Serif, Tiempos Headline, Source Serif 4, Georgia, serif
    fontSize: 4.5rem
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -0.02em
  h1: { fontFamily: "Anthropic Serif, Source Serif 4, Georgia, serif", fontSize: 3rem, fontWeight: 400, lineHeight: 1.1 }
  h2: { fontFamily: "Anthropic Sans, Styrene B, Inter, sans-serif", fontSize: 2rem, fontWeight: 500, lineHeight: 1.2, letterSpacing: -0.01em }
  h3: { fontFamily: "Anthropic Sans, Styrene B, Inter, sans-serif", fontSize: 1.375rem, fontWeight: 500, lineHeight: 1.3 }
  body: { fontFamily: "Anthropic Sans, Styrene B, Inter, sans-serif", fontSize: 1.0625rem, fontWeight: 400, lineHeight: 1.55 }
  body-serif: { fontFamily: "Anthropic Serif, Source Serif 4, Georgia, serif", fontSize: 1.125rem, fontWeight: 400, lineHeight: 1.6 }
  label: { fontFamily: "Anthropic Sans, Inter, sans-serif", fontSize: 0.8125rem, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0.01em }
  mono: { fontFamily: "Anthropic Mono, JetBrains Mono, ui-monospace, monospace", fontSize: 0.875rem }
rounded:
  sm: 4px
  md: 8px
  lg: 12px
  xl: 24px
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
    rounded: "{rounded.md}"
    padding: 10px 18px
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.text}"
    border: 1px solid {colors.text}
    rounded: "{rounded.md}"
    padding: 10px 18px
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: 32px
  chat-input:
    backgroundColor: "#FFFFFF"
    border: 1px solid {colors.border}
    rounded: "{rounded.xl}"
    padding: 16px 20px
---

# Anthropic / Claude — DESIGN.md

> Inspired by the public website of Anthropic (anthropic.com, claude.ai). Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Anthropic's visual language reads like a well-made research journal printed on cream stock. Backgrounds are warm off-whites rather than pure white, type is near-black with a faint brown undertone, and color appears almost exclusively as one burnt-orange "clay" tone. Pages are calm and spacious, with long-form text treated as a first-class element. Illustrations are hand-drawn, loose-line and organic — never glossy 3D or neon gradients.

Adjectives to hold onto: **warm, literate, unhurried, humane, restrained.**

## Colors
| Token | Hex | Role |
|---|---|---|
| background | `#FAF9F5` | Default page "ivory" |
| surface | `#F0EEE6` | Cards, feature panels, footer bands |
| surface-alt | `#E8E6DC` | Hover fills, dividers, tag backgrounds |
| text / primary | `#141413` | Body copy, headlines, solid buttons |
| text-secondary | `#3D3D3A` | Subheads, captions |
| text-muted | `#87867F` | Metadata, timestamps, placeholder text |
| border | `#D1CFC5` | Input outlines, card borders when needed |
| accent | `#D97757` | Clay: the Claude spark mark, highlights, illustration fills |
| accent-strong | `#C6613F` | Hovered accent, accent text on ivory |
| link | `#3898EC` | Rare; inline links in docs contexts |
| dark-background | `#141413` | Dark sections and dark-mode app shell |
| dark-surface | `#262624` | Cards and inputs in dark mode |

Neutrals dominate ~90% of any screen. Clay is an accent: use it for the logo, one highlight per view, or an illustration — not for every button. Supporting illustration tints include sage (`#BCD1CA`), oat (`#E3DACC`) and a soft sky (`#6A9BCC`), always muted.

## Typography
- **Serif** (Anthropic Serif; historically Tiempos) for display headlines and long-form editorial passages. Free fallback: Source Serif 4 or Newsreader.
- **Sans** (Anthropic Sans; historically Styrene B) for UI, nav, buttons, and most body text. Free fallback: Inter, or "Söhne"-like Hanken Grotesk.
- **Mono** for code and model names. Fallback: JetBrains Mono.

Scale: 72 / 48 / 32 / 22 / 17 / 13px. Display headlines are regular weight (400) — the serif carries authority without bolding. Sans headings use 500. Sentence case everywhere; no all-caps headlines. Eyebrow labels may be small sans at 13px, weight 500, normal case.

## Layout
- Max content width ~1200px; long-form articles constrained to ~680px measure.
- 12-column grid with 24px gutters on desktop; single column under 768px with 20px side padding.
- Generous vertical rhythm: 96–128px between major sections, 32px within.
- Left-aligned text is the norm; centered only for short hero statements.
- Split layouts (text left, illustration right) are common for feature sections.

## Elevation & Depth
Nearly flat. Depth comes from tonal steps (`#FAF9F5` → `#F0EEE6` → `#E8E6DC`), not shadows. When a floating element is needed (menus, the chat composer), use a soft, wide shadow: `0 4px 20px rgba(20,20,19,0.06)` plus a 1px `#E8E6DC` border. No glassmorphism, no glows.

## Shapes
- Buttons and inputs: 8px radius. Cards: 12–16px. The Claude chat composer: 20–24px.
- Icons: thin (1.5px) line icons, rounded caps.
- Imagery: hand-drawn line illustrations with clay, sage and oat fills; organic blobs, hands, nodes. Photography is rare and desaturated.
- The asterisk-like "spark" mark is the signature shape — keep it in clay.

## Components
- **Primary button**: `#141413` fill, `#FAF9F5` text, 8px radius, 10px × 18px padding, sans 15px/500. Hover: `#3D3D3A`.
- **Secondary button**: transparent with 1px `#141413` border; hover fills `#F0EEE6`.
- **Accent button (Claude app only)**: `#C6613F` fill with white text, used for one key action like "Start chatting".
- **Nav**: 64px tall, ivory background, logo left, text links (15px, `#3D3D3A`) center/right, primary button far right. No bottom border until scrolled; then 1px `#E8E6DC`.
- **Cards**: `#F0EEE6` fill, 12px radius, 32px padding, no border. Card title in sans 22px/500, body 16px `#3D3D3A`.
- **Chat composer**: white field on ivory, 1px `#D1CFC5` border, 24px radius, 16px × 20px padding, send button a 32px clay-filled rounded square with an up-arrow.
- **Message bubbles**: user turns in a `#F0EEE6` rounded block (16px radius); assistant turns render as plain serif-free body text on the page, no bubble.
- **Tags / pills**: `#E8E6DC` fill, `#3D3D3A` text, full radius, 4px × 10px, 13px.
- **Inputs**: 40px tall, white, 1px `#D1CFC5`, 8px radius; focus ring 2px `#D97757` at 40% opacity.

## Do's and Don'ts
**Do**
- Use `#FAF9F5` as page background, never `#FFFFFF`, for marketing surfaces.
- Pair a serif headline with sans body text.
- Keep clay to one or two moments per viewport.
- Leave large margins; let paragraphs breathe at a 680px measure.

**Don't**
- Don't use saturated blues, purples or gradients as brand color.
- Don't add drop shadows to cards.
- Don't bold the serif display face.
- Don't use stock photography or 3D renders; prefer line illustration.

## Agent Prompt Guide
**Base prompt:**
"Design in the spirit of Anthropic/Claude: warm ivory background `#FAF9F5`, near-black text `#141413`, a single clay accent `#D97757`. Serif display headlines (Source Serif 4, weight 400), Inter for UI and body. Flat surfaces in `#F0EEE6` with 12px radius, no shadows, generous whitespace, hand-drawn line illustration style."

**Examples:**
- "Hero: 72px serif headline in `#141413`, 18px sans subhead in `#3D3D3A`, a black 8px-radius button and an outlined secondary button, line illustration on the right."
- "Chat screen: ivory page, user messages in `#F0EEE6` rounded blocks, assistant text plain on the page, a white 24px-radius composer pinned to the bottom with a clay send button."
- "Three research cards on `#F0EEE6`, 12px radius, date in 13px `#87867F`, title in 22px sans/500, no borders or shadows."
