# Phase 1: Setup and Configuration
- [x] Task: Verify Environment Configuration dc4d887
    - Check for `RESEND_API_KEY` in `.env` and `.env.local`.
    - Define new environment variable `RESEND_RECEIPT_TEMPLATE_ID`.
    - Verify Supabase Storage bucket for documents exists (or create if needed).
- [ ] Task: Create Receipt Template Logic
    - Create/Update `msandbox-backup/lib/resend-templates.ts` to include `createOrUpdateReceiptTemplate`.
    - Define the HTML structure for the receipt, including the conditional logic for the merchant image.
    - Define the variable schema for the receipt template.
- [ ] Task: Conductor - User Manual Verification 'Setup and Configuration' (Protocol in workflow.md)

# Phase 2: Receipt Email Implementation
- [ ] Task: Implement Receipt PDF Generation & Upload
    - Create a utility to generate the Receipt PDF (using `react-pdf` or similar).
    - Implement upload logic to Supabase Storage (e.g., `invoices` or `documents` bucket).
    - Ensure public URL generation for the uploaded file.
- [ ] Task: Implement `sendReceiptEmail` Action
    - Create `msandbox-backup/app/actions/send-receipt-email.ts`.
    - Implement logic to fetch transaction/payment details.
    - Implement logic to fetch merchant details (including logo URL).
    - **Integration:** Call PDF generation and upload, then use the resulting URL.
    - Map data to the Resend template variables.
    - Call Resend API to send the email.
- [ ] Task: Integrate Receipt Trigger
    - Identify the payment success handler (likely in a webhook or payment processing action).
    - Add the call to `sendReceiptEmail` upon successful payment.
- [ ] Task: Conductor - User Manual Verification 'Receipt Email Implementation' (Protocol in workflow.md)

# Phase 3: Invoice Email Verification & Refinement
- [ ] Task: Implement Invoice PDF Upload Logic
    - Modify `msandbox-backup/app/actions/send-invoice-email.ts` to generate the PDF buffer server-side.
    - Upload the PDF to Supabase Storage.
    - Update the email template variable to use the Supabase Storage URL.
- [ ] Task: Review Invoice Email Action
    - Audit `msandbox-backup/app/actions/send-invoice-email.ts` to ensure it aligns with the spec.
    - Verify variable mapping matches the existing template.
- [ ] Task: Conductor - User Manual Verification 'Invoice Email Verification & Refinement' (Protocol in workflow.md)