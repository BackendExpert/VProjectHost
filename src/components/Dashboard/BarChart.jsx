// src/components/BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const BarChart = () => {
    
  // Sample data with brown shades
  const data = {
    labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6'],
    datasets: [
      {
        label: '# of Items',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          '#008000',  // brown
          '#008000',  // saddlebrown
          '#008000', // chocolate
          '#008000',  // sienna
          '#008000',    // maroon
          '#008000', // darkgoldenrod
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false, // Hide grid lines on x-axis
        },
      },
      y: {
        grid: {
          display: false, // Hide grid lines on y-axis
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full h-[300px]  p-4 bg-white rounded shadow-md mb-4">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;