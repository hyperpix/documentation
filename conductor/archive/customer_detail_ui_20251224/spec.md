# Specification: Customer Detail UI Refinement (Track: customer_detail_ui_20251224)

## Overview
Refactor the Customer Detail page to exactly match the design language and structure of the Pricing Model Detail view. This ensures consistency across the dashboard's management interfaces.

## Functional Requirements
- **Header Section:**
    - Display customer name prominently.
    - Include "Edit" and "Actions" (MoreHorizontal) buttons in the top right.
    - Show customer status badge next to the name.
- **Metric Cards:**
    - Implement a grid of metric cards (e.g., Total Spend, Active Subscriptions, Last Payment).
- **Tabbed Interface:**
    - **Subscriptions:** Table listing current and past subscriptions.
    - **Invoices:** Table listing all invoices for the customer.
    - **Payments:** Table listing all transactions.
    - **Activity:** Audit logs specifically for this customer.
- **DataTable Enhancements:**
    - All tables should support column toggling, filtering, and pagination where appropriate.

## Acceptance Criteria
- [ ] Customer detail UI matches the structure of the Pricing Model detail UI.
- [ ] All tabs (Subscriptions, Invoices, Payments, Activity) load data correctly for the specific customer.
- [ ] Action buttons (Edit, Copy ID, Delete) are functional placeholders.
