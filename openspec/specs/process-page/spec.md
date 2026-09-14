# process-page Specification

## Purpose

Public Process page at `/process` so a visitor can read how an engagement with Task Force moves from first talk to handoff, with every field coming from one content document that a later CMS can replace.

## Requirements

### Requirement: Process page is reachable

The site MUST serve a Process page at `/process` that loads without blocking runtime errors. The document title MUST identify Task Force and Process.

#### Scenario: Process loads

- **WHEN** a visitor opens `/process`
- **THEN** the page renders without blocking runtime errors and the document title includes Task Force and Process

### Requirement: Ordered engagement steps

The page MUST present a visible heading plus an ordered list of at least three engagement steps, each with a title and short body, taken from the content document. Steps MUST describe how a project moves (for example discover, scope, build, handoff) and MUST NOT be a Studio who-we-are section, a service-line index, a technology list, or a jobs list. Dummy copy that matches Task Force’s existing studio positioning is allowed.

#### Scenario: Steps present

- **WHEN** a visitor views `/process`
- **THEN** they see a heading and at least three ordered steps with titles and supporting copy, and they do not see Studio identity copy, the five service lines as an index, a stack list, or job listings

### Requirement: Start a Project from Process

The page MUST include a primary call-to-action whose visible label and destination come from the content document. For this Feature the destination MUST be `/contact` and the label MUST be “Start a Project”.

#### Scenario: CTA present

- **WHEN** a visitor views `/process`
- **THEN** they see a “Start a Project” control that goes to `/contact`

### Requirement: Single content document

Every visitor-visible string unique to `/process` (document title, description, heading, intro, each step title and body, callout heading and body if shown, CTA label and href) MUST come from one structured content document. Changing a field in that document MUST change what `/process` renders without editing the page template. The document MAY be a static module. The site MUST NOT provide a CMS admin or editor in this Feature.

#### Scenario: Copy follows the document

- **WHEN** a field in the Process content document is changed and `/process` is reloaded
- **THEN** the page shows the new value for that field without a template edit

#### Scenario: No CMS admin

- **WHEN** a visitor uses only `/process`
- **THEN** they cannot create, edit, or publish Process content through an admin UI

### Requirement: Steep on Process

The page MUST use the Steep token set (Paper White, Ink Black, mist cards at 24px radius). Blush Peach MAY appear at most once on this page. The page MUST NOT introduce a new palette.

#### Scenario: Cards use Steep radius

- **WHEN** a visitor views a content card on `/process`
- **THEN** that card uses a 24px corner radius
