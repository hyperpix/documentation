# @montra/sdk

The official Montra SDK for Node.js, React, Next.js, and Express.

## Installation

```bash
npm install @montra/sdk
```

## Usage

### Server-side (Node.js / Next.js Server Actions)

The `Montra` class is designed for server-side environments.

```typescript
import { Montra } from '@montra/sdk';

const montra = new Montra({
  apiKey: process.env.MONTRA_API_KEY
});

// Use in Server Actions or API routes
export async function getInvoices() {
  return await montra.listInvoices();
}

// Check if customer has access to a feature or has enough quota
export async function checkAccess(customerId: string) {
  // Check usage-based entitlement
  const quota = await montra.checkEntitlement(customerId, 'tokens');
  if (!quota.has_access) {
    throw new Error('Quota exceeded');
  }

  // Check feature toggle
  const sso = await montra.checkFeatureAccess(customerId, 'sso');
  return sso.has_access;
}

// Subscription Management
export async function manageSubscription(subId: string) {
  // Pause a subscription
  await montra.pauseSubscription(subId, {
    pause_behavior: 'keep_as_is',
    resume_at: '2025-01-01T00:00:00Z'
  });

  // Resume immediately
  await montra.resumeSubscription(subId);
}

// Analytics & Reporting
export async function getRevenueReport() {
  return await montra.getAnalyticsSeries({
    interval: 'daily',
    points: 30
  });
}

// Webhook Verification
export async function handleWebhook(payload: string, sig: string) {
  const isValid = await montra.webhooks.verifySignature(
    payload, 
    sig, 
    process.env.MONTRA_WEBHOOK_SECRET!
  );
  return isValid;
}
```

### Workflow Helpers

Combine common operations into a single call.

```typescript
// Create a customer and subscribe them to a plan in one go
const { customer, subscription } = await montra.createCustomerWithSubscription(
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    metadata: { plan: 'pro' }
  },
  'pricing_model_id_here'
);
```

### Resilient Error Handling

The SDK now includes custom error classes and automatic retries for transient failures.

```typescript
import { Montra, MontraAuthenticationError, MontraRateLimitError } from '@montra/sdk';

try {
  await montra.listInvoices();
} catch (err) {
  if (err instanceof MontraAuthenticationError) {
    // Handle invalid API key
  } else if (err instanceof MontraRateLimitError) {
    // Handle rate limits
  }
}
```

### Express Middleware

```typescript
import express from 'express';
import { montraMiddleware } from '@montra/sdk';

const app = express();

app.use(montraMiddleware({
  apiKey: 'your_api_key'
}));

app.get('/billing', async (req, res) => {
  // Access the client via req.montra
  const invoices = await req.montra.listInvoices();
  res.json(invoices);
});
```

### React / Next.js Client Side

#### Setup Provider

```tsx
// For Next.js App Router, add 'use client' if this is in a layout
import { MontraProvider } from '@montra/sdk';

function App({ children }) {
  return (
    <MontraProvider publishableKey="your_pk">
      {children}
    </MontraProvider>
  );
}
```

#### Use Hook or Component

```tsx
import { useMontra, PaymentElement } from '@montra/sdk';

function Checkout() {
  const montra = useMontra();
  
  const handleLegacyMount = async () => {
    const checkout = await montra.initializeCheckout('session_123');
    checkout.mount('#container');
  };

  return (
    <div>
      <PaymentElement sessionId="session_123" />
    </div>
  );
}
```

## Features

- **Next.js Support**: Includes `'use client'` directives for App Router compatibility.
- **Express Integration**: Built-in middleware for easy access to the SDK in your routes.
- **React Hooks**: First-class support for React with `MontraProvider` and `useMontra`.
- **Unified Package**: One SDK for both client-side checkout and server-side billing logic.

## License

MIT