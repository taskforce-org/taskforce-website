## Context

See `proposal.md` for why. Current chrome is `src/components/site-nav.tsx`: desktop `ul` is `hidden lg:flex`, Work is `href: "#work"`, Careers is `#`, header has `Button size="sm"` to `/contact`. Home, `/services`, `/services/[slug]`, `/process`, `/studio`, `/technology`, `/faq`, `/contact` are separate routes. Copy already lives in `src/lib/services.ts`, `process.ts`, `studio.ts`. FEAT-1…8 stay Released. FEAT-30 (`869f1rz6g`) is the follow-on. Behavior contracts are the deltas under `specs/`.

## Goals / Non-Goals

**Goals:**

- One homepage that owns Services / Work / Process / Studio as hashed sections.
- One nav component: glass oval, grouped items, selected state, mobile equivalent.
- Old marketing URLs keep working via redirect to those hashes.
- Shared filled pill size. Shared card language (service vs larger work).

**Non-Goals:**

- EN/FA, CMS, blog strip, team profiles, job listings, inquiry form, new palette.
- Restoring `/services/[slug]` depth this pass.

## Decisions

### Redirects live in the old route files

Use App Router `redirect("/#services")` (and `/#process`, `/#studio`) from the existing page modules, including `/services/[slug]`. Alternative: `next.config` redirects. Rejected for hash targets — fragments are not reliable in HTTP Location. Alternative: middleware. Rejected as extra surface for four paths.

Unknown `/services/[slug]` also redirects to `/#services` (spec removes 404).

### Home composes existing documents

`src/app/page.tsx` imports `serviceLines`, `processContent`, and `studioContent`. Do not duplicate copy. Do not invent a new CMS. Selected work stays the current static array until FEAT-21.

Process and Studio section CTAs stay in-page if the document has them. Header never renders them.

### Oval nav is one client component

Selected state: `usePathname` for `/careers`, `/faq`, `/contact`; Intersection Observer on `#services` `#work` `#process` `#studio` when pathname is `/`. Hash links for those four MUST be `/#services` (absolute from site root), never `#services`.

Groups with a light `|` divider: Logo | Services · Work · Process · Studio | Careers · FAQ | Contact.

Liquid glass: Steep paper/ink/mist plus translucent fill and blur. No new color tokens.

Mobile: a sheet or disclosure that lists the same items. Do not leave `hidden lg:flex` with no replacement. Full a11y/perf bar stays FEAT-28; this Feature only requires destinations to be reachable.

### Cards

Shared presentational card: glass/mist, 24px radius, equal height in the services grid (five cards, last row still full-size). No “Service” label. “Learn more” opacity/translate on hover. Work cards reuse it at a wider column span (one or two per row, not three equal to services).

### Button size

Drop `size="sm"` on repeating filled “Start a Project” pills. Default filled size only. Ghost remains for secondary actions (See selected work, Technology & capabilities).

### `/careers` stub

New `src/app/careers/page.tsx` plus a small `src/lib/careers.ts` document (title, heading, short body). No jobs. FEAT-16 replaces the stub.

### `/technology` stays a page

Footer and Studio-section Technology link keep `/technology`. Not in the oval.

## Risks / Trade-offs

- Hash redirects depend on client navigation after `redirect("/#services")`. If a crawler ignores the fragment, they still land on `/`. Acceptable: section ids remain on `/`.
- Five equal service cards on a 3-column grid leave a short last row. Mitigate with equal card height and full-width last-row items, not smaller cards.
- Scroll-spy can fight click-to-hash. Mitigate: after a nav click, lock selected item until scroll settles.
- Folding `/studio` and `/process` onto `/` makes `/` long. Acceptable this pass; blog/hide-nav is later.

## Migration Plan

Ship behind the FEAT-30 PR into `develop`. Old URLs redirect; no data migration. Rollback is revert the PR (routes return). After archive, main specs replace page-reachability with section-reachability.
