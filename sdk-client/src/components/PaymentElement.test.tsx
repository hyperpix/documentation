// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PaymentElement } from './PaymentElement';
import React from 'react';

describe('PaymentElement', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('should render an iframe with the correct sessionId', () => {
    const { container } = render(<PaymentElement sessionId="sess_123" />);
    const iframe = container.querySelector('iframe');
    expect(iframe).toBeDefined();
    expect(iframe?.src).toContain('/pay/sess_123');
  });

  it('should show loading state initially', () => {
    render(<PaymentElement sessionId="sess_123" />);
    const loadingMessages = screen.getAllByTestId('loading-message');
    expect(loadingMessages.length).toBeGreaterThanOrEqual(1);
    expect(loadingMessages[0]).toBeDefined();
  });
});
