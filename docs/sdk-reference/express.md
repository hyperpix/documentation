---
title: "Express"
description: "Using Montra as a middleware in Express applications."
---

The SDK includes a built-in middleware for Express.

## Setup Middleware

```typescript
import express from 'express';
import { montraMiddleware } from '@montra/sdk';

const app = express();

app.use(montraMiddleware({
  apiKey: process.env.MONTRA_API_KEY
}));
```

## Usage in Routes

The middleware attaches a `montra` instance to the request object.

```typescript
app.post('/track-usage', async (req, res) => {
  const { customerId, units } = req.body;

  try {
    await req.montra.reportUsage({
      customer_id: customerId,
      meter_slug: 'tokens',
      amount: units
    });
    res.status(200).send('Success');
  } catch (error) {
    res.status(500).send(error.message);
  }
});
```
