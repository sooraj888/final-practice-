import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles({
  roots: {
    fontSize: "40px",
  },
});

const NavBar = (): JSX.Element => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.roots}>Country Weather App</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
