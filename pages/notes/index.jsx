import * as React from "react";
import Link from "next/link";
import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  flexItem: {
    width: "33.33%",
    padding: theme.spacing(2),
  },
  link: {
    textDecoration: "none",
  },
  paper: {
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    padding: theme.spacing(2),
  },
}));

const { useState } = React;

function Page() {
  const [notes, setNotes] = useState([]);
  var classes = useStyles();

  return (
    <>
      <Typography component="h2" variant="h2" gutterBottom>
        My notes
      </Typography>

      <Grid container wrap="wrap" spacing={3}>
        {notes.map(note => (
          <Grid className={classes.flexItem} item key={note.id}>
            <Link href="/notes/[id]" as={`/notes/${note.id}`}>
              <a className={classes.link}>
                <Paper className={classes.paper}>
                  <strong>{note.title}</strong>
                </Paper>
              </a>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Page;
