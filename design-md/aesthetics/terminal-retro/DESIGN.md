---
version: alpha
name: Terminal Retro
description: Phosphor-on-black CRT terminal aesthetic with monospaced everything, ASCII box-drawing borders, blinking cursors, scanlines, and keyboard-first interaction.
source: https://github.com/Swordfish90/cool-retro-term
colors:
  primary: "#33FF66"
  on-primary: "#050805"
  background: "#050805"
  surface: "#0B120C"
  text: "#33FF66"
  text-muted: "#1E9E40"
  text-dim: "#0F5222"
  border: "#1E9E40"
  accent: "#FFB000"
  danger: "#FF4D4D"
  info: "#5FD7FF"
typography:
  display:
    fontFamily: VT323
    fontSize: 4.5rem
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0
  h1: { fontFamily: VT323, fontSize: 3rem, fontWeight: 400, lineHeight: 1.1 }
  h2: { fontFamily: IBM Plex Mono, fontSize: 1.5rem, fontWeight: 700, lineHeight: 1.3 }
  h3: { fontFamily: IBM Plex Mono, fontSize: 1.125rem, fontWeight: 700, lineHeight: 1.4 }
  body: { fontFamily: IBM Plex Mono, fontSize: 1rem, fontWeight: 400, lineHeight: 1.6 }
  small: { fontFamily: IBM Plex Mono, fontSize: 0.8125rem, fontWeight: 400, lineHeight: 1.5 }
  mono: { fontFamily: IBM Plex Mono, fontSize: 1rem }
rounded:
  sm: 0px
  md: 0px
  lg: 0px
  full: 0px
spacing:
  ch: 1ch
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 48px
  section: 80px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    padding: 4px 16px
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    border: "1px solid {colors.border}"
    rounded: "{rounded.sm}"
    padding: 4px 16px
  window:
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.border}"
    padding: 16px
---

# Terminal Retro — DESIGN.md

> A style archetype, not tied to any brand.

## Overview
Terminal Retro recreates the feel of a 1980s green-phosphor CRT or a modern TUI app: everything is monospaced, aligned on a character grid, outlined with box-drawing characters, and lit by a faint glow. Interaction is keyboard-first — commands, shortcuts, prompts. It fits developer tools, CLIs' landing pages, hacker portfolios, games, and status dashboards. Amber (`#FFB000`) is a drop-in alternative phosphor.

Hold onto: **monospaced, glowing, terse, keyboard-driven, nostalgic**.

## Colors
| Token | Hex | Role |
|---|---|---|
| background | `#050805` | CRT black with a green cast |
| surface | `#0B120C` | Panels/windows |
| text / primary | `#33FF66` | Phosphor green: all primary text, active buttons |
| text-muted | `#1E9E40` | Secondary text, borders |
| text-dim | `#0F5222` | Disabled, line numbers, grid dots |
| accent | `#FFB000` | Amber: warnings, highlights, selected items |
| danger | `#FF4D4D` | Errors |
| info | `#5FD7FF` | Links/info (ANSI cyan) |

Monochrome green covers 90%; amber, red, and cyan behave like ANSI colors — tiny, semantic, never decorative. Amber variant: swap primary to `#FFB000`, muted `#B37A00`, dim `#4D3500`.

## Typography
- **Display:** VT323 (free, pixel CRT face). Alternatives: *Press Start 2P* (more 8-bit), *Silkscreen*.
- **Everything else:** IBM Plex Mono (free). Alternatives: *JetBrains Mono*, *Berkeley Mono* (paid).
- One size step per hierarchy level; emphasis via inverse video (green bg, black text) or brackets `[ ]`, not italics.
- Uppercase for headings and labels. Prefix prompts: `$`, `>`, `#`.
- Glow: `text-shadow: 0 0 2px #33FF66, 0 0 8px rgba(51,255,102,0.45)`.

## Layout
- Character grid: size containers in `ch` units (e.g. 80ch max for content, the classic terminal width).
- Left-aligned, top-down, like output scrolling in a shell.
- Split panes (TUI style): sidebar 24ch, main pane, status bar 1 line at bottom.
- Spacing in multiples of one line height (1.6em).

## Elevation & Depth
- No shadows. Depth via inverse video and borders.
- CRT effects (optional, keep subtle): scanlines `repeating-linear-gradient(0deg, rgba(0,0,0,0.25) 0 1px, transparent 1px 3px)`; vignette `radial-gradient(ellipse, transparent 60%, rgba(0,0,0,0.6))`; slight flicker animation at opacity 0.97–1.
- Respect `prefers-reduced-motion`: disable flicker and cursor blink.

## Shapes
- 0px radius. Borders are 1px solid lines or literal box-drawing characters (`┌─┐ │ └─┘`, `╔═╗` for focused).
- Icons are ASCII/Unicode glyphs: `▶ ■ ● ✓ ✗ → ░▒▓`.
- Imagery: ASCII art, dithered 1-bit images tinted green (`filter: grayscale(1) sepia(1) hue-rotate(70deg) saturate(6)`).

## Components
- **Primary button:** inverse video — green bg, black text, uppercase, `[ ENTER ]` brackets, 0 radius. Hover: amber bg. Focus: blinking `▌` before label.
- **Ghost button:** 1px muted border, green text; hover inverse.
- **Window/panel:** surface bg, 1px `#1E9E40` border, title inset into top border: `┌─[ SYSTEM ]──────┐`.
- **Prompt input:** no box; `$ ` prefix, green text, blinking block cursor `█` (steps(1) 1s animation), caret-color transparent.
- **Menu list:** items prefixed with number keys `[1] Projects`; selected row inverse video.
- **Progress bar:** `[██████░░░░] 60%` rendered in text.
- **Status bar:** 1 line, inverse video, left mode (`NORMAL`), right clock and shortcuts (`^Q quit`).
- **Table:** monospace columns aligned with spaces, header underline `─`.

## Do's and Don'ts
**Do**
- Use a monospaced font for every element.
- Size layouts in `ch` and line heights.
- Offer keyboard shortcuts and show them inline.
- Keep color semantic (ANSI style).

**Don't**
- Don't round corners or use soft shadows.
- Don't use proportional fonts, even for marketing copy.
- Don't overdo CRT effects — readability first.
- Don't use more than one phosphor color as the base.

## Agent Prompt Guide
**Base prompt:**
"Use a retro terminal style: CRT black #050805 background, phosphor green #33FF66 text with subtle glow, muted #1E9E40 borders, amber #FFB000 for highlights. All type monospaced — IBM Plex Mono body, VT323 for big headings, uppercase labels. 0px radius, box-drawing borders, inverse-video buttons like [ ENTER ], blinking block cursor, faint scanlines, 80ch max width, keyboard shortcuts shown inline."

**Examples:**
- "Landing page: ASCII-art logo, '$ install mytool' prompt with copy action, numbered menu [1] Docs [2] GitHub [3] Changelog, status bar at bottom."
- "Server dashboard: TUI split panes — services list with ● status dots, log output pane, text progress bars for CPU/RAM."
- "Contact form styled as a shell session: each field is a prompt line, submit as [ SEND ]."
