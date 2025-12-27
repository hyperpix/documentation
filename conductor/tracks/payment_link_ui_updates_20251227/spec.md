# Specification: Payment Link Interaction and Management Improvements

## Overview
This track focuses on improving the usability and security of Payment Links by enhancing table interactions, enforcing link status during checkout, and providing better management actions (Delete). Additionally, it addresses perceived performance on the Dashboard by ensuring an instant loader.

## Functional Requirements

### 1. Table Interaction: Row Click
- **Requirement:** clicking anywhere on a row in the Payment Links table should trigger the existing details dialog.
- **Logic:** Follow the pattern implemented for Invoices (passing `onRowClick` to `DataTable`).

### 2. Status Enforcement: Inactive Links
- **Requirement:** If a Payment Link's status is not `active`, visiting its public checkout URL should result in a 404 error.
- **Implementation:** Check status in the checkout page's server-side logic (or resolver) and trigger the existing `notFound()` function from Next.js if inactive.

### 3. Actions Menu: Delete and Clean UI
- **Requirement:** Add a "Delete" option to the `...` (MoreHorizontal) menu.
- **Confirmation:** Trigger a custom `AlertDialog` (similar to Invoices) before performing the deletion.
- **UI Polish:** Remove the Lucide icons from inside the dropdown menu items (e.g., icons for "Copy ID", "Archive", "Delete"). The trigger button should keep its `...` icon.

### 4. Dashboard Performance Polish
- **Requirement:** Navigating to the Dashboard should provide instant visual feedback.
- **Implementation:** Implement a top-level loader (spinner) that appears immediately, likely via a `loading.tsx` file or a Suspense boundary in the root layout, to bridge the gap while Server Components/Data fetching resolve.

## Non-Functional Requirements
- **Consistency:** Interaction patterns (row clicks, delete dialogs) must match the Invoice management UI for a cohesive experience.

## Acceptance Criteria
- [ ] Clicking a row in the Payment Links table opens the details dialog.
- [ ] Attempting to access an inactive/archived payment link URL returns the standard 404 page.
- [ ] A "Delete" button is present in the actions menu and prompts for confirmation via modal.
- [ ] Dropdown menu items in the Payment Links table actions do not have icons.
- [ ] Navigating to the Dashboard shows a spinner immediately.

## Out of Scope
- Bulk deletion of payment links.
- Editing existing payment link details (other than status).
