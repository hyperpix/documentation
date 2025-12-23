# Plan: Advanced Usage Metering

## Phase 1: Aggregation Engine
- [x] Task: Update usage event schema to support multiple aggregation types.
- [x] Task: Implement `calculate_usage` Postgres function for `SUM`, `COUNT`, `MAX`.
- [x] Task: Implement `UNIQUE` aggregation (e.g., unique user IDs per month).
- [x] Task: Write unit tests for all aggregation types.

## Phase 2: Tiered Pricing & Billing Cycles
- [x] Task: Define schema for tiered pricing structures.
- [x] Task: Implement pricing engine utility to calculate total cost from tiered usage.
- [x] Task: Implement billing cycle reset logic and historical usage tracking.
- [x] Task: Write tests for complex tiered pricing scenarios.

## Phase 3: Real-Time Alerts
- [x] Task: Create `usage_alerts` table and configuration API.
- [x] Task: Implement real-time check on usage ingestion to trigger alerts.
- [x] Task: Integrate with notification system (UI toast or email placeholder).
- [x] Task: Write integration tests for the alert flow.
