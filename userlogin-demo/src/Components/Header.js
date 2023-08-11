import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'

// header is used to logout

export const Header = () => {

    const {user, logout} = useContext(AuthContext)

    return (
    <header>
        {user ? (<>
            <p>Welcome, {user.name}</p>
            <button onClick={logout}>Logout</button>
        </>) : (<p>Please Login</p>) }
    </header>
  )
}
