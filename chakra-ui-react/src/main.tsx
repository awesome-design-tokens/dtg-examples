import React from 'react';
import ReactDOM from 'react-dom/client';

import { ChakraProvider } from '@chakra-ui/react';

import App from './app/App.tsx';

import { ThemeProvider } from './context/theme.tsx';
import { theme } from './theme.ts';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <ChakraProvider resetCSS={false} disableGlobalStyle={true} theme={theme}>
        <App />
      </ChakraProvider>
    </ThemeProvider>
  </React.StrictMode>
);
