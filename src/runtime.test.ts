import { describe, expect, it } from 'vitest';

import { BrowserBridge, CDPBridge } from './browser/index.js';
import { getBrowserFactory } from './runtime.js';

describe('getBrowserFactory', () => {
  it('uses CDPBridge for any adapter when an explicit CDP endpoint is provided', () => {
    expect(getBrowserFactory('chatgpt', 'http://127.0.0.1:9222')).toBe(CDPBridge);
  });

  it('keeps ordinary site adapters on BrowserBridge without an explicit endpoint', () => {
    expect(getBrowserFactory('chatgpt')).toBe(BrowserBridge);
  });

  it('keeps registered Electron adapters on CDPBridge without an explicit endpoint', () => {
    expect(getBrowserFactory('chatgpt-app')).toBe(CDPBridge);
  });
});
