import React, { useState } from 'react'
import { useNavigate } from 'react-router'

export const EditUser = (props) => {

    const [updatedName, setUpdatedName] = useState(props.editUserData.name)
    const [updatedEmail, setUpdatedEmail] = useState(props.editUserData.email)
    // console.log(props.editUserData)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedData = {
            id: props.editUserData.id,
            name: updatedName,
            email: updatedEmail
        } 

        props.handleEdit(props.editUserData.id,updatedData)

        navigate('/user')
        

    }
  return (
    <>
    {/* {props.editUserData} */}
    {/* {props.editUserData.map(item => <div>{item.id}</div>)} */}
    {
        (props.editUserData !== "") ? <>
        <h2>Edit Users</h2>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input
                    type='text'
                    value={updatedName}
                    onChange={(e) => setUpdatedName(e.target.value)}
                />

                <label>Email:</label>
                <input 
                    type='email'
                    value={updatedEmail}
                    onChange={(e) => setUpdatedEmail(e.target.value)}
                />

        <button
          type='submit'
        >Submit</button>
      </form>
        </> : (<p>NULL</p>)
    }
    
  
        
    </>
  )
}
