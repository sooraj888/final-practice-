import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import QuestionIndiactor from "../components/QuestionIndiactor";
import questionData from "./../questionData.json";

const Question = () => {
  const navigate = useNavigate();
  let id: number = Number(useParams().id);

  if (!id) {
    id = 1;
  }

  const [answerArr, setAnswerArr] = useState<any>(Array(5).fill([]));
  const [question5Arr, setQuestion5Arr] = useState<any>([]);

  const handleOnCheckBoxClick = (item: any) => {
    // console.log(item);
    setAnswerArr((prev: any) => {
      const updateArr = [...prev];
      if (updateArr[3].includes(item)) {
        updateArr[3] = updateArr[3].filter((value: any) => {
          return value != item;
        });
      } else {
        updateArr[3] = [...updateArr[3], item];
      }
      return updateArr;
    });
  };

  const handleOnMatchTheFolloin = (item: any) => {
    // set
    console.log(item);
    setQuestion5Arr([...question5Arr, item]);
  };

  useEffect(() => {
    console.log(answerArr);
  }, [answerArr]);

  useEffect(() => {
    setAnswerArr((prev: any) => {
      const updateArr = [...prev];
      updateArr[4] = question5Arr;
      return updateArr;
    });
  }, [question5Arr]);

  if (id > 5 || id < 1) {
    return <>Question Not Found</>;
  }
  return (
    <Box>
      <QuestionIndiactor answerArr={answerArr} id={id} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {questionData?.[id - 1]?.question}
        <Box>
          {(() => {
            switch (id) {
              case 1:
                return (
                  <FormControl>
                    <TextField
                      value={answerArr[0]}
                      onChange={(e: any) => {
                        setAnswerArr((prev: any) => {
                          const updateArr = [...prev];
                          updateArr[0] = e.target.value;
                          return updateArr;
                        });
                      }}
                    ></TextField>
                  </FormControl>
                );
              case 2:
                const arr2 = questionData?.[1]?.option;
                return (
                  <FormControl>
                    <RadioGroup
                      value={answerArr[1]}
                      onChange={(e: any) => {
                        setAnswerArr((prev: any) => {
                          const updateArr = [...prev];
                          updateArr[1] = e.target.value;
                          return updateArr;
                        });
                      }}
                    >
                      {arr2.map((item) => {
                        return (
                          <FormControlLabel
                            key={item}
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
                const arr3 = questionData?.[2]?.option;
                return (
                  <FormControl>
                    <RadioGroup
                      value={answerArr[2]}
                      onChange={(e: any) => {
                        setAnswerArr((prev: any) => {
                          const updateArr = [...prev];
                          updateArr[2] = e.target.value;
                          return updateArr;
                        });
                      }}
                    >
                      {arr3.map((item) => {
                        return (
                          <FormControlLabel
                            key={item}
                            control={<Radio />}
                            value={item}
                            label={item}
                          ></FormControlLabel>
                        );
                      })}
                    </RadioGroup>
                  </FormControl>
                );
              case 4:
                const arr4 = questionData?.[3]?.option;
                return (
                  <FormControl>
                    {arr4.map((item) => {
                      return (
                        <FormControlLabel
                          checked={answerArr[3].includes(item) ? true : false}
                          onClick={() => {
                            handleOnCheckBoxClick(item);
                          }}
                          key={item}
                          control={<Checkbox />}
                          value={item}
                          label={item}
                        ></FormControlLabel>
                      );
                    })}
                  </FormControl>
                );
              case 5:
                const arr5 = questionData?.[4].option;
                return (
                  <Box>
                    {arr5.map((item, id) => {
                      return (
                        <div key={id}>
                          <span>{questionData[4].questionOption[id]}</span>
                          <span>{question5Arr[id]}</span>
                          <span>
                            <Button
                              disabled={question5Arr.includes(item)}
                              onClick={() => handleOnMatchTheFolloin(item)}
                            >
                              {item}
                            </Button>
                          </span>
                        </div>
                      );
                    })}
                  </Box>
                );
            }
          })()}
        </Box>
        <Button
          onClick={() => {
            navigate("/result", { state: answerArr });
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Question;
