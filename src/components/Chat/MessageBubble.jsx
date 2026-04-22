import React from 'react';
import PropTypes from 'prop-types';

/**
 * Message Bubble Component
 * @param {object} props
 * @param {object} props.message
 * @returns {JSX.Element}
 */
const MessageBubble = ({ message }) => {
  const isUser = message.sender === 'user';
  
  return (
    <div style={{
      display: 'flex',
      justifyContent: isUser ? 'flex-end' : 'flex-start',
      marginBottom: '12px'
    }}>
      <div className={`message-bubble ${isUser ? 'message-user' : 'message-bot'}`} style={{
        border: message.isError ? '1px solid var(--error-color)' : 'none'
      }}>
        <p style={{ margin: 0 }}>{message.text}</p>
      </div>
    </div>
  );
};

MessageBubble.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired,
    isError: PropTypes.bool
  }).isRequired,
};

export default React.memo(MessageBubble);
