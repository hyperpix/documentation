# Specification: Platform Hardening and Stabilization (Track: platform_hardening_20251224)

## Overview
This track addresses the critical security, configuration, and architectural issues identified in the project audit (Rating: C+). The goal is to move the platform from a "testing/pre-provider" state toward a production-ready foundation by securing transaction logging, correcting dependency versions, and enforcing global architectural standards.

## Functional Requirements

### 1. Security Hardening
- **Secure Transaction Logging:** Refactor the `logTransaction` Server Action in `app/actions/transactions.ts`. It must no longer accept sensitive parameters (amount, status, fee) from the client. It should accept only immutable identifiers (e.g., `checkoutSessionId`) and verify the status server-side.
- **Global Route Protection:** Implement a `middleware.ts` as a defensive safety net to protect sensitive routes (e.g., `/dashboard/*`, `/settings/*`, `/api/*`).

### 2. Dependency & Environment Stabilization
- **Version Correction:** Update `package.json` to use stable, existing versions:
    - `next`: `^15.0.0`
    - `react`: `^19.0.0`
- **Lockfile Synchronization:** Regenerate the lockfile to ensure a consistent and clean installation.

### 3. Code Quality & Hygiene
- **TypeScript Enforcements:** Convert all remaining `.jsx` files to `.tsx` and resolve any resulting type errors.
- **Repository Cleanup:** Remove temporary and unused files from the repository root (e.g., `invoice_temp.html`, `start_log.txt`, error logs).
- **Logic Consolidation:** Clearly separate and document the responsibilities of the API key logic between `lib/` (domain/DB) and `app/actions/` (orchestration).

### 4. Customers Analytics UI
- **Analytics Sidebar Integration:** Add a "Customers" page link under the "Analytics" section in the sidebar.
- **Customers List View:** Implement a list view for customers with a UI matching the "Invoices" page.
- **Customer Detail View:** Implement a detail view for individual customers with a UI/structure similar to the "Pricing Model" detail view.

## Acceptance Criteria
- [ ] `logTransaction` server action is secured and verified against server-side data.
- [ ] `middleware.ts` correctly guards protected routes.
- [ ] `npm install` (or `pnpm install`) succeeds with stable dependency versions.
- [ ] The project contains zero `.jsx` files.
- [ ] Repository root contains only essential configuration and project files.
- [ ] "Customers" analytics page is accessible and follows the design patterns of Invoices/Pricing Models.
- [ ] All automated tests pass.

## Out of Scope
- Integration of actual live payment providers (PayTheory/Stripe) is deferred to a future track.
