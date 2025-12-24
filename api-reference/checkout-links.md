---
title: "Checkout Links"
description: "Generate shareable payment links programmatically."
---

## Create Checkout Link
Create a new payment link that can be shared with customers.

```bash
curl -X POST https://dev.montra.fi/api/v1/checkout-links \
  -H "Authorization: Bearer <your_api_key>" \
  -H "Content-Type: application/json" \
  -d '{
    "link_name": "Pro Plan Annual",
    "payment_name": "Pro Subscription",
    "amount": 299.00,
    "description": "Access to all premium features."
  }'
```

| `description` | string | Description displayed on the checkout page. |
| `line_items` | array | **Optional**. Array of line items for multi-item checkouts. |
| `image_ids` | array | **Optional**. Array of internal file IDs or external URLs for images. |

### Multi-item Example

```bash
curl -X POST https://api.montra.fi/v1/checkout-links \
  -H "Authorization: Bearer <your_api_key>" \
  -H "Content-Type: application/json" \
  -d '{
    "link_name": "Premium Bundle",
    "line_items": [
      {"product_id": "prod_1", "quantity": 1},
      {"product_id": "prod_2", "quantity": 2}
    ]
  }'
```

### Response

```json
{
  "success": true,
  "data": {
    "id": "link_abc123",
    "url": "https://checkout.montra.fi/pay/link_abc123",
    "status": "active"
  }
}
```

