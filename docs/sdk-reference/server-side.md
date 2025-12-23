---
title: "Server-side Usage"
description: "Managing customers, usage, and invoices from your server."
---

The `Montra` class is designed for use in server-side environments such as Node.js, Next.js Server Actions, or API routes.

## Initialization

```typescript
import { Montra } from '@montra/sdk';

const montra = new Montra({
  apiKey: 'sk_test_...',
  baseUrl: 'https://api.montra.fi/v1' // Optional
});
```

## Customers

### Create a Customer
```typescript
const customer = await montra.createCustomer({
  name: 'John Doe',
  email: 'john@example.com'
});
```

### List Customers
```typescript
const customers = await montra.listCustomers();
```

## Usage Reporting

Report usage for a specific meter slug.

```typescript
await montra.reportUsage({
  customer_id: 'cust_123',
  meter_slug: 'api-requests',
  amount: 5
});
```

## Entitlements

Check if a customer has access to a specific feature or meter.

```typescript
const entitlement = await montra.checkEntitlement('cust_123', 'premium-feature');

if (entitlement.has_access) {
  // Grant access
}
```
