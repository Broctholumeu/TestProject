import './App.css';
import DropDown from './DropDown.js';
import ButtonAction from './Button.js';
import ConversionOutput from './ConversionOutput.js';
import Stack from '@mui/material/Stack';

function App() {
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
