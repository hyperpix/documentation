# Overview
This track focuses on a comprehensive performance overhaul of the Montra platform, specifically targeting the Dashboard, Analytics, and Settings pages. The goal is to minimize data-fetching latency, improve UI responsiveness during heavy data rendering (charts), and ensure a snappy user experience through strategic caching and pre-fetching.

# Functional Requirements

## 1. Caching & Data Fetching Optimization
- **Client-Side:** Implement or refine React Query usage across Dashboard and Analytics to cache responses and provide instant feedback on subsequent visits.
- **Server-Side:** Utilize Next.js Data Cache and `unstable_cache` for expensive aggregation queries used in the Analytics engine.
- **Pre-fetching:** Implement intent-based pre-fetching (e.g., pre-fetching Analytics data when the user hovers over the sidebar link or while they are on the Overview page).

## 2. Analytics & Chart Optimization
- **Data Pruning:** Implement server-side data aggregation to ensure charts only receive necessary data points rather than raw transaction logs.
- **Rendering Performance:** Optimize Recharts implementation to handle larger datasets without blocking the main UI thread (e.g., using memoization or simplified geometries for high-density plots).

## 3. Database & Infrastructure
- **Indexing:** Audit and add PostgreSQL indexes for common Analytics query patterns (e.g., `merchant_id` + `created_at` on transactions/usage tables).
- **API Efficiency:** Refine API routes to reduce over-fetching by ensuring only required fields for specific widgets are returned.

# Non-Functional Requirements
- **Latency:** Dashboard widgets should aim for sub-500ms data resolution from cache.
- **Interactivity:** UI interaction (tab switching) should feel near-instant (<100ms perceived delay).

# Acceptance Criteria
- [ ] Switching between the "Overview" and "Analytics" pages happens without a visible loading state for previously fetched data.
- [ ] High-density analytics charts render without causing frame drops or UI freezing.
- [ ] Database query performance for 30-day usage aggregations is improved by at least 50%.
- [ ] Settings changes utilize optimistic UI updates where applicable to avoid waiting for server round-trips.

# Out of Scope
- Redesigning the visual look of the dashboard (this is a performance track only).
- Optimizing external 3rd party script loads unless they are blocking critical path rendering.
