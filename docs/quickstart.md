---
title: "Quickstart"
description: "Start accepting payments and reporting usage in minutes."
---

## 1. Install the SDK

First, install the unified Montra SDK in your project.

```bash
npm install @montra/sdk
```

## 2. Initialize the Server Client

Use your API key to initialize the `Montra` client on your server.

```typescript
import { Montra } from '@montra/sdk';

const montra = new Montra({
  apiKey: process.env.MONTRA_API_KEY
});
```

## 3. Create a Checkout Session

On your server, create a checkout session for a customer.

```typescript
const customer = await montra.createCustomer({
  name: 'Jane Doe',
  email: 'jane@example.com'
});

// Implementation of session creation would go here
```

## 4. Mount the Checkout UI

In your React or Next.js application, use the `PaymentElement`.

```tsx
import { PaymentElement } from '@montra/sdk';

export default function Checkout() {
  return (
    <PaymentElement sessionId="session_123" />
  );
}
```
