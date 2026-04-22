import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { LanguageProvider, useLanguage } from '../../context/LanguageContext';
import '@testing-library/jest-dom';

const TestComponent = () => {
  const { language, setLanguage, t } = useLanguage();
  return (
    <div>
      <span data-testid="lang">{language}</span>
      <span data-testid="translated">{t('faq_title')}</span>
      <button onClick={() => setLanguage('hi')}>Change to Hindi</button>
    </div>
  );
};

describe('LanguageContext', () => {
  it('provides default english language', () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );
    expect(screen.getByTestId('lang')).toHaveTextContent('en');
    expect(screen.getByTestId('translated')).toHaveTextContent('Frequently Asked Questions');
  });

  it('updates language and translates properly', () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );
    act(() => {
      screen.getByText('Change to Hindi').click();
    });
    expect(screen.getByTestId('lang')).toHaveTextContent('hi');
    expect(screen.getByTestId('translated')).toHaveTextContent('अक्सर पूछे जाने वाले प्रश्न');
  });
});
