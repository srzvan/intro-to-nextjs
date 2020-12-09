import * as React from "react";
import { Typography } from "@material-ui/core";

function Single({ note }) {
  return (
    <Typography component="div">
      <h1>
        {note.title} &#40;id: {note.id}&#41;
      </h1>
      <p>{note.content}</p>
    </Typography>
  );
}

export default Single;

export async function getServerSideProps({ params, res, req }) {
  var response = await fetch(`${process.env.API_URL}/api/note/${params.id}`);

  if (!response.ok) {
    res.writeHead(302, { Location: "/notes" });
    res.end();
    return { props: {} };
  }

  var { data } = await response.json();

  if (data) {
    return {
      props: { note: data },
    };
  }
}
