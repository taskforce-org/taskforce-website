## Context

See `proposal.md` for why. Process nav is still `href: "#"`. No `/process` route. FEAT-4 is applied and archived on this branch: `/studio` exists, Studio nav is `/studio`, `studioContent` lives in `src/lib/studio.ts`. Studio how-we-work is studio-level quality bar, not engagement steps. CMS (FEAT-20) is later. Behavior contract is `specs/process-page/spec.md` plus the `homepage-shell` delta.

## Goals / Non-Goals

**Goals:**

- One static App Router page at `/process` that maps a typed content document to Steep sections.
- Dummy ordered steps that match Task Force studio positioning.
- Document fields are the CMS schema.

**Non-Goals:**

- CMS admin, MDX, fetch, or preview (FEAT-20).
- Studio identity, service-line index, tech stack, jobs.
- Changing Studio or other nav targets.

## Decisions

### Route is `/process`

Nav label is already Process. Alternative: `/how-we-work`. Rejected — would collide with Studio how-we-work copy and the existing nav label.

### Content document in `src/lib/process.ts`

Same pattern as `serviceLines` and `studioContent`. Page imports `processContent` and renders fields.

Document shape:

- `documentTitle`, `description`
- `heading`, `intro`
- `steps: [{ title, body }, …]` (at least three dummy items, displayed in array order)
- `callout: { heading, body }` (peach card; at most one)
- `cta: { label, href }` — `label` is “Start a Project”, `href` is `/contact`

Dummy steps stay in a marketing register (discover / scope / build / handoff or similar). No invented SLAs, prices, or calendar guarantees.

### Page is presentational

`src/app/process/page.tsx` MUST NOT introduce visitor-visible Process copy outside the document.

### Steep composition

Serif H1 from `heading`, intro, mist 24px cards for steps (order visible), filled pill CTA, optional one peach callout. No new palette.

### Process nav only

Point the existing Process item at `/process`. Do not retarget Studio (`/studio`), FAQ, or footer.

### Stacked homepage-shell delta

This branch includes archived FEAT-4. The Site chrome delta copies the current main spec (Services `/services`, Studio `/studio`) and adds Process `/process`. It MUST NOT revert Studio to `#`.

## Risks / Trade-offs

- **Overlap with Studio:** How-we-work vs process steps can blur. Mitigation: this page is ordered engagement steps only.
- **Stacked PR:** FEAT-4 is unmerged. Mitigation: this branch starts at `feat/FEAT-4-studio-about`; rebase onto `develop` after FEAT-4 merges.
- **CTA in the document vs spec lock:** Tasks set label/href to the locked values.

## Migration Plan

None for data. After apply, Process nav stops landing on `#`. Rollback is revert the Feature branch.

## Open Questions

None that block specs or tasks. Exact dummy step sentences are chosen at apply time.
