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
  baseUrl: 'https://dev.montra.fi/api/v1' // Optional
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

Check if a customer has access to a specific meter or feature toggle.

### Check Meter Quota
```typescript
const quota = await montra.checkEntitlement('cust_123', 'api-tokens');

if (quota.has_access) {
  console.log(`Usage: ${quota.usage}/${quota.limit}`);
}
```

### Check Feature Access
```typescript
const sso = await montra.checkFeatureAccess('cust_123', 'sso');

if (sso.has_access) {
  // Show SSO login button
}
```

## Features

Manage features programmatically.

### List Features
```typescript
const features = await montra.listFeatures();
```

### Create Feature
```typescript
const feature = await montra.createFeature({
  name: 'Beta Access',
  slug: 'beta',
  pricing_model_id: 'pm_123',
  type: 'Toggle'
});
```

## Subscriptions

Manage customer subscription lifecycles.

### Pause Subscription
```typescript
await montra.pauseSubscription('sub_123', {
  pause_behavior: 'mark_uncollectible',
  resume_at: '2025-02-01T00:00:00Z'
});
```

### Resume Subscription
```typescript
await montra.resumeSubscription('sub_123');
```

## Analytics

Fetch time-series data for revenue, MRR, and more.

### Get Analytics Series
```typescript
const series = await montra.getAnalyticsSeries({
  interval: 'daily',
  points: 14
});

console.log(series.revenue);
```

## Webhooks

Securely verify incoming webhooks from Montra.

### Verify Signature
```typescript
const isValid = await montra.webhooks.verifySignature(
  rawBody,
  signature,
  process.env.MONTRA_WEBHOOK_SECRET!
);
```


