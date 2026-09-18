## Context

See `proposal.md`. Stack: Next.js App Router on `feat/FEAT-20-cms-content-management` (on FEAT-10). Soft UI, Steep, long `/contact` form, service modals, and FEAT-30 oval groups are retired by owner lock. CMS is self-hosted Strapi. FEAT-21/22 are content types in that Strapi, not extra Features. FEAT-23 Hold. FEAT-24 later. FEAT-28 is a test/rule at the end of apply, not a Feature.

## Goals / Non-Goals

**Goals:**

- Self-hosted Strapi + Next.js fetch of published entries.
- New public IA and Apple-like visual system.
- Short contact overlay with honeypot, time-trap, IP rate limit.
- Generate software/startup images for empty media.

**Non-Goals:**

- Strapi Cloud.
- Interactive 3D (FEAT-23).
- EN/FA (FEAT-24).
- SEO/analytics/captcha vendor Features (25–27).
- Careers / CRM admin / mail.
- Finished about-page art direction beyond data that exists.

## Decisions

### One change, one Strapi

Docker Compose: existing Postgres for Prisma leads + a Strapi service (own Postgres or same engine, separate database). Next.js `STRAPI_URL` / `STRAPI_TOKEN`. Seed services, work, posts, testimonials, team so pages are not empty.

### Routes from slugs

`/services/[slug]` and `/work/[slug]` and `/blog/[slug]` read Strapi by slug. No hardcoded slug list in the App Router beyond the dynamic segment.

### Retired URLs redirect to `/` except `/studio` → `/about`

`/contact`, `/faq`, `/technology`, `/careers`, `/process` → `/`. `/services` → `/#services`.

### Oval

Pill kept. Slots: copy of `TF_base_logo.jpg` | page name | Contact us. Page names as in `homepage-shell` spec.

### Short lead vs fat Prisma

Add a migration so `companyName`, `personRole`, `budgetMinAmount`, and `timeline` are optional (or have safe defaults). Short overlay writes `personFullName`, one `LeadPhone`, and `need` (reason). Do not keep the long form UI.

### Visual system

Replace Soft UI tokens. White canvas: `/`, `/blog`, `/blog/[slug]`, `/about`. Black canvas: `/services/[slug]`, `/work/[slug]`. Shared type, buttons, cards. Large generated images with zoom on scroll/hover/click. Motion library already in the repo (Motion) may stay.

### Images

Generate software/startup stills into `public/` and/or Strapi media during apply. Logo from `/Users/sina/Projects/Task Force/_Mission Control/TF_base_logo.jpg` copied into `public/`.

### Spam

Honeypot field not shown to people. Reject if filled. Reject if submitted faster than a minimum dwell time. Per-IP rate limit on the server action. No Turnstile/reCAPTCHA.

### FEAT-28 rule (end of apply)

After UI ships: check mobile nav/contact, keyboard on oval and overlay, images not blocking LCP to a broken state. Not a separate Feature.

## Risks / Trade-offs

- Two databases (leads + Strapi) locally. Mitigation: one compose file, README.
- Fat Lead columns leftover. Mitigation: optional columns; unused until a later reduce.
- Apple-like motion vs performance. Mitigation: FEAT-28 pass at the end; prefer CSS/transform over huge canvas.
- Business-folder OpenSpec CLI may resolve the workspace root. Source of truth for this Feature is `products/Website/openspec/changes/cms-content-management/`.

## Migration Plan

1. Strapi compose + types + seed.
2. Chrome + redirects + home sections.
3. Dynamic pages + blog + about.
4. Overlay + lead write.
5. Visual system + generated images + logo.
6. FEAT-28 check.

Rollback: leave Strapi volume; revert the Next.js branch.

## Open Questions

None that block this Feature. About layout uses Strapi fields only.
