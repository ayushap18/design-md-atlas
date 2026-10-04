---
version: alpha
name: YouTube
description: Thumbnail-dominated video platform with clean white/dark chrome, YouTube red for brand and live signals, and pill chips throughout.
source: https://www.youtube.com
colors:
  primary: "#FF0000"
  on-primary: "#FFFFFF"
  background: "#FFFFFF"
  background-dark: "#0F0F0F"
  surface: "#F2F2F2"
  surface-dark: "#272727"
  text: "#0F0F0F"
  text-dark: "#F1F1F1"
  text-muted: "#606060"
  text-muted-dark: "#AAAAAA"
  border: "#E5E5E5"
  link: "#065FD4"
  link-dark: "#3EA6FF"
  accent: "#FF0000"
  subscribe: "#0F0F0F"
typography:
  display:
    fontFamily: "YouTube Sans, Roboto, Arial, sans-serif"
    fontSize: 2.25rem
    fontWeight: 700
    lineHeight: 1.2
  h1: { fontFamily: "YouTube Sans, Roboto", fontSize: 1.25rem, fontWeight: 700, lineHeight: 1.4 }
  h2: { fontFamily: "YouTube Sans, Roboto", fontSize: 1.25rem, fontWeight: 700, lineHeight: 1.4 }
  title: { fontFamily: "Roboto, Arial", fontSize: 1rem, fontWeight: 500, lineHeight: 1.375 }
  body: { fontFamily: "Roboto, Arial", fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.43 }
  small: { fontFamily: "Roboto, Arial", fontSize: 0.75rem, fontWeight: 400, lineHeight: 1.5 }
  mono: { fontFamily: "Roboto Mono, monospace", fontSize: 0.75rem }
rounded:
  sm: 4px
  md: 8px
  lg: 12px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
components:
  button-subscribe:
    backgroundColor: "{colors.subscribe}"
    textColor: "#FFFFFF"
    rounded: "{rounded.full}"
    padding: 0 16px
    height: 36px
  chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    height: 32px
---

# YouTube — DESIGN.md

> Inspired by the public website of YouTube. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
YouTube's interface is a neutral grid that steps aside for millions of thumbnails. Chrome is white (or #0F0F0F in dark mode), with soft grey pills for chips and secondary buttons, and a black "Subscribe" pill. Red is the logo, live badges, the progress bar and notification dots — rarely a button fill. Type is Roboto for UI, with YouTube Sans for headings and brand moments. Rounded 12px thumbnails and pill buttons give the modern, friendly feel.

Adjectives: **neutral, content-dense, familiar, rounded, efficient.**

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #FF0000 | Logo, progress bar, LIVE badge, notification count |
| background | #FFFFFF | Light mode page |
| background-dark | #0F0F0F | Dark mode page |
| surface | #F2F2F2 | Chips, secondary buttons, search button (light) |
| surface-dark | #272727 | Chips/buttons in dark mode |
| text | #0F0F0F | Titles (light) |
| text-dark | #F1F1F1 | Titles (dark) |
| text-muted | #606060 | Channel name, views, timestamps (light) |
| text-muted-dark | #AAAAAA | Same (dark) |
| border | #E5E5E5 | Dividers, search input border (#CCCCCC) |
| link | #065FD4 | Links in descriptions, blue text buttons |
| link-dark | #3EA6FF | Links in dark mode |
| subscribe | #0F0F0F | Subscribe pill (white in dark mode with black text) |

## Typography
- **Families:** Roboto (UI) and YouTube Sans (headings, brand). Free fallback: **Roboto** for both (YouTube Sans → Roboto 700 or **Rubik**).
- **Scale:** 20px watch-page title (700) / 16px grid video title (500) / 14px body & metadata / 12px small labels / 12px duration overlay (500).
- Video titles clamp to 2 lines; metadata line "1.2M views · 3 days ago" in muted 14px.
- Shelf headings ("Shorts", "Trending") 20px/700 YouTube Sans.

## Layout
- Masthead 56px: hamburger + logo left, centered search (max 640px) with mic button, create/notifications/avatar right.
- Left guide sidebar 240px (expanded) or 72px mini-guide with icons + 10px labels.
- Home grid: responsive 3–6 columns, 16px column gap, 40px row gap; 24px side padding. Chip bar under masthead, sticky.
- Watch page: player + metadata column (max ~1280px) with 402px related column on the right; theatre mode spans full width.
- Shorts shelves: 9:16 cards in a horizontal row.

## Elevation & Depth
- Flat; separation by spacing and #F2F2F2 fills.
- Menus/popups: 12px radius, `0 4px 32px rgba(0,0,0,0.1)`, background #FFF (#282828 dark).
- Player controls overlay: bottom gradient `linear-gradient(transparent, rgba(0,0,0,0.6))`.
- Hover on thumbnails starts inline preview; no lift.

## Shapes
- Thumbnails: 12px radius (8px on small related list). Avatars: circles (36px grid, 40px watch page).
- Buttons: full pills, 36px tall. Chips: 8px radius, 32px tall. Search: left input pill-start, right #F8F8F8 button pill-end.
- Icons: 24px outline Material-style; filled when active.

## Components
- **Subscribe button:** #0F0F0F fill, white 14px/500, 36px pill, 0 16px. Subscribed state: #F2F2F2 with bell icon and chevron.
- **Secondary pill (Like/Share/Download):** #F2F2F2 fill, 36px, icon + 14px/500 label; hover #E5E5E5. Like/dislike is a segmented pill with a 1px divider.
- **Chip:** #F2F2F2, 14px/500, 32px tall, 8px radius, 12px horizontal padding; selected #0F0F0F with white text.
- **Video card:** 16:9 thumbnail 12px radius with duration badge bottom-right (rgba(0,0,0,0.8), white 12px/500, 4px radius); below: 36px avatar, 2-line title 16px/500, channel + verified check 14px muted, views · age.
- **LIVE badge:** #CC0000 rectangle, white 12px/500 "LIVE", 2px radius.
- **Search:** 40px tall, 1px #CCCCCC input with pill left edge, #F8F8F8 64px search button with pill right edge; focus border #1C62B9 and inset shadow.
- **Progress bar:** 3px #FF0000 with red scrubber dot on hover; buffered rgba(255,255,255,0.4).

## Do's and Don'ts
**Do**
- Keep chrome neutral so thumbnails dominate.
- Use pills for buttons and 8px-radius chips.
- Use red only for brand, live and progress.
- Support both #FFFFFF and #0F0F0F themes with matching muted tones.

**Don't**
- Don't make primary buttons red — Subscribe is black/white.
- Don't use square thumbnails; keep 12px radius.
- Don't add borders around video cards.
- Don't exceed 2 lines on titles in grids.

## Agent Prompt Guide
**Base prompt:**
"Design a YouTube-inspired video UI: white (or #0F0F0F dark) background, Roboto 14px body, 16px/500 titles clamped to 2 lines, #606060 metadata, 16:9 thumbnails with 12px radius and dark duration badges, 36px circular avatars, #F2F2F2 pill buttons and 8px-radius chips, black Subscribe pill, red #FF0000 only for logo, LIVE and progress bar. 56px masthead with centered search and 240px left guide."

**Example component prompts:**
1. "Video grid card: thumbnail with '12:34' badge, avatar + 2-line title + 'Channel ✓' + '1.2M views · 3 days ago'."
2. "Watch-page action row: channel avatar and name with subscriber count, black Subscribe pill, then grey pills: segmented Like|Dislike, Share, Download, '...'."
3. "Chip bar: horizontally scrolling 32px chips 'All', 'Music', 'Gaming', 'Live' with 'All' selected in black."
