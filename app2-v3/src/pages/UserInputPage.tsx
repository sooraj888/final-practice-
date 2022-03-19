import { Box, Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

const UserInputPage = (): JSX.Element => {
  const [name, setName] = useState<string>("");
  const navigate: NavigateFunction = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",

        alignItems: "center",
      }}
    >
      <Box
        sx={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          width: "200px",
          height: "300px",
          border: "2px solid black",
          borderRadius: "20px",
          margin: "30px",
        }}
      >
        <TextField
          placeholder="enter name"
          required
          onChange={(e: any) => {
            setName(e.target.value);
          }}
          value={name}
          variant={"outlined"}
        ></TextField>
        <Button
          variant="contained"
          onClick={(): void => {
            navigate("/1");
          }}
        >
          Enter the Exam
        </Button>
      </Box>
    </Box>
  );
};

export default UserInputPage;
