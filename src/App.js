import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./App.css";
import Coin from "./Components/Coin";
import Form from "./Components/Form";
import FilterButtons from "./Components/FilterButtons";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Charts from "./Pages/Charts";
// import CoinsData from "./Data/CoinsData"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [applyCurrency, setapplyCurrency] = useState("usd");
  const [applyOrder, setApplyOrder] = useState("market_cap_desc");
  const [chartCoin, setChartCoin] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${applyCurrency}&order=${applyOrder}&per_page=100&page=1&sparkline=false&price_change_percentage=7d%2C30d%2C200d%2C1y`
      )
      .then((res) => {
        setCoins(res.data);
      });
  }, [applyCurrency, applyOrder]);

  const changeTextField = (e) => {
    setSearch(e.target.value);
  };

  const filteredSearchString = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Router>
      {/* <CoinsData
      apiArray={coins} 
      /> */}
      <div className="App">
        <Navbar />
        <div className="content-container">
          <Switch>
            <Route exact path="/">
              <Home
                changeApiCurrency={(applyCurrency) =>
                  setapplyCurrency(applyCurrency)
                }
              />
            </Route>
            <Route exact path="/data">
              <div className="coin-component-container">
                <Form changeTextField={changeTextField} />
                <FilterButtons
                  changePriceOrder={(applyOrder) => setApplyOrder(applyOrder)}
                />
                {filteredSearchString.map((coin) => {
                  return (
                    <Coin
                      key={coin.id}
                      coinId={coin.id}
                      name={coin.name}
                      image={coin.image}
                      symbol={coin.symbol}
                      volume={coin.total_volume}
                      price={coin.current_price}
                      priceChange={coin.price_change_percentage_24h}
                      market_cap={coin.market_cap}
                      currencyText={applyCurrency}
                      getChartCoin={setChartCoin}
                    />
                  );
                })}
              </div>
            </Route>
            <Route exact path="/about-us">
              <div className="about-us-container">
                <AboutUs />
              </div>
            </Route>
            <Route exact path="/contact-us">
              <div className="contact-us-container">
                <ContactUs />
              </div>
            </Route>
            <Route exact path="/charts">
              <div className="charts-container">
                <Charts pushChartCoin={chartCoin} />
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
