import { screen } from '@testing-library/react';
import ContactUsPage from '@/pages/ContactUsPage';
import { renderWithRouter } from '@/test/utils';

describe('ContactUsPage', () => {
  it('renders the contact us heading and placeholder content', () => {
    renderWithRouter(<ContactUsPage />);

    expect(
      screen.getByRole('heading', { name: /contact us/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/simple contact page with placeholder content/i),
    ).toBeInTheDocument();
  });
});
