import React from 'react';
import { Line } from 'react-chartjs-2';


const LineChart = ({ pushChartCoin, priceAxisY, timeAxisX }) => {
    
   
    const data = {
        labels: timeAxisX,
        datasets: [
            {
                label: `Price of ${pushChartCoin} past 6 months`,
                data: priceAxisY,
                fill: false,
                backgroundColor: 'rgb(24, 118, 209)',
                borderColor: 'rgba(24, 118, 209, 0.2)',
            },
        ],
    };
    
    function yAxisLabel() {

        let yAxis = []
    
        for (let i = 1; i < data.datasets[0].data.length + 1; i++) {
            yAxis.push(`${i}`)
        }
    
        return yAxis
    }

    console.log(yAxisLabel())
    
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
     <p>{data.datasets[0].data.length}</p>
     <p>{yAxisLabel()}</p>
    </>
)};

export default LineChart;