import * as React from "react";
import Head from "next/head";
import CSSBaseline from "@material-ui/core/CssBaseline";
import { Container } from "@material-ui/core";

import Nav from "../src/components/nav";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
      </Head>
      <CSSBaseline>
        <Nav />
        <Container maxWidth="lg">
          <Component {...pageProps} />
        </Container>
      </CSSBaseline>
    </>
  );
}

export default App;
