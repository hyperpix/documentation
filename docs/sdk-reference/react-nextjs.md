---
title: "React & Next.js"
description: "Integrating Montra into your React or Next.js application."
---

The SDK provides first-class support for React and Next.js, including components and hooks.

## Provider Setup

Wrap your application with the `MontraProvider`.

```tsx
import { MontraProvider } from '@montra/sdk';

export default function Layout({ children }) {
  return (
    <MontraProvider publishableKey="pk_test_...">
      {children}
    </MontraProvider>
  );
}
```

## PaymentElement Component

The easiest way to integrate the checkout is using the `PaymentElement`.

```tsx
import { PaymentElement } from '@montra/sdk';

function Checkout() {
  return (
    <PaymentElement 
      sessionId="session_123"
      onSuccess={(data) => console.log('Paid!', data)}
    />
  );
}
```

## useMontra Hook

Access the Montra checkout instance directly.

```tsx
import { useMontra } from '@montra/sdk';

function CustomCheckout() {
  const montra = useMontra();

  const handlePay = async () => {
    const checkout = await montra.initializeCheckout('session_123');
    checkout.mount('#checkout-container');
  };

  return <div id="checkout-container" />;
}
```

## Next.js App Router

Our components are marked with `'use client'`, so they work seamlessly in the App Router.
