# Specification: Fix Multi-Tenant Leak & UI Issues (Track: fix_multi_tenant_leak_20251223)

## Overview
A critical security vulnerability has been identified where merchants can view and list resources (payment links, invoices, etc.) belonging to other merchants. This is caused by overly permissive Row Level Security (RLS) policies in the Supabase schema that allow "listing" by unauthorized users or the public. Additionally, several UI bugs and navigation issues have been reported.

## Functional Requirements

### 1. Secure `payment_links` Table
*   **Merchant Access:** Logged-in merchants must only be able to SELECT, INSERT, UPDATE, and DELETE their own payment links (where `merchant_id = auth.uid()`).
*   **Public Access:** Anon users (public) must ONLY be able to SELECT individual payment links that have `status = 'active'`. Listing all active links must be prevented or heavily restricted.

### 2. Secure `invoices` Table
*   **Merchant Access:** Logged-in merchants must only be able to SELECT, INSERT, UPDATE, and DELETE their own invoices (where `merchant_id = auth.uid()`).
*   **Public Access:** Anon users must be able to SELECT a single invoice record by its UUID `id`.

### 3. Comprehensive Schema Audit
*   Review and verify that ALL tables containing sensitive merchant data have RLS enabled and strictly enforce `merchant_id = auth.uid()` for authenticated users.
*   Tables to Audit: `customers`, `transactions`, `settlements`, `disputes`, `pricing_models`, `products`, `pricing_features`.

### 4. Fix Invoice Detail Navigation & Dashboard
*   **Navigation:** Investigate and fix the issue where clicking an invoice does not load the detail view.
*   **Create Button:** Restore the "Create Invoice" button on the Invoices page which was previously removed.

### 5. Fix UI Scroll Behavior
*   **Issue:** During the onboarding flow, opening a dropdown menu causes the page scrollbar to disappear/reappear, creating layout shifts.
*   **Fix:** Prevent body scroll locking or reserve scrollbar space when Radix UI/Shadcn components (DropdownMenu, Select, Dialog) are open.

### 6. Fix Transactions & Settings Performance
*   **Transactions:** Fix the issue where the Transactions page fails to load data.
*   **Settings:** Investigate and resolve the long fetch times on the Settings page.

## Non-Functional Requirements
*   **Security:** Adherence to the Principle of Least Privilege for all database roles (anon vs. authenticated).
*   **Performance:** RLS policies and API fetches should be optimized to avoid performance degradation.

## Acceptance Criteria
*   [ ] A merchant logged into the dashboard cannot see any invoices or payment links belonging to another merchant via API or UI.
*   [ ] The `/api/v1/invoices` and `/api/v1/checkout-links` endpoints return ONLY the current merchant's data.
*   [ ] Public checkout pages (`/pay/[id]`) correctly display details for `active` payment links.
*   [ ] Public invoice views correctly display details when a valid UUID is provided.
*   [ ] Clicking an invoice record in the dashboard successfully navigates to and displays the invoice detail page for the owner.
*   [ ] The "Create Invoice" button is visible and functional on the Invoices page.
*   [ ] Opening dropdowns in the onboarding flow (and globally) does not cause the page scrollbar to disappear or the layout to shift.
*   [ ] The Transactions page loads successfully and displays the correct list of transactions for the logged-in merchant.
*   [ ] The Settings page loads in a reasonable amount of time.

## Out of Scope
*   Adding new features to invoices or payment links.
*   Refactoring the entire auth system beyond RLS and API authorization checks.
