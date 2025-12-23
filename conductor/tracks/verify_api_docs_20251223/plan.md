# Implementation Plan - API Verification & Documentation Overhaul

This plan focuses on rigorous API verification via automated tests and a comprehensive update of the public documentation to match the actual code behavior.

## Phase 1: API Verification Suite
Goal: Ensure all API endpoints work as expected with Secret Key authentication.

- [x] Task: Create Production Simulation Test Suite [186e36a]
    - Note: Products endpoint and Invoices POST endpoint were found missing.
- [x] Task: Fix Discovered API Bugs & Missing Endpoints [140ec96]
    - [x] Implement `POST /api/v1/invoices` to allow invoice creation via API.
    - [x] Investigate and implement `products` API if intended to be public, or document as internal-only.
    - [x] Run the new test suite to verify fixes.
    - [x] If any endpoints fail (e.g., 405 Method Not Allowed, 500 Server Error), fix the underlying `route.ts` logic.
    - [x] Ensure `POST` handlers are correctly exported and `options` methods handle CORS if necessary (though usually handled by middleware).
- [~] Task: Conductor - User Manual Verification 'Phase 1: API Verification Suite' (Protocol in workflow.md)

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
