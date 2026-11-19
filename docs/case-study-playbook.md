# Case study storytelling playbook

Patterns distilled from strong UX/product portfolios (UXfolio, UX Case, Treehouse, Charlie Gedeon) and how they map to this site.

## What great portfolios optimize for

1. **Judgment** — alternatives considered, tradeoffs named, why this path won.
2. **Communication** — how you worked with founders, PMs, engineers; what changed after feedback.
3. **Honest impact** — metrics when real; pilot signals when scoped; explicit when it's a concept with no production data.

## Recommended arc (this site)

| Beat | Reader question | Your template |
| --- | --- | --- |
| **Hook** | Why should I care? | One-line summary + role/facts |
| **Stake** | Who hurt, and how? | Problem (human + business, not generic) |
| **Turn** | What did you decide? | Decision (title = the insight) |
| **Proof** | Show, don't dump | Deliverables + gallery tied to captions |
| **Truth** | Did it work? | Result without invented numbers |
| **Maturity** | Can I trust you? | Reflection (optional but strong) |

**Headings are headlines.** "The context" is a placeholder; prefer titles like *Brand first, then AI as co-pilot beside the writer*.

## Per-project direction

### MightyOcto (flagship — **deep narrative + gallery**)

- **Angle:** One designer spanning brand → SaaS UI → Framer marketing site while devs ship in parallel.
- **Show:** Brand system payoff on dashboard + editor; AI positioned as co-pilot, not takeover.
- **Decision sections to sharpen:** alternatives you rejected (e.g. AI inside editor vs side panel).
- **Impact:** repeat engagement + v1.5 scope; no vanity metrics.
- **Format:** Standard `CaseStudyPage` + existing gallery. Already the richest page — tune headings further.

### Quillo (signature — **interactive story**)

- **Angle:** Self-initiated; designing within a real constraint (no Sanity OAuth).
- **Show:** Custom page (prototypes, phone frames) — motion proves the loop, not decoration.
- **Honesty:** Label concept; prototype validation only if you add it later.
- **Format:** Keep bespoke `/work/quillo`; add reflection block when you have one.

### Ishasplace ( **operations + trust** )

- **Angle:** Long-lived client: brand (2021) → ecommerce + booking + admin — design *and* build.
- **Show:** Before/after or booking flow; owner dashboard if allowed.
- **Decision:** Why this booking/shop architecture for a spa (speed, mobile, staff workflow).
- **Impact:** qualitative (less phone tag, online bookings) if no metrics.
- **Format:** Standard template; replace all `[pending]` blocks first.

### Padel Peer & Reedo ( **design-only, client-built** )

- **Angle:** Redesign where you own UX/UI, handoff to client engineering — credibility via clarity of specs and rationale.
- **Show:** Key screens that changed conversion narrative or product IA; fewer screens, stronger captions.
- **Decision:** what was wrong with the old site/product; what you simplified or reframed.
- **Impact:** "Shipped by client team" + outcome if client shares it; otherwise scope + learnings.
- **Format:** Shorter pages OK — depth beats length. Same template, 2–3 hero visuals each.

## Two templates on this site

| Template | When |
| --- | --- |
| `CaseStudyPage` | Client work with problem → decision → deliverables → result |
| Custom (Quillo) | Concepts needing interaction, multi-flow demos, or distinct art direction |

Add a third custom page only when interaction or art direction demands it (e.g. MightyOcto could graduate to custom later if you add scroll-linked brand story).

## Homepage

Work cards link to `/work/[slug]` only — no modal. Keeps URLs shareable and SEO clean.