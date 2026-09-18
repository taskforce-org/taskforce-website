# Task Force — Website

Public website for the **Task Force** software studio.

- Management lives one level up; ClickUp is the source of truth.
- Execution: OpenSpec in [`openspec/changes/`](openspec/changes).
- Agent instructions: [`AGENTS.md`](AGENTS.md).

## Requirements

- Node.js 20 or newer
- PostgreSQL 16 to store contact notes
- Docker for Postgres and self-hosted Strapi

## Run locally

```bash
npm install
cp .env.example .env
docker compose up -d
npx prisma migrate deploy
npx prisma generate
npm run dev
```

Open http://localhost:3000.

Strapi: http://localhost:1337 (see [`cms/README.md`](cms/README.md)). Set `STRAPI_URL` after the first admin and published types exist. Until then the site uses seed content in `src/lib/cms.ts`.

## Scripts

| Command | What it does |
|---------|--------------|
| `npm run dev` | Dev server on port 3000 |
| `npm run build` | Production build |
| `npm start` | Serve production build |
| `npm run lint` | ESLint |

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS v4
- Self-hosted Strapi for services, work, blog, testimonials, team
- Prisma + PostgreSQL for the short contact overlay

## Design

Apple-like. White canvas on `/`, `/blog`, `/about`. Black canvas on `/services/[slug]` and `/work/[slug]`. Soft UI is retired.

## Layout

```
src/app/         routes (/, /about, /blog, /services/[slug], /work/[slug])
src/components/  oval, overlay, zoom media
src/lib/cms.ts   Strapi fetch + seed
cms/schemas/     Strapi content-type JSON
public/images/   generated software/startup stills
```
