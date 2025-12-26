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
  invoicing_emails?: string[];
  metadata?: Record<string, any>;
}

export interface CreateCustomerPayload {
  name: string;
  email: string;
  invoicing_emails?: string[];
  metadata?: Record<string, any>;
}

export interface AnalyticsPoint {
  key: string;
  value: number;
}

export interface AnalyticsMovementPoint {
  key: string;
  positive: number;
  negative: number;
  new: number;
  expansion: number;
  contraction: number;
  churn: number;
}

export interface AnalyticsSeriesResponse {
  interval: string;
  start: string;
  end: string;
  points: number;
  product: string;
  transactions: AnalyticsPoint[];
  payments: AnalyticsPoint[];
  failed: AnalyticsPoint[];
  revenue: AnalyticsPoint[];
  netCashFlow: AnalyticsPoint[];
  settlements: AnalyticsPoint[];
  customersNew: AnalyticsPoint[];
  customersTotal: AnalyticsPoint[];
  mrrMovements: AnalyticsMovementPoint[];
}

export interface SubscriptionPausePayload {
  pause_behavior: 'keep_as_is' | 'mark_uncollectible' | 'void';
  resume_at?: string;
}

export interface Subscription {
  id: string;
  customer_id: string;
  pricing_model_id: string;
  status: 'active' | 'past_due' | 'unpaid' | 'canceled' | 'incomplete' | 'incomplete_expired' | 'trialing' | 'paused';
  current_period_start: string;
  current_period_end: string;
  cancel_at_period_end: boolean;
  paused_at?: string | null;
  resume_at?: string | null;
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
  usage?: number;
  limit?: number | null;
  type?: 'meter' | 'feature';
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

export interface Feature {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  type: string;
  status: string;
  pricing_model_id: string;
  created_at: string;
}

export interface Meter {
  id: string;
  merchant_id: string;
  pricing_model_id: string;
  name: string;
  slug: string;
  aggregation: string;
  currency: string;
  amount: number | null;
  events_per_unit: number;
  created_at: string;
}

export interface PricingModel {
  id: string;
  merchant_id: string;
  name: string | null;
  products_count: number;
  is_default: boolean;
  created_at: string;
}

export interface FileResponse {
  id: string;
  url: string;
  name: string;
  size: number;
  type: string;
}

export interface SubscriptionUpgradeResponse {
  subscription: any;
  proration: {
    unused_amount: number;
    remaining_amount: number;
    net_amount: number;
    remaining_ratio: number;
  };
}

export interface ScheduledChange {
  id: string;
  subscription_id: string;
  new_pricing_model_id: string;
  scheduled_for: string;
  status: 'pending' | 'completed' | 'cancelled';
  created_at: string;
}

// Checkout Types
export interface MontraCheckoutOptions {
  publishableKey: string;
  checkoutUrl?: string;
}

export type CheckoutSessionResponse = {
  id: string;
  url: string;
  status: 'open' | 'complete' | 'expired';
};

export interface IMontraCheckout {
  mount(elementOrId: string | HTMLElement): void;
  unmount(): void;
}