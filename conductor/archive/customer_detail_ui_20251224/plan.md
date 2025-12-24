# Plan: Customer Detail UI Refinement

## Phase 1: Layout & Header [checkpoint: e765f2d]
- [x] Task: Refactor `CustomerDetailsClient` to use the same header and layout structure as `PricingModelDetailsClient`. [83dc56f]
- [x] Task: Implement metric cards for Customer stats (Spend, Subscriptions, etc.). [83dc56f]
- [x] Task: Conductor - User Manual Verification 'Layout & Header' (Protocol in workflow.md) [e765f2d]

## Phase 2: Tabbed Tables [checkpoint: e765f2d]
- [x] Task: Implement "Subscriptions" tab with a `DataTable`. [0d200dd]
- [x] Task: Implement "Invoices" tab with a `DataTable`. [0d200dd]
- [x] Task: Implement "Payments" tab with a `DataTable`. [0d200dd]
- [x] Task: Implement "Activity" tab with a `DataTable` (Audit Logs). [0d200dd]
- [x] Task: Conductor - User Manual Verification 'Tabbed Tables' (Protocol in workflow.md) [e765f2d]

## Phase 3: Data Integration [checkpoint: e765f2d]
- [x] Task: Update server actions to fetch related data (subscriptions, invoices, payments) for a specific customer. [0d200dd]
- [x] Task: Connect the UI components to real customer data from Supabase. [0d200dd]
- [x] Task: Conductor - User Manual Verification 'Data Integration' (Protocol in workflow.md) [e765f2d]
