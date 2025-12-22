import { describe, it, expect } from 'vitest';
import { Montra } from './client';

describe('Montra SDK', () => {
  it('should instantiate correctly', () => {
    const client = new Montra({ apiKey: 'test_key' });
    expect(client).toBeDefined();
  });
});
