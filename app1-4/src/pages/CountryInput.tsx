import { Box, Button, TextField } from "@material-ui/core";
import React, { FormEvent, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

const CountryInput = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();
  const [countryName, setCountryName] = useState<string>("");

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    navigate(`/${countryName}`);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "200px",
        height: "300px",
        justifyContent: "space-around",
        padding: "30px",
        border: "3px solid gray",
        margin: "30px",
        borderRadius: "20px",
      }}
      component={"form"}
      onSubmit={handleOnSubmit}
    >
      <TextField
        value={countryName}
        onChange={(e: any) => {
          setCountryName(e.target.value);
        }}
        required
        variant="outlined"
        placeholder="Enter Country name"
      ></TextField>
      <Button variant="contained" color="primary" type="submit">
        Search
      </Button>
    </Box>
  );
};

export default CountryInput;
