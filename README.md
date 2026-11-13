# Faruq — Portfolio (Astro)

Personal portfolio scaffolded with **Astro** and a **token-based design system** tuned for Apple-style clarity (system typography, materials, restrained motion).

## Quick start

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:4321`).

## Project structure

- `src/styles/tokens.css` — design tokens (map from Figma variables here).
- `src/styles/global.css` — base styles and utilities.
- `src/data/site.ts` — site copy, nav, projects.
- `src/components/` — reusable UI.
- `docs/design-system.md` — how tokens, Figma, and extension fit together.

## Contact form

Enquiries are sent through [Web3Forms](https://web3forms.com) — no server, works on any
static host. To switch it on:

1. Go to [web3forms.com](https://web3forms.com) and enter `faruq.soremekun@gmail.com`.
2. Copy the access key that arrives by email.
3. Paste it into `formAccessKey` in `src/data/site.ts` and redeploy.

Until that key is set, the form falls back to opening the visitor's own email app.
The key is safe to commit: it only ever delivers to the address it was issued for.

## Next steps

1. Write the remaining **case studies** in `src/data/caseStudies.ts` (only MightyOcto is complete).
2. Add real **case-study imagery** under `public/images/case/`.

Design reference: [My Portfolio (Figma)](https://www.figma.com/design/vhlLgMolyG4hGXv8VqLcl0/My-Portfolio?node-id=4042-185337)

## Commands

| Command | Action |
| --- | --- |
| `npm run dev` | Start dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build |
