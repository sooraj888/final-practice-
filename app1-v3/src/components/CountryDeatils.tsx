import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { NavigateFunction, useNavigate } from "react-router-dom";
import useAPIFeatch, { useAPIFeatchType } from "../hooks/useAPIFeatch";
import ShowError from "../utility/ShowError";
import { classicNameResolver } from "typescript";

const useStyle = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  root2: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "30px",
    width: "200px",
    height: "400px",
    border: "1px solid black",
    justifyContent: "space-around",
    padding: "20px",
    borderRadius: "10px",
  },
});

const CountryDeatils = ({ countryData }: any): JSX.Element => {
  const classes = useStyle();
  const [showWeather, setShowWeather] = useState<boolean>(false);
  const navigate: NavigateFunction = useNavigate();

  const url: string =
    "http://api.weatherstack.com/current?access_key=78ae6ba411469f63795fe8974e0e3a45&query=";

  const { data }: useAPIFeatchType = useAPIFeatch(url, countryData?.capital);

  //   console.log(countryData);

  console.log(data);
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {!showWeather ? (
        <Card className={classes.root}>
          <CardMedia
            component={"img"}
            image={countryData?.flags?.png}
            alt="flag"
          ></CardMedia>
          <CardContent>
            <Typography>Country Name</Typography>
            <Typography>{countryData?.name?.common}</Typography>
            <Typography> Capital</Typography>
            <Typography>{countryData?.capital}</Typography>
            <Typography> Population</Typography>
            <Typography>{countryData?.population}</Typography>
            <Typography> Lat-Lng</Typography>
            <Typography>
              {countryData?.latlng?.[0]}-{countryData?.latlng?.[0]}
            </Typography>
          </CardContent>
          <Button
            onClick={(): void => {
              setShowWeather(true);
            }}
            variant="contained"
            color="primary"
          >
            Weather Deatails
          </Button>
        </Card>
      ) : (
        <Card>
          {!data ? (
            <ShowError></ShowError>
          ) : (
            <>
              <Box>
                <CardContent>
                  <Typography>Region</Typography>
                  <Typography>{data?.location?.region}</Typography>
                  <Typography>Temperature</Typography>
                  <Typography>{data?.current?.temperature}</Typography>
                  <Typography>Wind Speed</Typography>
                  <Typography>{data?.current?.wind_speed}</Typography>
                </CardContent>
                <Box>
                  <CardMedia
                    image={data?.current?.weather_icons[0]}
                    alt="weather icon"
                    component={"img"}
                  ></CardMedia>
                  <Typography>{data?.current?.weather_descriptions}</Typography>
                </Box>
              </Box>
            </>
          )}
          <Button
            onClick={(): void => {
              navigate("/");
            }}
          >
            Search Another Country
          </Button>
        </Card>
      )}
    </Box>
  );
};

export default CountryDeatils;
