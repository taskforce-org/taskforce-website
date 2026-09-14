## Purpose

Public per-line service pages so a visitor who picked a line on `/services` can read that line’s scope, process, and an example before starting a project.

## ADDED Requirements

### Requirement: Five detail pages are reachable

The site MUST serve one detail page per service line at `/services/[slug]` for these slugs: `websites-ecommerce`; `custom-systems-dashboards`; `desktop-software-automation`; `integrations-redesign-support`; `3d-interactive-experiences`. Each page MUST load without blocking runtime errors. The document title MUST identify Task Force and that line’s label.

#### Scenario: Known slug loads

- **WHEN** a visitor opens `/services/websites-ecommerce`
- **THEN** the page renders without blocking runtime errors and the document title includes Task Force and Websites & E-commerce

### Requirement: Unknown slugs are not found

A request to `/services/[slug]` for a slug that is not one of the five MUST return a not-found response (HTTP 404), not a blank or generic service page.

#### Scenario: Unknown slug

- **WHEN** a visitor opens `/services/not-a-line`
- **THEN** they receive a not-found response

### Requirement: Detail depth on each page

Each detail page MUST present the matching service label as a visible heading and MUST include short copy for scope, how the studio works on that line, and at least one example or outcome. The page MUST NOT be the `/services` overview.

#### Scenario: Scope process example present

- **WHEN** a visitor views a service detail page
- **THEN** they see that line’s heading plus scope, process, and at least one example or outcome

### Requirement: Start a Project from a detail page

Each detail page MUST include a primary call-to-action labeled “Start a Project” that navigates to `/contact`.

#### Scenario: CTA present

- **WHEN** a visitor views a service detail page
- **THEN** they see a “Start a Project” control that goes to `/contact`

### Requirement: Steep on detail pages

Each detail page MUST use the Steep token set (Paper White, Ink Black, mist cards at 24px radius). Blush Peach MAY appear at most once on a given detail page. The pages MUST NOT introduce a new palette.

#### Scenario: Cards use Steep radius

- **WHEN** a visitor views a content card on a service detail page
- **THEN** that card uses a 24px corner radius
