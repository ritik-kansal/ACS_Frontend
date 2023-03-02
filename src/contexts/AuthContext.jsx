import React, { createContext, useState, useEffect } from "react";
import { API_LOGIN_URL } from "../config";
import axios from "axios";

const AuthContext = createContext({
  isAuthenticated: false,
  user: null,
  isPlentyAuthenticated: false,
  login: () => { },
  logout: () => { },
});

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
    try {
      const res = await axios.post(API_LOGIN_URL, credentials);
      setUser(res.data);
      console.log("response", res.data)
      setIsAuthenticated(true);
      console.log("User logged in");
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  // useEffect(() => {
  //     const checkAuth = async () => {
  //         try {
  //             const res = await axios.get(API_CHECK_AUTH_URL);
  //             setUser(res.data.user);
  //             setIsAuthenticated(true);
  //         } catch (error) {
  //             console.error(error);
  //         }
  //     };

  //     checkAuth();
  // }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
