---
title: "Entitlements"
description: "Check customer access to features and usage limits."
---

## Check Entitlement
Verify if a customer has access to a specific meter or feature toggle.

### Usage-based (Meter)
Check if a customer has remaining quota for a meter.

```bash
curl -X GET "https://dev.montra.fi/api/v1/entitlements?customer_id=cust_123&meter=api-tokens" \
  -H "Authorization: Bearer <your_api_key>"
```

### Feature-based (Toggle)
Check if a feature toggle is enabled for the customer's current plan.

```bash
curl -X GET "https://dev.montra.fi/api/v1/entitlements?customer_id=cust_123&feature=sso" \
  -H "Authorization: Bearer <your_api_key>"
```

### Response
```json
{
  "success": true,
  "data": {
    "has_access": true,
    "usage": 450,
    "limit": 1000,
    "type": "meter"
  }
}
```

For feature toggles:
```json
{
  "success": true,
  "data": {
    "has_access": true,
    "type": "feature"
  }
}
```

