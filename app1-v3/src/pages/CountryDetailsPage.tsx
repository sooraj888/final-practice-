import { Box, CircularProgress } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import CountryDeatils from "../components/CountryDeatils";
import ShowError from "../utility/ShowError";
import useAPIFeatch, { useAPIFeatchType } from "./../hooks/useAPIFeatch";

const CountryDetailsPage = (): JSX.Element => {
  const URL: string = "https://restcountries.com/v3.1/name/";
  const countryNAme: string | undefined = useParams().name;

  const { data, error, isLoading }: useAPIFeatchType = useAPIFeatch(
    URL,
    countryNAme
  );

  return (
    <Box>
      {error ? (
        <ShowError />
      ) : isLoading ? (
        <>
          <CircularProgress />
          <p>Loadding</p>
        </>
      ) : (
        <CountryDeatils countryData={data[0]} />
      )}
    </Box>
  );
};

export default CountryDetailsPage;
