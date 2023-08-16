import React, { useState } from 'react'
import { useNavigate } from 'react-router'

export const User = (props) => {
  const navigate = useNavigate();
  const [enteredName, setEnteredName] = useState("")
  const [enteredEmail, setEnteredEmail] = useState("")

  const handleSubmit = (e) => {
        e.preventDefault();
        const inputData = {
          id: Math.random().toString(),
          name: enteredName,
          email: enteredEmail
        }

        props.addList(inputData);
        navigate('/user')
        setEnteredName("")
        setEnteredEmail("")

  }
 

  return (
    <>

      <h2>Add Users</h2>
      <form onSubmit={handleSubmit}>

        <label>Username:</label>
        <input
          type='text'
          value={enteredName}
          onChange={(e) => setEnteredName(e.target.value)}
        />

        <label>Email:</label>
        <input 
          type='email'
          value={enteredEmail}
          onChange={(e) => setEnteredEmail(e.target.value)}
        />

        <button
          type='submit'
        >Submit</button>
      </form>

    </>

  )
}
