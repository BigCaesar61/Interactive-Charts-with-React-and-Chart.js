//Task 2: Create the Reusable ChartComponent

import React, {useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = ({type, data, options }) => {
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
          const ctx = chartRef.current.getContext('2d'); 
          chartInstanceRef.current = new Chart(ctx, {
            type,
            data,
            options,
          });
        }
    
        return () => {
          //cleanup logic inside the return function of useEffect
          if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
          }
        };
      }, [type, data, options]);//ensures the correct dependency array for the initialization
    
  useEffect(() => {
    //updates chart dynamically
    if (chartInstanceRef.current) {
      chartInstanceRef.current.data = data;
      chartInstanceRef.current.options = options;
      chartInstanceRef.current.update();
    }
  }, [data, options]);

  return <canvas ref={chartRef}></canvas>;
};

export default ChartComponent;