import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";

const NabBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>Question Answer App</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NabBar;
