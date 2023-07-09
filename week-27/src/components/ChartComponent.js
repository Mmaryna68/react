import React from "react";
import { Chart } from "react-google-charts";

const ChartComponent = () => {
  const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Sleep", 7],
    ["Exercise", 4],
    ["Socialize", 2],
  ];

  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={{
        title: "My Daily Activities",
      }}
    />
  );
};

export default ChartComponent;
