# locale-rtl Specification

## Purpose

Lets visitors use the whole public site in Farsi (right-to-left) or English (left-to-right), with Farsi as the default.

## Requirements

### Requirement: Locale-prefixed public URLs

The public site MUST serve Farsi at `/fa` and English at `/en`. `/` MUST redirect to `/fa`. Unprefixed public pages that still exist MUST land on the Farsi equivalent.

#### Scenario: Root opens Farsi

- **WHEN** a visitor opens `/`
- **THEN** they are sent to `/fa`

#### Scenario: Unprefixed about

- **WHEN** a visitor opens `/about`
- **THEN** they land on `/fa/about`

### Requirement: Document language and direction

Farsi pages MUST set `lang` to `fa` and `dir` to `rtl`. English pages MUST set `lang` to `en` and `dir` to `ltr`.

#### Scenario: Farsi home is RTL

- **WHEN** a visitor opens `/fa`
- **THEN** the document is Farsi and page content reads right-to-left

### Requirement: Language switch keeps the page

A fixed circular control at the lower-left of the viewport MUST switch FA and EN and keep the same page. The oval MUST NOT host the language control.

#### Scenario: Switch on a service page

- **WHEN** a visitor on `/fa/services/websites-ecommerce` chooses English
- **THEN** they land on `/en/services/websites-ecommerce`

### Requirement: Oval layout stays English order

The oval MUST keep left-to-right slot order on both locales: mark, page name, Contact. Translated labels are allowed.

#### Scenario: Farsi oval order

- **WHEN** a visitor opens `/fa`
- **THEN** the oval still reads mark on the left, page name in the middle, Contact on the right

### Requirement: Full Farsi copy in seed

Chrome, overlay, footer, home, about, blog, services, work, and testimonials MUST have complete Farsi text in the bilingual seed. English MUST remain a complete parallel locale.

#### Scenario: Farsi home is not English

- **WHEN** a visitor opens `/fa`
- **THEN** hero, section titles, service cards, and chrome are Farsi
