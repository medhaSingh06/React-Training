import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { InputData } from './component/InputData';
import { DisplayData } from './component/DisplayData';

// two child component -input- display
// parent-add btn
// delete
function App() {

  const [nameArr, setNameArr] = useState([]);

    const addName = (name) => {
      setNameArr( (prev) => {
        return [{name, id: Math.random().toString()}, ...prev]
      })
    }

    const deleteName = (id) => {
      // console.log(id)
      const updatedItems = nameArr.filter(item => item.id !== id);
    setNameArr(updatedItems);
  };
    
  return (
    <div className="App">
        <InputData addName = {addName} />
         <DisplayData  nameArr={nameArr} deleteName= {deleteName}/>
    </div>
  );
}

export default App;
