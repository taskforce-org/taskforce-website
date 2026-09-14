## MODIFIED Requirements

### Requirement: Studio page is reachable

The site MUST present Studio as a homepage section with id `studio`. A request to `/studio` MUST NOT render a standalone Studio page. It MUST send the visitor to `/#studio`.

#### Scenario: Studio loads on home

- **WHEN** a visitor opens the homepage and views the Studio section
- **THEN** they see Studio content from the Studio content document

#### Scenario: Old studio URL redirects

- **WHEN** a visitor opens `/studio`
- **THEN** they reach `/#studio` and they do not see a standalone Studio page

### Requirement: Studio identity at page depth

The Studio section MUST present a visible heading plus short copy for who we are and how we work at studio level. How-we-work copy MUST stay studio-level (quality bar, how the studio takes work) and MUST NOT be a process-step list, a service-line index, a technology list, or a jobs list. Dummy copy that matches Task Force’s existing studio positioning is allowed.

#### Scenario: Who we are and how we work present

- **WHEN** a visitor views the homepage Studio section
- **THEN** they see a heading, who-we-are copy, and studio-level how-we-work copy, and they do not see process steps, the five service lines as an index, a stack list, or job listings

### Requirement: Studio principles from the content document

The Studio section MUST present at least two studio principles, each with a label and short supporting copy, taken from the same content document as the rest of the section.

#### Scenario: Principles visible

- **WHEN** a visitor views the homepage Studio section
- **THEN** they see at least two principle labels with supporting copy

### Requirement: Start a Project from Studio

The Studio section MAY include an in-page call-to-action whose visible label and destination come from the content document. If shown, the destination MUST be `/contact` and the label MUST be “Start a Project”. That control MUST NOT appear in the header. If shown, it MUST use the same filled size as other repeating “Start a Project” pills.

#### Scenario: CTA present

- **WHEN** a visitor views the homepage Studio section and the Studio document includes a CTA
- **THEN** they see an in-page “Start a Project” control that goes to `/contact` and they do not see that control in the header

### Requirement: Technology link from Studio

The Studio section MUST include a secondary link whose visible label and destination come from the Studio content document. For this Feature the destination MUST be `/technology` and the label MUST be “Technology & capabilities”. This link MUST NOT replace the primary “Start a Project” control if that control is shown.

#### Scenario: Technology link present

- **WHEN** a visitor views the homepage Studio section
- **THEN** they see a “Technology & capabilities” control that goes to `/technology`

### Requirement: Single content document

Every visitor-visible string unique to Studio (heading, intro, who-we-are heading and body, how-we-work heading and body, each principle label and blurb, callout heading and body if shown, CTA label and href, Technology link label and href) MUST come from one structured content document. Changing a field in that document MUST change what the Studio section renders without editing the homepage template. The document MAY be a static module. The site MUST NOT provide a CMS admin or editor in this Feature.

#### Scenario: Copy follows the document

- **WHEN** a field in the Studio content document is changed and the homepage is reloaded
- **THEN** the Studio section shows the new value for that field without a template edit

#### Scenario: No CMS admin

- **WHEN** a visitor uses only the homepage Studio section
- **THEN** they cannot create, edit, or publish Studio content through an admin UI

### Requirement: Steep on Studio

The Studio section MUST use the Steep token set (Paper White, Ink Black, mist or glass cards at 24px radius). Blush Peach MAY appear at most once on the homepage. The section MUST NOT introduce a new palette.

#### Scenario: Cards use Steep radius

- **WHEN** a visitor views a content card in the homepage Studio section
- **THEN** that card uses a 24px corner radius
