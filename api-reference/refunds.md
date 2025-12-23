---
title: "Refunds"
description: "Process transaction reversals and manage refunds."
---

## Create Refund
Issue a full or partial refund for a successful transaction.

```bash
curl -X POST https://api.montra.fi/v1/refunds \
  -H "Authorization: Bearer <your_api_key>" \
  -H "Content-Type: application/json" \
  -d '{
    "transaction_id": "tx_123",
    "amount": 50.00,
    "reason": "Customer requested cancellation"
  }'
```

### Response
```json
{
  "success": true,
  "data": {
    "id": "ref_789",
    "status": "succeeded",
    "amount": 50.00
  }
}
```

