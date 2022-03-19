import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import QuestionIndiacator from "../components/QuestionIndiacator";
import questionData from "./../questionData.json";

const Question = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();
  const [answerArray, setAnswerArray] = useState<string[]>(Array(3).fill(""));

  let id: number = Number(useParams().id);

  if (!id) {
    id = 1;
  }

  if (id > 3 && id < 1) {
    return <div>Invalid Question</div>;
  }

  return (
    <Box>
      <QuestionIndiacator id={id} answerArray={answerArray} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>{questionData[id - 1].question}</div>

        {((): JSX.Element => {
          switch (id) {
            case 1:
              return (
                <FormControl>
                  <TextField
                    value={answerArray[0]}
                    onChange={(e: any) => {
                      setAnswerArray((prev) => {
                        const updateArr = [...prev];

                        updateArr[0] = e.target.value;
                        return updateArr;
                      });
                    }}
                  ></TextField>
                </FormControl>
              );
            case 2:
              const arr2 = questionData[1].option;
              return (
                <FormControl>
                  <RadioGroup
                    value={answerArray[1]}
                    onChange={(e: any) => {
                      setAnswerArray((prev) => {
                        const updateArr = [...prev];

                        updateArr[1] = e.target.value;
                        return updateArr;
                      });
                    }}
                  >
                    {arr2.map((item: any, key: number) => {
                      return (
                        <FormControlLabel
                          key={key}
                          control={<Radio />}
                          value={item}
                          label={item}
                        ></FormControlLabel>
                      );
                    })}
                  </RadioGroup>
                </FormControl>
              );
            case 3:
              const arr3 = questionData[2].option;
              return (
                <FormControl>
                  <RadioGroup
                    value={answerArray[2]}
                    onChange={(e: any) => {
                      setAnswerArray((prev) => {
                        const updateArr = [...prev];

                        updateArr[2] = e.target.value;
                        return updateArr;
                      });
                    }}
                  >
                    {arr3.map((item: any, key: number) => {
                      return (
                        <FormControlLabel
                          key={key}
                          control={<Radio />}
                          value={item}
                          label={item}
                        ></FormControlLabel>
                      );
                    })}
                  </RadioGroup>
                </FormControl>
              );
            default:
              return <></>;
          }
        })()}
      </Box>
      <Box sx={{ position: "absolute", left: "45%" }}>
        <Button
          onClick={(): void => {
            navigate("/result", { state: answerArray });
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Question;
