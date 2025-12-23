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

## Phase 2: Documentation Audit & Update [32b22e4]
Goal: Align `api-reference/` documentation with the verified code.

- [x] Task: Audit & Update Customer Docs
- [x] Task: Audit & Update Product/Pricing Docs
- [x] Task: Audit & Update Payment Link Docs
- [x] Task: Audit & Update Invoice Docs
- [x] Task: Add Missing Endpoints
- [x] Task: Conductor - User Manual Verification 'Phase 2: Documentation Audit & Update' (Protocol in workflow.md)
