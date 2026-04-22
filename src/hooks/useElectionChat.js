import { useState, useCallback } from 'react';

/**
 * Hook to manage election chat logic
 * @returns {object} { messages, sendMessage, isLoading, error }
 */
const useElectionChat = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendMessage = useCallback(async (text, token) => {
    if (!text.trim()) return;

    const newMessage = { id: Date.now(), text, sender: 'user' };
    setMessages(prev => [...prev, newMessage]);
    setIsLoading(true);
    setError(null);

    try {
      // Call Firebase Cloud Function which acts as a proxy for Claude API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ message: text })
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      const botMessage = { id: Date.now() + 1, text: data.reply, sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);
    } catch (err) {
      setError('An error occurred while fetching the response.');
      const errorMessage = { id: Date.now() + 1, text: 'Sorry, I am having trouble connecting right now.', sender: 'bot', isError: true };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { messages, sendMessage, isLoading, error };
};

export default useElectionChat;
