import { render, screen } from '@testing-library/react';
import App from './App';

test('renders name', () => {
  render(<App />);
  const linkElements = screen.getAllByText(/Nwankwo Samuel/i);
  expect(linkElements[0]).toBeInTheDocument();
});
