## MODIFIED Requirements

### Requirement: Inquiry form on Contact

The public site MUST NOT show the long project-inquiry form. Contact MUST use the short overlay in `contact-popup` (name, phone, reason only).

#### Scenario: Form fields present

- **WHEN** a visitor activates Contact us
- **THEN** they see name, phone, and reason, and they do not see company, links, role, subject, need, budget, or timeline fields

#### Scenario: Consultation and captcha absent

- **WHEN** a visitor views the contact overlay
- **THEN** they do not see a consultation checkbox or a vendor captcha widget

### Requirement: Valid submit creates a lead

A valid short-form submit MUST persist one lead with name, phone, and reason. The lead MUST start in stage New. An invalid submit MUST NOT persist a lead and MUST tell the visitor which required parts failed.

#### Scenario: Valid submit is stored

- **WHEN** a visitor submits valid name, phone, and reason
- **THEN** a lead exists with those values and stage New

#### Scenario: Over-limit lists rejected

- **WHEN** a visitor submits the short form
- **THEN** link and phone list limits from the old inquiry form do not apply

#### Scenario: Need too long rejected

- **WHEN** a visitor submits the short form
- **THEN** there is no 4000-character need field to reject

### Requirement: Thank-you then Contact

After a successful persist the overlay MUST show a success message. The visitor MUST remain on the current page. The site MUST NOT send them to `/contact`.

#### Scenario: Success feedback

- **WHEN** a visitor’s short lead is stored
- **THEN** they see a success message in the overlay and they are not on `/contact`

### Requirement: CTA label Tell us the work

Public pages MUST NOT show “Tell us the work” or “Start a Project”. Contact is the oval Contact us control.

#### Scenario: Homepage uses the new label

- **WHEN** a visitor views the homepage
- **THEN** they do not see “Tell us the work” or “Start a Project” in the hero

#### Scenario: Footer uses the new label

- **WHEN** a visitor views the footer
- **THEN** they do not see “Tell us the work” or “Start a Project”
