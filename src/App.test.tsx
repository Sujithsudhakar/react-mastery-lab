import { screen } from '@testing-library/react';
import App from '@/App';
import { renderWithRouter } from '@/test/utils';

describe('App', () => {
  it('renders the application routes', () => {
    renderWithRouter(<App />);

    expect(
      screen.getByRole('heading', { name: /build your react skills/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /welcome/i }),
    ).toBeInTheDocument();
  });
});
