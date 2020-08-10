import React from 'react';
import { render } from '@testing-library/react';
import ChatsNavbar from './components/ChatListScreen/ChatsNavbar'

test('renders learn react link', () => {
  const { getByText } = render(<ChatsNavbar />);
  const linkElement = getByText(/WhatsApp Clone/i);
  expect(linkElement).toBeInTheDocument();
});
