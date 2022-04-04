import React from 'react';
import './App.css';
import DropDown from './DropDown.js';
import ButtonAction from './Button.js';
import ConversionOutput from './ConversionOutput.js';
import Stack from '@mui/material/Stack';
import { useGetRatesByCountryQuery } from './API';

function App() {

  const rates = useGetRatesByCountryQuery('AUD')

  return (
    <div className="App">
      <ConversionOutput />
      console.log(useGetRatesByCountryQuery);
      <Stack direction="row" spacing={2}>
        <DropDown /> 
        <ButtonAction />
      </Stack>
    </div>
  );
}

export default App;
