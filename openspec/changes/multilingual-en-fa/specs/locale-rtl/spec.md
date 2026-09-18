## Purpose

Lets visitors use the whole public site in Farsi (right-to-left) or English (left-to-right), with Farsi as the default, without depending on Strapi until go-live.

## ADDED Requirements

### Requirement: Locale-prefixed public URLs
The public site MUST serve Farsi at `/fa` (and nested paths) and English at `/en` (and nested paths). `/` MUST redirect to `/fa`. A request to an unprefixed public page that still exists under a locale MUST land on the Farsi equivalent.

#### Scenario: Root opens Farsi
- **WHEN** a visitor opens `/`
- **THEN** they are sent to `/fa`

#### Scenario: Unprefixed about
- **WHEN** a visitor opens `/about`
- **THEN** they land on `/fa/about`

### Requirement: Document language and direction
Farsi pages MUST set document language to `fa` and direction to `rtl`. English pages MUST set language to `en` and direction to `ltr`.

#### Scenario: Farsi home is RTL
- **WHEN** a visitor opens `/fa`
- **THEN** the document is Farsi and the layout reads right-to-left

#### Scenario: English home is LTR
- **WHEN** a visitor opens `/en`
- **THEN** the document is English and the layout reads left-to-right

### Requirement: Language switch keeps the page
A fixed circular control at the lower-left of the viewport MUST switch FA and EN. Switching MUST keep the same page (home, about, blog, post, service, or work) in the other locale. The oval MUST NOT host the language control.

#### Scenario: Switch on a service page
- **WHEN** a visitor on `/fa/services/websites-ecommerce` chooses English
- **THEN** they land on `/en/services/websites-ecommerce`

### Requirement: Oval layout stays English order
The oval MUST keep left-to-right slot order on both locales: mark, page name, Contact. Translated labels are allowed. Document `dir` MUST NOT reverse the oval.

#### Scenario: Farsi oval order
- **WHEN** a visitor opens `/fa`
- **THEN** the oval still reads mark on the left, page name in the middle, Contact on the right

### Requirement: Full Farsi copy in seed
Chrome, overlay, footer, home, about, blog, services, work, and testimonials MUST have complete Farsi text in the bilingual seed. English MUST remain a complete parallel locale. The site MUST NOT call Strapi for this Feature.

#### Scenario: Farsi home is not English
- **WHEN** a visitor opens `/fa`
- **THEN** hero, section titles, service cards, and chrome are Farsi, not leftover English labels
