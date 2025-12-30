import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';

test('renders name', async () => {
  render(<App />);
  // wait for lazy routes to load by removing the fallback
  const loader = screen.getByText(/Loading…/i);
  await waitForElementToBeRemoved(loader);
  const all = screen.getAllByText(/Nwankwo Samuel/i);
  expect(all[0]).toBeInTheDocument();
});
