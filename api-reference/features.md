---
title: "Features"
description: "Manage merchant features and their statuses."
---

## List Features
Retrieve a list of all features defined for your merchant.

```bash
curl -X GET https://sandbox.montra.fi/api/v1/features \
  -H "Authorization: Bearer <your_api_key>"
```

### Response

```json
{
  "success": true,
  "data": [
    {
      "id": "feat_123",
      "name": "SSO",
      "slug": "sso",
      "type": "Toggle",
      "status": "Active",
      "created_at": "2025-12-23T10:00:00Z"
    }
  ]
}
```

## Create Feature
Create a new feature toggle or meter.

```bash
curl -X POST https://sandbox.montra.fi/api/v1/features \
  -H "Authorization: Bearer <your_api_key>" \
  -H "Content-Type: application/json" \
  -d '{ 
    "name": "Advanced Analytics",
    "slug": "adv-analytics",
    "pricing_model_id": "pm_123",
    "type": "Toggle"
  }'
```

## Update Feature
Update an existing feature's details.

```bash
curl -X PATCH https://sandbox.montra.fi/api/v1/features/feat_123 \
  -H "Authorization: Bearer <your_api_key>" \
  -H "Content-Type: application/json" \
  -d '{ 
    "status": "Archived"
  }'
```

## Delete Feature
Permanently delete a feature.

```bash
curl -X DELETE https://sandbox.montra.fi/api/v1/features/feat_123 \
  -H "Authorization: Bearer <your_api_key>"
```
