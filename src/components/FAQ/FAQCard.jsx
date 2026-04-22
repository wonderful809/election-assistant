import React from 'react';
import { FAQ_DATA } from '../../constants/electionData';

/**
 * FAQ component
 * @returns {JSX.Element}
 */
const FAQCard = () => {
  return (
    <div className="faq-list" id="faq" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {FAQ_DATA.map(item => (
        <details key={item.id} className="card" style={{ padding: '16px', cursor: 'pointer' }}>
          <summary style={{ fontWeight: 'bold', outline: 'none' }}>{item.question}</summary>
          <p style={{ marginTop: '8px', color: 'var(--text-secondary)' }}>{item.answer}</p>
        </details>
      ))}
    </div>
  );
};

export default React.memo(FAQCard);
