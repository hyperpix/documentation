# Specification: Full Scale API Surface Expansion (Track: full_scale_apis_20251224)

## Overview
This track transforms the Montra API into a comprehensive "Full Scale" platform by exposing core structural containers (Pricing Models, Meters), operational tools (Webhooks, Audit Logs), and advanced subscription lifecycle management (Proration, Scheduling). It also enhances the commerce engine to support complex, multi-item checkout flows with rich asset management and improves API reliability through idempotency.

## Functional Requirements

### 1. Pricing & Metering Management
- **Pricing Models API (`/api/v1/pricing-models`):** 
    - Full CRUD support for Pricing Models.
    - Support for **Live Updates**: Changes to a model immediately propagate to all assigned customers.
- **Meters API (`/api/v1/meters`):**
    - Endpoints to create and configure usage meters (defining the "rules" of what is being tracked).

### 2. Advanced Subscription Lifecycle
- **Proration Logic:** API support for calculating and applying cost adjustments when a customer changes plans mid-cycle.
- **Scheduled Changes:** Ability to schedule plan upgrades or downgrades to take effect at the end of the current billing period.
- **Lifecycle Endpoints:** Dedicated endpoints for `pause`, `resume`, and `upgrade` operations.

### 3. Enhanced Checkout Links (`/api/v1/checkout-links`)
- **Multi-item Support:** Transition from single-product links to support for an array of `line_items`.
- **Rich Assets:** Integration with image/file management to display product visuals on the checkout page.

### 4. Image & Asset Management (`/api/v1/files`)
- **Hybrid Support:** The API will accept both external CDN URLs and internal file IDs.
- **Upload Endpoint:** A new endpoint to upload assets directly to Montra's secure storage.

### 5. API Reliability & Operations
- **Idempotency Keys:** Implementation of the `Idempotency-Key` header for `POST` requests to prevent duplicate transactions or resource creation.
- **Webhooks API (`/api/v1/webhooks`):** Programmatic management of merchant listener URLs.
- **Audit Logs API (`/api/v1/audit-logs`):** Access to merchant transaction and system event history.

## Acceptance Criteria
- [ ] CRUD endpoints for Pricing Models, Meters, and Webhooks are functional.
- [ ] Subscription upgrades correctly calculate proration amounts.
- [ ] Checkout Links support multiple items and display images.
- [ ] Retrying a `POST` request with the same `Idempotency-Key` returns the original response without duplicate side effects.
- [ ] All new endpoints are documented in the API reference.
- [ ] Changes are pushed to the remote repository.
