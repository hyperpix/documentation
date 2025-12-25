# Plan: Financial Data Consistency & Formatting Audit

This plan focuses on standardizing financial data handling across the platform to ensure accuracy and consistency between the database (cents) and the UI (dollars).

## Phase 1: Utility Centralization & Testing [checkpoint: dd92285]
Establish a single source of truth for financial formatting and conversion logic.

- [x] Task: Create Unit Tests for Financial Utils. Write tests for `formatUSD`, `centsToDollars`, and `dollarsToCents` covering edge cases like zero, precision, and rounding. dd92285
- [x] Task: Implement Centralized Financial Utils. Create or update `lib/utils.ts` with standardized functions for dollar/cent conversion and formatting. dd92285
- [x] Task: Conductor - User Manual Verification 'Phase 1: Utility Centralization & Testing' (Protocol in workflow.md) dd92285

## Phase 2: Data Hook & Action Refactor
Refactor data-mapping layers to perform consistent conversions at the source.

- [ ] Task: Refactor use-queries.ts Hooks. Update `useTransactions`, `useInvoices`, `useSettlements`, and `usePaymentLinks` to return dollar values using the new utils.
- [ ] Task: Write Tests for Data Hooks. Verify that hooks correctly transform mock database payloads into component-ready dollar objects.
- [ ] Task: Update Server Actions. Audit `app/actions/` (e.g., `transactions.ts`, `invoices.ts`) to ensure data returned for display is correctly scaled.
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Data Hook & Action Refactor' (Protocol in workflow.md)

## Phase 3: UI & Component Alignment
Clean up component logic by removing redundant inline calculations and utilizing standardized hooks.

- [ ] Task: Audit Dashboard Components. Update `DashboardGrossVolume`, `DashboardSettlements`, and `DashboardTransactions` to use pre-converted data.
- [ ] Task: Update Feature Pages. Verify and align `Transactions`, `Invoices`, `Payment Links`, and `Customer Details` pages.
- [ ] Task: Verify Success & Receipt UI. Ensure `/pay/success` pages match the underlying transaction records precisely.
- [ ] Task: Align Email & PDF Logic. Update `sendReceiptEmail` and PDF generator functions to use the standardized formatters.
- [ ] Task: Conductor - User Manual Verification 'Phase 3: UI & Component Alignment' (Protocol in workflow.md)

## Phase 4: Final Integrity Pass
Final validation to ensure zero regressions and stable deployment.

- [ ] Task: Full Type Check. Run `tsc --noEmit` to ensure no financial type mismatches were introduced.
- [ ] Task: Production Build Verification. Execute `pnpm run build` and verify a clean output.
- [ ] Task: Conductor - User Manual Verification 'Phase 4: Final Integrity Pass' (Protocol in workflow.md)
