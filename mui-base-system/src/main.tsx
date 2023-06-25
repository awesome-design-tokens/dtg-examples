import React from 'react';
import ReactDOM from 'react-dom/client';

import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';

import { theme } from './theme.ts';
import { ThemeProvider } from './context/theme.tsx';

import App from './app/App.tsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CssVarsProvider theme={theme}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </CssVarsProvider>
  </React.StrictMode>
);
