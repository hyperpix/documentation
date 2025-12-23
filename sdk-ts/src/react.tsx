'use client';

import React, { createContext, useContext, useMemo } from 'react';
import { MontraCheckout, loadMontra } from './checkout';

const MontraContext = createContext<MontraCheckout | null>(null);

export interface MontraProviderProps {
  publishableKey: string;
  checkoutUrl?: string;
  children: React.ReactNode;
}

export const MontraProvider: React.FC<MontraProviderProps> = ({ 
  publishableKey, 
  checkoutUrl,
  children 
}) => {
  const montra = useMemo(() => loadMontra(publishableKey), [publishableKey, checkoutUrl]);

  return (
    <MontraContext.Provider value={montra}>
      {children}
    </MontraContext.Provider>
  );
};

export const useMontra = () => {
  const context = useContext(MontraContext);
  if (!context) {
    throw new Error('useMontra must be used within a MontraProvider');
  }
  return context;
};
