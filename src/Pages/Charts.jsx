import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

/*
- need unix time stamp from and to date
- need the key.id from coins(App.js)
- need currency selected from Home.jsx
*/

const Charts = ({ pushChartCoin }) => {

    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        axios
          .get(
            `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=1618342746&to=1634182746`
          )
          .then((res) => {
            setChartData(res.data);
          });
      }, []);

      console.log(chartData)

    return ( 
        <div>
            <p>
                {pushChartCoin}
            </p>
        </div>
    )
}

export default Charts
