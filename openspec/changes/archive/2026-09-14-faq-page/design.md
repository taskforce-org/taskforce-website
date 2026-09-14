## Context

See `proposal.md` for why. FAQ nav is still `href: "#"`. No `/faq` route. FEAT-6 is applied and archived on this branch: `/technology` exists, footer Technology is `/technology`, Studio has a Technology link. CMS (FEAT-20) is later. Behavior contract is `specs/faq-page/spec.md` plus the `homepage-shell` delta.

## Goals / Non-Goals

**Goals:**

- One static App Router page at `/faq` that maps a typed content document to Steep sections.
- Dummy pre-sales Q&A that matches Task Force studio positioning.
- Document fields are the CMS schema.

**Non-Goals:**

- CMS admin, MDX, fetch, or preview (FEAT-20).
- Numeric prices, SLAs, calendar guarantees, named people.
- Studio identity, Process steps, service-line index, tech stack, jobs.
- Changing Process, Studio, or footer Technology targets. Adding Technology to top nav.

## Decisions

### Route is `/faq`

Nav label is already FAQ. Alternative: `/questions`. Rejected — extra label drift; the existing nav item is FAQ.

### Content document in `src/lib/faq.ts`

Same pattern as `processContent` and `technologyContent`. Page imports `faqContent` and renders fields.

Document shape:

- `documentTitle`, `description`
- `heading`, `intro`
- `items: [{ question, answer }, …]` (at least five dummy items covering pricing, timing, ownership, revisions, support, and starting)
- `callout: { heading, body }` (peach card; at most one)
- `cta: { label, href }` — `label` is “Start a Project”, `href` is `/contact`

Dummy answers stay in a marketing register. No invented prices, retainers, or day-count guarantees.

### Page is presentational

`src/app/faq/page.tsx` MUST NOT introduce visitor-visible FAQ copy outside the document.

### Steep composition

Serif H1 from `heading`, intro, mist 24px cards for Q&A items, filled pill CTA, optional one peach callout. No new palette.

### FAQ nav only

Point the existing FAQ item at `/faq`. Do not retarget Process (`/process`), Studio (`/studio`), footer Technology (`/technology`), or Careers.

### Stacked homepage-shell delta

This branch includes archived FEAT-4 through FEAT-6. The Site chrome delta copies the current main spec (Services `/services`, Studio `/studio`, Process `/process`, footer Technology `/technology`, no Technology nav item) and adds FAQ `/faq`. It MUST NOT revert those targets.

## Risks / Trade-offs

- **Pricing questions without numbers:** Visitors may want a rate. Mitigation: answer in studio voice (scoped quote after we see the work); no invented prices.
- **Stacked PR:** FEAT-4 through FEAT-6 are unmerged. Mitigation: this branch starts at `feat/FEAT-6-technology-capabilities`; rebase onto `develop` after those merge.
- **CTA in the document vs spec lock:** Tasks set label/href to the locked values.

## Migration Plan

None for data. After apply, FAQ nav stops landing on `#`. Rollback is revert the Feature branch.

## Open Questions

None that block specs or tasks. Exact dummy Q&A sentences are chosen at apply time.
