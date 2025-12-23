# Implementation Plan - UI Polish & Performance Optimization

This plan focuses on improving the responsiveness and UI transitions of the dashboard, specifically addressing slow data loading and bulky skeletons.

## Phase 1: Dashboard UI Polish
Goal: Enhance navigation and loading feedback for Invoices and Recurring payments.

- [x] Task: Link Invoices Table to Detail Dialog (d119e8a)
    - [ ] Locate the existing Invoice Detail Dialog component.
    - [ ] Update `InvoicesClient` to import and manage the dialog state.
    - [ ] Modify the table row click handler to open the dialog with the selected invoice data.
- [ ] Task: Refine Recurring Page Skeletons
    - [ ] Identify the skeleton components used in the `Recurring` page.
    - [ ] Update the page layout to render headers, tabs, and action buttons statically.
    - [ ] Implement granular skeletons that only occupy the table body area during data fetch.
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Dashboard UI Polish' (Protocol in workflow.md)

## Phase 2: Performance & Data Fetching Optimization
Goal: Achieve "instant" perceived loading for metadata and core organization settings.

- [ ] Task: Optimize Pricing Model Page Fetching
    - [ ] Analyze the current data fetching strategy for `PricingModelDetailsClient`.
    - [ ] Identify if the pricing model name can be passed via URL/state or fetched separately and faster.
    - [ ] Minimize the loading state for the page header to improve perceived speed.
    - [ ] Ensure the "Free Plan" and other core model data are fetched with higher priority.
- [ ] Task: Accelerate Settings Page Data Loading
    - [ ] Review the `SettingsPage` loading logic (currently fetches profile, api keys, and apps in one large `Promise.all`).
    - [ ] Split the fetching logic so "Organization" and "Address" data are rendered immediately upon availability.
    - [ ] Optimize the database query or server action for merchant profiles if necessary.
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Performance & Data Fetching Optimization' (Protocol in workflow.md)
