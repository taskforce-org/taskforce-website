## Context

See `proposal.md` for why. Overview cards on `/services` are non-navigating articles. Shared list in `src/lib/services.ts` is `{ label, blurb }` only. Main spec `openspec/specs/services-overview/spec.md` still forbids `/services/...` routes. Homepage teasers already go to `/services` and stay there.

## Goals / Non-Goals

**Goals:**

- One dynamic App Router segment `src/app/services/[slug]/page.tsx` driven by the shared list.
- Static generation for the five known slugs; `notFound()` for anything else.
- Overview cards become links to `/services/{slug}`. Homepage teasers unchanged.

**Non-Goals:**

- CMS, forms, i18n, WebGL/3D scenes, new colors.
- Service-specific inquiry payload (FEAT-10). CTA stays generic `/contact`.
- Changing homepage teaser targets.

## Decisions

### One dynamic segment, five static slugs

Use `[slug]` plus `generateStaticParams` from the shared module. Alternative: five hard-coded `page.tsx` files. Rejected — labels already live in one list; five folders would drift.

Slug map (stable, kebab-case):

- `websites-ecommerce` — Websites & E-commerce
- `custom-systems-dashboards` — Custom Systems & Dashboards
- `desktop-software-automation` — Desktop Software & Automation
- `integrations-redesign-support` — Integrations, Redesign & Support
- `3d-interactive-experiences` — 3D & Interactive Experiences

### Unknown slug is 404

Call `notFound()` when the slug is missing from the list. Alternative: redirect to `/services`. Rejected — a wrong URL should not look like a successful overview.

### Detail copy lives next to the list

Extend each `serviceLines` entry with `slug`, `scope`, `process`, and `example` (static strings). Alternative: MDX per line. Rejected until CMS (FEAT-20). Placeholder copy is allowed.

### Homepage stays on the overview

Do not deep-link homepage teasers to slugs. Visitors still land on the index, then pick a line. Avoids modifying `homepage-shell`.

### Steep composition

Serif H1 = line label. Sohne sections for scope / process / example. Mist 24px cards or stacked sections. Filled pill CTA. At most one peach callout per detail page, optional.

## Risks / Trade-offs

- **Stacked branch:** FEAT-3 sits on unmerged FEAT-2 (PR #4) and FEAT-1 (PR #3). Mitigation: rebase after those merge; keep this change small.
- **Overview spec conflict until apply:** Main `services-overview` still forbids detail routes. Mitigation: apply this change on the FEAT-3 branch only; archive after merge.
- **Thin ClickUp AC:** Ticket only names “five service lines.” Mitigation: lock scope/process/example in this spec; copy can stay placeholder.

## Migration Plan

None for data. After apply, `/services/not-a-line` flips from the Next.js 404 to the same 404 via `notFound()`. Overview cards gain hrefs; no redirect table.

## Open Questions

None that block tasks. Exact scope/process/example sentences can be placeholder.
