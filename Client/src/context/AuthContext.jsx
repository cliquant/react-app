import { createContext, useContext, useState, useCallback } from 'react';

const AuthContext = createContext({
    token: null, 
    username: null,
    setAuthData: () => {},
    clearAuthData: () => {}
});

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [username, setUsername] = useState(localStorage.getItem('username'));

    const setAuthData = useCallback((data) => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', data.username);
        setToken(data.token);
        setUsername(data.username);
    }, []);

    const clearAuthData = useCallback(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        setToken(null);
        setUsername(null);
    }, []);

    return (
        <AuthContext.Provider value={{ token, username, setAuthData, clearAuthData }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
