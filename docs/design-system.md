# Portfolio design system (Astro)

This site is token-first: **change Figma-mapped values once** in `src/styles/tokens.css` and every component inherits them.

## Layers

| Layer | Role |
| --- | --- |
| **Tokens** (`tokens.css`) | Color, type scale, spacing, radii, elevation, blur materials, motion. |
| **Global** (`global.css`) | Reset, typography utilities, layout helpers, reduced-motion. |
| **Data** (`src/data/site.ts`) | Copy, navigation, projects — keep UI dumb and data-driven. |
| **Components** (`src/components/*.astro`) | Button, header, cards — use tokens only (no magic numbers in CSS when avoidable). |

## Mapping from Figma

1. Export or list **Figma variables** (color, spacing, radius, blur).
2. For each variable, set the matching custom property in `tokens.css` (e.g. `--color-accent`, `--radius-lg`).
3. If you add a new semantic token, **reference it from components** instead of raw hex.

Optional: paste your variable table into this doc for quick reference.

## Apple-style foundations (web)

Aligned with the **apple-design** skill you used in Figma:

- **Typography**: System stack; display sizes use tighter leading and negative tracking; body stays near default tracking.
- **Materials**: Header uses semi-opaque surface + `backdrop-filter` + light edge; `prefers-reduced-transparency` falls back to solid.
- **Motion**: Short press feedback on buttons (`:active` scale); full `prefers-reduced-motion` support.
- **Accessibility**: Skip link, focus rings, semantic sections.

For future gesture-heavy UI (sheets, drag), prefer spring libraries that animate from the **current presentation value** (see apple-design skill); avoid CSS-only transitions on gesture-driven surfaces.

## Extending

- New page: use `Layout.astro`, import `navItems` or extend `navItems` in `site.ts`.
- New component: import tokens via `global.css` (already in layout) or add a scoped `<style>` that only references `var(--...)`.
- New section on home: add a `<section>` with `aria-labelledby` and reuse `.container`, `.stack`, `.text-*`.

## Figma file

Design file: [My Portfolio](https://www.figma.com/design/vhlLgMolyG4hGXv8VqLcl0/My-Portfolio?node-id=4042-185337)

When the Figma MCP or exports are available, replace placeholder copy and token hex values to match the file pixel-perfect.
