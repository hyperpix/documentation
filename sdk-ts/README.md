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