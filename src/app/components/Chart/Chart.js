'use client'
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { Lato} from 'next/font/google'

const lato = Lato({ weight:['400'],style:['normal'],subsets:['latin']})

Chart.register(...registerables)

const Charts = ({ labels, data1, data2 }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        
        
        label: 'Guest',
        data: data2,
        backgroundColor: '#98D89E',
        borderRadius: 5,
        categoryPercentage:0.4,
        barPercentage:0.8

      },
      {
        
        
        label: 'User',
        data: data1,
        backgroundColor: '#EE8484',
        borderRadius: 5,
        categoryPercentage:0.4,
        barPercentage:0.8,
        
      },
    ],
  };

  const chartOptions = {
    events:[],
    maintainAspectRatio: false,
    scales: {
      y: {
        
        beginAtZero: true,
        ticks: {
          font: {
            style:lato.className,
            family:'sans-serif',
            size:12,
        },
        color:"#858585",
          stepSize: 100,
          callback: (value) => {
            return value === 0 ? value : value.toString();
          },
          max: 500,
          min: 0,
        },
      },
      x: {
        grid: {
            display: false,
            // drawBorder:false,
        },
        
        
      }
    },
    plugins: {
        legend: {
            display: false
        },
        tooltip: {
          enabled: false 
        },
        
    }
  };

  return <Bar data={chartData} options={chartOptions} />;
};

export default Charts;