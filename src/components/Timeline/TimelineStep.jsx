import React from 'react';
import PropTypes from 'prop-types';

/**
 * A single step in the timeline
 * @param {object} props
 * @param {string} props.date - The date of the step
 * @param {string} props.title - The title of the step
 * @param {string} props.description - The description
 * @returns {JSX.Element}
 */
const TimelineStep = ({ date, title, description }) => {
  return (
    <div className="timeline-step" style={{ marginBottom: '16px', paddingLeft: '16px', borderLeft: '2px solid var(--primary-color)' }}>
      <time dateTime={date} style={{ fontWeight: 'bold', color: 'var(--primary-color)' }}>{date}</time>
      <h3 style={{ margin: '4px 0' }}>{title}</h3>
      <p style={{ margin: 0, color: 'var(--text-secondary)' }}>{description}</p>
    </div>
  );
};

TimelineStep.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default React.memo(TimelineStep);
