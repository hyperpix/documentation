---
title: "Subscriptions"
description: "Manage recurring billing relationships for your customers."
---

## List Subscriptions
Retrieve a list of all subscriptions for your merchant.

```bash
curl -X GET https://api.montra.fi/v1/subscriptions \
  -H "Authorization: Bearer <your_api_key>"
```

### Query Parameters
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `customer_id` | string | Filter subscriptions for a specific customer. |
| `status` | string | Filter by status (`active`, `past_due`, `canceled`). |

### Response
```json
{
  "success": true,
  "data": [
    {
      "id": "sub_123",
      "customer_id": "cust_456",
      "status": "active",
      "current_period_end": "2026-01-23T00:00:00Z"
    }
  ]
}
```

