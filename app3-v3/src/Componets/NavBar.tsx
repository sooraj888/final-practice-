import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography sx={{ fontSize: "50px" }}>Post App</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
