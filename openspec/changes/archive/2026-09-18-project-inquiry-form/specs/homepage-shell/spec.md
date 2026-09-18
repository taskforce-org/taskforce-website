## MODIFIED Requirements

### Requirement: Start a Project CTA

The homepage MUST include an in-page primary call-to-action labeled “Tell us the work”. The CTA MUST navigate to `/contact`. `/contact` MUST load as the Contact page and MUST include the project-inquiry form. Repeating filled “Tell us the work” pills on the site MUST share one size. The header MUST NOT contain this CTA. Public pages MUST NOT show the label “Start a Project”.

#### Scenario: CTA present

- **WHEN** a visitor views the homepage
- **THEN** they see an in-page primary control labeled “Tell us the work” and they do not see that control in the header

#### Scenario: Contact page has the form

- **WHEN** a visitor follows the CTA to `/contact`
- **THEN** the page loads with a project-inquiry form

#### Scenario: Filled pills share one size

- **WHEN** a visitor sees more than one filled “Tell us the work” pill on the site
- **THEN** those pills use the same size

### Requirement: Out of scope stays absent

The homepage MUST NOT include CRM admin, job board, CMS editing, bilingual/RTL UI, live portfolio data, or 3D/WebGL scenes. The homepage itself MUST NOT include the inquiry form. Submitting an inquiry MUST only be possible through `/contact`.

#### Scenario: Homepage has no form

- **WHEN** a visitor uses only the homepage
- **THEN** they cannot submit an inquiry, apply for a job, or switch language
