import { Box } from "@material-ui/core";
import React from "react";
import questionData from "./../questionData.json";
import { Link } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";

export type QuestionIndiacatorType = { answerArray: string[]; id: number };

const QuestionIndiacator = ({
  answerArray,
  id,
}: QuestionIndiacatorType): JSX.Element => {
  return (
    <Box
      sx={{ margin: "30px", display: "flex", justifyContent: "space-around" }}
    >
      {questionData.map((item: any, key: number): JSX.Element => {
        const selected = item.id === id;
        const answered = answerArray[key].length > 0;
        return (
          <Circle
            key={key}
            selected={selected}
            answered={answered}
            id={item.id}
          />
        );
      })}
    </Box>
  );
};

export default QuestionIndiacator;

type CircleType = { id: number; answered: boolean; selected: boolean };
const Circle = ({ id, answered, selected }: CircleType): JSX.Element => {
  return (
    <Link to={`/${id}`}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: answered ? "red" : "gray",
          width: "50px",
          border: selected ? "5px solid blue" : "",
          height: "50px",
          borderRadius: "50%",
          alignItems: "cenetr",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {id}
      </Box>
    </Link>
  );
};
