import React from 'react';
import TimelineStep from './TimelineStep';
import { ELECTION_TIMELINE } from '../../constants/electionData';

/**
 * Election Timeline component
 * @returns {JSX.Element}
 */
const ElectionTimeline = () => {
  return (
    <section className="card" id="timeline" aria-labelledby="timeline-heading">
      <h2 id="timeline-heading">Election Timeline</h2>
      <div className="timeline-container" style={{ marginTop: '16px' }}>
        {ELECTION_TIMELINE.map(step => (
          <TimelineStep key={step.id} date={step.date} title={step.title} description={step.description} />
        ))}
      </div>
    </section>
  );
};

export default React.memo(ElectionTimeline);
