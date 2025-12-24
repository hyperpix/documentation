# Overview
This track involves updating the Receipt email template to include an itemized card display. This card will showcase the item's title, description, and an optional image (e.g., from a payment link), placed alongside the price. This enhancement aims to provide clearer context about the purchase within the receipt email.

# Functional Requirements

## 1. Receipt Email Template Update
- **Card Layout:** Introduce a new section in the receipt email body, positioned **below** the transaction details (Receipt Number, Transaction ID, etc.).
- **Content:**
  - **Left Side:**
    - **Image:** Display the item image if available (from payment link or transaction metadata).
    - **Title:** The name of the item or service purchased.
    - **Description:** A brief description of the item.
  - **Right Side:**
    - **Price:** The price of the specific item.
- **Conditional Logic:**
  - If an image is provided, display it to the left of the text.
  - If **no image** is provided, hide the image element and display only the Title and Description on the left.
  - The card should be visually distinct (e.g., with a border or background) to separate it from the rest of the receipt.

## 2. Data Mapping
- Update `sendReceiptEmail` action to fetch and pass `item_name`, `item_description`, and `item_image` to the Resend template.
- Ensure these fields are correctly populated from the `transactions` table (columns added in previous track).

# Non-Functional Requirements
- **Responsiveness:** The card layout must be responsive and look good on mobile devices (stacking image/text if necessary, though side-by-side is preferred on desktop).
- **Styling:** Match the existing receipt aesthetic (font, colors).

# Acceptance Criteria
- [ ] Receipt email includes a card section below transaction details.
- [ ] Card correctly displays Title, Description, and Price.
- [ ] Card displays the item image if available.
- [ ] Card gracefully handles missing images (hides image, aligns text).
- [ ] `sendReceiptEmail` passes the correct item data.
