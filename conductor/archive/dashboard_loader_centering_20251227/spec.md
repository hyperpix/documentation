# Specification: Center Dashboard Loader & Prevent Scroll

## Overview
This track addresses a UI polish issue where the loading spinner on the dashboard feels "off-center" and the page remains scrollable while loading. The goal is to lock scrolling and ensure the loader is perfectly centered in the viewport.

## Functional Requirements

### 1. Scroll Locking
- **Requirement:** When the dashboard is in its initial loading state, the page body (or main scroll container) must not be scrollable.
- **Implementation:** Apply `overflow: hidden` to the `body` or the root layout container when the loader is active.

### 2. Centered Loader
- **Requirement:** The loader must be visually centered in the viewport, regardless of the current scroll position or sidebar layout.
- **Implementation:** Ensure the loader container uses `fixed inset-0` (or equivalent) with `z-index` to overlay all other content, and `flex` centering.

## Non-Functional Requirements
- **Performance:** The scroll lock application and removal should be instant to avoid layout shift ("jank").
- **UX:** The transition from Loader -> Dashboard Content should be smooth.

## Acceptance Criteria
- [ ] Navigating to the dashboard shows the loader centered in the middle of the screen.
- [ ] While the loader is visible, the user cannot scroll the page.
- [ ] Once the dashboard content loads, scrolling is re-enabled.
