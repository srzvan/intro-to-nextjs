import React from "react";
import { useRouter } from "next/router";

function Page() {
  var router = useRouter();
  const { id } = router.query;

  return <h1>Note id: {id}</h1>;
}

export default Page;
