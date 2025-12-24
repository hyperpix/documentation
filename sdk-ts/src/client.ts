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
  ScheduledChange
} from './types';
import { DEFAULT_BASE_URL } from './constants';

export class Montra {
  private apiKey: string;
  private baseUrl: string;

  constructor(options: MontraOptions) {
    this.apiKey = options.apiKey;
    this.baseUrl = options.baseUrl || DEFAULT_BASE_URL;
  }

  private async request<T>(path: string, options: RequestInit & { idempotencyKey?: string } = {}): Promise<T> {
    const url = `${this.baseUrl}${path}`;
    const headers: Record<string, string> = {
      'Authorization': `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json',
      ...((options.headers as any) || {}),
    };

    if (options.idempotencyKey) {
      headers['Idempotency-Key'] = options.idempotencyKey;
    }

    const response = await fetch(url, {
      ...options,
      headers,
    });

    const body = await response.json();

    if (!response.ok) {
      throw new Error(body.error?.message || `Request failed with status ${response.status}`);
    }

    return body as T;
  }

  // Customers
  async createCustomer(data: { name: string; email: string }, options: { idempotencyKey?: string } = {}): Promise<Customer> {
    const res = await this.request<ApiResponse<Customer>>('/customers', {
      method: 'POST',
      body: JSON.stringify(data),
      idempotencyKey: options.idempotencyKey,
    });
    return res.data!;
  }

  async listCustomers(): Promise<Customer[]> {
    const res = await this.request<ApiResponse<Customer[]>>('/customers');
    return res.data!;
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

  async pauseSubscription(id: string, options: { idempotencyKey?: string } = {}): Promise<any> {
    const res = await this.request<ApiResponse<any>>(`/subscriptions/${id}/pause`, {
      method: 'POST',
      idempotencyKey: options.idempotencyKey,
    });
    return res.data!;
  }

  async resumeSubscription(id: string, options: { idempotencyKey?: string } = {}): Promise<any> {
    const res = await this.request<ApiResponse<any>>(`/subscriptions/${id}/resume`, {
      method: 'POST',
      idempotencyKey: options.idempotencyKey,
    });
    return res.data!;
  }
}
