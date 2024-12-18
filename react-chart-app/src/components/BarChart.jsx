import React from "react";
import ChartComponent from "./ChartComponent";


const BarChart = ({ data }) => {
    const chartData = {
        labels: data.months,
        datasets: [
          {
            label: "Monthly Sales",
            data: data.sales,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(99, 255, 132, 1)",
            borderWidth: 1,
          },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
          legend: { display: true },
        },
      };
    
      return <ChartComponent type="bar" data={chartData} options={options} />;


};

export default BarChart;