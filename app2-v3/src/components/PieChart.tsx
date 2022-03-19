import { Box } from "@material-ui/core";
import React from "react";

type PieChartType = { percent: number };

const PieChart = ({ percent }: PieChartType): JSX.Element => {
  return (
    <div
      style={{
        display: "flex",
        width: "200px",
        height: "200px",
        background: `conic-gradient(green ${percent}% ,red 0%)`,
        borderRadius: "50%",
      }}
    ></div>
  );
};

export default PieChart;
