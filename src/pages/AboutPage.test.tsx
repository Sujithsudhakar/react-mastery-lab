import { screen } from '@testing-library/react';
import AboutPage from '@/pages/AboutPage';
import { renderWithRouter } from '@/test/utils';

describe('AboutPage', () => {
  it('renders the about heading and description', () => {
    renderWithRouter(<AboutPage />);

    expect(
      screen.getByRole('heading', { name: /about this starter/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/this project uses react, vite, and react router/i),
    ).toBeInTheDocument();
  });
});
