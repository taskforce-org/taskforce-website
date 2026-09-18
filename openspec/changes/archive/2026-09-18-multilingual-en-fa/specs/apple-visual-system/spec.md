## ADDED Requirements

### Requirement: Farsi typeface and logical chrome
Farsi pages MUST use a Persian-capable sans (Vazirmatn or equivalent). Oval, footer, and section chrome MUST stay usable in RTL (logical start/end, not hardcoded left-only layout).

#### Scenario: Oval on Farsi
- **WHEN** a visitor opens `/fa`
- **THEN** the oval still shows mark, page name, and Contact in English left-to-right order
