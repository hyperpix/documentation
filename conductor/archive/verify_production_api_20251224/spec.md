# Specification: Verify Production API (v1) (Track: verify_production_api_20251224)

## Overview
Following the update of the API base URL to `dev.montra.fi`, this track ensures that the Public API (v1) is fully functional, accurately documented, and that all integrations (SDK, Docs, Tests) are aligned with this new production endpoint.

## Functional Requirements

### 1. Documentation Alignment
- **Scope:** All files in `api-reference/` and `sdk-reference/`.
- **Requirement:** Ensure all example `curl` commands and SDK initialization code use `https://dev.montra.fi` instead of `https://sandbox.montra.fi`.
- **Check:** Verify that paths like `/api/v1/customers` are correctly appended to the new base URL.

### 2. API Functionality Verification
- **Scope:** `app/api/v1/*` routes.
- **Requirement:** Confirm that the route handlers are correctly processing requests and that authentication (Secret Key) is working as expected.
- **Verification:** Run the existing `tests/api/production-simulation.test.ts` suite.

### 3. SDK Synchronization
- **Scope:** `sdk-ts/` and its examples.
- **Requirement:** Ensure the SDK's default base URL or example configurations point to the new production environment.

## Acceptance Criteria
- [x] All `api-reference/*.md` files updated to use `dev.montra.fi`.
- [x] `tests/api/production-simulation.test.ts` passes 100%.
- [x] Manual verification (curl) of a key endpoint (e.g., `/api/v1/customers`) returns a successful response from the local environment (simulating production).
- [x] No references to `sandbox.montra.fi` remain in the active documentation or examples.
