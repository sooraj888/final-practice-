import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = (): JSX.Element => {
  return (
    <div>
      <h1>Page Not Found </h1>
      <Link to="/">
        <Button>Back</Button>
      </Link>
    </div>
  );
};

export default PageNotFound;
