---
title: "Customers"
description: "Manage your customers and their billing profiles."
---

## List Customers
Retrieve all customers for your merchant.

```bash
curl -X GET https://dev.montra.fi/api/v1/customers \
  -H "Authorization: Bearer <your_api_key>"
```

## Create Customer
Create a new customer profile.

```bash
curl -X POST https://dev.montra.fi/api/v1/customers \
  -H "Authorization: Bearer <your_api_key>" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Smith",
    "email": "jane@example.com"
  }'
```

### Response

```json
{
  "success": true,
  "data": {
    "id": "cust_456",
    "name": "Jane Smith",
    "email": "jane@example.com",
    "status": "active",
    "created_at": "2025-12-23T11:00:00Z"
  }
}
```

