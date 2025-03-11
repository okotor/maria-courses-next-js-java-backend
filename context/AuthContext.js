'use client';

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const res = await fetch("http://localhost:5000/auth/status", {
        credentials: "include",
      });
      const data = await res.json();
      console.log('Session check:', data); // Add this line for debugging
      if (data.authenticated) {
        setAuthenticated(true);
        setIsAdmin(data.isAdmin);
      } else {
        setAuthenticated(false);
        setIsAdmin(false);
      }
    };

     // Initial session check
    checkSession();

    // Periodic session check every 6 seconds
    const interval = setInterval(checkSession, 1000 * 60 * 0.1)

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const logout = async () => {
    await fetch("http://localhost:5000/api/logout", {
      method: "POST",
      credentials: "include",
    });
    setAuthenticated(false);
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ isAdmin, authenticated, setIsAdmin, setAuthenticated, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);