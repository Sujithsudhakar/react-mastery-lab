import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

const meta = {
  title: 'Routes/AppRoutes',
  component: AppRoutes,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AppRoutes>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HomeRoute: Story = {
  render: () => (
    <MemoryRouter initialEntries={['/']}>
      <AppRoutes />
    </MemoryRouter>
  ),
};

export const AboutRoute: Story = {
  render: () => (
    <MemoryRouter initialEntries={['/about']}>
      <AppRoutes />
    </MemoryRouter>
  ),
};

export const NotFoundRoute: Story = {
  render: () => (
    <MemoryRouter initialEntries={['/missing']}>
      <AppRoutes />
    </MemoryRouter>
  ),
};
