import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ChatWindow from '../../components/Chat/ChatWindow';
import useAuth from '../../hooks/useAuth';
import useElectionChat from '../../hooks/useElectionChat';

// Mock the hooks
jest.mock('../../hooks/useAuth');
jest.mock('../../hooks/useElectionChat');

describe('ChatWindow Component', () => {
  it('renders sign in prompt when not authenticated', () => {
    useAuth.mockReturnValue({ user: null, loading: false });
    useElectionChat.mockReturnValue({ messages: [], sendMessage: jest.fn(), isLoading: false });
    
    render(<ChatWindow />);
    expect(screen.getByText(/Please sign in to chat/i)).toBeInDocument();
  });

  it('renders chat interface when authenticated', () => {
    useAuth.mockReturnValue({ user: { uid: '123', getIdToken: jest.fn() }, loading: false });
    useElectionChat.mockReturnValue({ messages: [], sendMessage: jest.fn(), isLoading: false });
    
    render(<ChatWindow />);
    expect(screen.getByPlaceholderText(/Ask a question/i)).toBeInDocument();
  });
});
