import React from 'react'


const FilterButtons = ({ changePriceOrder }) => {

    return (
        <div>
            
           <button onClick={() => 
            changePriceOrder('price_asc')}>Sort Price Ascending</button>
            
           <button onClick={() => 
            changePriceOrder('price_desc')}>Sort Price Descending</button> 

            <button onClick={() => 
            changePriceOrder('market_cap_asc')}>Sort Market Cap Ascending</button>
            
           <button onClick={() => 
            changePriceOrder('market_cap_desc')}>Sort Market Cap Descending</button> 
        </div>
    )
}

export default FilterButtons
