## Purpose

Lets a visitor send a short lead (name, phone, reason) from a Contact us control in the oval without a Contact page or a long inquiry form.

## ADDED Requirements

### Requirement: Oval Contact us control

The oval MUST include a Contact us control on the right. Activating it MUST open the contact overlay. The site MUST NOT use a `/contact` page for this flow.

#### Scenario: Open from oval

- **WHEN** a visitor activates Contact us in the oval
- **THEN** they see the short form overlay and they do not navigate to `/contact`

### Requirement: Short form and success

The overlay MUST collect name, phone, and reason. A valid submit MUST persist a lead with those three fields, MUST show a success message, and MUST NOT keep the long project-inquiry fields (company, links list, role, subject, need, budget, timeline, service tag).

#### Scenario: Valid submit

- **WHEN** a visitor submits name, phone, and reason that pass server validation
- **THEN** a lead is stored with those fields and they see a success message

#### Scenario: Invalid submit

- **WHEN** a visitor submits with a required field missing
- **THEN** no lead is stored and they are told which required parts failed

### Requirement: Light spam controls

The submit path MUST include a hidden honeypot, a minimum time-on-form check, and an IP rate limit. The site MUST NOT add a third-party captcha widget in this change.

#### Scenario: Honeypot filled

- **WHEN** a submit includes a filled honeypot field
- **THEN** the server MUST NOT persist a lead and MUST NOT show a server error that teaches the bot the rule

#### Scenario: Burst from one IP

- **WHEN** the same IP submits valid forms faster than the rate limit
- **THEN** later submits in that window MUST NOT persist extra leads
