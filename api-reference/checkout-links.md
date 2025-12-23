---
title: "Checkout Links"
description: "Generate shareable payment links programmatically."
---

## Create Checkout Link
Create a new payment link that can be shared with customers.

```bash
curl -X POST https://sandbox.montra.fi/api/v1/checkout-links \
  -H "Authorization: Bearer <your_api_key>" \
  -H "Content-Type: application/json" \
  -d '{
    "link_name": "Pro Plan Annual",
    "payment_name": "Pro Subscription",
    "amount": 299.00,
    "description": "Access to all premium features."
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

