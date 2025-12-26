# Specification: Financial Data Consistency & Formatting Audit

## Overview
This track addresses inconsistencies in how financial amounts are displayed and formatted across the platform. It focuses on harmonizing the conversion between cents (stored in the database) and dollars (displayed in the UI), standardizing formatting utilities, and ensuring data integrity through comprehensive unit testing of data hooks and formatters.

## Functional Requirements

### 1. Unified Data Mapping Logic
- Ensure all data-fetching hooks (`useTransactions`, `useInvoices`, `useSettlements`, `usePaymentLinks`) perform consistent cents-to-dollars conversion before passing data to components.
- Standardize Server Actions to return dollar values for display-centric requests while keeping cents for calculation-heavy or API-first responses.

### 2. UI Component Audit
- **Dashboard:** Verify Gross Volume charts (and tooltips), Settlement panels, and Recent Transactions tables all display correct dollar amounts.
- **Transactions Page:** Ensure "Net", "Amount", and "Fee" columns are correctly scaled.
- **Customer Details:** Verify "Total Spend" and historical transaction lists are accurate.
- **Payment Success:** Confirm that the final receipt card matches the transaction record precisely.

### 3. Email & Background Processes
- **Receipt Emails:** Verify both the Resend Template variables and the HTML fallback use the correct dollar formatting.
- **PDF Generation:** Ensure generated Invoice and Receipt PDFs use standardized formatting logic.

### 4. Utility Standardization
- Centralize financial formatting logic into a single source of truth (e.g., `lib/utils.ts` or dedicated formatter file).
- Remove redundant "divide by 100" or ".toFixed(2)" logic scattered across the components.

## Testing Strategy
- **Primary Focus:** Unit tests for formatting utilities.
- **Hook Testing:** Unit tests for data-mapping hooks to verify they correctly transform raw database responses into component-ready dollar values.
- **Mock Data:** Create standard mock datasets for testing edge cases like zero amounts, large amounts, and rounding.

## Acceptance Criteria
- No "17,700" display for a 177 dollar payment anywhere in the app.
- All amounts in Dashboard charts match the values in the Transactions table.
- Email receipts show identical amounts to the UI Success page.
- Test coverage for formatting utilities and mapping hooks is >90%.
- Build passes with 0 errors and 0 warnings.

## Out of Scope
- Modifying the underlying PostgreSQL database schema.
- Implementing new financial analytics or multi-currency support beyond USD.
