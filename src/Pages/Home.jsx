import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@mui/styles'
import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel';

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})

const Home = ({ changeApiCurrency }) => {

    const classes = useStyles()
    const [value, setValue] = useState('usd')
     
    return (
        <div>
          <div className="text-container">
            <h2>
                Welcome to CoinCharts
            </h2>
            <p>  CoinCharts brings transparency to the cryptoeconomy.
             We want to help investors, regulators, 
             and the public make sense of this revolutionary new asset class, 
             and are building data tools that will drive informed decision making and investment. 
             We believe that crypto will democratize access to information, break down data silos, 
             and ultimately give everyone the tools to build wealth.</p>
          </div>
          <div className="data-input">
          <FormControl className={classes.field}>
          <FormLabel>Select Currency</FormLabel>
          <RadioGroup value={value} onChange={(e) => setValue(e.target.value)}>
            <FormControlLabel value="usd" control={<Radio />} label="US Dollar" />
            <FormControlLabel value="sgd" control={<Radio />} label="Singapore Dollar" />
            <FormControlLabel value="gbp" control={<Radio />} label="British Pound" />
            <FormControlLabel value="jpy" control={<Radio />} label="Japanese Yen" />
          </RadioGroup>
          <Link to="/data">
           <button className="home-button" onClick={() => changeApiCurrency(value)}>Let's Go!</button>
          </Link>
        </FormControl>
          </div>
        </div>
    )
  }
  
  export default Home
  
