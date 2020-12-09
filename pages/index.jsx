import * as React from "react";
import { Typography } from "@material-ui/core";

function IndexPage({ content }) {
  return (
    <Typography component="div" align="center">
      <h1>
        {content.title}{" "}
        <span role="img" aria-labelledby="okay">
          👌
        </span>
      </h1>
      <p>
        Created for Scott Moss' <strong>Intro to Next.js</strong> course by swapping{" "}
        <a href="https://theme-ui.com/home/" target="_blank">
          Theme UI
        </a>{" "}
        with{" "}
        <a href="https://material-ui.com/" target="_blank">
          Material UI
        </a>
        .
      </p>
    </Typography>
  );
}

export default IndexPage;

export function getStaticProps() {
  return {
    props: {
      content: {
        title: "This note taking app is dope",
      },
    },
  };
}
