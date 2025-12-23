import { MontraCheckoutOptions, IMontraCheckout } from './types';
import { DEFAULT_CHECKOUT_URL } from './constants';

export class MontraCheckout {
  private publishableKey: string;
  private checkoutUrl: string;

  constructor(options: MontraCheckoutOptions) {
    this.publishableKey = options.publishableKey;
    this.checkoutUrl = options.checkoutUrl || DEFAULT_CHECKOUT_URL;
  }

  async initializeCheckout(sessionId: string): Promise<IMontraCheckout> {
    if (!sessionId) {
      throw new Error('sessionId is required to initialize checkout');
    }

    let container: HTMLElement | null = null;
    let iframe: HTMLIFrameElement | null = null;

    return {
      mount: (elementOrId: string | HTMLElement) => {
        if (typeof elementOrId === 'string') {
          container = document.getElementById(elementOrId);
        } else {
          container = elementOrId;
        }

        if (!container) {
          throw new Error('Mount element not found');
        }

        iframe = document.createElement('iframe');
        iframe.src = `${this.checkoutUrl}/pay/${sessionId}?pk=${this.publishableKey}`;
        iframe.style.width = '100%';
        iframe.style.height = '600px';
        iframe.style.border = 'none';

        container.appendChild(iframe);
      },
      unmount: () => {
        if (container && iframe) {
          container.removeChild(iframe);
          iframe = null;
        }
      }
    };
  }
}

export const loadMontra = (publishableKey: string) => {
  return new MontraCheckout({ publishableKey });
};
