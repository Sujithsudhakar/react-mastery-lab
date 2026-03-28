import { screen } from '@testing-library/react';
import NotFoundPage from '@/pages/NotFoundPage';
import { renderWithRouter } from '@/test/utils';

describe('NotFoundPage', () => {
  it('renders the not found message and home link', () => {
    renderWithRouter(<NotFoundPage />);

    expect(
      screen.getByRole('heading', { name: /page not found/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/does not exist yet/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /go back home/i })).toHaveAttribute(
      'href',
      '/home',
    );
  });
});
