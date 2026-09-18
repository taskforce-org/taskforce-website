## Why

The public site is English-only and left-to-right. Task Force needs a complete Farsi site (RTL) with English still available. FEAT-24 (`869f13b12`, Project Website) ships that before go-live. Strapi stays unused until the site is online.

## What Changes

- **BREAKING** every public URL is prefixed with locale: `/fa/…` (default) and `/en/…`. `/` redirects to `/fa`. Old unprefixed paths redirect into `/fa`.
- Default language is Farsi. The whole chrome, overlay, footer, and seed marketing copy exist in Farsi. English is a full parallel locale, not a stub.
- `html` `lang` and `dir`: `fa` + `rtl`, `en` + `ltr`. Persian-capable typeface on Farsi.
- Oval gains a language control (FA / EN) that keeps the current page. Contact us and page names follow locale.
- Seed content in TypeScript is bilingual. Do not wire or run Strapi in this change.

Out of this change: Strapi i18n, FEAT-23 3D, FEAT-25…28, VPS deploy.

## Capabilities

### New Capabilities

- `locale-rtl`: Locale prefix, default Farsi, RTL/LTR, language switch, bilingual seed, no Strapi until go-live.

### Modified Capabilities

- `homepage-shell`: Home copy and links are locale-prefixed; Farsi RTL.
- `services-overview`: Service cards from locale seed; links `/[locale]/services/[slug]`.
- `service-detail-pages`: Service pages under locale; black canvas still.
- `blog`: Blog index and posts under locale.
- `about-team`: About under locale.
- `contact-popup`: Overlay labels and errors follow locale.
- `apple-visual-system`: Farsi typeface; logical CSS so RTL does not break the oval.

## Impact

- Next.js App Router: `[locale]` segment, middleware redirects, Vazirmatn (or equivalent) font.
- `src/lib/cms.ts` seed splits EN/FA. `STRAPI_URL` stays empty.
- Contact action validation messages per locale.
- Chrome/nav/footer/pages consume locale copy.
