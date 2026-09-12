## Context

See `proposal.md` for why. Repo already has OpenSpec, `AGENTS.md`, and Steep files at `design/steep/DESIGN.md` plus `design/steep/tailwind-theme.css`. There is no Next.js app yet. Git branch for this Feature is `feat/FEAT-1-homepage-shell`. Behavior contract is `specs/homepage-shell/spec.md`.

## Goals / Non-Goals

**Goals:**

- Scaffold Next.js in this existing git root without clobbering OpenSpec or Steep files.
- Map Steep `@theme` tokens into the app CSS (import or copy `design/steep/tailwind-theme.css`).
- Compose homepage from Steep patterns: transparent nav, serif hero, mist cards, one peach callout, filled + ghost pills.
- Keep shadcn primitives as copy-in source, restyled to Steep (pill radius 9999px, ink fill). No MUI/Ant.

**Non-Goals:**

- New palette, new type system, or Figma-perfect pixel match if frames are not in-repo.
- CMS, auth, DB, APIs, i18n, 3D, analytics product features.

## Decisions

### App framework: Next.js App Router + TypeScript

One repo for marketing now and admin/CMS later. SSR/SEO for a studio site. Alternative considered: Astro (faster static marketing, second app for admin). Rejected because FEAT-9+ lives in this product.

### Styling: Tailwind v4 + Steep `@theme`

Import `design/steep/tailwind-theme.css` (or equivalent `@theme` block) as the token source. Alternative: CSS Modules with duplicated hex values. Rejected: tokens already exist as Tailwind `@theme`.

### UI kit: shadcn/ui (copy-in)

Button and similar primitives are copied into `components/ui` then restyled to Steep pills. Alternative: MUI/Ant. Rejected: they own the look and fight Figma/Steep.

### Motion: `motion/react` for light section/CTA motion only

No GSAP. No WebGL. Alternative: CSS-only. Motion is allowed for craft; keep it subtle so it does not become a 3D Feature.

### Display font: Signifier with listed fallbacks

If Signifier is not licensed in-repo, use Source Serif 4 (or Georgia) at weight 400 for H1/H2. Do not use a sans at 44/64/90px. Sohne substitutes: Inter / system-ui. Map half-step Sohne weights (430/450/480) to the nearest available Inter weight (400/500) rather than inventing fake font files.

### Contact CTA target: `/contact` stub

Prefer `/contact` over `#` so the primary path is a real route. Stub copy only. No form fields.

### Scaffolding into a non-empty repo

Use `create-next-app` with skip-git into a temp dir, then move `app/`, `package.json`, configs into the Website root, or run create-next-app with existing-folder flags. Preserve `openspec/`, `design/`, `AGENTS.md`, `.cursor/`.

### Homepage composition (Steep layout, studio content)

```
Nav (transparent): logo left | links | Start a Project pill
Hero: Signifier display headline + Sohne subhead + filled pill (Start a Project) + ghost pill (optional secondary)
Featured services: 5 Neutral Cards (mist, 24px radius), placeholder links
Selected work: static Neutral Cards
One Accent Peach Card (sienna text) for editorial callout
Footer
/contact stub
```

Placeholder copy is allowed. Nav labels match the spec. Services labels match the spec.

## Risks / Trade-offs

- **Signifier/Sohne not licensed:** Fall back to Source Serif 4 + Inter. Steep still reads if sizes, tracking, and peach rationing hold.
- **create-next-app vs existing files:** Merge carefully; do not overwrite `openspec/` or `design/steep/`.
- **shadcn default look:** Default zinc/slate theme would violate Steep. Restyle immediately to ink/paper/peach tokens.
- **Half-step Sohne weights:** Inter cannot do 430/450/480. Use 400/500 and keep size/tracking from Steep.

## Migration Plan

Not a data migration. First runnable app. Rollback is revert the Feature branch. No production deploy in this change.

## Open Questions

None that block specs or tasks. Exact hero sentence can be placeholder until copy is approved.
