import React from 'react';
import { Line } from 'react-chartjs-2';


const LineChart = ({ pushChartCoin }) => {
    
    const data = {
      labels: ['1', '2', '3', '4', '5', '6'],
      datasets: [
        {
          label: `Price of ${pushChartCoin} past 6 months`,
          data: [12, 19, 3, 5, 2, 3],
          fill: false,
          backgroundColor: 'rgb(24, 118, 209)',
          borderColor: 'rgba(24, 118, 209, 0.2)',
        },
      ],
    };
    
    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
      height: 450, 
      width: 900
    };

    return (
   <>
     <div className='header'>
       <h1 className='title'>Line Chart Of {pushChartCoin}</h1>
     </div>
     <Line data={data} options={options} height={450} width={900}/>
    </>
)};

export default LineChart;