## MODIFIED Requirements

### Requirement: Five detail pages are reachable

The site MUST serve a service page at `/services/[slug]` for each published Strapi service slug, on a black canvas, with that entry’s content and generated imagery. A request for an unpublished or unknown slug MUST NOT render another service’s body. The five old hardcoded slugs that are not published MAY redirect to `/#services`.

#### Scenario: Known slug redirects

- **WHEN** a visitor opens `/services/{slug}` for a published Strapi service
- **THEN** they see that service’s page and they do not only land on `/#services`
