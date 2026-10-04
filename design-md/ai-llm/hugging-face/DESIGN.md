---
version: alpha
name: Hugging Face
description: Friendly open-source hub — clean white and slate-gray product UI, a sunny yellow emoji mascot, and dense, card-based listings with colorful task tags.
source: https://huggingface.co
colors:
  primary: "#FFD21E"
  on-primary: "#1F2937"
  background: "#FFFFFF"
  surface: "#F9FAFB"
  surface-alt: "#F3F4F6"
  text: "#111827"
  text-secondary: "#4B5563"
  text-muted: "#6B7280"
  border: "#E5E7EB"
  accent-orange: "#FF9D00"
  link: "#2563EB"
  success: "#10B981"
  danger: "#EF4444"
  purple: "#8B5CF6"
  dark-background: "#0B0F19"
  dark-surface: "#111827"
  dark-border: "#1F2937"
typography:
  display:
    fontFamily: Source Sans Pro, Source Sans 3, ui-sans-serif, system-ui, sans-serif
    fontSize: 3.5rem
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.01em
  h1: { fontFamily: "Source Sans 3, ui-sans-serif, sans-serif", fontSize: 2.25rem, fontWeight: 700, lineHeight: 1.2 }
  h2: { fontFamily: "Source Sans 3, ui-sans-serif, sans-serif", fontSize: 1.5rem, fontWeight: 600, lineHeight: 1.3 }
  h3: { fontFamily: "Source Sans 3, ui-sans-serif, sans-serif", fontSize: 1.125rem, fontWeight: 600, lineHeight: 1.4 }
  body: { fontFamily: "Source Sans 3, ui-sans-serif, sans-serif", fontSize: 1rem, fontWeight: 400, lineHeight: 1.5 }
  small: { fontFamily: "Source Sans 3, ui-sans-serif, sans-serif", fontSize: 0.8125rem, fontWeight: 400, lineHeight: 1.4 }
  mono: { fontFamily: "IBM Plex Mono, ui-monospace, SFMono-Regular, monospace", fontSize: 0.875rem }
rounded:
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 24px
  xl: 48px
components:
  button-primary:
    backgroundColor: "{colors.text}"
    textColor: "#FFFFFF"
    rounded: "{rounded.lg}"
    padding: 6px 14px
  button-secondary:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.text}"
    border: 1px solid {colors.border}
    rounded: "{rounded.lg}"
    padding: 6px 14px
  repo-card:
    backgroundColor: "{colors.surface}"
    border: 1px solid {colors.border}
    rounded: "{rounded.lg}"
    padding: 12px 16px
  tag:
    backgroundColor: "{colors.surface-alt}"
    rounded: "{rounded.md}"
    padding: 2px 8px
---

# Hugging Face — DESIGN.md

> Inspired by the public website of Hugging Face. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Hugging Face is GitHub for machine learning with an emoji for a face. The product UI is a Tailwind-flavored gray scale — white canvas, slate text, hairline borders — packed with dense lists of models, datasets and Spaces. Warmth comes from the 🤗 mascot's yellow, playful gradient thumbnails on Spaces, and colorful task tags. It is a working tool for engineers first, so information density beats spectacle.

Adjectives: **friendly, open, dense, practical, community-driven.**

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | `#FFD21E` | Mascot yellow — logo, highlights, "Pro" badges |
| accent-orange | `#FF9D00` | Mascot shading, gradient pairs with yellow |
| background | `#FFFFFF` | Canvas |
| surface | `#F9FAFB` | Repo cards, sidebars |
| surface-alt | `#F3F4F6` | Tags, hovers, code backgrounds |
| text | `#111827` | Primary text, dark buttons |
| text-secondary | `#4B5563` | Secondary text |
| text-muted | `#6B7280` | Meta (downloads, likes, updated) |
| border | `#E5E7EB` | Card and input borders |
| link | `#2563EB` | Links in model cards/READMEs |
| success / danger | `#10B981` / `#EF4444` | Status (Space running / error) |
| dark-background | `#0B0F19` | Dark mode canvas |
| dark-surface | `#111827` | Dark cards |

Gray scale is 95% of the UI. Yellow is the brand flash. Task tags each carry a soft tint (indigo for NLP, green for audio, orange for vision, etc.) on a light background.

## Typography
- **Source Sans 3** (formerly Source Sans Pro) for all UI — free on Google Fonts.
- **IBM Plex Mono** for repo names in code, snippets, file trees.

Scale: 56 / 36 / 24 / 18 / 16 / 13px. Bold (700) display headlines on marketing pages; product pages use 600 for titles. Repo identifiers render as `org / model-name` with the org in muted gray and model name in 600 weight. Sentence case.

## Layout
- Full-width app with a 1440px max container, 16–24px padding.
- Listing pages: left filter sidebar (~280px, task categories with icons) + main grid of repo cards (1–2 columns of compact rows).
- Repo page: header with name, like button and tags; tab bar (Model card, Files, Community); two columns — README (≈ 2/3) and a right rail for widgets/inference.
- Spacing is tight: 8–12px between list items, 24px between sections.

## Elevation & Depth
Flat; borders do the work. Cards use 1px `#E5E7EB` and a subtle gradient from `#F9FAFB` to white on hover. Dropdowns: `0 10px 15px -3px rgba(0,0,0,0.1)` (Tailwind shadow-lg) with 12px radius. Spaces thumbnails use bold gradients as their own depth.

## Shapes
- Buttons and cards: 8–12px radius. Tags: 6–8px. Avatars: full circle (users) or 8px rounded square (orgs).
- Icons: small solid/line glyphs (12–16px), often colored per task.
- Imagery: the 🤗 emoji mascot, gradient Space cards with a big emoji in the center, user avatars.

## Components
- **Primary button**: `#111827` fill, white 14px/600 text, 12px radius, 32px height. Hover: `#374151`.
- **Secondary button**: white, 1px `#E5E7EB`, gradient hover to `#F9FAFB`. Like button shows a heart and count in a split pill.
- **Nav**: 56px white bar, logo + "Hugging Face" wordmark left, full search field ("Search models, datasets, users…") ~300px, then Models / Datasets / Spaces / Docs / Pricing links with small icons, avatar right.
- **Repo card (list row)**: `#F9FAFB` → white gradient, 1px border, 12px radius, 12×16px padding. Line 1: avatar + `org/name` in mono-ish 600. Line 2: task tag · "Updated 3 days ago" · ↓ downloads · ♥ likes in 13px muted.
- **Tag**: `#F3F4F6` fill, 8px radius, 13px text, leading colored icon.
- **Space card**: 16px radius, full gradient background (e.g. `from-yellow-400 to-orange-500`), centered emoji, title white bold, status badge "Running" top-right.
- **Inputs**: 36px, 1px border, 8px radius, focus ring 2px `#93C5FD`.
- **Badge "PRO"**: yellow-to-orange gradient, 4px radius, uppercase 10px bold.

## Do's and Don'ts
**Do**
- Keep the UI gray, bordered and information-dense.
- Show metadata (downloads, likes, updated) as compact icon rows.
- Use the yellow mascot and emoji for warmth.
- Use Tailwind-like gray tokens consistently.

**Don't**
- Don't make large, sparse marketing heroes inside product pages.
- Don't recolor the brand yellow to orange or gold-brown.
- Don't use heavy shadows on list items.
- Don't use serif type.

## Agent Prompt Guide
**Base prompt:**
"Design like Hugging Face: white canvas, Tailwind gray scale (`#111827` text, `#6B7280` meta, `#E5E7EB` borders), Source Sans 3, a sunny `#FFD21E` brand accent and 🤗 emoji. Dense list rows with 12px radius, 1px borders, small colored task tags, dark `#111827` primary buttons."

**Examples:**
- "Model list: left task-filter sidebar, main column of repo rows showing `org/model`, task tag, updated time, downloads and likes."
- "Space gallery: 3-column grid of 16px-radius gradient cards with a centered emoji, title and green 'Running' badge."
- "Repo header: name with copy button, like split-pill, tag row, tabs 'Model card · Files · Community' with 2px underline on active."
