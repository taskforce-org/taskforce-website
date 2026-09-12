# AGENTS.md — Task Force / Website

This repo is the **Website** product under the **Task Force** Business.
Management (why / priority) lives one level up in the Business folder; Execution (OpenSpec → code → PR) lives here.

## Open this correctly

- Prefer opening the Cursor workspace at: `.../Task Force/Task Force/` (Business folder).
- This git root is: `products/Website/`.
- Do not invent work from a raw Request. Only implement from an approved **Feature** via an **OpenSpec Change**.

## Where to look (paths relative to this repo)

| Need | Path |
|------|------|
| Business profile | `../../business-profile.md` |
| Objectives | `../../Objectives/` |
| Initiatives | `../../Initiatives/` |
| Epics | `../../Epics/` |
| Features (handoff tickets) | `../../Features/` |
| Requests (intake only) | `../../Requests/` |
| OpenSpec changes | `openspec/changes/<change-name>/` |
| Main specs (after sync) | `openspec/specs/` |

## Framework (Management → Execution)

```
Request → validate → Objective → Initiative → Epic → Feature
Feature → Project (this repo) → OpenSpec Change → Tasks → PR → Release → Measurement
```

Rules:
1. Every OpenSpec Change must reference its **Feature** and this **Project** (Website).
2. Every Task / PR must be traceable to that OpenSpec Change and Feature.
3. Requests never become coding tasks directly.
4. After release, evaluate against the Feature's acceptance criteria / KPI.

## Git branches

Follow this always. Git root: this repo (`products/Website/`).

### Model

- `main` — production / release-ready only
- `develop` — shared integration (default working base)
- `feat/FEAT-<N>-<short-slug>` — one branch per ClickUp Feature

### Before any OpenSpec work on a Feature

1. `git fetch origin`
2. `git checkout develop && git pull origin develop`
3. Create and switch: `git checkout -b feat/FEAT-<N>-<short-slug>`
   Example: `feat/FEAT-1-homepage-shell`
4. Only then run `/opsx-propose` / `/opsx-apply` and commit on that branch
5. **Never** commit Feature work directly on `develop` or `main`

### Merge path (always via GitHub PR — no direct merge to protected branches)

1. Push feature branch: `git push -u origin HEAD`
2. Open PR: **`feat/…` → `develop`**
   Title/body must cite Feature id (e.g. FEAT-1 / `869f0kpnn`) and OpenSpec change name
3. After review + CI (if any), merge the PR into `develop`
4. Delete the feature branch after merge

### Releases

- When ready to ship: open PR **`develop` → `main`** (also a PR, never push straight to `main`)
- After merge to `main`, tag if appropriate (`vX.Y.Z`)
- Keep `develop` in sync with `main` after release if needed

## OpenSpec workflow (Cursor)

One-time: `openspec init` in this repo (if not already done).

Per Feature (on `feat/FEAT-<N>-<short-slug>`, never on `develop`/`main`):
1. `/opsx-propose <change-name>` — creates proposal, specs, design, tasks
2. Human reviews artifacts before coding
3. `/opsx-apply` — implement `tasks.md`
4. Open PR **`feat/…` → `develop`**, merge, then later PR `develop` → `main` for release
5. `/opsx-archive` when done

Always @-reference or pin `openspec/changes/<name>/tasks.md` and relevant `specs/` while applying.

## Product context

- Organization / workspace: Task Force
- Business: Task Force
- Product: Website
- Sibling businesses (do not mix unless asked): ArtirSay, Goldak

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
