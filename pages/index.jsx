import React from "react";
import Link from "next/link";

function Page() {
  return (
    <>
      <h1>Index Page</h1>
      <Link href="/notes">
        <a>Notes</a>
      </Link>
    </>
  );
}

export default Page;
