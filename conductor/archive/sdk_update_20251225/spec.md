# Specification: Update @montra/sdk with New API Features

## Overview
This track involves a significant update to the `@montra/sdk` (TypeScript) to bring it in line with the latest API capabilities. The update will be a minor version bump (v1.x), ensuring strict backwards compatibility for existing integrations while adding comprehensive support for Analytics, Subscription Lifecycle, advanced Customer management, and Webhook utilities.

## Functional Requirements

### 1. API Surface Expansion
- **Analytics:** Add `sdk.analytics.getSeries()` and related methods for MRR, Gross Volume, and custom intervals.
- **Subscriptions:** Implement lifecycle methods:
    - `sdk.subscriptions.pause(id)`
    - `sdk.subscriptions.resume(id)`
    - `sdk.subscriptions.updateSchedule(id, payload)`
- **Customers:** Enhance customer management with support for multiple invoicing emails, extended metadata, and account status transitions.
- **Products & Pricing:** Support for creating and managing hybrid pricing models and product associations.
- **Webhooks:** Provide a utility class `sdk.webhooks.verifySignature(payload, signature, secret)` for secure event handling.

### 2. Developer Experience (DX) Enhancements
- **Type Safety:** Provide full TypeScript interfaces for all new request and response objects, synchronized with the backend Zod schemas.
- **Robust Error Handling:** Implement a hierarchy of custom error classes (e.g., `MontraApiError`, `MontraAuthenticationError`) to allow developers to catch and handle specific failure modes.
- **Resilience:** Add built-in retry logic for 5xx errors and transient network issues.
- **Workflow Helpers:** Add convenience methods for common patterns, such as `sdk.customers.createWithSubscription()`.

## Non-Functional Requirements
- **Backwards Compatibility:** No existing public method signatures or types may be changed in a breaking way.
- **Documentation:** Update the `sdk-reference/` and `README.md` within the `sdk-ts` directory to reflect new capabilities.
- **Bundle Size:** Maintain a small footprint by only adding necessary logic and types.

## Acceptance Criteria
- [ ] All new API endpoints are reachable via documented SDK methods.
- [ ] Existing unit and integration tests for the SDK pass without modification.
- [ ] 100% test coverage for all new SDK methods and error handling logic.
- [ ] TypeScript consumers can utilize autocomplete and type-checking for all new features.
- [ ] Webhook verification utility correctly validates authentic payloads and rejects tampered ones.

## Out of Scope
- Rewriting the internal fetch implementation (focus on wrappers and decorators).
- Implementing SDKs for other languages (Python, Go, etc.) in this track.
