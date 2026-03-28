import { screen } from '@testing-library/react';
import AppLayout from '@/components/AppLayout';
import { renderWithRouter } from '@/test/utils';

describe('AppLayout', () => {
  it('renders the shared shell content and navigation links', () => {
    renderWithRouter(<AppLayout />);

    expect(
      screen.getByRole('heading', { name: /build your react skills/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
  });
});
