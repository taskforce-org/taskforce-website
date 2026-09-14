## Purpose

Public `/services` overview that lists Task Force’s five service lines at index depth so visitors can choose a line before dedicated detail pages exist.

## ADDED Requirements

### Requirement: Services overview is reachable

The site MUST serve a Services overview at `/services` that loads without blocking runtime errors. The document title MUST identify Task Force and Services.

#### Scenario: Overview loads

- **WHEN** a visitor opens `/services`
- **THEN** the page renders without blocking runtime errors and the document title includes Task Force and Services

### Requirement: Five service lines at overview depth

The overview MUST present these five labels: Websites & E-commerce; Custom Systems & Dashboards; Desktop Software & Automation; Integrations, Redesign & Support; 3D & Interactive Experiences. Each line MUST include short supporting copy. The page MUST NOT be a service detail page (no per-line scope, process, deliverables, or dedicated `/services/...` routes).

#### Scenario: Five lines visible

- **WHEN** a visitor views `/services`
- **THEN** they see those five labels with supporting copy and no per-service detail route

### Requirement: Start a Project from overview

The overview MUST include a primary call-to-action labeled “Start a Project” that navigates to `/contact`.

#### Scenario: CTA present

- **WHEN** a visitor views `/services`
- **THEN** they see a “Start a Project” control that goes to `/contact`

### Requirement: Steep on the overview

The overview MUST use the Steep token set (Paper White, Ink Black, mist cards at 24px radius). Blush Peach MAY appear at most once on this page. The page MUST NOT introduce a new palette.

#### Scenario: Cards use Steep radius

- **WHEN** a visitor views service cards on `/services`
- **THEN** those cards use a 24px corner radius
