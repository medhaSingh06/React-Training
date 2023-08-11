import React from 'react'
import { useState } from 'react'

export const InputData = (props) => {
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        props.NameInput(name)
        setName(" ")

    }
  return (
    <form onSubmit={handleSubmit}>
        <label>Enter name</label>
        <input 
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}

        />

        <button
            type='submit'
            disabled={!name}
        >Submit</button>
    </form>
  )
}
