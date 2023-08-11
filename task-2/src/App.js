import logo from './logo.svg';
import './App.css';
import { InputData } from './component/InputData';
import { useState } from 'react';
import { DisplayData } from './component/DisplayData';

function App() {
  
  const [inputData, setInputData] = useState('');
  const buttonClick = (name) => {
      setInputData(name)
  }
  return (
    <div className="App">
      <InputData  buttonClick={buttonClick}/>
      <DisplayData inputData={inputData}/>
    </div>
  );
}

export default App;
