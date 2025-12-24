---
title: 'Pricing Models'
description: 'Manage pricing models and plans'
---

## List all pricing models

Returns a list of your pricing models.

### HTTP Request

`GET https://api.montra.fi/v1/pricing-models`

### Response

```json
{
  "success": true,
  "data": [
    {
      "id": "pm_123...",
      "name": "Pro Plan",
      "is_default": true,
      "created_at": "2025-01-01T00:00:00Z"
    }
  ]
}
```

## Create a pricing model

Creates a new pricing model.

### HTTP Request

`POST https://api.montra.fi/v1/pricing-models`

### Body Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `name` | string | **Required**. The name of the pricing model. |
| `is_default` | boolean | Whether this should be the default plan for new customers. |

### Response

```json
{
  "success": true,
  "data": {
    "id": "pm_123...",
    "name": "Pro Plan",
    "is_default": true,
    "created_at": "2025-01-01T00:00:00Z"
  }
}
```

## Update a pricing model

Updates an existing pricing model. Changes propagate immediately to all assigned customers.

### HTTP Request

`PATCH https://api.montra.fi/v1/pricing-models`

### Body Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | string | **Required**. The ID of the pricing model to update. |
| `name` | string | The new name. |
| `is_default` | boolean | Update default status. |

### Response

```json
{
  "success": true,
  "data": {
    "id": "pm_123...",
    "name": "Enterprise Plan",
    "is_default": true,
    "created_at": "2025-01-01T00:00:00Z"
  }
}
```
