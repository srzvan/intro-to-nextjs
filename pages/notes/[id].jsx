import React from "react";
import { useRouter } from "next/router";

function Page() {
  var router = useRouter();
  const { id } = router.query;

  return <div>Note id: {id}</div>;
}

export default Page;
