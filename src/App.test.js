import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './pages/Home';

test('renders name', async () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  const title = await screen.findByRole('heading', { name: /Nwankwo Samuel/i });
  expect(title).toBeInTheDocument();
});
