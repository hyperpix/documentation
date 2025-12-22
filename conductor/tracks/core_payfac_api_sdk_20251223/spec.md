# Spec: Core PayFac API & SDK

## Goal
Build a high-performance, developer-friendly API and SDK to support AI-first companies with usage-based billing and payment facilitation.

## Scope
- **API Implementation:**
  - Usage Ingestion: Endpoint for reporting high-frequency events (tokens, compute).
  - Entitlements/Limits: Endpoint to check if a customer has sufficient usage/quota.
  - Customer Management: CRUD operations for customers via API.
  - Billing/Invoices: Triggering invoice generation and retrieving status.
  - Checkout Sessions: API to create and manage secure checkout sessions.
- **SDK Development:**
  - **Server-Side SDK:** TypeScript SDK for backend integration (Usage, Customers, Entitlements).
  - **Client-Side SDK:** Frontend components/methods for rendering Custom Checkout flows.
- **Authentication:**
  - API Key based authentication (already foundations in `actions/api-keys.ts`).

## Technical Requirements
- Next.js Route Handlers (API Routes).
- Supabase for data persistence.
- TypeScript for type safety across API and SDK.
- Robust error handling and validation.
