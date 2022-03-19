import { Box, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { FormEvent, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    display: "flex",
    margin: "30px",
    padding: "20px",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "300px",
    borderRadius: "10px",
    border: "1px solid black",
  },
  root1: {
    display: "flex",
    justifyContent: "center",
  },
  btn: {
    margin: "30px",
  },
});

const CountryInputPage = (): JSX.Element => {
  const classes = useStyles();
  const [countryname, setCountryName] = useState<string>("");
  const navigate: NavigateFunction = useNavigate();
  const handleOnSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    navigate(`/${countryname}`);
  };
  return (
    <div className={classes.root1}>
      <Box
        className={classes.root}
        component={"form"}
        onSubmit={handleOnSubmit}
      >
        <TextField
          variant="outlined"
          onChange={(e) => {
            setCountryName(e.target.value);
          }}
          required
          placeholder="Enter Country name"
        ></TextField>
        <Button
          className={classes.btn}
          variant="contained"
          color="primary"
          type="submit"
        >
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default CountryInputPage;
