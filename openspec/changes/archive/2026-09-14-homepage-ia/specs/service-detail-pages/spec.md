## MODIFIED Requirements

### Requirement: Five detail pages are reachable

The site MUST NOT serve standalone detail pages at `/services/[slug]` for `websites-ecommerce`, `custom-systems-dashboards`, `desktop-software-automation`, `integrations-redesign-support`, or `3d-interactive-experiences`. A request to any of those URLs MUST send the visitor to `/#services`.

#### Scenario: Known slug redirects

- **WHEN** a visitor opens `/services/websites-ecommerce`
- **THEN** they reach `/#services` and they do not see a standalone detail page

## REMOVED Requirements

### Requirement: Unknown slugs are not found

**Reason:** `/services/[slug]` no longer serves detail pages. All former service URLs go to the homepage services section.

**Migration:** Send visitors to `/#services`.

### Requirement: Detail depth on each page

**Reason:** Per-line scope, process, and example pages are retired this pass. Homepage service cards are index-depth only.

**Migration:** Service-line depth returns only if a later Feature restores it. Until then, visitors read the homepage services section.

### Requirement: Start a Project from a detail page

**Reason:** Detail pages are gone.

**Migration:** Use the homepage in-page “Start a Project” control, which still goes to `/contact`.

### Requirement: Steep on detail pages

**Reason:** Detail pages are gone.

**Migration:** Steep rules for service cards now live on the homepage services section (`services-overview` / `homepage-shell`).
