import { 
  MontraOptions, 
  ApiResponse, 
  Customer, 
  UsagePayload, 
  EntitlementCheck, 
  Invoice 
} from './types';

export class Montra {
  private apiKey: string;
  private baseUrl: string;

  constructor(options: MontraOptions) {
    this.apiKey = options.apiKey;
    this.baseUrl = options.baseUrl || 'http://localhost:3000/api/v1';
  }

  private async request<T>(path: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseUrl}${path}`;
    const headers = {
      'Authorization': `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json',
      ...options.headers,
    };

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
  async createCustomer(data: { name: string; email: string }): Promise<Customer> {
    const res = await this.request<ApiResponse<Customer>>('/customers', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return res.data!;
  }

  async listCustomers(): Promise<Customer[]> {
    const res = await this.request<ApiResponse<Customer[]>>('/customers');
    return res.data!;
  }

  // Usage
  async reportUsage(payload: UsagePayload): Promise<boolean> {
    const res = await this.request<ApiResponse>('/usage', {
      method: 'POST',
      body: JSON.stringify(payload),
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

  // Invoices
  async listInvoices(): Promise<Invoice[]> {
    const res = await this.request<ApiResponse<Invoice[]>>('/invoices');
    return res.data!;
  }

  async getInvoice(id: string): Promise<Invoice> {
    const res = await this.request<ApiResponse<Invoice>>(`/invoices/${id}`);
    return res.data!;
  }
}
