---
title: 'Audit Logs'
description: 'Access merchant event history'
---

## List audit logs

Returns a paginated list of audit logs for your account.

### HTTP Request

`GET https://api.montra.fi/v1/audit-logs`

### Query Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `event_type` | string | Filter by event type (e.g., `subscription.created`). |
| `resource_type` | string | Filter by resource type (e.g., `customer`). |
| `limit` | integer | Number of logs to return. Default `50`. |
| `offset` | integer | Number of logs to skip. Default `0`. |

### Response

```json
{
  "success": true,
  "data": [
    {
      "id": "log_123...",
      "event_type": "subscription.updated",
      "resource_type": "subscription",
      "resource_id": "sub_456...",
      "payload": { ... },
      "created_at": "2025-01-01T00:00:00Z"
    }
  ],
  "meta": {
    "total": 1250,
    "limit": 50,
    "offset": 0
  }
}
```
