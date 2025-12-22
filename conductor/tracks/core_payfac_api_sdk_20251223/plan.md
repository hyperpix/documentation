# Plan: Core PayFac API & SDK

## Phase 1: API Infrastructure & Usage Ingestion
- [x] Task: Define API directory structure and base response types. [33e0d1b]
- [x] Task: Implement API Key validation middleware/utility. [b31d87d]
- [x] Task: Create Usage Ingestion endpoint (`/api/v1/usage`). [321869b]
- [x] Task: Write unit tests for usage ingestion and validation. [321869b]
- [x] Task: Conductor - User Manual Verification 'Phase 1: API Infrastructure & Usage Ingestion' (Protocol in workflow.md) [checkpoint: 2a92d96]

## Phase 2: Customer & Billing APIs
- [x] Task: Implement Customer API endpoints (`/api/v1/customers`). [a96dc5c]
- [x] Task: Implement Billing/Invoice retrieval endpoints (`/api/v1/invoices`). [01c323d]
- [x] Task: Write integration tests for customer and billing flows. [df994ad]
- [x] Task: Implement Entitlements/Usage Check endpoint (`/api/v1/entitlements`). [eca3270]
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Customer & Billing APIs' (Protocol in workflow.md)

## Phase 3: Server-Side SDK Development
- [ ] Task: Scaffold the TypeScript SDK structure.
- [ ] Task: Implement SDK methods for usage reporting, customer management, and billing.
- [ ] Task: Implement SDK method for entitlement/usage checking.
- [ ] Task: Create a sample integration script using the SDK.
- [ ] Task: Conductor - User Manual Verification 'Phase 3: SDK Development' (Protocol in workflow.md)

## Phase 4: Checkout Infrastructure & Client SDK
- [ ] Task: Implement Checkout Session API (`/api/v1/checkout/sessions`).
- [ ] Task: Scaffold Client-Side SDK (checkout.js / React components).
- [ ] Task: Implement `createCheckoutSession` and frontend mounting logic.
- [ ] Task: Build Custom Checkout UI components (Payment Element).
- [ ] Task: Conductor - User Manual Verification 'Phase 4: Checkout Infrastructure' (Protocol in workflow.md)
