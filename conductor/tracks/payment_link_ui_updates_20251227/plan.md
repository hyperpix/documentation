# Plan: Payment Link Interaction and Management Improvements

## Phase 1: Status Enforcement and Actions
Goal: Secure inactive links and improve management actions.

- [ ] Task: Create failing tests for accessing an inactive payment link (expecting 404).
- [ ] Task: Implement status check in the Payment Link checkout page (or resolver) to throw `notFound()` if inactive.
- [ ] Task: Add `deletePaymentLink` Server Action with proper RLS checks.
- [ ] Task: Update `PaymentLinkActions` component:
    - [ ] Add "Delete" item with `AlertDialog`.
    - [ ] Remove icons from all dropdown items.
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Status Enforcement and Actions' (Protocol in workflow.md)

## Phase 2: Table Interaction
Goal: Make the Payment Links table interactive.

- [ ] Task: Refactor `PaymentLinksClient` to handle `onRowClick` and manage the "Details" dialog state.
- [ ] Task: Update `PaymentLinkDataTable` columns to remove redundant click handlers and ensure actions don't propagate.
- [ ] Task: Verify that clicking a row opens the dialog and clicking actions works independently.
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Table Interaction' (Protocol in workflow.md)

## Phase 3: Dashboard Performance Polish
Goal: Improve the perceived performance of the Dashboard entry.

- [ ] Task: Implement an immediate suspense boundary or loading state that shows a spinner *before* the dashboard layout fully resolves, ensuring an instant transition feedback loop.
- [ ] Task: Verify that the loader appears immediately upon navigation to `/`.
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Dashboard Performance Polish' (Protocol in workflow.md)
