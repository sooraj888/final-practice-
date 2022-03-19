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
import React, { useEffect, useMemo, useState } from "react";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import QuestionIndicator from "../components/QuestionIndicator";
import questionData from "./../questionData.json";
const Question = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();
  let id: number = Number(useParams().id);
  if (!id) {
    id = 1;
  }

  type answerArrayType = Array<string | Array<any>>;
  const [answerArray, setAnswerArray] = useState<answerArrayType>(
    Array(4).fill([])
  );
  const [question4, setQuestion4] = useState<any[]>([]);
  const handleCheckBox = (value: number) => {
    setQuestion4((prev: any) => {
      let updatearr = [...prev];
      if (!updatearr.includes(value)) {
        updatearr = [value, ...updatearr];
      } else {
        updatearr = updatearr.filter((item: any) => {
          return item !== value;
        });
      }
      return updatearr;
    });
  };

  useMemo(() => {
    setAnswerArray((prev: any) => {
      const updateArr = [...prev];
      updateArr[3] = question4;
      return updateArr;
    });
  }, [question4]);

  useMemo(() => {
    console.log(answerArray);
  }, [answerArray]);

  if (id > 4 && id < 1) {
    return <h1>Question Not Found</h1>;
  }
  return (
    <Box>
      <QuestionIndicator answerArray={answerArray} id={id} />
      <Box>
        {<h5>{questionData?.[id - 1]?.question}</h5>}

        {(() => {
          switch (id) {
            case 1:
              return (
                <TextField
                  value={answerArray[0]}
                  onChange={(e: any) => {
                    setAnswerArray((prev: any) => {
                      const updateArr = [...prev];
                      updateArr[0] = e.target.value;
                      return updateArr;
                    });
                  }}
                ></TextField>
              );
            case 2:
              const arr2: string[] = questionData?.[1].option;
              return (
                <FormControl>
                  <RadioGroup
                    value={answerArray[1]}
                    onChange={(e: any) => {
                      setAnswerArray((prev: any) => {
                        const updateArr = [...prev];
                        updateArr[1] = e.target.value;
                        return updateArr;
                      });
                    }}
                  >
                    {arr2?.map((item: any) => {
                      return (
                        <FormControlLabel
                          label={item}
                          key={item}
                          value={item}
                          control={<Radio />}
                        ></FormControlLabel>
                      );
                    })}
                  </RadioGroup>
                </FormControl>
              );
            case 3:
              const arr3: string[] = questionData?.[2].option;
              return (
                <FormControl>
                  <RadioGroup
                    value={answerArray[2]}
                    onChange={(e: any) => {
                      setAnswerArray((prev: any) => {
                        const updateArr = [...prev];
                        updateArr[2] = e.target.value;
                        return updateArr;
                      });
                    }}
                  >
                    {arr3?.map((item: any) => {
                      return (
                        <FormControlLabel
                          label={item}
                          key={item}
                          value={item}
                          control={<Radio />}
                        ></FormControlLabel>
                      );
                    })}
                  </RadioGroup>
                </FormControl>
              );
            case 4:
              const arr4: string[] = questionData?.[3].option;
              return (
                <FormControl>
                  {" "}
                  {arr4?.map((item: any): JSX.Element => {
                    return (
                      <FormControlLabel
                        checked={question4.includes(item)}
                        onClick={() => handleCheckBox(item)}
                        label={item}
                        key={item}
                        value={item}
                        control={<Checkbox />}
                      ></FormControlLabel>
                    );
                  })}
                </FormControl>
              );
          }
        })()}
      </Box>

      <Box>
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
