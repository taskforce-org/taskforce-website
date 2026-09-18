# service-detail-pages Specification

## Purpose

Each service has a black-canvas page at `/[locale]/services/[slug]`.

## Requirements

### Requirement: Service pages are reachable

The site MUST serve `/[locale]/services/[slug]` for a known slug with that locale’s copy. Unknown slugs MUST NOT render another service’s body.

#### Scenario: Known slug

- **WHEN** a visitor opens `/fa/services/websites-ecommerce`
- **THEN** they see Farsi copy for that service on a black canvas
