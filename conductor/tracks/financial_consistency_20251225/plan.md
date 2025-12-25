# Plan: Financial Data Consistency & Formatting Audit

This plan focuses on standardizing financial data handling across the platform to ensure accuracy and consistency between the database (cents) and the UI (dollars).

## Phase 1: Utility Centralization & Testing [checkpoint: dd92285]
Establish a single source of truth for financial formatting and conversion logic.

- [x] Task: Create Unit Tests for Financial Utils. Write tests for `formatUSD`, `centsToDollars`, and `dollarsToCents` covering edge cases like zero, precision, and rounding. dd92285
- [x] Task: Implement Centralized Financial Utils. Create or update `lib/utils.ts` with standardized functions for dollar/cent conversion and formatting. dd92285
- [x] Task: Conductor - User Manual Verification 'Phase 1: Utility Centralization & Testing' (Protocol in workflow.md) dd92285

## Phase 2: Data Hook & Action Refactor [checkpoint: f468ed6]
Refactor data-mapping layers to perform consistent conversions at the source.

- [x] Task: Refactor use-queries.ts Hooks. Update `useTransactions`, `useInvoices`, `useSettlements`, and `usePaymentLinks` to return dollar values using the new utils. 1501427
- [x] Task: Write Tests for Data Hooks. Verify that hooks correctly transform mock database payloads into component-ready dollar objects. 1501427
- [x] Task: Update Server Actions. Audit `app/actions/` (e.g., `transactions.ts`, `invoices.ts`) to ensure data returned for display is correctly scaled. 1501427
- [x] Task: Conductor - User Manual Verification 'Phase 2: Data Hook & Action Refactor' (Protocol in workflow.md) f468ed6

## Phase 3: UI & Component Alignment [checkpoint: eec49c4]
Clean up component logic by removing redundant inline calculations and utilizing standardized hooks.

- [x] Task: Audit Dashboard Components. Update `DashboardGrossVolume`, `DashboardSettlements`, and `DashboardTransactions` to use pre-converted data. f468ed6
- [x] Task: Update Feature Pages. Verify and align `Transactions`, `Invoices`, `Payment Links`, and `Customer Details` pages. f468ed6
- [x] Task: Verify Success & Receipt UI. Ensure `/pay/success` pages match the underlying transaction records precisely. 5b15ff3
- [x] Task: Align Email & PDF Logic. Update `sendReceiptEmail` and PDF generator functions to use the standardized formatters. 5b15ff3
- [x] Task: Conductor - User Manual Verification 'Phase 3: UI & Component Alignment' (Protocol in workflow.md) eec49c4

## Phase 4: Final Integrity Pass [checkpoint: eec49c4]
Final validation to ensure zero regressions and stable deployment.

- [x] Task: Full Type Check. Run `tsc --noEmit` to ensure no financial type mismatches were introduced. eec49c4
- [x] Task: Production Build Verification. Execute `pnpm run build` and verify a clean output. eec49c4
- [x] Task: Conductor - User Manual Verification 'Phase 4: Final Integrity Pass' (Protocol in workflow.md) eec49c4
