import { Box, Button } from "@mui/material";
import React from "react";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";

const RawJson = () => {
  const localState: unknown = useLocation().state;
  const navigate: NavigateFunction = useNavigate();

  if (!localState) {
    return <h1>Data Not Found</h1>;
  }

  return (
    <Box>
      <Box component={"h1"}>Raw JSON</Box>
      <Box sx={{ margin: "20px" }}> {JSON.stringify(localState)}</Box>
      <Button
        variant="contained"
        onClick={(): void => {
          navigate("/");
        }}
      >
        Back
      </Button>
    </Box>
  );
};

export default RawJson;
