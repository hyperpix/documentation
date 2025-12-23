# Implementation Plan - UI Polish & Performance Optimization

This plan focuses on improving the responsiveness and UI transitions of the dashboard, specifically addressing slow data loading and bulky skeletons.

## Phase 1: Dashboard UI Polish
Goal: Enhance navigation and loading feedback for Invoices and Recurring payments.

- [x] Task: Link Invoices Table to Detail Dialog (d119e8a)
    - [ ] Locate the existing Invoice Detail Dialog component.
    - [ ] Update `InvoicesClient` to import and manage the dialog state.
    - [ ] Modify the table row click handler to open the dialog with the selected invoice data.
- [x] Task: Refine Recurring Page Skeletons (f88f6ae)
    - [ ] Identify the skeleton components used in the `Recurring` page.
    - [ ] Update the page layout to render headers, tabs, and action buttons statically.
    - [ ] Implement granular skeletons that only occupy the table body area during data fetch.
- [x] Task: Conductor - User Manual Verification 'Phase 1: Dashboard UI Polish' (Protocol in workflow.md) (65cb00f)

## Phase 2: Performance & Data Fetching Optimization
Goal: Achieve "instant" perceived loading for metadata and core organization settings.

- [x] Task: Optimize Pricing Model Page Fetching (cd95fe3)
    - [ ] Analyze the current data fetching strategy for `PricingModelDetailsClient`.
    - [ ] Identify if the pricing model name can be passed via URL/state or fetched separately and faster.
    - [ ] Minimize the loading state for the page header to improve perceived speed.
    - [ ] Ensure the "Free Plan" and other core model data are fetched with higher priority.
- [x] Task: Accelerate Settings Page Data Loading (28ec298)
- [x] Task: Implement Skeletons for Pricing Model Tables (3d29312)
    - [ ] Add `isLoading` state to `PricingModelDetailsClient`.
    - [ ] Update table rendering to show `TablePlaceholder` or inline skeleton rows while `isLoading` is true.
- [x] Task: Conductor - User Manual Verification 'Phase 2: Performance & Data Fetching Optimization' (Protocol in workflow.md) (85a8365)
