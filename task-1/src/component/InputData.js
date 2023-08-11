import React,{useState} from 'react'
import { DisplayData } from './DisplayData';

export const InputData = (props) => {
    const [name, setName] = useState('');
    
    
    return (
    <form>
        <label>Enter Name:</label>
        <input 
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            
        />
        <DisplayData name={name} />
    </form>
 )
}
