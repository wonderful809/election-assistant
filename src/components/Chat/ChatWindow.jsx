import React, { useRef, useEffect } from 'react';
import MessageBubble from './MessageBubble';
import ChatInput from './ChatInput';
import useElectionChat from '../../hooks/useElectionChat';
import useAuth from '../../hooks/useAuth';
import { signInWithGoogle } from '../../services/authService';
import { useLanguage } from '../../context/LanguageContext';

/**
 * Chat Window Component
 * @returns {JSX.Element}
 */
const ChatWindow = () => {
  const { messages, sendMessage, isLoading } = useElectionChat();
  const { user, loading: authLoading } = useAuth();
  const { t } = useLanguage();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (text) => {
    if (user) {
      const token = await user.getIdToken();
      sendMessage(text, token);
    }
  };

  return (
    <section className="card chat-window" aria-labelledby="chat-heading">
      <h2 id="chat-heading" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><path d="M9 10h.01"/><path d="M15 10h.01"/></svg>
        {t('ai_assistant')}
      </h2>
      
      {!user && !authLoading ? (
        <div className="sign-in-cta">
          <p style={{ fontSize: '1.2rem', marginBottom: '16px' }}>{t('please_sign_in')}</p>
          <button onClick={signInWithGoogle}>{t('sign_in')}</button>
        </div>
      ) : (
        <>
          <div className="messages-container" role="log" aria-live="polite">
            {messages.length === 0 && <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginTop: '40px' }}>{t('ask_anything')}</p>}
            {messages.map(msg => (
              <MessageBubble key={msg.id} message={msg} />
            ))}
            {isLoading && <div style={{ fontStyle: 'italic', color: 'var(--text-secondary)', marginLeft: '12px' }}>{t('loading')}</div>}
            <div ref={messagesEndRef} />
          </div>
          <ChatInput onSend={handleSend} disabled={isLoading || !user} />
        </>
      )}
    </section>
  );
};

export default React.memo(ChatWindow);
