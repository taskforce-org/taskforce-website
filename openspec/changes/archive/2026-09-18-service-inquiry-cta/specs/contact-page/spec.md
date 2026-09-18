## MODIFIED Requirements

### Requirement: Availability and estimates at page depth

The page MUST present a visible heading plus short copy for availability and for how estimates work, taken from the content document. Copy MUST NOT include numeric prices, SLAs, calendar guarantees, phone numbers, street addresses, or named people. The page MUST NOT be a Studio who-we-are section, a Process step list, a technology list, or a jobs list. The page MUST present the five service names as triggers for the shared service modal; that list MUST NOT replace the homepage services overview (no duplicate equal-size overview cards required here). Dummy copy that matches Task Force’s existing studio positioning is allowed. Copy MUST NOT claim that the inquiry form ships in a later release.

#### Scenario: Availability and estimates present

- **WHEN** a visitor views `/contact`
- **THEN** they see a heading, availability copy, and how-estimates-work copy, and they do not see Studio identity copy, Process steps, a stack list, or job listings

#### Scenario: Service names on Contact

- **WHEN** a visitor views `/contact`
- **THEN** they see the five service names and can open the shared service modal from them

### Requirement: Single content document

Every visitor-visible string unique to `/contact` except live validation messages (document title, description, heading, intro, availability heading and body, estimates heading and body, next-step heading and body if shown, callout heading and body if shown, CTA label and href if shown, form section labels, thank-you popup copy, Contact-side heading for the service-name list if shown) MUST come from one structured content document. Changing a field in that document MUST change what `/contact` renders without editing the page template. Service line labels, job copy, and portfolio examples MUST still come from the services content document. The Contact document MUST include English CTA label “Tell us the work” and Farsi CTA label «کار را بگویید». The document MAY be a static module. The site MUST NOT provide a CMS admin or editor in this Feature.

#### Scenario: Copy follows the document

- **WHEN** a field in the Contact content document is changed and `/contact` is reloaded
- **THEN** the page shows the new value for that field without a template edit

#### Scenario: No CMS admin

- **WHEN** a visitor uses only `/contact`
- **THEN** they cannot create, edit, or publish Contact content through an admin UI

## ADDED Requirements

### Requirement: Service query prefills the form

When `/contact` is opened with a `service` query value that matches a known service slug, the inquiry form MUST be tagged with that slug and MUST be scrolled into view. An unknown or empty `service` value MUST leave the form untagged and MUST still render `/contact` without error.

#### Scenario: Known slug tags the form

- **WHEN** a visitor opens `/contact?service=desktop-software-automation`
- **THEN** the inquiry form is in view and tagged with that service

#### Scenario: Unknown slug ignored

- **WHEN** a visitor opens `/contact?service=not-a-line`
- **THEN** the page loads, the form is not tagged with a service, and no lead is written
