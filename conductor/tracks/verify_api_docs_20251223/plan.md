# Implementation Plan - API Verification & Documentation Overhaul

This plan focuses on rigorous API verification via automated tests and a comprehensive update of the public documentation to match the actual code behavior.

## Phase 1: API Verification Suite
Goal: Ensure all API endpoints work as expected with Secret Key authentication.

- [ ] Task: Create Production Simulation Test Suite
    - [ ] Create `msandbox-backup/tests/api/production-simulation.test.ts`.
    - [ ] Setup `beforeAll` to create a fresh merchant with a Secret Key.
    - [ ] Implement tests for **Customers**: Create, List, Get, Update.
    - [ ] Implement tests for **Products**: Create, List.
    - [ ] Implement tests for **Payment Links**: Create (POST), List (GET).
    - [ ] Implement tests for **Invoices**: Create (POST), Get (GET), List (GET).
    - [ ] Implement tests for **Usage**: Report events (POST).
    - [ ] Verify error handling (401 for invalid key, 400 for bad body).
- [ ] Task: Fix Discovered API Bugs
    - [ ] Run the new test suite.
    - [ ] If any endpoints fail (e.g., 405 Method Not Allowed, 500 Server Error), fix the underlying `route.ts` logic.
    - [ ] Ensure `POST` handlers are correctly exported and `options` methods handle CORS if necessary (though usually handled by middleware).
- [ ] Task: Conductor - User Manual Verification 'Phase 1: API Verification Suite' (Protocol in workflow.md)

## Phase 2: Documentation Audit & Update
Goal: Align `api-reference/` documentation with the verified code.

- [ ] Task: Audit & Update Customer Docs
    - [ ] Check `api-reference/customers.md`.
    - [ ] Ensure request body fields match `CustomerPayloadSchema`.
    - [ ] Add/Update response examples.
- [ ] Task: Audit & Update Product/Pricing Docs
    - [ ] Check/Create `api-reference/products.md` and `pricing-models.md`.
    - [ ] Document the implicit relationship between Products and Pricing Models if needed.
- [ ] Task: Audit & Update Payment Link Docs
    - [ ] Check `api-reference/payment-links.md` (or `checkout-links.md`).
    - [ ] Confirm `POST` /api/v1/checkout-links parameters.
- [ ] Task: Audit & Update Invoice Docs
    - [ ] Check `api-reference/invoices.md`.
    - [ ] Verify `POST` parameters (customer_id, amount_due, items).
- [ ] Task: Add Missing Endpoints
    - [ ] Scan `app/api/v1` for any undocumented routes (e.g., `features`, `entitlements`, `refunds`).
    - [ ] Create new MDX files in `api-reference/` for them.
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Documentation Audit & Update' (Protocol in workflow.md)
