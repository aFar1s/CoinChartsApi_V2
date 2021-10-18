import React from 'react'
import LineChart from "../Components/LineChart"


/*
- need unix time stamp from and to date
- need the key.id from coins(App.js)
- need currency selected from Home.jsx
*/


const Charts = ({ chartData, chartCoin }) => {
        
    const priceAxisY = () => {
         let priceArray = [];
         
         for (let i=0; i < 184; i++) {
             priceArray.push(chartData.prices[i][1].toFixed(2))
         }
 
         return priceArray
     }

     console.log(priceAxisY())

     const timeAxisXRaw = () => {
        let timeArray = [];
        
        for (let i=0; i < 184; i++) {
            timeArray.push(chartData.prices[i][0])
        }

        return timeArray
    }


     let timeAxisLocal = []

     const timeAxisX = () => {

        for (let i = 0; i < timeAxisXRaw().length; i++) {
          const dateObject = new Date(timeAxisXRaw()[i]);
          let dateStr = dateObject.toLocaleString("en-US", { month: "short" })
          let dayNum = dateObject.toLocaleString("en-US", { day: "numeric" })
          let dateArray = []
          dateArray.push(dayNum, dateStr);
          dateArray = dateArray.join("/");
          timeAxisLocal.push(dateArray)
        }
      
        return timeAxisLocal
      
      }

      console.log(timeAxisX())

        // priceAxisY = priceAxisY.toFixed(2)
        
        return ( 
            <div>
                <div className="chart">
                    <LineChart 
                    pushChartCoin={chartCoin}
                    timeAxisX={timeAxisX()}
                    priceAxisY={priceAxisY()}
                    // priceAxisY={priceAxisY}
                    />
                </div>
           <p>{chartCoin}</p>
           <p>{chartData.prices}</p>
          </div>
        )
}

export default Charts
