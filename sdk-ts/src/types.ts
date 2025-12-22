export interface MontraOptions {
  apiKey: string;
  baseUrl?: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  status: string;
  created_at: string;
}

export interface UsagePayload {
  customer_id: string;
  meter_slug: string;
  amount: number;
  metadata?: Record<string, any>;
}

export interface EntitlementCheck {
  has_access: boolean;
  usage: number;
  limit: number | null;
  reason?: string;
}

export interface Invoice {
  id: string;
  title: string;
  amount_due: number;
  currency: string;
  status: string;
  created_at: string;
}
