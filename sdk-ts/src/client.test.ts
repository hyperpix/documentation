import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Montra } from './client';

describe('Montra SDK', () => {
  const apiKey = 'sk_test_123';
  const client = new Montra({ apiKey });

  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn());
  });

  it('should instantiate correctly', () => {
    expect(client).toBeDefined();
  });

  describe('Customers', () => {
    it('should create a customer', async () => {
      const mockCustomer = { id: 'cust_1', name: 'Test', email: 'test@test.com' };
      vi.mocked(fetch).mockResolvedValue({
        ok: true,
        json: async () => ({ success: true, data: mockCustomer }),
      } as any);

      const result = await client.createCustomer({ name: 'Test', email: 'test@test.com' });
      expect(result).toEqual(mockCustomer);
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('/customers'),
        expect.objectContaining({
          method: 'POST',
          headers: expect.objectContaining({
            'Authorization': `Bearer ${apiKey}`,
          }),
        })
      );
    });

    it('should send idempotency key if provided', async () => {
      vi.mocked(fetch).mockResolvedValue({
        ok: true,
        json: async () => ({ success: true, data: { id: 'cust_1' } }),
      } as any);

      await client.createCustomer({ name: 'Test', email: 't@t.com' }, { idempotencyKey: 'key_123' });
      expect(fetch).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({
          headers: expect.objectContaining({
            'Idempotency-Key': 'key_123',
          }),
        })
      );
    });

    it('should list customers', async () => {
      const mockCustomers = [{ id: 'cust_1', name: 'Test', email: 'test@test.com' }];
      vi.mocked(fetch).mockResolvedValue({
        ok: true,
        json: async () => ({ success: true, data: mockCustomers }),
      } as any);

      const result = await client.listCustomers();
      expect(result).toEqual(mockCustomers);
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('/customers'),
        expect.any(Object)
      );
    });
  });

  describe('Usage', () => {
    it('should report usage', async () => {
      vi.mocked(fetch).mockResolvedValue({
        ok: true,
        json: async () => ({ success: true }),
      } as any);

      const result = await client.reportUsage({
        customer_id: 'cust_1',
        meter_slug: 'tokens',
        amount: 100
      });
      expect(result).toBe(true);
    });
  });

  describe('Entitlements', () => {
    it('should check entitlement', async () => {
      const mockCheck = { has_access: true, usage: 10, limit: 100 };
      vi.mocked(fetch).mockResolvedValue({
        ok: true,
        json: async () => ({ success: true, data: mockCheck }),
      } as any);

      const result = await client.checkEntitlement('cust_1', 'tokens');
      expect(result).toEqual(mockCheck);
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('/entitlements?customer_id=cust_1&meter=tokens'),
        expect.any(Object)
      );
    });

    it('should check feature access', async () => {
      const mockCheck = { has_access: true, type: 'feature' };
      vi.mocked(fetch).mockResolvedValue({
        ok: true,
        json: async () => ({ success: true, data: mockCheck }),
      } as any);

      const result = await client.checkFeatureAccess('cust_1', 'sso');
      expect(result).toEqual(mockCheck);
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('/entitlements?customer_id=cust_1&feature=sso'),
        expect.any(Object)
      );
    });
  });

  describe('Invoices', () => {
    it('should list invoices', async () => {
      const mockInvoices = [{ id: 'inv_1', amount: 1000 }];
      vi.mocked(fetch).mockResolvedValue({
        ok: true,
        json: async () => ({ success: true, data: mockInvoices }),
      } as any);

      const result = await client.listInvoices();
      expect(result).toEqual(mockInvoices);
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('/invoices'),
        expect.any(Object)
      );
    });

    it('should get an invoice', async () => {
      const mockInvoice = { id: 'inv_1', amount: 1000 };
      vi.mocked(fetch).mockResolvedValue({
        ok: true,
        json: async () => ({ success: true, data: mockInvoice }),
      } as any);

      const result = await client.getInvoice('inv_1');
      expect(result).toEqual(mockInvoice);
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('/invoices/inv_1'),
        expect.any(Object)
      );
    });
  });

  describe('Meters', () => {
    it('should create a meter', async () => {
      const mockMeter = { id: 'meter_1', name: 'Test' };
      vi.mocked(fetch).mockResolvedValue({
        ok: true,
        json: async () => ({ success: true, data: mockMeter }),
      } as any);

      const result = await client.createMeter({
        name: 'Test',
        slug: 'test',
        pricing_model_id: 'pm_1'
      });
      expect(result).toEqual(mockMeter);
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('/meters'),
        expect.objectContaining({ method: 'POST' })
      );
    });

    it('should list meters', async () => {
      const mockMeters = [{ id: 'meter_1' }];
      vi.mocked(fetch).mockResolvedValue({
        ok: true,
        json: async () => ({ success: true, data: mockMeters }),
      } as any);

      const result = await client.listMeters();
      expect(result).toEqual(mockMeters);
    });
  });

  describe('Pricing Models', () => {
    it('should create a pricing model', async () => {
      const mockPm = { id: 'pm_1', name: 'Standard' };
      vi.mocked(fetch).mockResolvedValue({
        ok: true,
        json: async () => ({ success: true, data: mockPm }),
      } as any);

      const result = await client.createPricingModel({ name: 'Standard' });
      expect(result).toEqual(mockPm);
    });

    it('should update a pricing model', async () => {
      const mockPm = { id: 'pm_1', name: 'Updated' };
      vi.mocked(fetch).mockResolvedValue({
        ok: true,
        json: async () => ({ success: true, data: mockPm }),
      } as any);

      const result = await client.updatePricingModel('pm_1', { name: 'Updated' });
      expect(result).toEqual(mockPm);
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('/pricing-models'),
        expect.objectContaining({ method: 'PATCH' })
      );
    });
  });

  describe('Files', () => {
    it('should upload a file', async () => {
      const mockFileRes = { id: 'path/to/file', url: 'http://test.com/file' };
      vi.mocked(fetch).mockResolvedValue({
        ok: true,
        json: async () => ({ success: true, data: mockFileRes }),
      } as any);

      // Create a simple blob since File might not be available in all environments
      const file = new Blob(['test'], { type: 'text/plain' }) as any;
      file.name = 'test.txt';

      const result = await client.uploadFile(file);
      expect(result).toEqual(mockFileRes);
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('/files'),
        expect.objectContaining({ method: 'POST' })
      );
    });
  });

  describe('Checkout Links', () => {
    it('should create a checkout link', async () => {
      const mockLink = { id: 'link_1', url: 'http://pay.com/1' };
      vi.mocked(fetch).mockResolvedValue({
        ok: true,
        json: async () => ({ success: true, data: mockLink }),
      } as any);

      const result = await client.createCheckoutLink({
        link_name: 'Test',
        payment_name: 'Prod',
        line_items: [{ title: 'Item 1', amount: 10, quantity: 1 }]
      });
      expect(result).toEqual(mockLink);
    });
  });
});
