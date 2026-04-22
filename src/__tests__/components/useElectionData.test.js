import { renderHook } from '@testing-library/react';
import { useElectionData } from '../../hooks/useElectionData';
import { useLanguage } from '../../context/LanguageContext';

// Mock the useLanguage hook
jest.mock('../../context/LanguageContext', () => ({
  useLanguage: jest.fn()
}));

describe('useElectionData hook', () => {
  it('returns english timeline and faq by default', () => {
    useLanguage.mockReturnValue({ language: 'en' });
    const { result } = renderHook(() => useElectionData());
    
    expect(result.current.timeline).toBeDefined();
    expect(result.current.faq).toBeDefined();
    expect(result.current.voting_steps).toBeDefined();
    expect(result.current.timeline[0].title).toBe('Primary Elections End');
  });

  it('returns hindi timeline when language is hi', () => {
    useLanguage.mockReturnValue({ language: 'hi' });
    const { result } = renderHook(() => useElectionData());
    
    expect(result.current.timeline[0].title).toBe('प्राथमिक चुनाव समाप्त');
  });

  it('falls back to english if language is unsupported', () => {
    useLanguage.mockReturnValue({ language: 'fr' });
    const { result } = renderHook(() => useElectionData());
    
    expect(result.current.timeline[0].title).toBe('Primary Elections End');
  });
});
