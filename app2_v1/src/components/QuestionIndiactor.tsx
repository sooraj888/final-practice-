import { Box } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import questionData from "./../questionData.json";
const QuestionIndiactor = ({ answerArr, id }: any) => {
  return (
    <Box
      sx={{ margin: "20px", display: "flex", justifyContent: "space-around" }}
    >
      {questionData.map((item: any) => {
        const completed = answerArr[item.id - 1].length > 0;
        const selected = item.id === id;
        return (
          <Circle
            key={item.id}
            completed={completed}
            selected={selected}
            id={item.id}
          />
        );
      })}
    </Box>
  );
};

export default QuestionIndiactor;

const Circle = ({ id, selected, completed }: any) => {
  return (
    <Link to={`/question/${id}`}>
      <Box
        sx={{
          textAlign: "cenete",
          borderRadius: "50%",
          display: "flex",
          width: "50px",
          height: "50px",
          bgcolor: completed ? "red" : "gray",
          border: selected ? "5px solid blue" : "",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {id}
      </Box>
    </Link>
  );
};
