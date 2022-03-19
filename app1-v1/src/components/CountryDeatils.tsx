import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  colors,
  Typography,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";
import React, { useEffect, useState } from "react";
import { Navigate, NavigateFunction, useNavigate } from "react-router-dom";
import useFeacthApi from "../hooks/useFeacthApi";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "30px",
  },
  root1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "cenetr",
  },
  title: {
    fontWeight: 700,
    color: "gray",
  },
  subTitle: { fontSize: "20px", fontWeight: 900 },
  root3: {
    display: "flex",
    padding: "30px",
  },
  btn: {
    width: "100%",
  },
});

const CountryDeatils = ({ countryData }: any): JSX.Element => {
  const classes = useStyles();
  const navigate: NavigateFunction = useNavigate();
  const [showWeather, setShowWeather] = useState<boolean>(false);
  const URL: string =
    "http://api.weatherstack.com/current?access_key=78ae6ba411469f63795fe8974e0e3a45&query=";
  const { data } = useFeacthApi(URL, countryData?.capital?.[0]);

  useEffect((): void => {
    console.log(data);
  }, [data]);

  console.log(countryData);
  return (
    <Box className={classes.root}>
      {!showWeather ? (
        <Card className={classes.root1}>
          <CardMedia
            component={"img"}
            image={countryData?.flags?.png}
            alt="flag"
          ></CardMedia>
          <CardContent>
            <Typography className={classes.title}>County</Typography>
            <Typography className={classes.subTitle}>
              {countryData?.name?.common}
            </Typography>
            <Typography className={classes.title}>Capital</Typography>
            <Typography className={classes.subTitle}>
              {countryData?.capital?.[0]}
            </Typography>
            <Typography className={classes.title}>Population</Typography>
            <Typography className={classes.subTitle}>
              {countryData?.population}
            </Typography>
            <Typography className={classes.title}>Lat-Lng</Typography>
            <Typography className={classes.subTitle}>
              {countryData?.latlng?.[0]}-{countryData?.latlng?.[1]}
            </Typography>
          </CardContent>
          <Button
            variant="contained"
            color="primary"
            className={classes.btn}
            onClick={() => {
              setShowWeather(true);
            }}
          >
            Capital Weather
          </Button>
        </Card>
      ) : (
        <Card>
          <Box className={classes.root3}>
            <CardContent>
              <Typography className={classes.title}>Region</Typography>
              <Typography className={classes.subTitle}>
                {data?.location?.region}
              </Typography>
              <Typography className={classes.title}>Temperature</Typography>
              <Typography className={classes.subTitle}>
                {data?.current?.temperature}
              </Typography>
              <Typography className={classes.title}>Wind-Speed</Typography>
              <Typography className={classes.subTitle}>
                {data?.current?.wind_speed}
              </Typography>
            </CardContent>
            <Box>
              <CardMedia
                component={"img"}
                image={data?.current?.weather_icons?.[0]}
                alt="weather icon"
              ></CardMedia>
              <CardContent>
                <Typography>{data?.current?.weather_descriptions}</Typography>
              </CardContent>
            </Box>
          </Box>

          <Button
            color="primary"
            className={classes.btn}
            variant="contained"
            onClick={(): void => {
              navigate("/");
            }}
          >
            Search Other Country
          </Button>
        </Card>
      )}
    </Box>
  );
};

export default CountryDeatils;
