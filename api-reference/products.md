---
title: "Products"
description: "Manage products and their pricing structures."
---

## List Products
Retrieve all products for your merchant.

```bash
curl -X GET https://sandbox.montra.fi/api/v1/products \
  -H "Authorization: Bearer <your_api_key>"
```

### Query Parameters
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `pricing_model_id` | string (uuid) | Optional. Filter products by pricing model ID. |

## Create Product
Create a new product within a pricing model.

```bash
curl -X POST https://sandbox.montra.fi/api/v1/products \
  -H "Authorization: Bearer <your_api_key>" \
  -H "Content-Type: application/json" \
  -d '{ 
    "pricing_model_id": "123e4567-e89b-12d3-a456-426614174001",
    "name": "Pro Plan",
    "price_type": "recurring",
    "amount": 29.00,
    "pricing_structure": "fixed"
  }'
```

### Request Body
| Field | Type | Description |
| :--- | :--- | :--- |
| `pricing_model_id` | string (uuid) | **Required**. UUID of the pricing model. |
| `name` | string | **Required**. Name of the product. |
| `price_type` | string | **Required**. One of `one_time`, `recurring`, `usage`. |
| `amount` | number | Optional. The price amount. |
| `pricing_structure` | string | Optional. `fixed` (default) or `tiered`. |
| `meter_slug` | string | Optional. Required if `price_type` is `usage`. |
| `status` | string | Optional. Defaults to `Active`. |

### Response

```json
{
  "success": true,
  "data": {
    "id": "prod_789",
    "name": "Pro Plan",
    "price_type": "recurring",
    "amount": 29.00,
    "status": "Active"
  }
}
```
