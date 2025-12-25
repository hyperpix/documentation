# Plan: Dashboard and Analytics UX & Chart Optimization

## Phase 1: Consolidated Dashboard Data Fetching
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

## Phase 2: Chart Visual Restoration
- [ ] Task: Fix AnalyticsChart Path & Point Rendering
    - Audit `msandbox-backup/components/charts/AnalyticsChart.tsx`.
    - Restore `<Line />` or `<Area />` props for dots/points (e.g., `activeDot`, `dot`).
    - Ensure stroke paths are correctly defined and visible against the background.
- [ ] Task: Update Sparkline Component
    - Modify `msandbox-backup/components/charts/Sparkline.tsx` to use `Area` or `Line` instead of `Bar`.
    - Add subtle dots for data points if requested in original working state.
- [ ] Task: Conductor - User Manual Verification 'Chart Visual Restoration' (Protocol in workflow.md)

## Phase 3: Integrated Loading & UX Refinement
- [ ] Task: Implement Component-Level Loading States
    - Update all dashboard widgets to remove early-return skeleton blocks.
    - Add internal skeleton placeholders for numeric values and chart areas.
    - Ensure `ReportsSection` and `Analytics` pages use the same integrated loading pattern.
- [ ] Task: Verify SWR Transitions
    - Test switching between "Daily", "Weekly", and "Monthly" intervals on the Analytics page.
    - Confirm that old data remains visible (perhaps slightly dimmed) until new data is ready, preventing "skeleton jumps".
- [ ] Task: Conductor - User Manual Verification 'Integrated Loading & UX Refinement' (Protocol in workflow.md)
