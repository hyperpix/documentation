---
title: "Discounts"
description: "Manage promotional codes and coupons."
---

## Create Discount
Create a new discount code for your checkout flows.

```bash
curl -X POST https://sandbox.montra.fi/api/v1/discounts \
  -H "Authorization: Bearer <your_api_key>" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Holiday Special",
    "code": "HOLIDAY20",
    "percent_off": 20,
    "duration": "once"
  }'
```

### Response
```json
{
  "success": true,
  "data": {
    "id": "disc_456",
    "code": "HOLIDAY20",
    "status": "active"
  }
}
```

