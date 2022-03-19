import { Box } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import questionData from "./../questionData.json";

export type QuestionIndicatorType = {
  answerArray: Array<string | Array<string>>;
  id: number;
};
const QuestionIndicator = ({
  answerArray,
  id,
}: QuestionIndicatorType): JSX.Element => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-around", margin: "30px" }}
    >
      {questionData.map((item: any, key): JSX.Element => {
        const selected = item.id === id;
        const completed = answerArray?.[key].length > 0;
        return (
          <Circle
            key={key}
            id={item.id}
            completed={completed}
            selected={selected}
          ></Circle>
        );
      })}
    </Box>
  );
};

type QuestionIndicator = { id: number; selected: boolean; completed: boolean };
export default QuestionIndicator;

const Circle = ({
  id,
  selected,
  completed,
}: QuestionIndicator): JSX.Element => {
  return (
    <Link to={`/question/${id}`}>
      <Box
        sx={{
          display: "flex",
          bgcolor: completed ? "red" : "gray",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          justifyContent: "center",
          alignItems: "center",
          border: selected ? "5px solid blue" : "",
        }}
      >
        {id}
      </Box>
    </Link>
  );
};
