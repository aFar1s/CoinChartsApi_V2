import React from 'react'

const Coin = ({ name, image, symbol, price, market_cap, priceChange, currencyText }) => {
    return (
        <div className="coin-container">
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
                        <p className="coin-percent-text red">{priceChange.toFixed(2)}%</p>
                    ) : (
                        <p className="coin-percent-text green">{priceChange.toFixed(2)}%</p> //! apply color change in css
                       )}
                </div>
            </div>
        </div>
    )
}

export default Coin
