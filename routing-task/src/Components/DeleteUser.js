import React from 'react'
import { useNavigate } from 'react-router'

export const DeleteUser = (props) => {
  
  const navigate = useNavigate();
  return (
    <>
    <div>item is  Successfully deleted</div>
    <button onClick={() => navigate('/user')} >GO BACK</button>
    </>
  )
}
