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
- [x] Task: Conductor - User Manual Verification 'Phase 2: Customer & Billing APIs' (Protocol in workflow.md) [checkpoint: b95429f]

## Phase 3: Server-Side SDK Development
- [x] Task: Scaffold the TypeScript SDK structure. [ec13d75]
- [x] Task: Implement SDK methods for usage reporting, customer management, and billing. [360b836]
- [x] Task: Implement SDK method for entitlement/usage checking. [360b836]
- [x] Task: Create a sample integration script using the SDK. [2a2bb56]
- [x] Task: Conductor - User Manual Verification 'Phase 3: SDK Development' (Protocol in workflow.md) [checkpoint: 9ce9288]

## Phase 4: Checkout Infrastructure & Client SDK
- [x] Task: Implement Checkout Session API (`/api/v1/checkout/sessions`). [3c0d0e1]
- [x] Task: Scaffold Client-Side SDK (checkout.js / React components). [556de58]
- [x] Task: Implement `createCheckoutSession` and frontend mounting logic. [d4798de]
- [ ] Task: Build Custom Checkout UI components (Payment Element).
- [ ] Task: Conductor - User Manual Verification 'Phase 4: Checkout Infrastructure' (Protocol in workflow.md)
