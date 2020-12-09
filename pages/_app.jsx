import * as React from "react";
import Head from "next/head";
import CSSBaseline from "@material-ui/core/CssBaseline";
import { Container, Grid, Typography, makeStyles } from "@material-ui/core";

import Nav from "../src/components/nav";

const useStyles = makeStyles(() => ({
  fullheight: {
    height: "100%",
  },
  grow: {
    flexGrow: 1,
  },
}));

function App({ Component, pageProps }) {
  var classes = useStyles();

  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
      </Head>
      <CSSBaseline>
        <Grid container direction="column" className={classes.fullheight} spacing={0}>
          <Nav />
          <Container maxWidth="lg" className={classes.grow}>
            <Grid container direction="column" className={classes.fullheight}>
              <Grid item className={classes.grow}>
                <Component {...pageProps} />
              </Grid>
              <Grid item>
                <Typography component="footer" align="center">
                  <p>
                    Made with{" "}
                    <span role="img" aria-labelledby="heart">
                      ❤️
                    </span>{" "}
                    by Răzvan Sbîngu
                  </p>
                  <p>
                    P.S. Check out this{" "}
                    <a href={process.env.COOL_URL} target="_blank">
                      cool magazine
                    </a>
                    .
                  </p>
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </CSSBaseline>
    </>
  );
}

export default App;
