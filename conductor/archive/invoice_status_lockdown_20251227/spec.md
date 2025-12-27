# Specification: Invoice Payment Lifecycle and Status Lockdown

## Overview
This track implements the lifecycle transition for Invoices after a successful payment. It ensures that once an invoice is paid, its status is visually updated to "Paid" (blue) and further payment attempts are blocked.

## Functional Requirements

### 1. Post-Payment Status Update (Invoices Only)
- **Requirement:** After a successful transaction is recorded for an Invoice, its status must be updated to `paid`.
- **Logic:** This should happen within the `logTransaction` server action (or the relevant completion handler) specifically when an `invoice_id` is present.

### 2. Status Lockdown (Invoices Only)
- **Requirement:** Once an Invoice has the status `paid`, it must be considered "inactive" for the purpose of checkout.
- **Implementation:** 
    - The public checkout page (`/pay/[id]`) must check the status of the invoice.
    - If the invoice `status === 'paid'`, the page should show a "This invoice has already been paid" message (or redirect to a receipt) instead of rendering the payment form.
    - Prevent the creation of new transactions against an invoice that is already `paid`.

### 3. UI/UX: Paid Styling (Invoices Only)
- **Requirement:** Update the status badges for Invoices to use a **Blue** color scheme when the status is `paid`.
- **Target Areas:**
    - Dashboard Invoices Table.
    - Public Checkout/Invoice Page.

## Non-Functional Requirements
- **Security:** Ensure that status updates are verified server-side.

## Acceptance Criteria
- [ ] Successful payment updates the Invoice status to `paid`.
- [ ] Accessing a `paid` invoice URL does not allow another payment attempt.
- [ ] The "Paid" status badge is blue in the dashboard Invoices table.
- [ ] The public invoice view shows "Paid" in blue.

## Out of Scope
- Payment Links (these can remain 'active' even after a payment).
- Integrating full PayTheory webhooks.
