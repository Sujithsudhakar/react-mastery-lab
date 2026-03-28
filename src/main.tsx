import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '@/App';
import '@/index.scss';
import { registerSW } from 'virtual:pwa-register';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

registerSW({ immediate: true });

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter
      basename={
        import.meta.env.PROD ? import.meta.env.BASE_URL.replace(/\/$/, '') : '/'
      }
    >
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
