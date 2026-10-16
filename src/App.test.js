import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/MainPage', () => () => <main />);

test('renders the portfolio application', () => {
  const { container } = render(<App />);

  expect(container.querySelector('.app-container')).toBeInTheDocument();
  expect(screen.getByRole('main')).toBeInTheDocument();
});
