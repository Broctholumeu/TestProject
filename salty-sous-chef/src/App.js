import React from 'react';
import './App.css';
import DropDown from './DropDown.js';
import ButtonAction from './Button.js';
import ConversionOutput from './ConversionOutput.js';
import Stack from '@mui/material/Stack';
import useEffect from 'react';
import useState from 'react';

function App() {

  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // const BASE_URL = "http://data.fixer.io/api/latest?access_key=ae664278ce69935cc5d30cf63284a78c"

  // useEffect(() => {
  //   fetch(BASE_URL)
  //   .then((response) => {
  //       if (!response.ok) {
  //           throw new Error(
  //               "This is an HTTP error: The status is ${response.status}"
  //           );
  //       }
  //       return response.json();
  //   })
  //   .then((actualData) => {
  //     setData(actualData);
  //     setError(null);
  //   })
  //   .catch((err) => {
  //       setError(err.message);
  //       setData(null);
  //   })
  //   .finally(() => {
  //     setLoading(false);
  //   })
  // }, [])

  return (
    <div className="App">
      <ConversionOutput />
      <Stack direction="row" spacing={2}>
        <DropDown /> 
        <ButtonAction />
      </Stack>
    </div>
  );
}

export default App;
