import * as React from "react";
import { AppBar, Grid, Typography, makeStyles } from "@material-ui/core";
import Link from "next/link";

const useStyles = makeStyles(theme => ({
  appBar: {
    marginBottom: theme.spacing(4),
  },
  grid: {
    padding: theme.spacing(3),
    color: theme.palette.primary.contrastText,
  },
  typography: {
    ...theme.typography.h5,
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));

function Nav() {
  var classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static">
      <Typography className={classes.typography} component="nav">
        <Grid className={classes.grid} container justify="space-between">
          <Link href="/">
            <a className={classes.link}>Dope Notes</a>
          </Link>
          <Link href="/notes">
            <a className={classes.link}>My notes</a>
          </Link>
        </Grid>
      </Typography>
    </AppBar>
  );
}

export default Nav;
