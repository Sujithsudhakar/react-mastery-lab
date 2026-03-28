import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AppRoutes from '@/routes/AppRoutes';
import { renderWithRouter } from '@/test/utils';

describe('AppRoutes', () => {
  it('renders the home page by default', () => {
    renderWithRouter(<AppRoutes />);

    expect(
      screen.getByRole('heading', { name: /build your react skills/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /welcome/i }),
    ).toBeInTheDocument();
  });

  it('renders the about page for the about route', () => {
    renderWithRouter(<AppRoutes />, { route: '/about' });

    expect(
      screen.getByRole('heading', { name: /about this starter/i }),
    ).toBeInTheDocument();
  });

  it('renders the not found page for unknown routes', () => {
    renderWithRouter(<AppRoutes />, { route: '/missing' });

    expect(
      screen.getByRole('heading', { name: /page not found/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /go back home/i }),
    ).toHaveAttribute('href', '/');
  });

  it('navigates between pages from the layout links', async () => {
    const user = userEvent.setup();

    renderWithRouter(<AppRoutes />);

    await user.click(screen.getByRole('link', { name: /about/i }));

    expect(
      screen.getByRole('heading', { name: /about this starter/i }),
    ).toBeInTheDocument();
  });
});
