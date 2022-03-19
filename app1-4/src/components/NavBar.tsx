import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";

const NavBar = (): JSX.Element => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>Country Weather App</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
