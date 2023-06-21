import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app/App.tsx';

import { ThemeProvider } from './context/theme.tsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
