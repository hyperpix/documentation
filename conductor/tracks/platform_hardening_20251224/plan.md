# Plan: Platform Hardening and Stabilization

## Phase 1: Security Hardening
- [x] Task: Write failing tests for `logTransaction` rejecting client-provided amounts/fees. [262e5e1]
- [x] Task: Refactor `logTransaction` server action in `app/actions/transactions.ts` to verify status server-side. [c5ae086]
- [x] Task: Implement `middleware.ts` to protect `/dashboard`, `/settings`, and `/api` routes. [4c4cfb6]
- [x] Task: Write integration tests verifying `middleware.ts` redirects unauthenticated users. [4c4cfb6]
- [ ] Task: Conductor - User Manual Verification 'Security Hardening' (Protocol in workflow.md)

## Phase 2: Dependency & Environment
- [~] Task: Update `package.json` dependencies (`next`, `react`, `react-dom`) to stable versions.
- [ ] Task: Remove `node_modules` and lockfiles, then perform a fresh `pnpm install`.
- [ ] Task: Run a full build (`npm run build`) to ensure environment stability.
- [ ] Task: Conductor - User Manual Verification 'Dependency & Environment' (Protocol in workflow.md)

## Phase 3: Quality & Hygiene
- [x] Task: Identify and convert all `.jsx` files to `.tsx` (e.g., `Dither.jsx`, `LightRays.jsx`, `Silk.jsx`). [82cb063]
- [x] Task: Resolve TypeScript errors resulting from the conversion. [82cb063]
- [x] Task: Remove identified junk files from root (temporary HTML, logs, backup artifacts). [82cb063]
- [x] Task: Refactor and document API key logic to separate domain logic (`lib/`) from orchestration (`app/actions/`). [82cb063]
- [ ] Task: Conductor - User Manual Verification 'Quality & Hygiene' (Protocol in workflow.md)

## Phase 4: Customers UI Implementation
- [x] Task: Add "Customers" link under "Analytics" section in the sidebar. [42f8a61]
- [x] Task: Create "Customers" list page with a UI matching the "Invoices" page. [0d200dd]
- [x] Task: Implement "Customer Detail" view matching the structure of "Pricing Model" detail. [0d200dd]
- [ ] Task: Conductor - User Manual Verification 'Customers UI Implementation' (Protocol in workflow.md)
