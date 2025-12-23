import { describe, it, expect, vi, beforeEach } from 'vitest';
import { loadMontra } from './index';

describe('Montra Client SDK', () => {
  const publishableKey = 'pk_test_123';
  const montra = loadMontra(publishableKey);

  beforeEach(() => {
    document.body.innerHTML = '<div id="checkout-container"></div>';
  });

  it('should initialize with a publishable key', () => {
    expect(montra).toBeDefined();
  });

  it('should initialize checkout and return mount/unmount methods', async () => {
    const checkout = await montra.initializeCheckout('sess_123');
    expect(checkout.mount).toBeDefined();
    expect(checkout.unmount).toBeDefined();
  });

  it('should mount an iframe to the specified element', async () => {
    const checkout = await montra.initializeCheckout('sess_123');
    checkout.mount('checkout-container');

    const container = document.getElementById('checkout-container');
    const iframe = container?.querySelector('iframe');

    expect(iframe).toBeDefined();
    expect(iframe?.src).toContain('/pay/sess_123');
    expect(iframe?.src).toContain(`pk=${publishableKey}`);
  });

  it('should unmount the iframe', async () => {
    const checkout = await montra.initializeCheckout('sess_123');
    checkout.mount('checkout-container');
    checkout.unmount();

    const container = document.getElementById('checkout-container');
    const iframe = container?.querySelector('iframe');

    expect(iframe).toBeNull();
  });
});
