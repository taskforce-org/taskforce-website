# contact-page Specification

## Purpose

Public Contact / Start a Project page at `/contact` so a visitor can see how to begin work with Task Force, with every field coming from one content document that a later CMS can replace, and with no inquiry form yet.

## Requirements

### Requirement: Contact page is reachable

The site MUST serve a Contact page at `/contact` that loads without blocking runtime errors. The document title MUST identify Task Force and Contact.

#### Scenario: Contact loads

- **WHEN** a visitor opens `/contact`
- **THEN** the page renders without blocking runtime errors and the document title includes Task Force and Contact

### Requirement: Availability and estimates at page depth

The page MUST present a visible heading plus short copy for availability and for how estimates work, taken from the content document. Copy MUST NOT include numeric prices, SLAs, calendar guarantees, phone numbers, street addresses, or named people. The page MUST NOT be a Studio who-we-are section, a Process step list, a service-line index, a technology list, or a jobs list. Dummy copy that matches Task Force’s existing studio positioning is allowed.

#### Scenario: Availability and estimates present

- **WHEN** a visitor views `/contact`
- **THEN** they see a heading, availability copy, and how-estimates-work copy, and they do not see a project-inquiry form, Studio identity copy, Process steps, the five service lines as an index, a stack list, or job listings

### Requirement: No inquiry form

The Contact page MUST NOT include a project-inquiry form. Submitting an inquiry is out of scope until a later Feature.

#### Scenario: No form on Contact

- **WHEN** a visitor uses only `/contact`
- **THEN** they cannot submit a project inquiry through a form

### Requirement: Single content document

Every visitor-visible string unique to `/contact` (document title, description, heading, intro, availability heading and body, estimates heading and body, next-step heading and body if shown, callout heading and body if shown, CTA label and href if shown) MUST come from one structured content document. Changing a field in that document MUST change what `/contact` renders without editing the page template. The document MAY be a static module. The site MUST NOT provide a CMS admin or editor in this Feature.

#### Scenario: Copy follows the document

- **WHEN** a field in the Contact content document is changed and `/contact` is reloaded
- **THEN** the page shows the new value for that field without a template edit

#### Scenario: No CMS admin

- **WHEN** a visitor uses only `/contact`
- **THEN** they cannot create, edit, or publish Contact content through an admin UI

### Requirement: Steep on Contact

The page MUST use the Steep token set (Paper White, Ink Black, mist cards at 24px radius). Blush Peach MAY appear at most once on this page. The page MUST NOT introduce a new palette.

#### Scenario: Cards use Steep radius

- **WHEN** a visitor views a content card on `/contact`
- **THEN** that card uses a 24px corner radius
