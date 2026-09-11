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

## OpenSpec workflow (Cursor)

One-time: `openspec init` in this repo (if not already done).

Per Feature:
1. `/opsx-propose <change-name>` — creates proposal, specs, design, tasks
2. Human reviews artifacts before coding
3. `/opsx-apply` — implement `tasks.md`
4. Open PR, merge, release, measure
5. `/opsx-archive` when done

Always @-reference or pin `openspec/changes/<name>/tasks.md` and relevant `specs/` while applying.

## Product context

- Organization / workspace: Task Force
- Business: Task Force
- Product: Website
- Sibling businesses (do not mix unless asked): ArtirSay, Goldak
