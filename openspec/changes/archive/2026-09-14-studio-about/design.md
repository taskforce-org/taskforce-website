## Context

See `proposal.md` for why. Studio nav is still `href: "#"`. No `/studio` or `/about` route. Shared content already lives in typed modules (`src/lib/services.ts`). CMS (FEAT-20) is later; this change only shapes the document so that Feature can swap the source. Behavior contract is `specs/studio-about/spec.md` plus the `homepage-shell` delta.

## Goals / Non-Goals

**Goals:**

- One static App Router page at `/studio` that maps a typed content document to Steep sections.
- Dummy copy that matches existing Task Force studio positioning (senior engineering, websites, custom systems, automation).
- Document fields are the CMS schema: swapping the module’s data source later must not change the page.

**Non-Goals:**

- CMS admin, MDX, fetch, or preview (FEAT-20).
- `/about` alias or nav rename.
- Team photos, named people, tech stack, jobs, process steps, service-line index.
- Footer copy changes.

## Decisions

### Route is `/studio`, not `/about`

Nav label is already Studio. One page. Alternative: `/about` plus a redirect, or both routes. Rejected — slash in the Feature title is naming, not two pages; extra aliases wait for SEO (FEAT-25).

### Content document in `src/lib/studio.ts`

Export a typed `studioContent` object (same pattern as `serviceLines`). The page imports it and renders fields. Alternative: strings in `page.tsx`. Rejected — CMS later cannot swap a template full of literals without a rewrite. Alternative: MDX per section. Rejected until FEAT-20.

Document shape (CMS schema now, static values now):

- `documentTitle`, `description`
- `heading`, `intro`
- `whoWeAre: { heading, body }`
- `howWeWork: { heading, body }`
- `principles: [{ label, blurb }, …]` (at least two dummy items)
- `callout: { heading, body }` (peach card; at most one)
- `cta: { label, href }` — `label` is “Start a Project”, `href` is `/contact`

Dummy copy must sound like the homepage studio voice. No lorem. Facts that are not real company legal data stay clearly studio-marketing (no invented registration number, address, or named employees).

### Page is presentational

`src/app/studio/page.tsx` MUST NOT introduce visitor-visible Studio copy outside the document (metadata and body both read `studioContent`). Site chrome (nav/footer) stays in the root layout.

### Steep composition

Match Services overview: serif H1 from `heading`, intro, filled pill CTA, mist 24px cards for principles, optional one peach callout from `callout`. No new palette.

### Studio nav only

Point the existing Studio item at `/studio`. Do not add an About item. Do not retarget footer identity.

## Risks / Trade-offs

- **Dummy copy read as company facts:** Visitors may treat placeholder studio copy as legal identity. Mitigation: keep copy in the same marketing register as the homepage; no addresses, people names, or registration IDs.
- **Schema vs FEAT-20:** A later CMS may want people or media. Mitigation: do not add empty `people` / `images` fields now; adding them is a later delta.
- **CTA in the document vs spec lock:** Spec still requires `/contact` and “Start a Project”. Mitigation: put those values in the document so CMS can change them later, but this Feature’s tasks set them to the locked values.

## Migration Plan

None for data. After apply, Studio nav stops landing on `#`. Rollback is revert the Feature branch.

## Open Questions

None that block specs or tasks. Exact dummy sentences are chosen at apply time inside `studioContent`.
