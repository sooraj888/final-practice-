import { Box } from "@material-ui/core";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import PieChart from "../components/PieChart";
import quesData from "./../questionData.json";

const Result = (): JSX.Element => {
  const localstate: any = useLocation().state;
  const total: number = quesData.reduce((value, item) => {
    return JSON.stringify(item.answer) ===
      JSON.stringify(localstate[item.id - 1])
      ? value + 1
      : value;
  }, 0);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>you got {total}/3</h1>
      <PieChart percent={(total * 100) / 3} />

      {quesData.map((item: any, id: number): JSX.Element => {
        return JSON.stringify(item.answer) ===
          JSON.stringify(localstate[item.id - 1]) ? (
          <Box key={id}>
            <Box>
              {" "}
              {id + 1}){item.question}
            </Box>
            <Box>your anser : {localstate[id]}</Box>
          </Box>
        ) : (
          <Box key={id}>
            <Box>
              {id + 1}){item?.question}
            </Box>
            <Box>your anser :{localstate[id]}</Box>
            <Box>correct anser :{item?.answer}</Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Result;
