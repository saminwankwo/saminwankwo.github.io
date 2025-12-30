import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';

test('renders name', async () => {
  render(<App />);
  const all = screen.getAllByText(/Nwankwo Samuel/i);
  expect(all[0]).toBeInTheDocument();
});
