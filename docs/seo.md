# SEO and site metadata

## What is wired up

| Asset / file | Purpose |
| --- | --- |
| `src/components/Seo.astro` | Canonical URL, robots, Open Graph, Twitter Card, theme-color, JSON-LD |
| `src/data/site.ts` → `seo` | Default OG image, keywords, Twitter handle, profile image |
| `src/lib/seo.ts` | Title helper, absolute URLs, structured data builders |
| `public/robots.txt` | Crawl rules + sitemap pointer |
| `public/site.webmanifest` | PWA name, icons, theme (install / browser chrome) |
| `public/images/og/default.png` | Default social preview (1200×630) |
| `public/images/og/quillo.png` | Quillo case study preview |
| `public/favicon.svg`, `favicon.ico`, `apple-touch-icon.png` | Tab and home-screen icons |
| `public/humans.txt`, `public/llms.txt` | Optional human / LLM-oriented site notes |
| `@astrojs/sitemap` | `sitemap-index.xml` at build time |
| `src/pages/404.astro` | `noindex` not-found page (Cloudflare `not_found_handling: 404-page`) |

## Per page

Each route passes `title`, `description`, and optional `image`, `type`, and `jsonLd` into `Layout`.

| Route | Structured data |
| --- | --- |
| `/` | `Person`, `WebSite`, `ProfessionalService` |
| `/work/quillo` | `Article` + custom OG image |
| `/sprint`, `/checklist`, `/audit` | `WebPage` |
| `404` | `WebPage` + `noindex` |

## After you change copy or add a page

1. Set unique `title` and `description` on the new `Layout` usage.
2. Add the route to `public/llms.txt` (optional but helpful).
3. Run `npm run build` and confirm the URL appears in `dist/sitemap-0.xml`.
4. Customize an OG PNG under `public/images/og/` (1200×630) when a page needs its own share card — edit the SVG source and re-export with sharp if needed.

## Production checks (manual)

- [Google Rich Results Test](https://search.google.com/test/rich-results) on `/`
- [opengraph.xyz](https://www.opengraph.xyz/) or LinkedIn Post Inspector for OG images
- Search Console: submit `https://faruqso.com/sitemap-index.xml`
- Confirm `site.url` in `src/data/site.ts` matches the live domain (already `https://faruqso.com`)