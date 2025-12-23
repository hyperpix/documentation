---
title: "Usage"
description: "Report usage events for customers."
---

## Report Usage
Send usage events to Montra to track consumption against meters.

```bash
curl -X POST https://dev.montra.fi/api/v1/usage \
  -H "Authorization: Bearer <your_api_key>" \
  -H "Content-Type: application/json" \
  -d '{
    "customer_id": "cust_123",
    "meter_slug": "api-tokens",
    "amount": 50,
    "metadata": {
      "request_id": "req_abc"
    }
  }'
```

### Response
```json
{
  "success": true
}
```

