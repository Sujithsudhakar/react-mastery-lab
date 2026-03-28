import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './AppLayout';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';

const meta = {
  title: 'Components/AppLayout',
  component: AppLayout,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AppLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HomeView: Story = {
  render: () => (
    <MemoryRouter initialEntries={['/home']}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="home" element={<HomePage />} />
        </Route>
      </Routes>
    </MemoryRouter>
  ),
};

export const AboutView: Story = {
  render: () => (
    <MemoryRouter initialEntries={['/about']}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </MemoryRouter>
  ),
};
