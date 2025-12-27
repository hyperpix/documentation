# Plan: Dashboard Fixes and Invoice Automation

## Phase 1: Security Audit and Data Isolation
Goal: Fix the cross-tenant data leak in dashboard cards.

- [x] Task: Audit `settlements` and `transactions` RLS policies in Supabase.
- [x] Task: Create failing tests for cross-tenant data access in dashboard API routes.
- [x] Task: Implement server-side filtering by `organization_id` in dashboard data fetchers.
- [x] Task: Verify fix with tests and manual check.
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Security Audit and Data Isolation' (Protocol in workflow.md)

## Phase 2: Invoice Email Automation
Goal: Implement PDF upload to Supabase and email delivery via Resend.

- [x] Task: Configure Supabase Storage bucket `invoices` with appropriate RLS.
- [x] Task: Create failing tests for the invoice email trigger flow.
- [x] Task: Implement PDF generation and upload logic on invoice creation.
- [x] Task: Integrate Resend SDK to send invoice emails with PDF links/attachments.
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Invoice Email Automation' (Protocol in workflow.md)

## Phase 3: UI/UX Improvements
Goal: Enhance Invoice Table interaction and Dashboard performance.

- [x] Task: Create failing tests for Dashboard caching (verifying second load is faster/from cache).
- [x] Task: Implement Stale-While-Revalidate (SWR) for dashboard cards with a **spinner** loading state for the initial fetch.
- [x] Task: Update Invoice Table component to make the entire row clickable for details.
- [x] Task: Verify mobile responsiveness for the updated table and dashboard.
- [ ] Task: Conductor - User Manual Verification 'Phase 3: UI/UX Improvements' (Protocol in workflow.md)
