import React, { useContext } from 'react'
import { AuthContext } from './AuthContext';

export const UserProfile = () => {
   const {user} = useContext(AuthContext);
  
   return (
    <div>
        {user ? (<>
            <h2>User Profile</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </>): (
            <p>Please Login</p>
        )}
    </div>
  )
}
