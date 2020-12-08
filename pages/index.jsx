import * as React from "react";
import { Link, Typography } from "@material-ui/core";

function Page() {
  return (
    <Typography component="div" align="center">
      <h1>
        This note taking app is dope{" "}
        <span role="img" aria-labelledby="okay">
          👌
        </span>
      </h1>
      <p>
        Created for Scott Moss' <strong>Intro to Next.js</strong> course by swapping{" "}
        <Link href="https://theme-ui.com/home/" target="_blank">
          Theme UI
        </Link>{" "}
        with{" "}
        <Link href="https://material-ui.com/" target="_blank">
          Material UI
        </Link>
        .
      </p>
    </Typography>
  );
}

export default Page;
