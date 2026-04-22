import React, { useState } from 'react';
import VotingStep from './VotingStep';
import { useElectionData } from '../../hooks/useElectionData';
import { useLanguage } from '../../context/LanguageContext';

/**
 * Voting Wizard component
 * @returns {JSX.Element}
 */
const VotingWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { voting_steps } = useElectionData();
  const { t } = useLanguage();

  const handleNext = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const handlePrev = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  return (
    <section className="card" id="voting" aria-labelledby="voting-heading" style={{ marginTop: '24px' }}>
      <h2 id="voting-heading">{t('voting_guide_title')}</h2>
      <div className="wizard-content" aria-live="polite">
        {voting_steps.map(step => (
          currentStep === step.id && (
            <VotingStep key={step.id} title={step.title}>
              <p>{step.description}</p>
            </VotingStep>
          )
        ))}
      </div>
      <div className="wizard-controls" style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
        <button onClick={handlePrev} disabled={currentStep === 1} aria-label="Previous step">{t('previous')}</button>
        <button onClick={handleNext} disabled={currentStep === 3} aria-label="Next step">{t('next')}</button>
      </div>
    </section>
  );
};

export default React.memo(VotingWizard);
