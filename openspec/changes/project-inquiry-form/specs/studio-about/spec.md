## MODIFIED Requirements

### Requirement: Start a Project from Studio

The Studio section MAY include an in-page call-to-action whose visible label and destination come from the content document. If shown, the destination MUST be `/contact` and the English label MUST be “Tell us the work”. That control MUST NOT appear in the header. If shown, it MUST use the same filled size as other repeating “Tell us the work” pills. The document MUST also hold the Farsi label «کار را بگویید».

#### Scenario: CTA present

- **WHEN** a visitor views the homepage Studio section and the Studio document includes a CTA
- **THEN** they see an in-page “Tell us the work” control that goes to `/contact` and they do not see that control in the header

### Requirement: Technology link from Studio

The Studio section MUST include a secondary link whose visible label and destination come from the Studio content document. For this Feature the destination MUST be `/technology` and the label MUST be “Technology & capabilities”. This link MUST NOT replace the primary “Tell us the work” control if that control is shown.

#### Scenario: Technology link present

- **WHEN** a visitor views the homepage Studio section
- **THEN** they see a “Technology & capabilities” control that goes to `/technology`
