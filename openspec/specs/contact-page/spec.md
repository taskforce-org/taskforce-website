# contact-page Specification

## Purpose

There is no Contact page. Contact is the oval overlay. `/contact` redirects home.

## Requirements

### Requirement: Contact page is gone

The site MUST NOT serve a Contact page. `/contact` MUST send the visitor to Farsi home.

#### Scenario: Old contact URL

- **WHEN** a visitor opens `/contact`
- **THEN** they land on `/fa`
