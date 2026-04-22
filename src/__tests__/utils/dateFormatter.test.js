import { formatDate } from '../dateFormatter';

describe('dateFormatter edge cases', () => {
  it('formats valid dates correctly', () => {
    expect(formatDate('2024-11-05')).toBe('November 5, 2024');
  });

  it('returns empty string for invalid dates', () => {
    expect(formatDate('invalid')).toBe('');
  });

  it('returns empty string for empty input', () => {
    expect(formatDate('')).toBe('');
    expect(formatDate(null)).toBe('');
    expect(formatDate(undefined)).toBe('');
  });

  it('handles leap years correctly', () => {
    expect(formatDate('2024-02-29')).toBe('February 29, 2024');
  });
});
