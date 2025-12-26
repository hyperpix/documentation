import { 
  MontraOptions, 
  ApiResponse, 
  Customer, 
  UsagePayload, 
  EntitlementCheck, 
  Invoice,
  Feature,
  Meter,
  PricingModel,
  FileResponse,
  SubscriptionUpgradeResponse,
  ScheduledChange,
  AnalyticsSeriesResponse,
  Subscription,
  SubscriptionPausePayload,
  CreateCustomerPayload
} from './types';
import { DEFAULT_BASE_URL } from './constants';

export class MontraError extends Error {
  constructor(public code: string, message: string, public details?: any) {
    super(message);
    this.name = 'MontraError';
  }
}

export class MontraApiError extends MontraError {
  constructor(public statusCode: number, code: string, message: string, details?: any) {
    super(code, message, details);
    this.name = 'MontraApiError';
  }
}

export class MontraAuthenticationError extends MontraApiError {
  constructor(message: string = 'Authentication failed') {
    super(401, 'unauthorized', message);
    this.name = 'MontraAuthenticationError';
  }
}

export class MontraRateLimitError extends MontraApiError {
  constructor(message: string = 'Rate limit exceeded') {
    super(429, 'rate_limit', message);
    this.name = 'MontraRateLimitError';
  }
}

export class Montra {
  private apiKey: string;
  private baseUrl: string;

  constructor(options: MontraOptions) {
    this.apiKey = options.apiKey;
    this.baseUrl = options.baseUrl || DEFAULT_BASE_URL;
  }

  private async request<T>(path: string, options: RequestInit & { idempotencyKey?: string; retryCount?: number } = {}): Promise<T> {
    const { retryCount = 3, ...fetchOptions } = options;
    const url = `${this.baseUrl}${path}`;
    const headers: Record<string, string> = {
      'Authorization': `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json',
      ...((fetchOptions.headers as any) || {}),
    };

    if (fetchOptions.idempotencyKey) {
      headers['Idempotency-Key'] = fetchOptions.idempotencyKey;
    }

    let lastError: Error | null = null;
    for (let i = 0; i < retryCount; i++) {
      try {
        const response = await fetch(url, {
          ...fetchOptions,
          headers,
        });

        const body = await response.json();

        if (!response.ok) {
          const errorData = body.error || { code: 'unknown', message: `Request failed with status ${response.status}` };
          
          if (response.status === 401) throw new MontraAuthenticationError(errorData.message);
          if (response.status === 429) throw new MontraRateLimitError(errorData.message);
          
          throw new MontraApiError(response.status, errorData.code, errorData.message, errorData.details);
        }

        return body as T;
      } catch (err: any) {
        lastError = err;
        // Only retry on transient errors (5xx or network issues)
        const isTransient = err instanceof MontraApiError ? err.statusCode >= 500 : !(err instanceof MontraError);
        if (!isTransient || i === retryCount - 1) throw err;
        
        // Exponential backoff
        await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000));
      }
    }
    throw lastError;
  }

  // Customers
  async createCustomer(data: CreateCustomerPayload, options: { idempotencyKey?: string } = {}): Promise<Customer> {
    const res = await this.request<ApiResponse<Customer>>('/customers', {
      method: 'POST',
      body: JSON.stringify(data),
      idempotencyKey: options.idempotencyKey,
    });
    return res.data!;
  }

  async getCustomer(id: string): Promise<Customer> {
    const res = await this.request<ApiResponse<Customer>>(`/customers/${id}`);
    return res.data!;
  }

  async updateCustomer(id: string, data: Partial<CreateCustomerPayload>): Promise<Customer> {
    const res = await this.request<ApiResponse<Customer>>(`/customers/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
    return res.data!;
  }

  async listCustomers(): Promise<Customer[]> {
    const res = await this.request<ApiResponse<Customer[]>>('/customers');
    return res.data!;
  }

  // Analytics
  async getAnalyticsSeries(params: {
    interval: 'daily' | 'weekly' | 'monthly';
    points: number;
    end?: string;
    product?: string;
  }): Promise<AnalyticsSeriesResponse> {
    const sp = new URLSearchParams({
      interval: params.interval,
      points: String(params.points),
      ...(params.end && { end: params.end }),
      ...(params.product && { product: params.product }),
    });
    const res = await this.request<AnalyticsSeriesResponse>(`/analytics/series?${sp.toString()}`);
    return res;
  }

  // Usage
  async reportUsage(payload: UsagePayload, options: { idempotencyKey?: string } = {}): Promise<boolean> {
    const res = await this.request<ApiResponse>('/usage', {
      method: 'POST',
      body: JSON.stringify(payload),
      idempotencyKey: options.idempotencyKey,
    });
    return res.success;
  }

  // Entitlements
  async checkEntitlement(customerId: string, meterSlug: string): Promise<EntitlementCheck> {
    const res = await this.request<ApiResponse<EntitlementCheck>>(
      `/entitlements?customer_id=${customerId}&meter=${meterSlug}`
    );
    return res.data!;
  }

  async checkFeatureAccess(customerId: string, featureSlug: string): Promise<EntitlementCheck> {
    const res = await this.request<ApiResponse<EntitlementCheck>>(
      `/entitlements?customer_id=${customerId}&feature=${featureSlug}`
    );
    return res.data!;
  }

  // Invoices
  async listInvoices(): Promise<Invoice[]> {
    const res = await this.request<ApiResponse<Invoice[]>>('/invoices');
    return res.data!;
  }

  async getInvoice(id: string): Promise<Invoice> {
    const res = await this.request<ApiResponse<Invoice>>(`/invoices/${id}`);
    return res.data!;
  }

  // Features
  async listFeatures(): Promise<Feature[]> {
    const res = await this.request<ApiResponse<Feature[]>>('/features');
    return res.data!;
  }

  async createFeature(data: {
    name: string;
    slug: string;
    description?: string;
    pricing_model_id: string;
    type?: string;
    status?: string;
  }, options: { idempotencyKey?: string } = {}): Promise<Feature> {
    const res = await this.request<ApiResponse<Feature>>('/features', {
      method: 'POST',
      body: JSON.stringify(data),
      idempotencyKey: options.idempotencyKey,
    });
    return res.data!;
  }

  // Meters
  async listMeters(): Promise<Meter[]> {
    const res = await this.request<ApiResponse<Meter[]>>('/meters');
    return res.data!;
  }

  async createMeter(data: {
    name: string;
    slug: string;
    pricing_model_id: string;
    aggregation?: string;
    currency?: string;
    amount?: number | null;
    events_per_unit?: number;
  }, options: { idempotencyKey?: string } = {}): Promise<Meter> {
    const res = await this.request<ApiResponse<Meter>>('/meters', {
      method: 'POST',
      body: JSON.stringify(data),
      idempotencyKey: options.idempotencyKey,
    });
    return res.data!;
  }

  // Pricing Models
  async listPricingModels(): Promise<PricingModel[]> {
    const res = await this.request<ApiResponse<PricingModel[]>>('/pricing-models');
    return res.data!;
  }

  async createPricingModel(data: {
    name: string;
    is_default?: boolean;
  }, options: { idempotencyKey?: string } = {}): Promise<PricingModel> {
    const res = await this.request<ApiResponse<PricingModel>>('/pricing-models', {
      method: 'POST',
      body: JSON.stringify(data),
      idempotencyKey: options.idempotencyKey,
    });
    return res.data!;
  }

  async updatePricingModel(id: string, data: Partial<{
    name: string;
    is_default: boolean;
  }>): Promise<PricingModel> {
    const res = await this.request<ApiResponse<PricingModel>>('/pricing-models', {
      method: 'PATCH',
      body: JSON.stringify({ id, ...data }),
    });
    return res.data!;
  }

  // Files
  async uploadFile(file: File, options: { idempotencyKey?: string } = {}): Promise<FileResponse> {
    const formData = new FormData();
    formData.append('file', file);

    const url = `${this.baseUrl}/files`;
    const headers: Record<string, string> = {
      'Authorization': `Bearer ${this.apiKey}`,
    };

    if (options.idempotencyKey) {
      headers['Idempotency-Key'] = options.idempotencyKey;
    }

    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: formData,
    });

    const body = await response.json();

    if (!response.ok) {
      throw new Error(body.error?.message || `Upload failed with status ${response.status}`);
    }

    return (body as ApiResponse<FileResponse>).data!;
  }

  // Checkout Links
  async createCheckoutLink(data: {
    link_name: string;
    payment_name: string;
    amount?: number;
    description?: string;
    image_url?: string;
    status?: string;
    line_items?: any[];
    image_ids?: string[];
  }, options: { idempotencyKey?: string } = {}): Promise<any> {
    const res = await this.request<ApiResponse<any>>('/checkout-links', {
      method: 'POST',
      body: JSON.stringify(data),
      idempotencyKey: options.idempotencyKey,
    });
    return res.data!;
  }

  // Subscriptions Lifecycle
  async listSubscriptions(): Promise<Subscription[]> {
    const res = await this.request<ApiResponse<Subscription[]>>('/subscriptions');
    return res.data!;
  }

  async getSubscription(id: string): Promise<Subscription> {
    const res = await this.request<ApiResponse<Subscription>>(`/subscriptions/${id}`);
    return res.data!;
  }

  async upgradeSubscription(id: string, data: { new_pricing_model_id: string }, options: { idempotencyKey?: string } = {}): Promise<SubscriptionUpgradeResponse> {
    const res = await this.request<ApiResponse<SubscriptionUpgradeResponse>>(`/subscriptions/${id}/upgrade`, {
      method: 'POST',
      body: JSON.stringify(data),
      idempotencyKey: options.idempotencyKey,
    });
    return res.data!;
  }

  async listScheduledChanges(id: string): Promise<ScheduledChange[]> {
    const res = await this.request<ApiResponse<ScheduledChange[]>>(`/subscriptions/${id}/scheduled-changes`);
    return res.data!;
  }

  async scheduleSubscriptionChange(id: string, data: { new_pricing_model_id: string, scheduled_for: string }, options: { idempotencyKey?: string } = {}): Promise<ScheduledChange> {
    const res = await this.request<ApiResponse<ScheduledChange>>(`/subscriptions/${id}/scheduled-changes`, {
      method: 'POST',
      body: JSON.stringify(data),
      idempotencyKey: options.idempotencyKey,
    });
    return res.data!;
  }

  async pauseSubscription(id: string, data?: SubscriptionPausePayload, options: { idempotencyKey?: string } = {}): Promise<Subscription> {
    const res = await this.request<ApiResponse<Subscription>>(`/subscriptions/${id}/pause`, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
      idempotencyKey: options.idempotencyKey,
    });
    return res.data!;
  }

  async resumeSubscription(id: string, options: { idempotencyKey?: string } = {}): Promise<Subscription> {
    const res = await this.request<ApiResponse<Subscription>>(`/subscriptions/${id}/resume`, {
      method: 'POST',
      idempotencyKey: options.idempotencyKey,
    });
    return res.data!;
  }

  // Webhooks
  webhooks = {
    async verifySignature(payload: string, signature: string, secret: string): Promise<boolean> {
      try {
        const crypto = await import('crypto');
        const hmac = crypto.createHmac('sha256', secret);
        const digest = hmac.update(payload).digest('hex');
        return digest === signature;
      } catch (err) {
        return false;
      }
    }
  };

  // Workflow Helpers
  async createCustomerWithSubscription(
    customerData: CreateCustomerPayload, 
    pricingModelId: string, 
    options: { idempotencyKey?: string } = {}
  ): Promise<{ customer: Customer; subscription: Subscription }> {
    const customer = await this.createCustomer(customerData, options);
    // In a real implementation, we'd need a specific endpoint or logic to ensure atomicity
    // For now, we'll implement it as sequential calls as a "helper"
    const res = await this.request<ApiResponse<Subscription>>('/subscriptions', {
      method: 'POST',
      body: JSON.stringify({
        customer_id: customer.id,
        pricing_model_id: pricingModelId
      }),
      idempotencyKey: options.idempotencyKey ? `${options.idempotencyKey}_sub` : undefined
    });
    return { customer, subscription: res.data! };
  }
}
