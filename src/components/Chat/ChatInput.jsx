import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../context/LanguageContext';

/**
 * Chat Input Component
 * @param {object} props
 * @param {function} props.onSend
 * @param {boolean} props.disabled
 * @returns {JSX.Element}
 */
const ChatInput = ({ onSend, disabled }) => {
  const [input, setInput] = React.useState('');
  const { t } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSend(input);
      setInput('');
    }
  };

  return (
    <form className="chat-input-form" onSubmit={handleSubmit} style={{ marginTop: '16px' }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={disabled}
        placeholder={t('ask_anything') || "Ask a question about the election..."}
        aria-label="Chat input"
      />
      <button 
        type="submit" 
        disabled={disabled || !input.trim()}
      >
        {t('send') || "Send"}
      </button>
    </form>
  );
};

ChatInput.propTypes = {
  onSend: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default React.memo(ChatInput);
