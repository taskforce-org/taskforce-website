## Purpose

Public Careers stub so the site chrome Careers item has a real page before the job board exists. The page identifies Task Force and Careers without listing jobs or taking applications.

## ADDED Requirements

### Requirement: Careers stub is reachable

The site MUST serve a Careers page at `/careers` that loads without blocking runtime errors. The document title MUST identify Task Force and Careers.

#### Scenario: Careers loads

- **WHEN** a visitor opens `/careers`
- **THEN** the page renders without blocking runtime errors and the document title includes Task Force and Careers

### Requirement: No job listings or applications

The Careers stub MUST NOT list jobs, MUST NOT include an application form, and MUST NOT claim open roles. Short dummy copy that the studio hires later is allowed.

#### Scenario: No jobs on the stub

- **WHEN** a visitor views `/careers`
- **THEN** they do not see job listings, apply controls, or named open roles

### Requirement: Steep on Careers stub

The page MUST use the Steep token set (Paper White, Ink Black). Blush Peach MAY appear at most once on this page. The page MUST NOT introduce a new palette.

#### Scenario: Canvas stays on Steep

- **WHEN** a visitor views `/careers`
- **THEN** the page uses Paper White / Ink Black and does not introduce a new palette
