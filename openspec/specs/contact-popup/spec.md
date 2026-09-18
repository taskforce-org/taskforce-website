# contact-popup Specification

## Purpose

Lets a visitor send a short lead (name, phone, reason) from Contact in the oval without a Contact page or a long inquiry form.

## Requirements

### Requirement: Oval Contact us control

The oval MUST include Contact on the right. Activating it MUST open the overlay. The site MUST NOT use a `/contact` page for this flow.

#### Scenario: Open from oval

- **WHEN** a visitor activates Contact in the oval
- **THEN** they see the short form overlay and they do not navigate to `/contact`

### Requirement: Short form and success

The overlay MUST collect name, phone, and reason. Labels MUST follow the current locale. A valid submit MUST persist a lead with those three fields and show success.

#### Scenario: Valid submit

- **WHEN** a visitor submits name, phone, and reason that pass server validation
- **THEN** a lead is stored with those fields and they see a success message

### Requirement: Light spam controls

The submit path MUST include a hidden honeypot, a minimum time-on-form check, and an IP rate limit. No third-party captcha widget.

#### Scenario: Honeypot filled

- **WHEN** a submit includes a filled honeypot field
- **THEN** the server MUST NOT persist a lead
