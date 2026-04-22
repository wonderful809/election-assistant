import React, { useState } from 'react';
import VotingStep from './VotingStep';

/**
 * Voting Wizard component
 * @returns {JSX.Element}
 */
const VotingWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const handlePrev = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  return (
    <section className="card" id="voting" aria-labelledby="voting-heading" style={{ marginTop: '24px' }}>
      <h2 id="voting-heading">Voting Guide Wizard</h2>
      <div className="wizard-content" aria-live="polite">
        {currentStep === 1 && (
          <VotingStep title="Step 1: Verify Registration">
            <p>Ensure you are registered to vote at your current address.</p>
          </VotingStep>
        )}
        {currentStep === 2 && (
          <VotingStep title="Step 2: Know Your Options">
            <p>Decide whether you will vote by mail, early in-person, or on Election Day.</p>
          </VotingStep>
        )}
        {currentStep === 3 && (
          <VotingStep title="Step 3: Find Polling Place">
            <p>Locate your designated polling place or ballot drop box.</p>
          </VotingStep>
        )}
      </div>
      <div className="wizard-controls" style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
        <button onClick={handlePrev} disabled={currentStep === 1} aria-label="Previous step">Previous</button>
        <button onClick={handleNext} disabled={currentStep === 3} aria-label="Next step">Next</button>
      </div>
    </section>
  );
};

export default React.memo(VotingWizard);
