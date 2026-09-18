## Context

See `proposal.md`. Public IA and Apple-like chrome live on `feat/FEAT-20-cms-content-management` (unmerged). This change stacks as `feat/FEAT-24-multilingual-en-fa`. Seed in `src/lib/cms.ts` is English-only. Owner locked: complete RTL Farsi, English parallel, skip Strapi until the site is online.

## Goals / Non-Goals

**Goals:**
- `[locale]` App Router segment (`fa` | `en`), default `fa`
- Bilingual seed + chrome dictionary
- `lang` / `dir` + Vazirmatn on Farsi
- Language switch that preserves path after the locale

**Non-Goals:**
- Strapi i18n plugin, Docker, or `STRAPI_URL`
- FEAT-23 3D
- VPS / domain

## Decisions

- **Always-prefix locales.** `/` → `/fa`. Unprefixed `/about` etc. rewrite via middleware to `/fa/…`. Alternative: unprefixed Farsi — rejected so English URLs stay explicit and switcher is a prefix swap.
- **Same slugs in both locales.** Switcher does not need a slug map.
- **Seed only.** `getCms(locale)` returns `seed[locale]`. Do not call Strapi in this change even if env is set.
- **Vazirmatn** from `next/font/google` on `html[lang=fa]`. Inter stays on English.
- **Locale in ChromeProvider** from the first path segment. Sets `lang`, `dir`, and oval page names.
- **Contact `locale` hidden field** so Zod messages match the page.

## Risks / Trade-offs

- Uncommitted FEAT-20 files travel on this branch — keep them; do not reset to `develop`.
- Farsi uppercase CSS looks wrong — skip `uppercase` on Farsi labels.
- Middleware vs `next.config` redirects: retired URLs still redirect home, then middleware sends `/` to `/fa`.

## Migration Plan

Local only. Rollback is drop this branch. No production deploy.
