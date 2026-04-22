import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import ChatWindow from '../../components/Chat/ChatWindow';
import useAuth from '../../hooks/useAuth';
import useElectionChat from '../../hooks/useElectionChat';

jest.mock('../../hooks/useAuth');
jest.mock('../../hooks/useElectionChat');

describe('ChatWindow Accessibility', () => {
  it('should not have basic accessibility violations', async () => {
    useAuth.mockReturnValue({ user: { uid: '123' }, loading: false });
    useElectionChat.mockReturnValue({ messages: [], sendMessage: jest.fn(), isLoading: false });
    
    const { container } = render(<ChatWindow />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
