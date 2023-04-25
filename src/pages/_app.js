import * as React from 'react';
import { StateContext } from '@/context/StateContext';
import '@/styles/globals.css';
import '@/styles/themebg.css'
import Head from 'next/head';
import { NextUIProvider } from '@nextui-org/react';
import { theme } from 'public/configs/next_theme'
import { Toaster } from 'react-hot-toast';


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"/>
      </Head>
      <StateContext>
          <NextUIProvider theme={theme}>
            <Component {...pageProps} />
          </NextUIProvider>
          <Toaster/>
      </StateContext>
    </>
  )
}
