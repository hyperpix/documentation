# Plan: Full Scale API Surface Expansion

## Phase 1: Core Management (Pricing Models & Meters) [checkpoint: a5476b8]
- [x] Task: Create `meters` table and CRUD logic in `app/api/v1/meters/route.ts`. [62e03ab]
- [x] Task: Write TDD tests for Pricing Model CRUD and Live Update propagation. [700c09d]
- [x] Task: Implement `GET/POST/PATCH/DELETE` for `/api/v1/pricing-models`. [1ac866c]
- [x] Task: Implement logic for immediate propagation of model changes to assigned customers. [4aac84a]
- [x] Task: Conductor - User Manual Verification 'Core Management' (Protocol in workflow.md)

## Phase 2: Reliability (Idempotency Keys)
- [x] Task: Implement idempotency middleware or utility to track `Idempotency-Key` headers. [6b18b66]
- [x] Task: Update `POST` handlers for Customers, Payments, and Checkout Links to support idempotency. [4c4163b]
- [ ] Task: Write integration tests verifying that duplicate requests return the same response without duplicate side effects.
- [ ] Task: Conductor - User Manual Verification 'Idempotency Keys' (Protocol in workflow.md)

## Phase 3: Enhanced Commerce (Multi-item Links & Assets)
- [ ] Task: Update `checkout_links` schema to support an array of line items.
- [ ] Task: Implement `/api/v1/files` for asset uploads to Supabase Storage.
- [ ] Task: Update `/api/v1/checkout-links` to accept multiple `line_items` and `image_ids`.
- [ ] Task: Update the hosted checkout page to render multiple items and associated images.
- [ ] Task: Conductor - User Manual Verification 'Enhanced Commerce' (Protocol in workflow.md)

## Phase 4: Subscription Lifecycle (Proration & Scheduling)
- [ ] Task: Implement proration calculation logic in a shared utility.
- [ ] Task: Implement `/api/v1/subscriptions/[id]/upgrade` with proration support.
- [ ] Task: Implement a "Scheduled Changes" queue in the database for end-of-cycle transitions.
- [ ] Task: Write tests for complex proration scenarios and scheduled downgrades.
- [ ] Task: Conductor - User Manual Verification 'Subscription Lifecycle' (Protocol in workflow.md)

## Phase 5: Operations & Deployment
- [ ] Task: Implement `webhooks` table and `/api/v1/webhooks` management API.
- [ ] Task: Implement `/api/v1/audit-logs` for fetching merchant event history.
- [ ] Task: Comprehensive Documentation Update: Update all `api-reference/` MDX files, SDK examples, and `docs/llms-full.txt`.
- [ ] Task: Push all changes to the remote repository (Documentation & msandbox-backup).
- [ ] Task: Conductor - User Manual Verification 'Operations & Deployment' (Protocol in workflow.md)
