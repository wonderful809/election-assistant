import { getDaysUntilElection } from '../electionHelpers';

describe('electionHelpers edge cases', () => {
  it('calculates days correctly for future dates', () => {
    const today = new Date();
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + 10);
    
    expect(getDaysUntilElection(futureDate.toISOString())).toBe(10);
  });

  it('returns negative numbers for past dates', () => {
    const today = new Date();
    const pastDate = new Date(today);
    pastDate.setDate(today.getDate() - 5);
    
    expect(getDaysUntilElection(pastDate.toISOString())).toBe(-5);
  });

  it('returns 0 for the same day', () => {
    const today = new Date();
    expect(getDaysUntilElection(today.toISOString())).toBe(0);
  });
});
