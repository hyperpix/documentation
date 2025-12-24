# Plan: Build Warning & Environment Resolution

This plan addresses the resolution of build-time warnings and environment configuration issues to achieve a stable, zero-warning production deployment.

## Phase 1: Environment & Dependency Audit
Focuses on resolving the underlying `pnpm` and git submodule issues that cause initial build failures or warnings.

- [x] Task: Audit and Fix Git Submodules. Verify `.gitmodules` configuration and ensure submodules are correctly initialized and tracked. 0a816ea
- [x] Task: Resolve PNPM Binary Path Issues. Investigate why the `supabase` binary is missing in `node_modules/.bin` and adjust `package.json` or pnpm settings to ensure correct linking. 0a816ea
- [x] Task: Environment Verification. Run a dry-build to confirm that dependency and submodule warnings are resolved. 0a816ea
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Environment & Dependency Audit' (Protocol in workflow.md)

## Phase 2: Linting & Code Hygiene
Focuses on cleaning up the codebase by removing unused variables and fixing hook dependency issues identified in the logs.

- [ ] Task: Write Tests for Hook Logic. Create unit tests for components where `useMemo` dependencies are being modified to ensure behavior is preserved.
- [ ] Task: Clean Up Unused Variables and Imports. Systematically remove unused variables (`_err`, `_ignoredDob`, etc.) and unused icon/component imports as reported by ESLint.
- [ ] Task: Fix React Hook Dependencies. Refactor `useMemo` hooks (specifically the `revenue` logic) to include all necessary dependencies or wrap initializations correctly.
- [ ] Task: Verify Linting Pass. Run `pnpm run lint` and confirm 0 warnings.
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Linting & Code Hygiene' (Protocol in workflow.md)

## Phase 3: Build Stability & Final Check
Final verification to ensure the production build is fully stable.

- [ ] Task: Full Type Check. Run `tsc --noEmit` to ensure no TypeScript errors were introduced during cleanup.
- [ ] Task: Production Build Verification. Execute `pnpm run build` and verify 0 warnings in the final output.
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Build Stability & Final Check' (Protocol in workflow.md)
