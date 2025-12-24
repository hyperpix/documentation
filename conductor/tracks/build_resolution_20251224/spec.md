# Specification: Build Warning & Environment Resolution

## Overview
This track focuses on achieving a clean, warning-free production build by resolving TypeScript/ESLint warnings, fixing Vercel-specific environment errors related to `pnpm` and git submodules, and ensuring deployment stability.

## Functional Requirements

### 1. TypeScript & Linting Cleanup
- **Unused Variables:** Remove all variables flagged as "assigned a value but never used" (e.g., `_ignoredDob`, `_err`, `CheckoutSession`).
- **Hook Dependencies:** Fix `react-hooks/exhaustive-deps` warnings, specifically the `revenue` logical expression in `useMemo` hooks.
- **Unused Icons/Components:** Clean up unused imports of Lucide icons (`Hash`, `Shield`, `Coins`, etc.) and UI components (`Card`, `CardContent`).

### 2. Environment & Dependency Fixes
- **PNPM Binary Issues:** Resolve the `ENOENT` error regarding the `supabase` binary at `/node_modules/.bin/supabase` by auditing `package.json` and pnpm configurations.
- **Git Submodules:** Fix the "Failed to fetch one or more git submodules" warning by verifying `.gitmodules` and ensuring the Vercel environment has correct access.

### 3. Build Stability
- Ensure the entire build process (`pnpm build`) completes with **Zero Warnings**.
- Verify that the project passes a full `tsc` type check.

## Non-Functional Requirements
- **Production Standards:** All environment fixes must follow Vercel and pnpm best practices to ensure long-term deployment reliability.
- **Code Hygiene:** Maintaining a lean codebase by removing dead code rather than silencing it.

## Acceptance Criteria
- [ ] `pnpm run build` completes with 0 warnings in the console output.
- [ ] No ESLint warnings remain for unused variables or hook dependencies.
- [ ] Git submodules are successfully fetched during the build process.
- [ ] `node_modules/.bin/supabase` (or equivalent) is correctly handled without ENOENT errors.

## Out of Scope
- Adding new features or UI components.
- Refactoring core business logic unrelated to the reported warnings.
