import { Box, CircularProgress } from "@material-ui/core";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CountryDeatils from "../components/CountryDeatils";
import useFeacthApi, { useFeacthApiType } from "../hooks/useFeacthApi";
import ShowError from "../utility/ShowError";

const CountryDeatilsPage = (): JSX.Element => {
  let countryName: string | undefined = useParams().name;
  const URL: string = "https://restcountries.com/v3.1/name/";
  const { data, error, isLoading }: useFeacthApiType = useFeacthApi(
    URL,
    countryName
  );

  return (
    <Box sx={{ display: "flex", justifyContent: "center", margin: "20px" }}>
      {error ? (
        <ShowError></ShowError>
      ) : isLoading ? (
        <CircularProgress></CircularProgress>
      ) : (
        <CountryDeatils countryData={data?.[0]} />
      )}
    </Box>
  );
};

export default CountryDeatilsPage;
