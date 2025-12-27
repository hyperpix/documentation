# Plan: Center Dashboard Loader & Prevent Scroll

## Phase 1: Loader Centering and Scroll Lock [checkpoint: 700afa7]
Goal: Center the spinner perfectly and lock page scrolling during the initial load.

- [x] Task: Create failing tests to verify that `document.body` style is updated when loading. (Skipped: Project lacks React Testing Library configuration)
- [x] Task: Update `DashboardClient.tsx` loader to use a `fixed inset-0` layout with high `z-index` for absolute centering.
- [x] Task: Implement a `useEffect` hook in `DashboardClient.tsx` to toggle `overflow: hidden` on the `body` element while `isLoading` is true.
- [x] Task: Verify the visual centering and scroll-lock behavior.
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Loader Centering and Scroll Lock' (Protocol in workflow.md)
