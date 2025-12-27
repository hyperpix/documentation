# Specification: Dashboard Fixes and Invoice Automation

## Overview
This track addresses a critical security bug (cross-tenant data leak), implements a missing automated invoice email flow, polishes the Invoice Table interaction, and adds caching for a more seamless dashboard experience.

## Functional Requirements

### 1. Data Isolation (Critical)
- **Problem:** The Settlement and Recent Transactions cards on the dashboard are leaking data across tenants.
- **Requirement:** Ensure all queries for dashboard cards are strictly filtered by the authenticated user's `organization_id` or `tenant_id`.
- **Verification:** Audit RLS policies on `settlements` and `transactions` tables and verify that the application code explicitly filters queries.

### 2. Automated Invoice Emails
- **Problem:** Invoices are created but not sent to customers.
- **Requirement:**
    - On invoice creation:
        1. Generate a PDF using the existing `@react-pdf/renderer` setup.
        2. Upload the PDF to a `invoices` bucket in Supabase Storage.
        3. Trigger an email via Resend to the customer's email address.
        4. The email should include a link to the stored PDF or the PDF as an attachment.

### 3. Invoice Table Interaction
- **Problem:** Clicking an invoice row only opens the detail dialog if the "middle" of the row is clicked.
- **Requirement:** The entire row (tr/div) should be interactive. Clicking anywhere within the row bounds should trigger the existing Invoice Detail dialog.

### 4. Dashboard Caching
- **Problem:** Dashboard feels slow when navigating back to it.
- **Requirement:** Implement a Stale-While-Revalidate (SWR) pattern for dashboard data (Transactions, Settlements, Volume).
- **Tooling:** Use `SWR` library or TanStack Query (if already in project) or Next.js `cache` tag/revalidation if using Server Components.
- **UX:** Show a **spinner** loading state for the initial fetch.

## Non-Functional Requirements
- **Security:** Zero tolerance for cross-tenant data leaks.
- **Performance:** Dashboard cards should load in < 500ms using cached data.

## Acceptance Criteria
- [ ] Settlement and Transaction cards only show data for the logged-in organization.
- [ ] Creating an invoice successfully uploads a PDF to Supabase and sends an email via Resend.
- [ ] Clicking anywhere on an invoice row opens the detail dialog.
- [ ] Returning to the dashboard shows cached data immediately while updating in the background.

## Out of Scope
- Redesigning the invoice PDF template.
- Complex email tracking (opens/clicks).
