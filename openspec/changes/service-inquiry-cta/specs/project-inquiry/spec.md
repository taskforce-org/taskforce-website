## MODIFIED Requirements

### Requirement: Inquiry form on Contact

The Contact page MUST include a project-inquiry form. The form MUST collect: company name; a list of links of at most three items, with a control that adds another link until that limit; the person’s full name and role; a list of phone numbers of at most two items, with a control that adds another number until that limit; a short subject sentence; need text of at most 4000 characters; a minimum budget amount typed by the visitor; a timeline chosen from ASAP, 1–3 months, 3–6 months, 6+ months, and flexible.

The English site MUST treat minimum budget as a visitor-typed amount in USD. The form MUST NOT present Farsi toman tier chips. The form MUST NOT include a consultation checkbox, a consent checkbox, or a captcha. The form MUST NOT include a service-line dropdown; a service is applied only through the shared modal or a known `service` query value. When a known service is applied, the form MUST show that line’s label as a tag.

#### Scenario: Form fields present

- **WHEN** a visitor views `/contact`
- **THEN** they see those fields and they can add links up to three and phone numbers up to two

#### Scenario: Consultation and captcha absent

- **WHEN** a visitor views the inquiry form
- **THEN** they do not see a consultation checkbox, a captcha, a consent checkbox, or a service-line dropdown

#### Scenario: Tagged service visible

- **WHEN** a visitor has a known service applied to the form
- **THEN** they see that service’s label on the form

### Requirement: Valid submit creates a lead

A valid submit MUST persist one lead that includes the submitted fields and a creation time. The lead MUST start in stage New, MUST NOT be assigned to a staff member, and MUST have consultation unset. When a known service slug is present on the submit, the lead MUST store that slug. When no known slug is present, the lead MUST have no service slug. An invalid submit MUST NOT persist a lead and MUST tell the visitor which required parts failed. An unknown slug on submit MUST be stored as no service slug.

#### Scenario: Valid submit is stored

- **WHEN** a visitor submits a complete valid inquiry with no service applied
- **THEN** a lead exists with those values, stage New, no assignee, and no service slug

#### Scenario: Valid submit stores the service slug

- **WHEN** a visitor submits a complete valid inquiry with `websites-ecommerce` applied
- **THEN** a lead exists with `serviceSlug` `websites-ecommerce`

#### Scenario: Over-limit lists rejected

- **WHEN** a visitor submits more than three links or more than two phone numbers
- **THEN** the system does not persist that submit

#### Scenario: Need too long rejected

- **WHEN** a visitor submits need text longer than 4000 characters
- **THEN** the system does not persist that submit
