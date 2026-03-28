import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vitest/config';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/react-mastery-lab/' : '/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      manifestFilename: 'site.webmanifest',
      includeAssets: [
        'favicon.svg',
        'pwa-192x192.svg',
        'pwa-512x512.svg',
        'pwa-screenshot-wide.svg',
        'pwa-screenshot-narrow.svg',
        'robots.txt',
      ],
      manifest: {
        id: '/react-mastery-lab/home',
        name: 'React Mastery Lab',
        short_name: 'Mastery Lab',
        description:
          'Build and practice modern React apps with TypeScript, routing, testing, and UI tooling.',
        start_url: '/react-mastery-lab/home',
        scope: '/react-mastery-lab/',
        display: 'standalone',
        background_color: '#020617',
        theme_color: '#020617',
        icons: [
          {
            src: '/react-mastery-lab/pwa-192x192.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
            purpose: 'any',
          },
          {
            src: '/react-mastery-lab/pwa-512x512.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'any',
          },
        ],
        screenshots: [
          {
            src: '/react-mastery-lab/pwa-screenshot-wide.svg',
            sizes: '1440x900',
            type: 'image/svg+xml',
            form_factor: 'wide',
            label: 'Desktop view of React Mastery Lab',
          },
          {
            src: '/react-mastery-lab/pwa-screenshot-narrow.svg',
            sizes: '750x1334',
            type: 'image/svg+xml',
            label: 'Mobile view of React Mastery Lab',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,webmanifest}'],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts',
    css: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      reportsDirectory: './coverage',
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'src/main.tsx',
        'src/vite-env.d.ts',
        'src/test/**',
        '**/*.stories.{ts,tsx}',
        '**/*.test.{ts,tsx}',
      ],
      thresholds: {
        lines: 80,
        statements: 80,
        functions: 80,
        branches: 80,
      },
    },
  },
}));
