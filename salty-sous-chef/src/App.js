import React from 'react';
import './App.css';
import DropDown from './DropDown.js';
import ButtonAction from './Button.js';
import ConversionOutput from './ConversionOutput.js';
import Stack from '@mui/material/Stack';
// import { useGetRatesByCountryQuery } from './API';
import { useSelector } from 'react-redux';

export const RatesList = (props) => {
  const rates = useSelector((state) => state.rate[props.rates])
  return(
    <div>{rates.text}</div>
  )
}

function App() {

    // const rates = useSelector((state: getState()) => state.rates)
  // const rates = useGetRatesByCountryQuery('AUD')

  return (
    <div className="App">
      <ConversionOutput />
      {/* <RatesList /> */}
      <Stack direction="row" spacing={2}>
        <DropDown /> 
        <ButtonAction />
      </Stack>
    </div>
  );
}

export default App;
