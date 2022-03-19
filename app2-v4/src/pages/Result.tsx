import { Box } from "@material-ui/core";
import React from "react";
import { useLocation } from "react-router-dom";
import PieChart from "../components/PieChart";
import questionData from "./../questionData.json";
const Result = () => {
  const localState: any = useLocation().state;
  let total = 0;

  type questionDataType = {
    id: number;
    question: string;
    answer: any;
    option: string[];
  };

  total = questionData?.reduce((value: number, item: questionDataType) => {
    return item.id == 4
      ? JSON.stringify(item?.answer?.sort()) ===
        JSON.stringify(localState?.[item.id - 1]?.sort())
        ? value + 1
        : value
      : JSON.stringify(item?.answer) ===
        JSON.stringify(localState?.[item.id - 1])
      ? value + 1
      : value;
  }, 0);
  return (
    <div>
      <h1> You got {total} / 4</h1>
      <PieChart precent={(total * 100) / 4} />
      <Box>
        {questionData?.map((item: any, key: number) => {
          let correctAnswer =
            item.id == 4
              ? JSON.stringify(item?.answer?.sort()) ===
                JSON.stringify(localState?.[item.id - 1]?.sort())
                ? true
                : false
              : JSON.stringify(item?.answer) ===
                JSON.stringify(localState?.[item.id - 1])
              ? true
              : false;
          return (
            <Box key={key} component={"div"}>
              <h4>{item?.question}</h4>
              {correctAnswer ? (
                <>
                  <div>Your Answer : {localState[key]}</div>
                </>
              ) : (
                <>
                  {" "}
                  <div>Your Answer :{localState[key]}</div>
                  Correct Answer : {item?.answer}
                </>
              )}
            </Box>
          );
        })}
      </Box>
    </div>
  );
};

export default Result;
