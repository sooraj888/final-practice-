import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyle = makeStyles({
  root: {
    fontSize: "40px",
  },
});

const NavBar = (): JSX.Element => {
  const classes = useStyle();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.root}>
          Country and Weather App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
