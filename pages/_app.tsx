import React from 'react';
import { AppProps } from 'next/app';
import '../styles/App.scss';
import { ModalProvider } from '../contexts/ModalContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </ModalProvider>
  );
}

export default MyApp;
