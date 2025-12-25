# Plan: Dashboard and Analytics UX & Chart Optimization

## Phase 1: Consolidated Dashboard Data Fetching [checkpoint: 828f223]
- [x] Task: Create Consolidated Dashboard API Endpoint [76ffa8c]
    - Create `msandbox-backup/app/api/dashboard/overview/route.ts`.
    - Implement logic to fetch Transactions (recent 5), Settlements (recent 4), and Gross Volume series (7-day daily + previous 7-day total) in a single backend process.
    - Ensure it returns a unified JSON structure for the dashboard frontend.
- [x] Task: Update TanStack Query Hooks [f9f5091]
    - Add `useDashboardOverview` hook in `msandbox-backup/lib/hooks/use-queries.ts`.
    - Configure `staleTime: 60000` (1 minute) and `placeholderData: keepPreviousData` to enable SWR logic.
- [x] Task: Refactor Dashboard Components [7e2f41f]
    - Modify `DashboardGrossVolume`, `DashboardSettlements`, and `DashboardTransactions` to consume data from the single `useDashboardOverview` hook.
    - Remove individual query calls from these components.
- [x] Task: Conductor - User Manual Verification 'Consolidated Dashboard Data Fetching' (Protocol in workflow.md)

## Phase 2: Chart Visual Restoration [checkpoint: 958e4d7]
- [x] Task: Fix AnalyticsChart Path & Point Rendering [2a35f43]
    - Audit `msandbox-backup/components/charts/AnalyticsChart.tsx`.
    - Restore `<Line />` or `<Area />` props for dots/points (e.g., `activeDot`, `dot`).
    - Ensure stroke paths are correctly defined and visible against the background.
- [x] Task: Update Sparkline Component [23f5cf8]
- [x] Task: Conductor - User Manual Verification 'Chart Visual Restoration' (Protocol in workflow.md)

## Phase 3: Integrated Loading & UX Refinement
- [x] Task: Implement Component-Level Loading States [7e2f41f]
    - Update all dashboard widgets to remove early-return skeleton blocks.
    - Add internal skeleton placeholders for numeric values and chart areas.
    - Ensure `ReportsSection` and `Analytics` pages use the same integrated loading pattern.
- [x] Task: Verify SWR Transitions [0c8c140]
- [x] Task: Conductor - User Manual Verification 'Integrated Loading & UX Refinement' (Protocol in workflow.md)
