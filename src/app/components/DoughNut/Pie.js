'use client'

import React from 'react';
import { Doughnut} from 'react-chartjs-2'



const PieChart = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        data: data.values,
        backgroundColor: ['#98D89E','#F6DC7D','#EE8484'],
        cutout:'75%',
      },
    ],
  };

  const chartOptions = {
    events:[],
    maintainAspectRatio: false,
    responsive: true,
    elements: {
      arc: {
        borderWidth:0,
      },
    },
    plugins: {
      legend: {
        display: false

      },
    },
    layout: {
      padding: {
        top: 5,
        bottom: 5,
      },
    },
    scales: {
      yAxis: {
        display: false, 
      },
    },
  };

  return <Doughnut data={chartData} options={chartOptions} />;
};

export default PieChart;

