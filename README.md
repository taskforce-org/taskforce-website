# Task Force — Website

Public website for the **Task Force** software studio. Product code for the Website product under the Task Force Business.

- Management (Objectives, Initiatives, Epics, Features) lives one level up in the Business folder; ClickUp is the source of truth.
- Execution runs through OpenSpec changes in [`openspec/changes/`](openspec/changes).
- Agent instructions: [`AGENTS.md`](AGENTS.md).

## Requirements

- Node.js 20 or newer (developed on Node 22)
- npm 10 or newer
- PostgreSQL 16 for inquiry submits (optional to view the site; required to store a lead)

## Run locally

```bash
npm install
cp .env.example .env
docker compose up -d
npx prisma migrate deploy
npx prisma generate
npm run dev
```

Then open http://localhost:3000.

Staff bootstrap env vars in `.env.example` are unused until the CRM admin Feature.

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
- Prisma + PostgreSQL for project inquiries

## Design system

The visual system is **Soft UI**, documented in [`design/soft-ui/DESIGN.md`](design/soft-ui/DESIGN.md) with tokens in [`design/soft-ui/tailwind-theme.css`](design/soft-ui/tailwind-theme.css). `src/app/globals.css` imports those tokens. Do not use archived Steep (`design/archive/steep/`) on live pages. Signifier and Sohne resolve to Source Serif 4 and Inter.

## Layout

```
src/app/              routes (/, /faq, /contact, /careers, /technology) and global styles
src/components/       site chrome and shared UI
design/soft-ui/       live Soft UI reference
design/archive/steep/ archived Steep files (do not import)
openspec/             OpenSpec changes and specs
```
