# Implementation Plan - Fix Multi-Tenant Leak & UI Issues

This plan addresses a critical data leak where merchants can see other merchants' data, fixes navigation and loading issues, and resolves a UI scrollbar bug in the onboarding flow.

## Phase 1: Security Hardening (RLS & API)
Goal: Ensure complete isolation between merchants and secure public access.

- [x] Task: Audit and Fix `payment_links` RLS Policies (61589af)
    - [ ] Write tests to verify a merchant cannot list or view another merchant's payment links.
    - [ ] Write tests to verify public (anon) can view individual active links but not list all.
    - [ ] Update migration to replace `using (true)` with strict `merchant_id = auth.uid()` and `status = 'active'` checks.
- [x] Task: Audit and Fix `invoices` RLS Policies (7f8a8aa)
    - [ ] Write tests to verify a merchant cannot list or view another merchant's invoices.
    - [ ] Write tests to verify public (anon) can view a single invoice by UUID.
    - [ ] Update migration to strictly enforce owner-only access and single-record public access.
- [x] Task: Global RLS Audit (fba1e0f)
    - [ ] Scan all tables (`customers`, `transactions`, `settlements`, etc.) for permissive policies.
    - [ ] Apply strict `merchant_id = auth.uid()` policies to any remaining vulnerable tables.
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Security Hardening' (Protocol in workflow.md)

## Phase 2: Bug Fixes & Navigation
Goal: Restore core functionality to the dashboard.

- [x] Task: Fix Invoice Detail Navigation (f9f45a0)
- [x] Task: Restore "Create Invoice" Button (f9f45a0)
- [x] Task: Fix Transactions Page Loading (f9f45a0)
- [x] Task: Optimize Settings Page Load (f9f45a0)
- [x] Task: Fix Onboarding Dropdown Scrollbar Shift (f9f45a0)
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Bug Fixes, Navigation & UI' (Protocol in workflow.md)
