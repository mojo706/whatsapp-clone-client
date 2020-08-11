import React from 'react';
import { render } from '@testing-library/react';
import ChatsNavbar from './components/ChatListScreen/ChatsNavbar';

it('renders navbar link', () => {
  const { getByText } = render(<ChatsNavbar />);
  const linkElement = getByText(/WhatsApp Clone/i);
  expect(linkElement).toBeInTheDocument();
});
