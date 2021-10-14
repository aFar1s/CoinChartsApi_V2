import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import LineChart from "../Components/LineChart"


/*
- need unix time stamp from and to date
- need the key.id from coins(App.js)
- need currency selected from Home.jsx
*/


const Charts = ({ pushChartCoin }) => {
    
    const [chartData, setChartData] = useState([]);
    
    useEffect(() => {
        axios
        .get(
            `https://api.coingecko.com/api/v3/coins/${pushChartCoin}/market_chart/range?vs_currency=usd&from=1618342746&to=1634182746`
            )
            .then((res) => {
                setChartData(res.data);
            });
        }, [ pushChartCoin ]);
        
        // console.log(chartData.prices[0][1])
        
        
        // let priceAxisY = [];
        // for (let i=0; i < 184; i++) {
        //     priceAxisY.push(chartData.prices[i][1])
        // }
        // console.log(priceAxisY)
        
        return ( 
            <div>
                <div className="chart">
                    <LineChart pushChartCoin={pushChartCoin}/>
                </div>
           <p>{pushChartCoin}</p>
           <p>{chartData.prices}</p>
          </div>
    )
}

export default Charts
