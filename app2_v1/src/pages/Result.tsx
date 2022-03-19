import { Box, Card } from "@material-ui/core";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PieChart from "../components/PieChart";
import questionData from "./../questionData.json";
const Result = () => {
  const localState: any = useLocation().state;
  let total: number = 0;

  console.log(localState);

  questionData.map((item: any, id) => {
    total =
      id === 3
        ? JSON.stringify(localState[id].sort()) ===
          JSON.stringify(item.answer.sort())
          ? total + 1
          : total
        : JSON.stringify(localState[id]) === JSON.stringify(item.answer)
        ? total + 1
        : total;
  });

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <b>
        <h1>you got {total}/5</h1>
      </b>
      <PieChart firstColorPercent={(total * 100) / 5} />
      {questionData.map((item: any, id) => {
        const result =
          id === 3
            ? JSON.stringify(localState[id].sort()) ===
              JSON.stringify(item.answer.sort())
              ? true
              : false
            : JSON.stringify(localState[id]) === JSON.stringify(item.answer)
            ? true
            : false;
        return (
          <Box
            key={id}
            sx={{
              bgcolor: result ? "green" : "red",
              color: "white",
              width: "300px",
              height: "40px",
              margin: "20px",
              padding: "30px",
              //   display: "felx",

              textAlign: "center",
            }}
          >
            {item.question}
            {result ? (
              <Box>your answer : {localState[id]}</Box>
            ) : (
              <Box>
                your answer : {localState[id]}
                <br />
                correct answer : {item.answer}
              </Box>
            )}
          </Box>
        );
      })}
    </Box>
  );
};

export default Result;
