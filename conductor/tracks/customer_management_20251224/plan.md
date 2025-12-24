# Plan: Customer Management Actions

## Phase 1: Customer Creation
- [ ] Task: Create `CreateCustomerDialog` component (if not already existing or reusable).
- [ ] Task: Integrate `CreateCustomerDialog` into the `/customers` list page.
- [ ] Task: Verify that creating a customer correctly redirects or refreshes the list.
- [ ] Task: Conductor - User Manual Verification 'Customer Creation' (Protocol in workflow.md)

## Phase 2: Edit & Delete
- [ ] Task: Implement "Edit Customer" dialog on the detail page.
- [ ] Task: Implement "Delete Customer" confirmation dialog on the detail page.
- [ ] Task: Connect both actions to the existing `updateCustomer` and `deleteCustomer` server actions.
- [ ] Task: Conductor - User Manual Verification 'Edit & Delete' (Protocol in workflow.md)

## Phase 3: UX & Sync
- [ ] Task: Ensure `revalidatePath` is called for both the list and detail pages in all actions.
- [ ] Task: Add success/error toasts for all management actions.
- [ ] Task: Conductor - User Manual Verification 'UX & Sync' (Protocol in workflow.md)
