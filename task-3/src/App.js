import logo from './logo.svg';
import './App.css';
import { InputData } from './component/InputData';
import { useState } from 'react';
import { DisplayData } from './component/DisplayData';


// input element-- input and btn- clear the field
// input empty---btn- disabled
// to display
// show the list 

function App() {

  const [nameArray, setNameArray] = useState([]);
  
  const NameInput = (name) => {
    
    setNameArray( (prev) => {
      return [{name, id: Math.random().toString()}, ...prev]
    })

  }
  return (
    <div className="App">
      <InputData NameInput= {NameInput} />
      <DisplayData  nameArray = {nameArray}/>
    </div>
  );
}

export default App;
