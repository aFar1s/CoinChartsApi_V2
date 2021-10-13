import React from 'react'
import { Link } from 'react-router-dom'


const FilterButtons = ({ changePriceOrder }) => {

    return (
        <div>
            <Link to="/data">
           <button onClick={() => 
            changePriceOrder('price_asc')}>Sort Price Ascending</button>
            </Link>
           <button onClick={() => 
            changePriceOrder('price_desc')}>Sort Price Descending</button> 
        </div>
    )
}

export default FilterButtons
