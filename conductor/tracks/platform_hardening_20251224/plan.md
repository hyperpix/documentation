# Plan: Platform Hardening and Stabilization

## Phase 1: Security Hardening
- [x] Task: Write failing tests for `logTransaction` rejecting client-provided amounts/fees. [262e5e1]
- [x] Task: Refactor `logTransaction` server action in `app/actions/transactions.ts` to verify status server-side. [c5ae086]
- [ ] Task: Implement `middleware.ts` to protect `/dashboard`, `/settings`, and `/api` routes.
- [ ] Task: Write integration tests verifying `middleware.ts` redirects unauthenticated users.
- [ ] Task: Conductor - User Manual Verification 'Security Hardening' (Protocol in workflow.md)

## Phase 2: Dependency & Environment
- [ ] Task: Update `package.json` dependencies (`next`, `react`, `react-dom`) to stable versions.
- [ ] Task: Remove `node_modules` and lockfiles, then perform a fresh `pnpm install`.
- [ ] Task: Run a full build (`npm run build`) to ensure environment stability.
- [ ] Task: Conductor - User Manual Verification 'Dependency & Environment' (Protocol in workflow.md)

## Phase 3: Quality & Hygiene
- [ ] Task: Identify and convert all `.jsx` files to `.tsx` (e.g., `Dither.jsx`, `LightRays.jsx`, `Silk.jsx`).
- [ ] Task: Resolve TypeScript errors resulting from the conversion.
- [ ] Task: Remove identified junk files from root (temporary HTML, logs, backup artifacts).
- [ ] Task: Refactor and document API key logic to separate domain logic (`lib/`) from orchestration (`app/actions/`).
- [ ] Task: Conductor - User Manual Verification 'Quality & Hygiene' (Protocol in workflow.md)
