## ADDED Requirements

### Requirement: Technology link from Studio

The Studio page MUST include a secondary link whose visible label and destination come from the Studio content document. For this Feature the destination MUST be `/technology` and the label MUST be “Technology & capabilities”. This link MUST NOT replace the primary “Start a Project” control.

#### Scenario: Technology link present

- **WHEN** a visitor views `/studio`
- **THEN** they see a “Technology & capabilities” control that goes to `/technology` and they still see a “Start a Project” control that goes to `/contact`

## MODIFIED Requirements

### Requirement: Single content document

Every visitor-visible string unique to `/studio` (document title, description, heading, intro, who-we-are heading and body, how-we-work heading and body, each principle label and blurb, callout heading and body if shown, CTA label and href, Technology link label and href) MUST come from one structured content document. Changing a field in that document MUST change what `/studio` renders without editing the page template. The document MAY be a static module. The site MUST NOT provide a CMS admin or editor in this Feature.

#### Scenario: Copy follows the document

- **WHEN** a field in the Studio content document is changed and `/studio` is reloaded
- **THEN** the page shows the new value for that field without a template edit

#### Scenario: No CMS admin

- **WHEN** a visitor uses only `/studio`
- **THEN** they cannot create, edit, or publish Studio content through an admin UI
