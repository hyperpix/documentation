---
title: 'Meters'
description: 'Manage usage meters for tiered billing'
---

## List all meters

Returns a list of your usage meters.

### HTTP Request

`GET https://api.montra.fi/v1/meters`

### Response

```json
{
  "success": true,
  "data": [
    {
      "id": "meter_123...",
      "name": "API Calls",
      "slug": "api-calls",
      "pricing_model_id": "pm_123...",
      "aggregation": "sum",
      "currency": "USD",
      "amount": 0.01,
      "events_per_unit": 1,
      "created_at": "2025-01-01T00:00:00Z"
    }
  ]
}
```

## Create a meter

Creates a new usage meter.

### HTTP Request

`POST https://api.montra.fi/v1/meters`

### Body Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `name` | string | **Required**. The name of the meter. |
| `slug` | string | **Required**. Unique identifier used when reporting usage. |
| `pricing_model_id` | string | **Required**. The ID of the pricing model to attach this meter to. |
| `aggregation` | string | How to aggregate events. One of: `sum`, `max`, `unique`. Default is `sum`. |
| `currency` | string | Currency for unit pricing. Default `USD`. |
| `amount` | number | Price per unit. |
| `events_per_unit` | number | Number of events that constitute one unit. Default `1`. |

### Response

```json
{
  "success": true,
  "data": {
    "id": "meter_123...",
    "name": "API Calls",
    "slug": "api-calls",
    "pricing_model_id": "pm_123...",
    "aggregation": "sum",
    "currency": "USD",
    "amount": 0.01,
    "events_per_unit": 1,
    "created_at": "2025-01-01T00:00:00Z"
  }
}
```
