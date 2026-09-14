# studio-about Specification

## Purpose

Public Studio/About page at `/studio` so a visitor can read who Task Force is and how the studio works at studio level, with every field coming from one content document that a later CMS can replace.

## Requirements

### Requirement: Studio page is reachable

The site MUST serve a Studio page at `/studio` that loads without blocking runtime errors. The document title MUST identify Task Force and Studio.

#### Scenario: Studio loads

- **WHEN** a visitor opens `/studio`
- **THEN** the page renders without blocking runtime errors and the document title includes Task Force and Studio

### Requirement: Studio identity at page depth

The page MUST present a visible heading plus short copy for who we are and how we work at studio level. How-we-work copy MUST stay studio-level (quality bar, how the studio takes work) and MUST NOT be a process-step list, a service-line index, a technology list, or a jobs list. Dummy copy that matches Task Force’s existing studio positioning is allowed.

#### Scenario: Who we are and how we work present

- **WHEN** a visitor views `/studio`
- **THEN** they see a heading, who-we-are copy, and studio-level how-we-work copy, and they do not see process steps, the five service lines as an index, a stack list, or job listings

### Requirement: Studio principles from the content document

The page MUST present at least two studio principles, each with a label and short supporting copy, taken from the same content document as the rest of the page.

#### Scenario: Principles visible

- **WHEN** a visitor views `/studio`
- **THEN** they see at least two principle labels with supporting copy

### Requirement: Start a Project from Studio

The page MUST include a primary call-to-action whose visible label and destination come from the content document. For this Feature the destination MUST be `/contact` and the label MUST be “Start a Project”.

#### Scenario: CTA present

- **WHEN** a visitor views `/studio`
- **THEN** they see a “Start a Project” control that goes to `/contact`

### Requirement: Single content document

Every visitor-visible string unique to `/studio` (document title, description, heading, intro, who-we-are heading and body, how-we-work heading and body, each principle label and blurb, callout heading and body if shown, CTA label and href) MUST come from one structured content document. Changing a field in that document MUST change what `/studio` renders without editing the page template. The document MAY be a static module. The site MUST NOT provide a CMS admin or editor in this Feature.

#### Scenario: Copy follows the document

- **WHEN** a field in the Studio content document is changed and `/studio` is reloaded
- **THEN** the page shows the new value for that field without a template edit

#### Scenario: No CMS admin

- **WHEN** a visitor uses only `/studio`
- **THEN** they cannot create, edit, or publish Studio content through an admin UI

### Requirement: Steep on Studio

The page MUST use the Steep token set (Paper White, Ink Black, mist cards at 24px radius). Blush Peach MAY appear at most once on this page. The page MUST NOT introduce a new palette.

#### Scenario: Cards use Steep radius

- **WHEN** a visitor views a content card on `/studio`
- **THEN** that card uses a 24px corner radius
