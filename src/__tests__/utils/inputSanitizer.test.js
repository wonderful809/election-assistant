import { sanitizeInput } from '../inputSanitizer';

describe('inputSanitizer', () => {
  it('removes HTML tags', () => {
    expect(sanitizeInput('<script>alert("xss")</script>')).toBe('&lt;script&gt;alert("xss")&lt;/script&gt;');
  });
  
  it('handles empty strings', () => {
    expect(sanitizeInput('')).toBe('');
  });
});
