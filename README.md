# Task Force — Website

Public website for the **Task Force** software studio. Product code for the Website product under the Task Force Business.

- Management (Objectives, Initiatives, Epics, Features) lives one level up in the Business folder; ClickUp is the source of truth.
- Execution runs through OpenSpec changes in [`openspec/changes/`](openspec/changes).
- Agent instructions: [`AGENTS.md`](AGENTS.md).

## Requirements

- Node.js 20 or newer (developed on Node 22)
- npm 10 or newer

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Scripts

| Command | What it does |
|---------|--------------|
| `npm run dev` | Start the local dev server on port 3000 |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- shadcn-style copy-in components in `src/components/ui`
- Motion (`motion/react`) for light section reveals

## Design system

The visual system is **Steep**, documented in [`design/steep/DESIGN.md`](design/steep/DESIGN.md) with tokens in [`design/steep/tailwind-theme.css`](design/steep/tailwind-theme.css). Those tokens are mirrored into `src/app/globals.css`. Do not introduce colors outside the Steep palette; Signifier and Sohne resolve to the documented fallbacks (Source Serif 4, Inter).

## Layout

```
src/app/         routes (/, /services, /services/[slug], /contact) and global styles
src/components/  site chrome and shared UI
design/steep/    Steep design system reference
openspec/        OpenSpec changes and specs
```
