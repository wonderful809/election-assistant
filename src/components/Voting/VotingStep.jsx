import React from 'react';
import PropTypes from 'prop-types';

/**
 * A step in the voting wizard
 * @param {object} props
 * @param {string} props.title
 * @param {React.ReactNode} props.children
 * @returns {JSX.Element}
 */
const VotingStep = ({ title, children }) => {
  return (
    <div className="voting-step">
      <h3>{title}</h3>
      <div className="step-content">
        {children}
      </div>
    </div>
  );
};

VotingStep.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default React.memo(VotingStep);
