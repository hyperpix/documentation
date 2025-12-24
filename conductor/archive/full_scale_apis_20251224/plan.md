# Plan: Full Scale API Surface Expansion

## Phase 1: Core Management (Pricing Models & Meters) [checkpoint: a5476b8]
- [x] Task: Create `meters` table and CRUD logic in `app/api/v1/meters/route.ts`. [62e03ab]
- [x] Task: Write TDD tests for Pricing Model CRUD and Live Update propagation. [700c09d]
- [x] Task: Implement `GET/POST/PATCH/DELETE` for `/api/v1/pricing-models`. [1ac866c]
- [x] Task: Implement logic for immediate propagation of model changes to assigned customers. [4aac84a]
- [x] Task: Update TypeScript SDK with `meters` and `pricing-models` methods and types. [829deed]
- [x] Task: Conductor - User Manual Verification 'Core Management' (Protocol in workflow.md)

## Phase 2: Reliability (Idempotency Keys) [checkpoint: c31f1fd]
- [x] Task: Implement idempotency middleware or utility to track `Idempotency-Key` headers. [6b18b66]
- [x] Task: Update `POST` handlers for Customers, Payments, and Checkout Links to support idempotency. [4c4163b]
- [x] Task: Write integration tests verifying that duplicate requests return the same response without duplicate side effects. [4c4163b]
- [x] Task: Update TypeScript SDK `request` method to support optional `idempotencyKey`. [457abf2]
- [x] Task: Conductor - User Manual Verification 'Idempotency Keys' (Protocol in workflow.md)

## Phase 3: Enhanced Commerce (Multi-item Links & Assets) [checkpoint: 32c6413]
- [x] Task: Update `checkout_links` schema to support an array of line items. [c845cf9]
- [x] Task: Implement `/api/v1/files` for asset uploads to Supabase Storage. [b8f023a]
- [x] Task: Update `/api/v1/checkout-links` to accept multiple `line_items` and `image_ids`. [43608b9]
- [x] Task: Update the hosted checkout page to render multiple items and associated images. [0d8d226]
- [x] Task: Update TypeScript SDK with multi-item checkout support and file upload method. [c8c879b]
- [x] Task: Conductor - User Manual Verification 'Enhanced Commerce' (Protocol in workflow.md)

## Phase 4: Subscription Lifecycle (Proration & Scheduling) [checkpoint: 0829797]
- [x] Task: Implement proration calculation logic in a shared utility. [a32f2df]
- [x] Task: Implement `/api/v1/subscriptions/[id]/upgrade` with proration support. [72bbe17]
- [x] Task: Implement a "Scheduled Changes" queue in the database for end-of-cycle transitions. [17e860a]
- [x] Task: Write tests for complex proration scenarios and scheduled downgrades. [8c43bca]
- [x] Task: Update TypeScript SDK with subscription lifecycle methods (`upgrade`, `pause`, `resume`). [2a2a22c]
- [x] Task: Conductor - User Manual Verification 'Subscription Lifecycle' (Protocol in workflow.md) [6e4b8d2]

## Phase 5: Operations & Deployment [checkpoint: 3be68ec]
- [x] Task: Implement `webhooks` table and `/api/v1/webhooks` management API. [0d200dd]
- [x] Task: Implement `/api/v1/audit-logs` for fetching merchant event history. [0d200dd]
- [x] Task: Comprehensive Documentation Update: Update all `api-reference/` MDX files, SDK examples, and `docs/llms-full.txt`. [d4383e5]
- [x] Task: Push all changes to the remote repository (Documentation & msandbox-backup). [3be68ec]
- [x] Task: Conductor - User Manual Verification 'Operations & Deployment' (Protocol in workflow.md) [3be68ec]
