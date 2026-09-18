## MODIFIED Requirements

### Requirement: Availability and estimates at page depth

The page MUST present a visible heading plus short copy for availability and for how estimates work, taken from the content document. Copy MUST NOT include numeric prices, SLAs, calendar guarantees, phone numbers, street addresses, or named people. The page MUST NOT be a Studio who-we-are section, a Process step list, a service-line index, a technology list, or a jobs list. Dummy copy that matches Task Force’s existing studio positioning is allowed. Copy MUST NOT claim that the inquiry form ships in a later release.

#### Scenario: Availability and estimates present

- **WHEN** a visitor views `/contact`
- **THEN** they see a heading, availability copy, and how-estimates-work copy, and they do not see Studio identity copy, Process steps, the five service lines as an index, a stack list, or job listings

### Requirement: Single content document

Every visitor-visible string unique to `/contact` except live validation messages (document title, description, heading, intro, availability heading and body, estimates heading and body, next-step heading and body if shown, callout heading and body if shown, CTA label and href if shown, form section labels, thank-you popup copy) MUST come from one structured content document. Changing a field in that document MUST change what `/contact` renders without editing the page template. The document MUST include English CTA label “Tell us the work” and Farsi CTA label «کار را بگویید». The document MAY be a static module. The site MUST NOT provide a CMS admin or editor in this Feature.

#### Scenario: Copy follows the document

- **WHEN** a field in the Contact content document is changed and `/contact` is reloaded
- **THEN** the page shows the new value for that field without a template edit

#### Scenario: No CMS admin

- **WHEN** a visitor uses only `/contact`
- **THEN** they cannot create, edit, or publish Contact content through an admin UI

## REMOVED Requirements

### Requirement: No inquiry form

**Reason:** FEAT-9 (`869f13ayr`) ships the project-inquiry form on `/contact`.
**Migration:** Follow `project-inquiry`. Visitors submit through the Contact form.

## ADDED Requirements

### Requirement: Contact hosts the inquiry form

The Contact page MUST render the project-inquiry form defined by `project-inquiry`. The looping primary CTA on this page, if shown, MUST use label “Tell us the work”.

#### Scenario: Form is on Contact

- **WHEN** a visitor opens `/contact`
- **THEN** they can fill and submit a project inquiry on that page
