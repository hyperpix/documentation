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
- [ ] Task: Global RLS Audit
    - [ ] Scan all tables (`customers`, `transactions`, `settlements`, etc.) for permissive policies.
    - [ ] Apply strict `merchant_id = auth.uid()` policies to any remaining vulnerable tables.
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Security Hardening' (Protocol in workflow.md)

## Phase 2: Bug Fixes & Navigation
Goal: Restore core functionality to the dashboard.

- [ ] Task: Fix Invoice Detail Navigation
    - [ ] Identify why clicking an invoice doesn't open the detail view (Check routing and API response).
    - [ ] Fix the navigation trigger or the detail route authorization.
    - [ ] Verify owner can view their own invoice details.
- [ ] Task: Restore "Create Invoice" Button
    - [ ] Update `app/invoices/page.tsx` to include the "Create Invoice" button in the `PageListTemplate` action prop.
    - [ ] Ensure it links correctly to `/invoices/new`.
- [ ] Task: Fix Transactions Page Loading
    - [ ] Debug the transactions fetch error (likely an RLS or schema mismatch).
    - [ ] Ensure the UI handles loading/empty/error states correctly.
    - [ ] Verify the Transactions page loads only the current merchant's data.
- [ ] Task: Optimize Settings Page Load
    - [ ] Profile the Settings page data fetching (API calls, Supabase queries).
    - [ ] Identify and resolve bottlenecks (e.g., N+1 queries, unoptimized RLS, missing indexes).
- [ ] Task: Fix Onboarding Dropdown Scrollbar Shift
    - [ ] Identify components using scroll-locking (Radix UI/Shadcn).
    - [ ] Apply global CSS or component-level fix to prevent layout shift when scrollbar is hidden.
    - [ ] Verify scroll behavior on multiple browsers/devices.
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Bug Fixes, Navigation & UI' (Protocol in workflow.md)
