---
version: alpha
name: Brand Name
description: One sentence describing the visual identity.
source: https://example.com
colors:
  primary: "#000000"
  on-primary: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#F5F5F5"
  text: "#111111"
  text-muted: "#6B6B6B"
  border: "#E5E5E5"
  accent: "#0055FF"
typography:
  display:
    fontFamily: Inter
    fontSize: 4rem
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -0.03em
  h1: { fontFamily: Inter, fontSize: 2.5rem, fontWeight: 600, lineHeight: 1.1 }
  body: { fontFamily: Inter, fontSize: 1rem, fontWeight: 400, lineHeight: 1.5 }
  mono: { fontFamily: JetBrains Mono, fontSize: 0.875rem }
rounded:
  sm: 4px
  md: 8px
  lg: 16px
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
    padding: 12px 20px
---

# Brand Name — DESIGN.md

> Inspired by the public website of Brand Name. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Mood, personality, density, the 3–5 adjectives an agent should hold onto.

## Colors
Table of every token with hex and role. Note which colors dominate vs. accent-only.

## Typography
Font families (with free fallbacks), the type scale, weights, tracking, casing rules.

## Layout
Grid, max widths, section spacing, density, alignment habits.

## Elevation & Depth
Shadows, borders, blur, layering approach.

## Shapes
Corner radii, iconography style, imagery treatment.

## Components
Buttons, inputs, cards, nav, badges, etc. with concrete values and states.

## Do's and Don'ts
Bullet lists. Concrete, testable rules.

## Agent Prompt Guide
A short paste-ready prompt plus 2–3 example component prompts.
