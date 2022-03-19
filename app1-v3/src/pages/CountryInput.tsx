import { Box, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

const useStyle = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  root2: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "30px",
    width: "200px",
    height: "400px",
    border: "1px solid black",
    justifyContent: "space-around",
    padding: "20px",
    borderRadius: "10px",
  },
});

const CountryInput = (): JSX.Element => {
  const classes = useStyle();
  const navigate: NavigateFunction = useNavigate();
  const [countryName, setCountryName] = useState<string>("");
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setCountryName(e.target.value);
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    navigate(`/${countryName}`);
  };

  return (
    <Box className={classes.root} component={"form"} onSubmit={handleOnSubmit}>
      <div className={classes.root2}>
        <TextField
          variant="outlined"
          placeholder="Enter country name"
          onChange={handleOnChange}
          value={countryName}
          required
        />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </div>
    </Box>
  );
};

export default CountryInput;
