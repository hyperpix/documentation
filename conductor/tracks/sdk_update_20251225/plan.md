# Plan: Update @montra/sdk with New API Features

This plan outlines the systematic update of the TypeScript SDK to support new platform capabilities while ensuring reliability and a premium developer experience.

## Phase 1: Core Types & Error Handling [checkpoint: 1edc391]
Establish the foundational types and resilient error handling for the new features.

- [x] Task: Define TypeScript Interfaces. Create exhaustive interfaces for new request/response payloads (Analytics, Subscriptions, Customers) in `sdk-ts/src/types/`. a5c6a09
- [x] Task: Implement Custom Error Classes. Create `MontraApiError` and subclasses to provide structured error data (codes, messages, metadata). a5c6a09
- [x] Task: Implement Retry Logic. Add a configurable retry mechanism to the internal request handler for handling transient 5xx network errors. a5c6a09
- [x] Task: Conductor - User Manual Verification 'Phase 1: Core Types & Error Handling' (Protocol in workflow.md) 1edc391

## Phase 2: Feature Implementation (Analytics & Subscriptions) [checkpoint: 90b9e45]
Bring the latest billing and reporting capabilities to the SDK surface.

- [x] Task: Implement Analytics Methods. Write tests and then implement `sdk.analytics.getSeries()` with support for all aggregation intervals. a5c6a09
- [x] Task: Implement Subscription Lifecycle. Write tests and then implement `pause`, `resume`, and `updateSchedule` methods. a5c6a09
- [x] Task: Conductor - User Manual Verification 'Phase 2: Feature Implementation (Analytics & Subscriptions)' (Protocol in workflow.md) 90b9e45

## Phase 3: Feature Implementation (Customers & Webhooks)
Finalize resource management methods and add critical security utilities.

- [ ] Task: Enhance Customer Management. Write tests and then update customer methods to support multiple invoicing emails and extended metadata.
- [ ] Task: Implement Webhook Verification. Write tests and then implement `sdk.webhooks.verifySignature` for secure event validation.
- [ ] Task: Add Workflow Helpers. Implement high-level convenience methods like `sdk.customers.createWithSubscription()`.
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Feature Implementation (Customers & Webhooks)' (Protocol in workflow.md)

## Phase 4: Documentation & Integration Pass
Ensure all new features are well-documented and the SDK remains fully compatible.

- [ ] Task: Update SDK Documentation. Revise `sdk-ts/README.md` and `sdk-reference/*.md` with clear code examples for every new capability.
- [ ] Task: Full Regression Suite. Run all existing and new tests to verify 100% coverage and zero breaking changes.
- [ ] Task: Conductor - User Manual Verification 'Phase 4: Documentation & Integration Pass' (Protocol in workflow.md)
