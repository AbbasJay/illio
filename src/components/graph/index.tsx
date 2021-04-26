import React from "react";

import { ChartData } from "../../types";
import { Chart } from "react-google-charts";

interface IProps {
  chartData: ChartData[];
}

const ShowGraph = ({ chartData }: IProps) => {
  if (!chartData.length) {
    return null;
  }

  return (
    <Chart
      width={"100%"}
      height={400}
      chartType="LineChart"
      loader={<div>Loading Chart</div>}
      data={chartData}
      options={{
        intervals: { style: "sticks" },
        legend: "none",
        hAxis: {
          title: "date",
        },
        vAxis: {
          title: "price at close",
        },
      }}
    />
  );
};

export default ShowGraph;
