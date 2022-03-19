import { Box } from "@material-ui/core";
import React from "react";

const PieChart = ({ firstColorPercent }: any) => {
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        background: `conic-gradient(green ${firstColorPercent}%, red 0% )`,
        borderRadius: "50%",
      }}
    ></div>
  );
};

export default PieChart;
