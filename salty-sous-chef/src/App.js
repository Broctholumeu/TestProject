import logo from './logo.svg';
import './App.css';
import DropDown from './DropDown.js';
import ButtonAction from './Button.js';
import TextOutput from './TextOutput';
import Stack from '@mui/material/Stack';

function App() {
  return (
    <div className="App">
      <TextOutput />
      <Stack direction="row" spacing={2}>
        <DropDown /> 
        <ButtonAction />
      </Stack>
    </div>
  );
}

export default App;
