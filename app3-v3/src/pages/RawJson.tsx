import React from "react";
import { useLocation } from "react-router-dom";

const RawJson = (): JSX.Element => {
  const localState: unknown = useLocation().state;

  if (!localState) {
    return <h1>Data notFound</h1>;
  }
  return (
    <div>
      <h1>Raw JSON</h1>
      {JSON.stringify(localState)}
    </div>
  );
};

export default RawJson;
