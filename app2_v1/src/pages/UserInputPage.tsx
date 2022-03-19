import { Box, Button, TextField } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";

const UserInputPage = () => {
  const navigate = useNavigate();
  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    navigate("/question/1");
  };
  return (
    <Box component={"form"} onSubmit={handleOnSubmit}>
      <TextField variant="outlined" placeholder="name" required></TextField>
      <Button type="submit">Submit</Button>
    </Box>
  );
};

export default UserInputPage;
