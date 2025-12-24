---
title: "Subscriptions"
description: "Manage recurring billing relationships for your customers."
---

## List Subscriptions
Retrieve a list of all subscriptions for your merchant.

```bash
curl -X GET https://dev.montra.fi/api/v1/subscriptions \
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

## Upgrade Subscription
Immediately upgrade a customer to a new pricing model. This calculates proration automatically.

### HTTP Request
`POST https://api.montra.fi/v1/subscriptions/{id}/upgrade`

### Body Parameters
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `new_pricing_model_id` | string | **Required**. The ID of the model to upgrade to. |

## Schedule a Change
Schedule a plan change to take effect at a future date (usually the end of the current cycle).

### HTTP Request
`POST https://api.montra.fi/v1/subscriptions/{id}/scheduled-changes`

### Body Parameters
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `new_pricing_model_id` | string | **Required**. The target pricing model. |
| `scheduled_for` | string | **Required**. ISO 8601 timestamp for the change. |

## Pause Subscription
Pause a subscription. This stops future billing until resumed.

### HTTP Request
`POST https://api.montra.fi/v1/subscriptions/{id}/pause`

## Resume Subscription
Resume a previously paused subscription.

### HTTP Request
`POST https://api.montra.fi/v1/subscriptions/{id}/resume`


