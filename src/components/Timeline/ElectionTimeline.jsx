import React from 'react';
import TimelineStep from './TimelineStep';
import { useElectionData } from '../../hooks/useElectionData';
import { useLanguage } from '../../context/LanguageContext';

/**
 * Election Timeline component
 * @returns {JSX.Element}
 */
const ElectionTimeline = () => {
  const { timeline } = useElectionData();
  const { t } = useLanguage();

  return (
    <section className="card" id="timeline" aria-labelledby="timeline-heading">
      <h2 id="timeline-heading">{t('timeline_title')}</h2>
      <div className="timeline-container" style={{ marginTop: '16px' }}>
        {timeline.map(step => (
          <TimelineStep key={step.id} date={step.date} title={step.title} description={step.description} />
        ))}
      </div>
    </section>
  );
};

export default React.memo(ElectionTimeline);
