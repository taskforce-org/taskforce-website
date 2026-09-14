# process-page Specification

## Purpose

Process engagement steps on the homepage (`#process`), with every field coming from one content document that a later CMS can replace. `/process` redirects to that section.

## Requirements

### Requirement: Process page is reachable

The site MUST present Process as a homepage section with id `process`. A request to `/process` MUST NOT render a standalone Process page. It MUST send the visitor to `/#process`.

#### Scenario: Process loads on home

- **WHEN** a visitor opens the homepage and views the Process section
- **THEN** they see Process content from the Process content document

#### Scenario: Old process URL redirects

- **WHEN** a visitor opens `/process`
- **THEN** they reach `/#process` and they do not see a standalone Process page

### Requirement: Ordered engagement steps

The Process section MUST present a visible heading plus an ordered list of at least three engagement steps, each with a title and short body, taken from the content document. Steps MUST describe how a project moves (for example discover, scope, build, handoff) and MUST NOT be a Studio who-we-are section, a service-line index, a technology list, or a jobs list. Dummy copy that matches Task Force’s existing studio positioning is allowed.

#### Scenario: Steps present

- **WHEN** a visitor views the homepage Process section
- **THEN** they see a heading and at least three ordered steps with titles and supporting copy, and they do not see Studio identity copy, the five service lines as an index, a stack list, or job listings

### Requirement: Start a Project from Process

The Process section MAY include an in-page call-to-action whose visible label and destination come from the content document. If shown, the destination MUST be `/contact` and the label MUST be “Start a Project”. That control MUST NOT appear in the header. If shown, it MUST use the same filled size as other repeating “Start a Project” pills.

#### Scenario: CTA present

- **WHEN** a visitor views the homepage Process section and the Process document includes a CTA
- **THEN** they see an in-page “Start a Project” control that goes to `/contact` and they do not see that control in the header

### Requirement: Single content document

Every visitor-visible string unique to Process (heading, intro, each step title and body, callout heading and body if shown, CTA label and href) MUST come from one structured content document. Changing a field in that document MUST change what the Process section renders without editing the homepage template. The document MAY be a static module. The site MUST NOT provide a CMS admin or editor in this Feature.

#### Scenario: Copy follows the document

- **WHEN** a field in the Process content document is changed and the homepage is reloaded
- **THEN** the Process section shows the new value for that field without a template edit

#### Scenario: No CMS admin

- **WHEN** a visitor uses only the homepage Process section
- **THEN** they cannot create, edit, or publish Process content through an admin UI

### Requirement: Steep on Process

The Process section MUST use the Steep token set (Paper White, Ink Black, mist or glass cards at 24px radius). Blush Peach MAY appear at most once on the homepage. The section MUST NOT introduce a new palette.

#### Scenario: Cards use Steep radius

- **WHEN** a visitor views a content card in the homepage Process section
- **THEN** that card uses a 24px corner radius
