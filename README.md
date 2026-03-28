# React Mastery Lab

React Mastery Lab is a small starter app for practicing modern React development. It uses Vite for fast tooling, TypeScript for type safety, React Router for routing, Tailwind CSS with SCSS for styling, and Vitest with Testing Library for tests.

## Tech Stack

- React 18
- TypeScript
- Vite
- React Router DOM
- Tailwind CSS
- SCSS
- Vitest
- React Testing Library

## Features

- TypeScript-based React app structure
- Route-based layout with shared navigation
- Home, About, and Not Found pages
- Tailwind CSS styling with an SCSS entry file
- Custom favicon
- Basic SEO metadata, `robots.txt`, and web manifest
- Unit and route tests with coverage support

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Install

```bash
npm install
```

### Run The App

```bash
npm run dev
```

The app will be available on the local Vite development server, usually at `http://localhost:5173`.

## Scripts

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Creates a production build in `dist/`.

```bash
npm run preview
```

Builds the app and serves the production output locally.

```bash
npm run test
```

Runs the Vitest test suite once.

```bash
npm run test:watch
```

Runs Vitest in watch mode.

```bash
npm run test:coverage
```

Runs tests with V8 coverage reporting and generates the HTML report in `coverage/`.

```bash
npm run coverage:serve
```

Serves the existing HTML coverage report locally using a simple static server.

```bash
npm run coverage:preview
```

Generates a fresh coverage report and then serves it locally.

## Project Structure

```text
src/
  components/
    AppLayout.tsx
  pages/
    HomePage.tsx
    AboutPage.tsx
    NotFoundPage.tsx
  routes/
    AppRoutes.tsx
  test/
    setup.ts
    utils.tsx
  App.tsx
  main.tsx
  index.scss

public/
  favicon.svg
  robots.txt
  site.webmanifest
```

## Testing

The project includes tests for:

- the main app wrapper
- the shared layout
- route rendering
- individual page components

Current coverage is configured through Vitest using the V8 coverage provider.

To view the generated HTML report in a browser, use either `npm run coverage:serve` or `npm run coverage:preview`.

## Styling

The app uses:

- Tailwind CSS for utility-first styling
- SCSS as the global stylesheet entry point in `src/index.scss`

## SEO And App Metadata

The app includes:

- page title and meta description
- Open Graph metadata
- Twitter metadata
- `robots.txt`
- `site.webmanifest`
- theme color and favicon

## Notes

- `npm run preview` rebuilds the app before serving so the preview always reflects the latest source changes.
- The build may show a Sass legacy API deprecation warning from the current Vite Sass pipeline, but the app still builds successfully.
