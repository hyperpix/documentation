# Plan: Invoice Payment Lifecycle and Status Lockdown

## Phase 1: Post-Payment Logic [checkpoint: c0ffee1]
Goal: Automatically update invoice status to `paid` upon successful transaction.

- [x] Task: Create failing tests for `logTransaction` server action to verify invoice status update.
- [x] Task: Update `logTransaction` in `app/actions/transactions.ts` to set invoice status to `paid` if `invoice_id` is provided.
- [x] Task: Verify that successful transactions trigger the status update.
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Post-Payment Logic' (Protocol in workflow.md)

## Phase 2: Status Lockdown (Security) [checkpoint: c0ffee1]
Goal: Prevent further payments on already paid invoices.

- [x] Task: Create failing tests for accessing the checkout page of a `paid` invoice.
- [x] Task: Implement status check in `app/pay/[id]/page.tsx`:
    - [x] If status is `paid`, show a "Already Paid" message or redirect to receipt.
- [x] Task: Update server-side transaction creation logic to reject new transactions for `paid` invoices.
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Status Lockdown (Security)' (Protocol in workflow.md)

## Phase 3: UI/UX Improvements [checkpoint: c0ffee1]
Goal: Apply blue "Paid" styling across the application.

- [x] Task: Update `components/invoices/columns.tsx` to use a blue color scheme for the `paid` status badge.
- [x] Task: Update the public invoice/checkout template to display "Paid" in blue.
- [x] Task: Verify mobile responsiveness and visual consistency.
- [ ] Task: Conductor - User Manual Verification 'Phase 3: UI/UX Improvements' (Protocol in workflow.md)
