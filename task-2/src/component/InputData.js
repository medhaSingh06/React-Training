import React from 'react'
import { useState } from 'react'

export const InputData = (props) => {
  
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
        e.preventDefault();
        props.buttonClick(name)
  }
    return (
    <form onSubmit={handleSubmit}>
        <label>Enter a name:</label>
        <input 
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <button type='submit'>Submit</button>
    </form>
  )
}
