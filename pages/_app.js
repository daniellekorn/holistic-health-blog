import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { DefaultSeo } from 'next-seo';
import { ChakraProvider } from "@chakra-ui/react"
import Head from 'next/head';
import theme from '../styles/theme';
import MDXComponents from '../components/MDXComponents';
import SEO from '../next-seo.config';

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <MDXProvider components={MDXComponents}>
          <Head>
            <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
            <meta
              content="width=device-width, initial-scale=1"
              name="viewport"
            />
            <meta content="#ffffff" name="theme-color" />
            <meta
              content="/static/favicons/browserconfig.xml"
              name="msapplication-config"
            />
          </Head>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />`
      </MDXProvider>
    </ChakraProvider>
  );
};

export default App;
