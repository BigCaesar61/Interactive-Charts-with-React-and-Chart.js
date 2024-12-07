//Task 3: Implement Specific Chart Components

import React from "react";
import ChartComponent from "./ChartComponent";

const LineChart = ({ data }) => {
    const chartData = {
      labels: data.months,
      datasets: [
        {
          label: "Monthly Profits",
          data: data.profits,
          fill: false,
          borderColor: "rgba(99, 255, 132, 1)",
          tension: 0.1,
        },
      ],
    };
  
    const options = {
      responsive: true,
      plugins: {
        legend: { display: true },
      },
    };
  
    return <ChartComponent type="line" data={chartData} options={options} />;
  };
  
  export default LineChart;