import { Box, CircularProgress } from "@material-ui/core";
import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import CountryDetailsCard, {
  useApiFetchType,
} from "../components/CountryDetailsCard";
import useApiFetch from "../hooks/useApiFetch";
import ShowError from "../utility/ShowError";

const CountryDetailsPage = (): JSX.Element => {
  const url: string = "https://restcountries.com/v3.1/name/";
  const countryName: string | undefined = useParams().name;
  const { data, error, isLoading }: useApiFetchType = useApiFetch(
    url,
    countryName
  );
  useEffect((): void => {
    console.log(data[0]);
  }, [data]);
  return (
    <Box sx={{ display: "flex", padding: "30px" }}>
      {error ? (
        <ShowError></ShowError>
      ) : isLoading ? (
        <>
          <CircularProgress />
          <p>Loading...</p>
        </>
      ) : data ? (
        <CountryDetailsCard countryData={data?.[0]}></CountryDetailsCard>
      ) : (
        <ShowError />
      )}
    </Box>
  );
};

export default CountryDetailsPage;
