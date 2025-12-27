# Plan: Payment Link Interaction and Management Improvements

## Phase 1: Status Enforcement and Actions [checkpoint: e0476d6]
Goal: Secure inactive links and improve management actions.

- [x] Task: Create failing tests for accessing an inactive payment link (expecting 404).
- [x] Task: Implement status check in the Payment Link checkout page (or resolver) to throw `notFound()` if inactive.
- [x] Task: Add `deletePaymentLink` Server Action with proper RLS checks.
- [x] Task: Update `PaymentLinkActions` component:
    - [x] Add "Delete" item with `AlertDialog`.
    - [x] Remove icons from all dropdown items.
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Status Enforcement and Actions' (Protocol in workflow.md)

## Phase 2: Table Interaction [checkpoint: e0476d6]
Goal: Make the Payment Links table interactive.

- [x] Task: Refactor `PaymentLinksClient` to handle `onRowClick` and manage the "Details" dialog state.
- [x] Task: Update `PaymentLinkDataTable` columns to remove redundant click handlers and ensure actions don't propagate.
- [x] Task: Verify that clicking a row opens the dialog and clicking actions works independently.
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Table Interaction' (Protocol in workflow.md)

## Phase 3: Dashboard Performance Polish [checkpoint: e0476d6]
Goal: Improve the perceived performance of the Dashboard entry.

- [x] Task: Implement an immediate suspense boundary or loading state that shows a spinner *before* the dashboard layout fully resolves, ensuring an instant transition feedback loop.
- [x] Task: Verify that the loader appears immediately upon navigation to `/`.
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Dashboard Performance Polish' (Protocol in workflow.md)