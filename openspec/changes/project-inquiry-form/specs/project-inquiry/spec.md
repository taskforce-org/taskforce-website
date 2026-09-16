## Purpose

Lets a visitor submit a project inquiry on `/contact` so Task Force stores a durable lead without a public account, and so later CRM Features can read that same record.

## ADDED Requirements

### Requirement: Inquiry form on Contact

The Contact page MUST include a project-inquiry form. The form MUST collect: company name; a list of links of at most three items, with a control that adds another link until that limit; the person’s full name and role; a list of phone numbers of at most two items, with a control that adds another number until that limit; a short subject sentence; need text of at most 4000 characters; a minimum budget amount typed by the visitor; a timeline chosen from ASAP, 1–3 months, 3–6 months, 6+ months, and flexible.

The English site MUST treat minimum budget as a visitor-typed amount in USD. The form MUST NOT present Farsi toman tier chips. The form MUST NOT include a consultation checkbox, a service-line picker, a consent checkbox, or a captcha.

#### Scenario: Form fields present

- **WHEN** a visitor views `/contact`
- **THEN** they see those fields and they can add links up to three and phone numbers up to two

#### Scenario: Consultation and captcha absent

- **WHEN** a visitor views the inquiry form
- **THEN** they do not see a consultation checkbox, a captcha, or a consent checkbox

### Requirement: Valid submit creates a lead

A valid submit MUST persist one lead that includes the submitted fields and a creation time. The lead MUST start in stage New, MUST NOT be assigned to a staff member, MUST have consultation unset, and MUST have no service slug until a later Feature sets them. An invalid submit MUST NOT persist a lead and MUST tell the visitor which required parts failed.

#### Scenario: Valid submit is stored

- **WHEN** a visitor submits a complete valid inquiry
- **THEN** a lead exists with those values, stage New, and no assignee

#### Scenario: Over-limit lists rejected

- **WHEN** a visitor submits more than three links or more than two phone numbers
- **THEN** the system does not persist that submit

#### Scenario: Need too long rejected

- **WHEN** a visitor submits need text longer than 4000 characters
- **THEN** the system does not persist that submit

### Requirement: Thank-you then Contact

After a successful persist the site MUST show a thank-you popup and then return the visitor to `/contact`.

#### Scenario: Success feedback

- **WHEN** a visitor’s inquiry is stored
- **THEN** they see a thank-you popup and then they are on `/contact`

### Requirement: No public accounts

Visitors MUST NOT create or use an account to submit. Only staff identities belong in the identity store. This Feature MUST NOT expose login or admin screens.

#### Scenario: Submit without an account

- **WHEN** a visitor submits an inquiry
- **THEN** they are not asked to register or log in

#### Scenario: Admin UI absent

- **WHEN** a visitor uses only public routes
- **THEN** they cannot open a lead list, edit a lead, or log in as staff

### Requirement: CTA label Tell us the work

Every public control that previously used the visible label “Start a Project” MUST use “Tell us the work” instead. Those controls MUST still go to `/contact`. The English label MUST live in the same content documents as today. Those documents MUST also hold the Farsi label «کار را بگویید» for a later language Feature. The header oval MUST NOT contain this control. Repeating filled pills MUST share one size.

#### Scenario: Homepage uses the new label

- **WHEN** a visitor views the homepage
- **THEN** they see an in-page control labeled “Tell us the work” that goes to `/contact` and they do not see “Start a Project”

#### Scenario: Footer uses the new label

- **WHEN** a visitor views the footer
- **THEN** they see “Tell us the work” going to `/contact` and they do not see “Start a Project”
