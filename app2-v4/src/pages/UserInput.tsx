import { Box, Button, TextField } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";

const UserInput = () => {
  const navigate = useNavigate();
  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    navigate("/question/1");
  };

  return (
    <Box component={"form"} onSubmit={handleOnSubmit}>
      <Box>
        <TextField required placeholder="name"></TextField>
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  );
};

export default UserInput;
