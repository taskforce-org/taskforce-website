## Context

See `proposal.md` for why. No `/technology` route. Top nav has no Technology item (Home, Services, Work, Process, Studio, Careers, FAQ, Contact). Footer is identity + “Start a Project” only. FEAT-5 is applied and archived on this branch: `/process` exists, Process nav is `/process`. Five service lines already live in `src/lib/services.ts`. CMS (FEAT-20) is later. Behavior contract is `specs/technology-capabilities/spec.md` plus the `homepage-shell` and `studio-about` deltas.

## Goals / Non-Goals

**Goals:**

- One static App Router page at `/technology` that maps a typed content document to Steep sections.
- Dummy capability groups whose labels match the five service lines.
- Document fields are the CMS schema.
- Discoverable without a new top-nav item.

**Non-Goals:**

- CMS admin, MDX, fetch, or preview (FEAT-20).
- Adding Technology to top nav.
- Service-line index, Process steps, Studio identity dump, jobs, logo wall, vendor version pins.
- Linking groups to `/services/[slug]` on this Feature.

## Decisions

### Route is `/technology`

Matches the Feature title. Alternatives: `/tech`, `/capabilities`, `/stack`. Rejected — `/technology` is the clearest public URL and does not collide with existing routes.

### No top-nav item

Nav is already eight items. Alternative: insert Technology between Process and Studio. Rejected — crowded chrome; discovery is Studio + footer instead.

### Content document in `src/lib/technology.ts`

Same pattern as `processContent` and `studioContent`. Page imports `technologyContent` and renders fields. Do not import labels from `serviceLines` — the Technology document is the source of visitor-visible strings. Labels MUST still match the five service-line names.

Document shape:

- `documentTitle`, `description`
- `heading`, `intro`
- `groups: [{ label, capabilities: [{ title, body }, …] }, …]` (exactly five; each group at least one capability)
- `callout: { heading, body }` (peach card; at most one)
- `cta: { label, href }` — `label` is “Start a Project”, `href` is `/contact`

Dummy capabilities stay in a marketing register (web stack, APIs, dashboards, automation, 3D/WebGL, performance mapped onto the five lines). No invented SLAs, prices, version pins, or logo walls.

### Page is presentational

`src/app/technology/page.tsx` MUST NOT introduce visitor-visible Technology copy outside the document.

### Steep composition

Serif H1 from `heading`, intro, mist 24px cards for groups (capabilities listed inside each card), filled pill CTA, optional one peach callout. No new palette.

### Studio link from the Studio document

Add `technologyLink: { label, href }` to `studioContent`. Render as a ghost button next to the existing Start a Project pill. Do not hardcode the label in `studio/page.tsx`. Do not retarget the primary CTA.

### Footer Technology link

Add a “Technology” text link to `/technology` in `src/components/site-footer.tsx`. Leave nav labels unchanged. Do not retarget footer “Start a Project”.

### Stacked homepage-shell delta

This branch includes archived FEAT-4 and FEAT-5. The Site chrome delta copies the current main spec (Services `/services`, Studio `/studio`, Process `/process`) and adds the footer Technology link. It MUST NOT revert those nav targets or add a Technology nav item.

## Risks / Trade-offs

- **Looks like a second Services overview:** Five group labels match service lines. Mitigation: copy is capabilities only; no scope/process/example fields; no links to `/services/[slug]` on this Feature.
- **Hard to find:** No top-nav item. Mitigation: Studio ghost link plus footer link.
- **Stacked PR:** FEAT-4 and FEAT-5 are unmerged. Mitigation: this branch starts at `feat/FEAT-5-process-page`; rebase onto `develop` after those merge.
- **CTA in the document vs spec lock:** Tasks set label/href to the locked values.

## Migration Plan

None for data. After apply, `/technology` exists and footer/Studio point at it. Rollback is revert the Feature branch.

## Open Questions

None that block specs or tasks. Exact dummy capability sentences are chosen at apply time.
