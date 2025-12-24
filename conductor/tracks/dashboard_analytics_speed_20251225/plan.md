# Phase 1: Database & Backend Optimization [checkpoint: d0deafd]
- [x] Task: Audit & Index Database
    - Analyze current slow queries for Analytics/Dashboard.
    - Create a migration to add composite indexes (e.g., `transactions(merchant_id, created_at)`) to optimize time-series lookups.
- [x] Task: Implement Server-Side Aggregation
    - Refactor `app/api/analytics/route.ts` (or equivalent) to perform aggregation in SQL rather than JS.
    - Implement `unstable_cache` for expensive dashboard summary queries to reduce DB hits.
- [x] Task: Conductor - User Manual Verification 'Backend Performance' (Protocol in workflow.md)

# Phase 2: Client-Side Data & Caching
- [ ] Task: Refactor Dashboard Fetching
    - Update Dashboard widgets to use React Query hooks with proper `staleTime` and `gcTime` configurations.
    - Ensure server actions return minimized payloads.
- [ ] Task: Implement Pre-fetching Strategy
    - Add `prefetchQuery` logic on the Sidebar component to load Analytics data when the user is on the Overview page.
- [ ] Task: Conductor - User Manual Verification 'Client Caching' (Protocol in workflow.md)

# Phase 3: UI Rendering Optimization
- [ ] Task: Optimize Chart Components
    - Memoize Recharts components in `msandbox-backup/components/charts/`.
    - Implement data downsampling helper if chart data points exceed a threshold (e.g., > 500 points).
- [ ] Task: Conductor - User Manual Verification 'UI Responsiveness' (Protocol in workflow.md)
