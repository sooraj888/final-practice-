import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useEffect, useState } from "react";
import { Navigate, NavigateFunction, useNavigate } from "react-router-dom";
import useApiFetch from "../hooks/useApiFetch";
import ShowError from "../utility/ShowError";

const useStyles = makeStyles({
  title: {
    fontWeight: 700,
    color: "gray",
  },
  subTitle: { fontWeight: 900 },
});

export type useApiFetchType = {
  data: any;
  isLoading: boolean;
  error: boolean;
};
const CountryDetailsCard = ({ countryData }: any): JSX.Element => {
  const classes = useStyles();
  const navigate: NavigateFunction = useNavigate();
  const url: string =
    "http://api.weatherstack.com/current?access_key=dbd5b5a511521f50e7b63d9be7d96047&query=";
  const { data, error }: useApiFetchType = useApiFetch(
    url,
    countryData?.capital
  );
  const [showWeather, setShowWeather] = useState<boolean>(false);

  useEffect((): void => {
    console.log(data);
  }, [data]);
  return (
    <Card>
      {!showWeather ? (
        <Box
          sx={{
            display: "flex",
            padding: "30px",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia component={"img"} image={countryData?.flags?.png} />
          <CardContent>
            <Typography className={classes.title}>Country</Typography>
            <Typography className={classes.subTitle}>
              {countryData?.name?.common}
            </Typography>
            <Typography className={classes.title}>Capital</Typography>
            <Typography className={classes.subTitle}>
              {countryData?.capital}
            </Typography>
            <Typography className={classes.title}>Population</Typography>
            <Typography className={classes.subTitle}>
              {countryData?.population}
            </Typography>
            <Typography className={classes.title}>Lat-Lng</Typography>
            <Typography>
              {countryData?.latlng?.[0]}-{countryData?.latlng?.[1]}
            </Typography>
          </CardContent>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setShowWeather(true);
            }}
          >
            Show Weather Data
          </Button>
        </Box>
      ) : (
        <>
          {error ? (
            <ShowError />
          ) : (
            <Box
              sx={{
                display: "flex",
                padding: "30px",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  padding: "30px",
                }}
              >
                <CardContent>
                  <Typography className={classes.title}>Region</Typography>
                  <Typography className={classes.subTitle}>
                    {data?.location?.region}
                  </Typography>
                  <Typography className={classes.title}>Temperature</Typography>
                  <Typography className={classes.subTitle}>
                    {data?.current?.temperature}
                  </Typography>
                  <Typography className={classes.title}>Wind_speed:</Typography>
                  <Typography className={classes.subTitle}>
                    {data?.current?.wind_speed}
                  </Typography>
                </CardContent>

                <Box>
                  <CardMedia
                    component={"img"}
                    image={data?.current?.weather_icons?.[0]}
                    alt="flag"
                  />
                  <Typography className={classes.subTitle}>
                    {data?.current?.weather_descriptions}
                  </Typography>
                </Box>
              </Box>
              <Button
                variant="contained"
                color="primary"
                onClick={(): void => {
                  navigate("/");
                }}
              >
                Search Another country
              </Button>
            </Box>
          )}
        </>
      )}
    </Card>
  );
};

export default CountryDetailsCard;
