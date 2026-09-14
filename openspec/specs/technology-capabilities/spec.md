# technology-capabilities Specification

## Purpose

Public Technology & capabilities page at `/technology` so a visitor can see technical depth for each of the five service lines, with every field coming from one content document that a later CMS can replace.

## Requirements

### Requirement: Technology page is reachable

The site MUST serve a Technology page at `/technology` that loads without blocking runtime errors. The document title MUST identify Task Force and Technology.

#### Scenario: Technology loads

- **WHEN** a visitor opens `/technology`
- **THEN** the page renders without blocking runtime errors and the document title includes Task Force and Technology

### Requirement: Per-service-line capability groups

The page MUST present a visible heading plus exactly five capability groups, one for each existing service line, taken from the content document. Each group MUST use that service line’s label and MUST include at least one capability with a title and short body. Group copy MUST describe tools, platforms, or delivery practices for that line and MUST NOT be a service-line index (no scope, process, or example dump), a Process step list, Studio identity copy, or a jobs list. Dummy copy that matches Task Force’s existing studio positioning is allowed.

#### Scenario: Five capability groups present

- **WHEN** a visitor views `/technology`
- **THEN** they see a heading and five groups labeled Websites & E-commerce; Custom Systems & Dashboards; Desktop Software & Automation; Integrations, Redesign & Support; 3D & Interactive Experiences, each with at least one capability title and supporting copy, and they do not see service-line scope/process/example copy, Process steps, Studio identity copy, or job listings

### Requirement: Start a Project from Technology

The page MUST include a primary call-to-action whose visible label and destination come from the content document. For this Feature the destination MUST be `/contact` and the label MUST be “Start a Project”.

#### Scenario: CTA present

- **WHEN** a visitor views `/technology`
- **THEN** they see a “Start a Project” control that goes to `/contact`

### Requirement: Single content document

Every visitor-visible string unique to `/technology` (document title, description, heading, intro, each group label, each capability title and body, callout heading and body if shown, CTA label and href) MUST come from one structured content document. Changing a field in that document MUST change what `/technology` renders without editing the page template. The document MAY be a static module. The site MUST NOT provide a CMS admin or editor in this Feature.

#### Scenario: Copy follows the document

- **WHEN** a field in the Technology content document is changed and `/technology` is reloaded
- **THEN** the page shows the new value for that field without a template edit

#### Scenario: No CMS admin

- **WHEN** a visitor uses only `/technology`
- **THEN** they cannot create, edit, or publish Technology content through an admin UI

### Requirement: Steep on Technology

The page MUST use the Steep token set (Paper White, Ink Black, mist cards at 24px radius). Blush Peach MAY appear at most once on this page. The page MUST NOT introduce a new palette.

#### Scenario: Cards use Steep radius

- **WHEN** a visitor views a content card on `/technology`
- **THEN** that card uses a 24px corner radius
