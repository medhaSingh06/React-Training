import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ( props) => {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData)
    }
    const logout = () => {
        setUser(null)
    }

    const contextValue = {
        user,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}


export {AuthContext, AuthProvider}