# Specification: API Verification & Documentation Overhaul (Track: verify_api_docs_20251223)

## Overview
This track aims to verify the functionality of all public API endpoints using the Secret Key (SK) authentication method and significantly improve the public-facing API documentation. The goal is to ensure that the code matches the docs and that the docs are comprehensive, accurate, and helpful.

## Functional Requirements

### 1. API Verification (Sandbox Execution)
- **Scope:** Verify all public endpoints in `app/api/v1/`.
- **Method:** Create a comprehensive integration test suite (`tests/api/production-simulation.test.ts`) that mocks a "production" environment by strictly enforcing SK authentication and validating responses against expected schemas.
- **Coverage:**
    -   Customers (CRUD)
    -   Products & Pricing Models
    -   Payment Links (Create, List)
    -   Invoices (Create, Get, List)
    -   Checkout Sessions
    -   Transactions & Settlements (Read-only)
    -   Usage Metering

### 2. Documentation Overhaul (`api-reference/`)
- **Location:** Update MDX files in the `api-reference/` directory (Mintlify structure).
- **Tasks:**
    -   **Audit:** Compare current `route.ts` implementations with existing docs.
    -   **Fix:** Correct any discrepancies in parameters, request bodies, or response schemas.
    -   **Enhance:** Add missing endpoints found in the codebase but not in docs.
    -   **Polish:** Improve descriptions, add realistic examples, and ensure clear "Authentication" sections specifying the need for `Bearer <SK>`.

## Non-Functional Requirements
- **Accuracy:** Documentation must effectively be a "source of truth".
- **Safety:** Verification tests must run safely in the CI environment (using the sandbox DB) but simulate production constraints (e.g., ensuring RLS works for SK access).

## Acceptance Criteria
- [ ] A new test suite `tests/api/production-simulation.test.ts` passes, covering all major API flows with SK auth.
- [ ] All public API routes found in `app/api/v1/` have a corresponding and accurate entry in `api-reference/`.
- [ ] Documentation clearly distinguishes between Public Key (client-side) and Secret Key (server-side) usage where applicable.
- [ ] No 405 or 500 errors are encountered during the happy-path execution of the verification suite.
