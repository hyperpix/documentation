# Plan: API Surface Expansion

## Phase 1: Public Exposure of Core Features
- [x] Task: Implement `GET /api/v1/subscriptions` and `GET /api/v1/subscriptions/[id]` to expose subscription data.
- [x] Task: Implement `POST /api/v1/checkout-links` to allow programmatic creation of shareable payment links.
- [x] Task: Implement `GET /api/v1/payment-links` to list and manage links.

## Phase 2: Commerce Features (Refunds & Discounts)
- [x] Task: Create `refunds` table in Supabase.
- [x] Task: Implement `POST /api/v1/refunds` to process transaction reversals.
- [x] Task: Create `discounts` (Coupons) table and logic.
- [x] Task: Implement `/api/v1/discounts` CRUD API.

## Phase 3: Developer Experience (LLM Docs)
- [x] Task: Generate `docs/llms-full.txt` containing all API definitions and usage guides.
- [x] Task: Add OpenAPI/Swagger specification generation for the `/v1` route. [bcfca87]
