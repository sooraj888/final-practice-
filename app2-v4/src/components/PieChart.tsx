import { Box } from "@material-ui/core";
import React from "react";
type PieChartType = { precent: number };
const PieChart = ({ precent }: PieChartType): JSX.Element => {
  return (
    <div
      style={{
        display: "flex",
        height: "200px",
        width: "200px",
        background: `conic-gradient(green ${precent}%, red 0%) `,
        borderRadius: "50%",
      }}
    ></div>
  );
};

export default PieChart;
