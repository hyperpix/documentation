# Plan: Verify Production API (v1)

## Phase 1: Domain Verification & Doc Update
- [x] Task: Search for all `sandbox.montra.fi` and `api.montra.fi` references.
- [x] Task: Update API documentation to use `dev.montra.fi/api/v1`.
- [x] Task: Update SDK `DEFAULT_BASE_URL` to `dev.montra.fi/api/v1`.
- [x] Task: Update OpenAPI specs and LLM docs.

## Phase 2: Functional Verification
- [x] Task: Run `curl -I https://dev.montra.fi/api/v1/customers` to verify reachability (Expected: 401).
- [x] Task: Run `tests/api/production-simulation.test.ts` to verify route handler logic.
- [x] Task: Conductor - User Manual Verification 'Production API Verification'
    - Note: Live verification of `dev.montra.fi` succeeded for Customers, Invoices, and Entitlements.
    - Note: Fixed syntax error in `msandbox-backup/proxy.ts` and missing `/api/v1/*` routes in public matchers.
    - Note: Verified ALL v1 API endpoints locally with real Secret Key (200 OK for all GET/POST handlers).
