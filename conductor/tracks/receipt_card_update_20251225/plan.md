# Phase 1: Receipt Template Refinement
- [x] Task: Update Receipt Template HTML Structure
    - Edit `msandbox-backup/lib/resend-templates.ts` to include the item card section.
    - Design the layout: Image (left, conditional), Title/Description (middle/left), Price (right).
    - Position the card below the transaction details table.
    - Use triple-brace variables for `{{{item_name}}}`, `{{{item_description}}}`, `{{{item_price}}}`, and `{{{item_image_html}}}`.
- [x] Task: Update Template Variables Schema
    - Modify `createOrUpdateReceiptTemplate` in `resend-templates.ts` to include the new variables in the registration list.
- [ ] Task: Conductor - User Manual Verification 'Receipt Template Refinement' (Protocol in workflow.md)

# Phase 2: Action Integration & Data Mapping
- [~] Task: Update `sendReceiptEmail` Action Logic
    - Modify `msandbox-backup/app/actions/send-receipt-email.ts` to extract `item_name`, `item_description`, and `item_image` from the transaction record.
    - Implement helper logic to generate `item_image_html` (either an `<img>` tag or empty string).
    - Format `item_price` (using transaction amount).
    - Map these values to the Resend template variables.
- [ ] Task: Update Unit Tests
    - Update `msandbox-backup/tests/actions/send-receipt-email.test.ts` to verify that item-related variables are correctly passed to the Resend API.
- [ ] Task: Conductor - User Manual Verification 'Action Integration & Data Mapping' (Protocol in workflow.md)
