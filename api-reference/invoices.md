---
title: "Invoices"
description: "Manage customer invoices and billing history."
---

## List Invoices
Retrieve all invoices for your merchant.

```bash
curl -X GET https://dev.montra.fi/api/v1/invoices \
  -H "Authorization: Bearer <your_api_key>"
```

## Create Invoice
Create a manual invoice for a customer.

```bash
curl -X POST https://dev.montra.fi/api/v1/invoices \
  -H "Authorization: Bearer <your_api_key>" \
  -H "Content-Type: application/json" \
  -d '{
    "customer_id": "123e4567-e89b-12d3-a456-426614174000",
    "amount_due": 50.00,
    "currency": "USD",
    "description": "Custom consulting services"
  }'
```

### Request Body
| Field | Type | Description |
| :--- | :--- | :--- |
| `customer_id` | string (uuid) | **Required**. UUID of the customer. |
| `amount_due` | number | **Required**. Total amount to be paid. |
| `currency` | string | Optional. Default is `USD`. |
| `due_date` | string (ISO) | Optional. When the invoice is due. |
| `description` | string | Optional. Description of the invoice. |
| `status` | string | Optional. `draft`, `open`, `paid`, `void`. Defaults to `open`. |

### Response

```json
{
  "success": true,
  "data": {
    "id": "inv_456",
    "customer_id": "123e4567-e89b-12d3-a456-426614174000",
    "amount_due": 50.00,
    "status": "open",
    "created_at": "2025-12-24T03:00:00Z"
  }
}
```
