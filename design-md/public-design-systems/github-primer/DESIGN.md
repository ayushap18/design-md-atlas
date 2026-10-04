---
version: alpha
name: GitHub Primer
description: "GitHub's design system: system-font, information-dense developer UI with a white canvas, cool grays, a blue accent and a green primary action."
source: https://primer.style
colors:
  primary: "#1F883D"
  primary-hover: "#1C8139"
  on-primary: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#F6F8FA"
  inset: "#F6F8FA"
  emphasis: "#25292E"
  text: "#1F2328"
  text-muted: "#59636E"
  border: "#D1D9E0"
  border-muted: "#D1D9E0B3"
  accent: "#0969DA"
  accent-subtle: "#DDF4FF"
  success: "#1A7F37"
  attention: "#9A6700"
  attention-subtle: "#FFF8C5"
  severe: "#BC4C00"
  danger: "#D1242F"
  done: "#8250DF"
  sponsors: "#BF3989"
typography:
  display:
    fontFamily: Mona Sans
    fontSize: 2.5rem
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  h1: { fontFamily: -apple-system, fontSize: 2rem, fontWeight: 600, lineHeight: 1.5 }
  h2: { fontFamily: -apple-system, fontSize: 1.25rem, fontWeight: 600, lineHeight: 1.6 }
  h3: { fontFamily: -apple-system, fontSize: 1rem, fontWeight: 600, lineHeight: 1.5 }
  body: { fontFamily: -apple-system, fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.43 }
  body-large: { fontFamily: -apple-system, fontSize: 1rem, fontWeight: 400, lineHeight: 1.5 }
  caption: { fontFamily: -apple-system, fontSize: 0.75rem, fontWeight: 400, lineHeight: 1.33 }
  mono: { fontFamily: ui-monospace, fontSize: 0.75rem, lineHeight: 1.45 }
rounded:
  sm: 3px
  md: 6px
  lg: 12px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 40px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    height: 32px
    padding: 0 12px
  button-default:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    border: 1px solid {colors.border}
    rounded: "{rounded.md}"
    height: 32px
  text-input:
    backgroundColor: "{colors.background}"
    border: 1px solid {colors.border}
    rounded: "{rounded.md}"
    height: 32px
    padding: 0 12px
  box:
    backgroundColor: "{colors.background}"
    border: 1px solid {colors.border}
    rounded: "{rounded.md}"
  label:
    border: 1px solid {colors.border}
    rounded: "{rounded.full}"
    height: 20px
    padding: 0 7px
---

# GitHub Primer — DESIGN.md

> Inspired by the public website of GitHub Primer. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Primer is built for people who read code all day. It is dense, quiet and legible: a white canvas, cool neutral grays, hairline borders around everything, and color that encodes state (open green, merged purple, closed red). The UI defers to content — diffs, issues, file trees — and the chrome stays low-contrast.

Adjectives to hold: **utilitarian, dense, legible, cool, honest.**

Primer has light, dark, dimmed, high-contrast and colorblind themes; tokens are functional (`fgColor-default`, `bgColor-muted`, `borderColor-default`) so components recolor automatically.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary (button-primary-bg) | `#1F883D` | The single green "do it" button per view |
| primary-hover | `#1C8139` | Hover |
| background (bgColor-default) | `#FFFFFF` | Canvas |
| surface (bgColor-muted) | `#F6F8FA` | Headers of boxes, default buttons, code blocks |
| emphasis (bgColor-emphasis) | `#25292E` | Tooltips, dark header |
| text (fgColor-default) | `#1F2328` | Primary text |
| text-muted (fgColor-muted) | `#59636E` | Metadata, timestamps, secondary labels |
| border (borderColor-default) | `#D1D9E0` | Box and input borders |
| accent (fgColor-accent) | `#0969DA` | Links, selected tabs, focus ring |
| accent-subtle | `#DDF4FF` | Selected rows, info banners |
| success | `#1A7F37` | Open state, additions |
| attention | `#9A6700` | Warnings (bg `#FFF8C5`) |
| severe | `#BC4C00` | High-severity alerts |
| danger | `#D1242F` | Closed, destructive, deletions |
| done | `#8250DF` | Merged / completed |
| sponsors | `#BF3989` | Sponsors heart |

Dominant: white and `#F6F8FA` with `#D1D9E0` lines. Green appears once per screen; blue is links and focus. Diff backgrounds: added `#DAFBE1`, removed `#FFEBE9`.

## Typography
- Product UI uses the native system stack: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif`.
- Code: `ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace` at 12px (diffs) or 13.6px (markdown).
- Marketing pages use **Mona Sans** (variable, free) and Hubot Sans for display.
- Scale: caption 12/16, body-small 12/20, body-medium 14/20, body-large 16/24, title-small 16/24 600, title-medium 20/32 600, title-large 32/48 600, display 40/56 500.
- Weights: 400 and 600 only in product. No italics in chrome.
- Sentence case for buttons and headings; repo names and code keep their own case.

## Layout
- Breakpoints: sm 544, md 768, lg 1012, xl 1280, xxl 1400.
- Page container max widths 1012px (issue pages) and 1280px (repo pages); full width for code views.
- Repo layout: main column plus a 296px sidebar (`Layout` component, 24px gap).
- Spacing base is 4px: 4, 8, 16, 24, 32, 40, 48. Most component padding is 8px or 16px.
- Lists of rows (issues, PRs, files) at ~40–56px each with 1px separators; density is a feature.

## Elevation & Depth
- Borders over shadows: nearly every container is a 1px `#D1D9E0` box.
- Resting shadow (buttons): `0 1px 0 0 #1F23280A` — barely there.
- Overlay shadow (menus, dialogs): `0 0 0 1px #D1D9E080, 0 6px 12px -3px #25292E0A, 0 6px 18px 0 #25292E1F`.
- Backdrop for dialogs: `rgba(31,35,40,0.5)` in light mode.
- Focus: `outline: 2px solid #0969DA; outline-offset: -2px`.

## Shapes
- Radius 6px is the default for buttons, inputs, boxes; 3px for tiny elements; 12px for dialogs and large cards; full for labels, counters and avatars.
- Avatars are circles for users and 6px rounded squares for orgs/bots.
- Icons: **Octicons**, 16px and 24px, 1.5px-ish strokes with rounded joins, monochrome in `fgColor-muted`.
- Imagery is rare in product; marketing uses dark, glowing 3D renders.

## Components
- **Primary button**: `#1F883D`, white 14px/600 text, 32px tall, 12px horizontal padding, 6px radius, 1px `#1F232826` border. Hover `#1C8139`. Small 28px, large 40px.
- **Default button**: `#F6F8FA` bg, `#1F2328` text, 1px `#D1D9E0` border; hover `#EFF2F5`.
- **Danger button**: default look with `#D1242F` text; fills red on hover.
- **Invisible button**: no bg, no border, blue or muted text — used in toolbars.
- **Text input**: white, 1px `#D1D9E0` border, 6px radius, 32px tall, 14px text; focus swaps the border to `#0969DA` with a 2px outline.
- **Box**: 1px border, 6px radius; header row `#F6F8FA` with bottom border; rows separated by 1px lines.
- **Label**: pill, 1px border, 12px/500, 20px tall. Colored variants use the matching fg + border.
- **State badge**: pill 32px tall with icon — Open `#1F883D`, Merged `#8250DF`, Closed `#CF222E`, Draft `#59636E`, white text.
- **Counter**: 18px pill, `#818B981F` bg, 12px text, beside tab labels.
- **UnderlineNav**: 48px tall, selected tab has 2px `#FD8C73` (coral) underline and 600 weight.
- **Flash banner**: 1px border + subtle bg in state color, 6px radius, 16px padding.

## Do's and Don'ts
**Do**
- Wrap related content in 1px bordered boxes with 6px radius.
- Use the system font stack; reserve Mona Sans for marketing.
- Keep one green primary button per view.
- Encode state with the fixed color set (green/purple/red/gray).
- Keep rows dense and scannable.

**Don't**
- Don't use large shadows on in-page cards.
- Don't color links anything but `#0969DA`.
- Don't use more than 600 weight.
- Don't round inputs beyond 6px or make buttons pills.
- Don't use the coral underline outside of nav tabs.

## Agent Prompt Guide
Paste-ready:
> Build in the style of GitHub Primer (light). System font stack, 14px/20px body, `#1F2328` text, `#59636E` secondary. White canvas, `#F6F8FA` muted surfaces, `#D1D9E0` 1px borders, 6px radius. Links and focus `#0969DA`. One green `#1F883D` primary button, 32px tall. Octicon-style 16px icons. Dense rows, minimal shadows.

Example component prompts:
1. "An issue list: bordered box, `#F6F8FA` header with 'Open 12 / Closed 40' toggles, rows with a green open-issue icon, 16px/600 title link, 12px muted meta line, and pill labels on the right."
2. "A repo header: owner/name in 20px with name in 600, Watch/Fork/Star default buttons with counters, then an UnderlineNav with a coral 2px selected indicator."
3. "A PR state badge set: Open (green), Merged (purple `#8250DF`), Closed (red), Draft (gray), each a white-text pill with a 16px icon."
