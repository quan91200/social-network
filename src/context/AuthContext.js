import { createContext, useContext, useState } from "react"

const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [role, setRole] = useState(null)
    const login = (userRole) => {
        setIsAuthenticated(true)
        setRole(userRole)
    }

    const logout = () => {
        setIsAuthenticated(false)
        setRole(null)
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, role, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuthContext() {
    return useContext(AuthContext)
}