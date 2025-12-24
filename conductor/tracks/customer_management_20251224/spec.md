# Specification: Customer Management Actions (Track: customer_management_20251224)

## Overview
Implement the full lifecycle of customer management in the dashboard UI. This connects the "Create", "Edit", and "Delete" UI elements to the backend logic, allowing merchants to manage their customers directly from the dashboard.

## Functional Requirements
- **Create Customer:**
    - Hook up the "Create Customer" button on the `/customers` page to a dialog.
    - Dialog should collect: Name, Email, and initial Pricing Model assignment.
- **Edit Customer:**
    - Hook up the "Edit" button on the Customer Detail page to a dialog.
    - Allow updating: Name and Email.
- **Delete Customer:**
    - Hook up the "Delete" button on the Customer Detail page and the list actions menu.
    - Implement a confirmation dialog to prevent accidental deletion.
- **Server Actions:**
    - Ensure all actions use `revalidatePath` to keep the UI in sync.

## Acceptance Criteria
- [ ] Merchants can successfully create new customers from the list page.
- [ ] Merchants can edit customer details from the detail page.
- [ ] Merchants can delete customers with a confirmation step.
- [ ] The UI automatically refreshes after any management action.
