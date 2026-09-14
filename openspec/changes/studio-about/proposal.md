## Why

Studio nav still goes to `#`. FEAT-4 (`869f13ay7`, Project Website) is the approved next Feature: a real Studio/About page so visitors can read who the studio is before Process, Tech, or Careers exist. Copy must be dummy but Task Force–related, and every field on the page must live in one content module so FEAT-20 CMS can replace the source later.

## What Changes

- Add a public `/studio` page: who we are, how we work at studio level (not the Process page), one “Start a Project” CTA to `/contact`.
- Point nav “Studio” at `/studio`.
- Keep all page copy in a typed static module (dummy related data now). Page reads that module; it does not hardcode strings. FEAT-20 can swap the module’s source without changing the page shape.
- Stay on Steep. No CMS admin, forms, i18n, team photos, tech stack, jobs, or `/about` alias.

## Capabilities

### New Capabilities

- `studio-about`: Public `/studio` page that presents studio identity and studio-level working style from a single content module.

### Modified Capabilities

- `homepage-shell`: Studio nav MUST go to `/studio` instead of `#`.

## Impact

- New App Router page `src/app/studio/page.tsx`.
- New content module (e.g. `src/lib/studio.ts`) holding every string the page renders.
- Update `src/components/site-nav.tsx` Studio `href`.
- Branch `feat/FEAT-4-studio-about`. PR later `feat/…` → `develop`, citing FEAT-4 / `869f13ay7` and change `studio-about`.
