---
title: 'Webhooks'
description: 'Manage webhook endpoints for system events'
---

## List all webhooks

Returns a list of your configured webhook endpoints.

### HTTP Request

`GET https://api.montra.fi/v1/webhooks`

### Response

```json
{
  "success": true,
  "data": [
    {
      "id": "wh_123...",
      "url": "https://example.com/webhook",
      "description": "Production Webhook",
      "events": ["*"],
      "enabled": true,
      "created_at": "2025-01-01T00:00:00Z"
    }
  ]
}
```

## Create a webhook

Creates a new webhook endpoint.

### HTTP Request

`POST https://api.montra.fi/v1/webhooks`

### Body Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `url` | string | **Required**. The URL where events will be sent. |
| `description` | string | Optional description. |
| `events` | array | List of events to listen for. Use `["*"]` for all events. |
| `enabled` | boolean | Whether the endpoint is active. Default `true`. |

### Response

```json
{
  "success": true,
  "data": {
    "id": "wh_123...",
    "url": "https://example.com/webhook",
    "secret": "whsec_...",
    "events": ["*"],
    "enabled": true
  }
}
```

## Update a webhook

Updates an existing webhook endpoint.

### HTTP Request

`PATCH https://api.montra.fi/v1/webhooks/{id}`

### Response

```json
{
  "success": true,
  "data": {
    "id": "wh_123...",
    "enabled": false
  }
}
```

## Delete a webhook

Removes a webhook endpoint permanently.

### HTTP Request

`DELETE https://api.montra.fi/v1/webhooks/{id}`

### Response

```json
{
  "success": true
}
```
