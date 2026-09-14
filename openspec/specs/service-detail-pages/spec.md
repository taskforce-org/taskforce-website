# service-detail-pages Specification

## Purpose

Former per-line service URLs must not 404. They redirect to the homepage services section. Standalone detail pages are retired.

## Requirements

### Requirement: Five detail pages are reachable

The site MUST NOT serve standalone detail pages at `/services/[slug]` for `websites-ecommerce`, `custom-systems-dashboards`, `desktop-software-automation`, `integrations-redesign-support`, or `3d-interactive-experiences`. A request to any of those URLs MUST send the visitor to `/#services`.

#### Scenario: Known slug redirects

- **WHEN** a visitor opens `/services/websites-ecommerce`
- **THEN** they reach `/#services` and they do not see a standalone detail page
