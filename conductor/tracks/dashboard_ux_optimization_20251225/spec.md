# Specification: Dashboard and Analytics UX & Chart Optimization

## Overview
Optimize the user experience on the Dashboard and Analytics pages by removing full-section skeletons and improving chart rendering. We will consolidate multiple Supabase data requests into a single aggregator call to improve perceived performance and restore missing chart elements (lines and data points).

## Functional Requirements
1.  **Data Fetch Consolidation (Dashboard):** 
    - Implement a consolidated data fetching strategy for the Dashboard.
    - Instead of multiple separate requests for Transactions, Settlements, and Gross Volume, we will fetch this data in one go from Supabase (via a single API aggregator or RPC).
2.  **Restore Chart Visuals:**
    - **Dots & Lines:** Update `AnalyticsChart` to restore visible line paths and data points (dots) that are currently missing.
    - **Sparklines:** Update the `Sparkline` component to use a `Line` or `Area` visualization instead of `Bar`, as per the previous working state.
3.  **Integrated Loading States:** 
    - Ensure all widgets (`Gross Volume`, `Settlements`, `Transactions`, `Reports`) render their containers immediately.
    - Display subtle, internal skeletons for data values and chart areas only when no cached data is available.
4.  **SWR & Caching:** 
    - Use TanStack Query's `placeholderData` and `staleTime` configurations to ensure that when switching intervals or dates, the old data remains visible until the new data is ready.

## Acceptance Criteria
- Dashboard data (Home page) is fetched in a single network request to the backend.
- Charts in Analytics and Dashboard correctly display lines and data points.
- Layout remains completely stable during data transitions.
- "Waiting" state is significantly reduced by showing stale/cached data immediately.

## Out of Scope
- Optimizing underlying SQL aggregate performance.
- Changing the functional logic of the analytics calculations.
