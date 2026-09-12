## Why

The Website product has no runnable homepage. FEAT-1 (`869f0kpnn`, Project Website) under EPC-1 is the approved first Feature: a locally loadable homepage shell with Task Force identity so later Features have a real app to extend.

## What Changes

- Scaffold a Next.js App Router + TypeScript app in this repo.
- Ship a homepage (`/`) with Steep visual system: transparent nav, hero/value proposition, featured services strip (placeholder links), selected work teasers (static cards), primary CTA “Start a Project”, footer.
- Add a `/contact` stub (empty, no form) so the CTA is not a 404.
- Document the local start command in README.
- Wire Steep tokens from `design/steep/` (peach accent, serif headlines, 24px cards). Signifier may use listed fallbacks (Source Serif 4 / Georgia). Do not invent a new palette.

## Capabilities

### New Capabilities

- `homepage-shell`: Public site chrome (nav + footer) and homepage composition that identifies Task Force, presents placeholder services/work, and offers a Start a Project CTA. Local run is documented.

### Modified Capabilities

- None (no specs in `openspec/specs/` yet).

## Impact

- New Next.js app at the Website git root (`package.json`, `app/`, Tailwind, shadcn/ui, Motion).
- Existing `design/steep/` is the visual source of truth; tokens are consumed, not redesigned.
- No CRM, jobs, CMS, i18n, real forms, admin, live portfolio, or 3D.
- PR `feat/FEAT-1-homepage-shell` → `develop`, citing FEAT-1 / `869f0kpnn` and change `homepage-shell`.
