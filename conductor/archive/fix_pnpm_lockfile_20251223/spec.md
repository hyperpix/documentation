# Specification: Fix PNPM Lockfile Mismatch

## Overview
The production build is failing because `pnpm-lock.yaml` is out of sync with `package.json`. Specifically, `@asteasolutions/zod-to-openapi@^8.2.0` was added to `package.json` but not reflected in the lockfile. This causes `pnpm install` to fail in environments using `--frozen-lockfile` (like CI or production).

## Functional Requirements
- Synchronize `pnpm-lock.yaml` with the current `package.json`.
- Ensure all dependencies, including `@asteasolutions/zod-to-openapi`, are correctly resolved and locked.

## Non-Functional Requirements
- Maintain stability and predictability of the build process.
- Adhere to the project's use of `pnpm` as the package manager.

## Acceptance Criteria
- `pnpm install` runs successfully locally without errors.
- `pnpm install --frozen-lockfile` runs successfully locally (simulating the CI/Production environment).
- The updated `pnpm-lock.yaml` is committed to the repository.

## Out of Scope
- Upgrading other dependencies not related to the current mismatch.
- Modifying CI/CD configuration files or build scripts.
