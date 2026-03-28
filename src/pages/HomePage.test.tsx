import HomePage from '@/pages/HomePage';
import { renderWithRouter } from '@/test/utils';
import { screen } from '@testing-library/react';

describe('HomePage', () => {
  it('renders the welcome heading and starter copy', () => {
    renderWithRouter(<HomePage />);

    expect(
      screen.getByRole('heading', { name: /welcome/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/your base project is ready/i)).toBeInTheDocument();
  });
});
