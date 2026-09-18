## Purpose

Lets a visitor open one shared service modal from home or Contact, read that line’s job copy and portfolio, and enter the inquiry form with that line tagged on the lead.

## ADDED Requirements

### Requirement: Shared service modal

The site MUST present one service modal implementation used on both the homepage services section and `/contact`. Opening a given service slug MUST show the same heading, job copy, and portfolio content regardless of which of those two surfaces opened it. The modal body MUST be scrollable when the content is taller than the viewport. The modal MUST stay open until the visitor dismisses it (close control, backdrop, or Escape). It MUST NOT close only because the pointer left the trigger.

Job copy MUST include that line’s scope and process from the services content document. Portfolio MUST include at least that line’s example from the same document. The modal MUST NOT load a CMS or media library in this Feature.

#### Scenario: Same modal on home and Contact

- **WHEN** a visitor opens the modal for `websites-ecommerce` from the homepage and later from `/contact`
- **THEN** they see the same title, job copy, and portfolio example for that slug

#### Scenario: Long content scrolls

- **WHEN** a visitor opens a modal whose content is taller than the viewport
- **THEN** they can scroll the modal body without leaving the page

#### Scenario: Stays until dismiss

- **WHEN** a visitor opens a service modal and moves the pointer off the card
- **THEN** the modal remains open until they dismiss it

### Requirement: Hover tap and click open

On a fine pointer, hovering a service trigger MUST open that service’s modal. Clicking the trigger MUST also open it. On a coarse pointer, a tap on the trigger MUST open it. Keyboard focus plus activation (Enter or Space on the trigger) MUST open it. Triggers MUST NOT navigate to `/services/[slug]`.

#### Scenario: Desktop hover opens

- **WHEN** a visitor with a fine pointer hovers a homepage service card
- **THEN** that service’s modal opens on the same page

#### Scenario: Phone tap opens

- **WHEN** a visitor taps a service name on `/contact` on a phone
- **THEN** that service’s modal opens on the same page

#### Scenario: No detail URL

- **WHEN** a visitor opens a service modal from a card or name
- **THEN** the location is not `/services/[slug]`

### Requirement: Modal CTA Tell us the work

The modal MUST include one primary control labeled “Tell us the work”. That control MUST use the same English label as the site-wide inquiry CTA. Farsi «کار را بگویید» MUST remain stored with that CTA for a later language Feature.

When the visitor activates that control from the homepage, the site MUST send them to `/contact?service=<slug>#inquire` using that line’s slug. When they activate it while already on `/contact`, the site MUST close the modal, apply that slug to the inquiry form, and scroll to the inquiry form. The form MUST NOT use a service-line dropdown as the picker.

#### Scenario: Home CTA deep-links Contact

- **WHEN** a visitor activates “Tell us the work” in the modal on the homepage for `custom-systems-dashboards`
- **THEN** they reach `/contact` with `service=custom-systems-dashboards` and the inquiry form in view

#### Scenario: Contact CTA prefills in place

- **WHEN** a visitor activates “Tell us the work” in the modal on `/contact` for `3d-interactive-experiences`
- **THEN** they remain on `/contact`, the form is tagged with that slug, and the inquiry form is in view
