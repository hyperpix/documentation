import { MontraCheckoutOptions, IMontraCheckout } from './types';

export class MontraCheckout {
  private publishableKey: string;

  constructor(options: MontraCheckoutOptions) {
    this.publishableKey = options.publishableKey;
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

        // For now, we'll just mount an iframe pointing to our checkout URL
        // In the future, this might be a complex React component or a specialized payment element
        iframe = document.createElement('iframe');
        iframe.src = `http://localhost:3000/pay/${sessionId}?pk=${this.publishableKey}`;
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
