# Overview
This track involves implementing email notifications for Invoices and Receipts using the Resend API. The goal is to utilize existing Resend templates for invoices and create/configure a new template for receipts, ensuring seamless delivery of transactional emails with dynamic content.

# Functional Requirements

## 1. Invoice Email
- **Template Source:** Utilize the existing HTML template defined in `msandbox-backup/lib/resend-templates.ts`.
- **Content:** The email must include:
  - Invoice ID and Date
  - Itemized list of charges
  - Total amount due and currency
  - Due date and payment status
  - Link to download PDF invoice (if available)
  - Merchant branding (Logo, Name)
- **Logic:**
  - Verify `sendInvoiceEmail` action correctly populates the template variables.
  - Ensure fallback logic to HTML string exists if the Resend Template ID is missing (as currently implemented).
  - **PDF Attachment:** Generate the Invoice PDF, upload it to Supabase Storage, and provide the direct download link in the email.

## 2. Receipt Email
- **Template Creation:** Create a new template for Receipts in Resend (similar to the Invoice template approach).
- **Content:** The email must include:
  - Receipt Number and Date
  - Payment Method used (e.g., Visa ending in 1234)
  - Transaction ID
  - Total amount paid
  - Merchant branding (Logo, Name)
    - **Logic:** Include a merchant-uploaded image if available; otherwise, fall back to standard branding.
- **Trigger:** Automatically send the receipt email immediately after a successful payment.
- **Implementation:**
  - Create a new utility function or extend `resend-templates.ts` to handle Receipt template creation/updating.
  - Create a new server action `sendReceiptEmail` (or similar) to handle the sending logic.
  - Integrate this action into the payment success flow (e.g., webhook handler or post-payment logic).
  - **PDF Attachment:** Generate the Receipt PDF, upload it to Supabase Storage, and provide the direct download link in the email.

# Non-Functional Requirements
- **Reliability:** Ensure emails are sent asynchronously to not block the user interface or API response.
- **Error Handling:** Log any failures in sending emails (Resend API errors) without failing the parent transaction.
- **Configuration:** Ensure `RESEND_API_KEY` and template IDs (`RESEND_INVOICE_TEMPLATE_ID`, `RESEND_RECEIPT_TEMPLATE_ID`) are properly managed in environment variables.
- **Storage:** Use Supabase Storage (e.g., a `documents` bucket) to store generated PDFs.

# Acceptance Criteria
- [ ] Invoice emails are successfully sent using the Resend template when triggered.
- [ ] Receipt emails are successfully sent immediately after a payment succeeds.
- [ ] Both email types correctly render dynamic data (amounts, names, dates).
- [ ] Both emails contain a working link to download the corresponding PDF from Supabase Storage.
- [ ] Fallback mechanisms (or clear error logs) are in place if templates fail to load.

# Out of Scope
- Designing new visual styles for the emails (we will adapt the existing style).
- Complex multi-currency formatting beyond the standard implementation.