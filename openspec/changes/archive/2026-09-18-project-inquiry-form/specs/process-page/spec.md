## MODIFIED Requirements

### Requirement: Start a Project from Process

The Process section MAY include an in-page call-to-action whose visible label and destination come from the content document. If shown, the destination MUST be `/contact` and the English label MUST be “Tell us the work”. That control MUST NOT appear in the header. If shown, it MUST use the same filled size as other repeating “Tell us the work” pills. The document MUST also hold the Farsi label «کار را بگویید».

#### Scenario: CTA present

- **WHEN** a visitor views the homepage Process section and the Process document includes a CTA
- **THEN** they see an in-page “Tell us the work” control that goes to `/contact` and they do not see that control in the header
