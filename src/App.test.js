import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';

test('renders name', async () => {
  render(<App />);
  const loader = screen.getByText(/Loading…/i);
  await waitForElementToBeRemoved(loader);
  const matches = screen.getAllByText(/Nwankwo Samuel/i);
  expect(matches[0]).toBeInTheDocument();
});
