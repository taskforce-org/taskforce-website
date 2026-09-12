## Context

See `proposal.md` for why. Homepage already lists the five lines in `src/app/page.tsx` with `href="#services"`. Nav Services is `#services`. Main spec `openspec/specs/homepage-shell/spec.md` still allows placeholder links. FEAT-3 owns per-line routes.

## Goals / Non-Goals

**Goals:**

- Add `src/app/services/page.tsx` using existing chrome (`SiteNav` / `SiteFooter`).
- Reuse Neutral Card + pill Button patterns. Keep copy static in the page file (or a tiny shared list if homepage and overview would otherwise drift).
- Wire nav and homepage teasers to `/services`.

**Non-Goals:**

- `/services/[slug]` or hash-only fake details.
- CMS, forms, i18n, 3D, new colors.

## Decisions

### One overview route, no detail stubs

`/services` only. Card links stay on `/services` (or are non-navigating cards) so nothing 404s before FEAT-3. Alternative: stub `/services/websites` etc. Rejected — empty stubs look broken.

### Shared five-line list

Extract the five `{ label, blurb }` entries to a small shared module so homepage and overview cannot disagree. Alternative: duplicate arrays. Rejected — labels are spec-normative.

### Steep composition

Serif page H1, Sohne intro, mist 24px cards, filled pill CTA. At most one peach callout on this page, optional. Same tokens as `src/app/globals.css`.

### Title

Document title names Task Force and Services (e.g. `Services — Task Force`).

## Risks / Trade-offs

- **Stacked branch:** FEAT-2 sits on unmerged FEAT-1. Rebase after PR #3 merges. Mitigation: keep this change small.
- **Copy drift vs FEAT-3:** Overview blurbs stay short so detail pages can expand later.

## Open Questions

None that block tasks. Exact intro sentence can be placeholder.
