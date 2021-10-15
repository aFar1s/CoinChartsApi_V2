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
            <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Vivamus luctus erat et ante aliquam, sed condimentum ex dapibus.
                 Nullam dolor enim, iaculis non ligula nec, sodales interdum arcu.
                 Vivamus vel purus interdum, malesuada augue tincidunt, scelerisque ligula.
                 Quisque feugiat commodo scelerisque. Nulla ac enim elit. 
                 Suspendisse lacus lorem, tempor et dictum et, rhoncus eu leo. 
                 Nunc lacinia magna vitae tortor congue feugiat. 
                 Nulla luctus quam ac vestibulum bibendum.</p>
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
  
