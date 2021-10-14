import React from 'react'
import { Link } from 'react-router-dom'


const Coin = ({ coinId, name, image, symbol, price, market_cap, priceChange, currencyText, getChartCoin }) => {

    return (
        
        <div className="coin-container">
            <Link to="/charts" onClick={() => {console.log(coinId); getChartCoin(coinId)}}>
              <div className="coin-row">
                  <div className="coin">
                      <img src={image} alt='coin-logo' />
                      <h1>{name}</h1>
                      <p className="coin-symbol">{symbol.toUpperCase()}</p>
                  </div>
                  <div className="coin-data">
                      <p className="coin-price">{currencyText.toUpperCase()} {price}</p>
                      <p className="coin-marketcap">{currencyText.toUpperCase()} {market_cap.toLocaleString()}</p>
                      {priceChange < 0 ? (
                          <p className="coin-percent-text red">{priceChange}%</p>
                      ) : (
                          <p className="coin-percent-text green">{priceChange}%</p> 
                         )}
                  </div>
              </div>
            </Link>
      </div>
    )
}

export default Coin
