'use client';

import React, { useState } from 'react';
import { DEFAULT_CHECKOUT_URL } from '../constants';

export type PaymentElementProps = {
  sessionId: string;
  checkoutUrl?: string;
  onSuccess?: (data: any) => void;
  onError?: (error: Error) => void;
};

/**
 * PaymentElement component that renders the Montra payment form.
 * In a production SDK, this would likely be an iframe-based component
 * to ensure PCI compliance and security.
 */
export const PaymentElement: React.FC<PaymentElementProps> = ({ 
  sessionId, 
  checkoutUrl = DEFAULT_CHECKOUT_URL,
  onSuccess, 
  onError 
}) => {
  const [loading, setLoading] = useState(true);

  // We'll use the hosted checkout page in an iframe
  const finalCheckoutUrl = `${checkoutUrl}/pay/${sessionId}`;

  return (
    <div 
      className="montra-payment-container" 
      style={{ 
        width: '100%', 
        minHeight: '600px', 
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <iframe
        src={finalCheckoutUrl}
        title="Montra Checkout"
        style={{
          width: '100%',
          height: '100%',
          minHeight: '600px',
          border: 'none',
        }}
        onLoad={() => setLoading(false)}
      />
      {loading && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff'
        }}>
          <p data-testid="loading-message">Loading payment form...</p>
        </div>
      )}
    </div>
  );
};
