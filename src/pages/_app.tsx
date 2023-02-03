import '@/styles/globals.scss';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import React from 'react';
import theme from '@/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default MyApp;
