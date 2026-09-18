# Self-hosted Strapi

Content types live in `schemas/` (service, work, post, testimonial, member, site-setting).

1. `docker compose up -d strapi-db strapi` from `products/Website`
2. Open http://localhost:1337 and create the first admin
3. Recreate each schema in Content-Type Builder (or copy JSON into a generated Strapi app under `src/api/<name>/content-types/<name>/schema.json`)
4. Publish entries. Set `STRAPI_URL=http://localhost:1337` and an API token in `.env`

Until Strapi answers, the Next.js site renders the seed in `src/lib/cms.ts` so pages are not empty.
