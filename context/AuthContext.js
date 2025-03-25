'use client';

import { createContext, useContext, useState, useEffect, useRef } from "react";
import api from '@/utils/api';
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();
  const lastActivityRef = useRef(new Date().getTime());

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthenticated(true);
      // Assuming you store isAdmin information in localStorage or fetch it on mount
      const isAdminStored = JSON.parse(localStorage.getItem('isAdmin'));
      setIsAdmin(isAdminStored);
    }

    const handleUserActivity = () => {
      lastActivityRef.current = new Date().getTime();
    };

    document.addEventListener('mousemove', handleUserActivity);
    document.addEventListener('keydown', handleUserActivity);

    const refreshTokenIfNeeded = async () => {
      const now = new Date().getTime();
      const timeSinceLastActivity = now - lastActivityRef.current;

      if (timeSinceLastActivity < 20 * 60 * 1000) {
        const refreshToken = localStorage.getItem('refreshToken');
        try {
          const { data } = await api.post('/api/refresh-token', { refreshToken });
          localStorage.setItem('token', data.token);
          api.defaults.headers['Authorization'] = `Bearer ${data.token}`;
        } catch (err) {
          setAuthenticated(false);
          setIsAdmin(false);
          localStorage.removeItem('token');
          localStorage.removeItem('refreshToken');
          router.replace("/login");
        }
      }
    };

    const interval = setInterval(refreshTokenIfNeeded, 5 * 60 * 1000);

    return () => {
      document.removeEventListener('mousemove', handleUserActivity);
      document.removeEventListener('keydown', handleUserActivity);
      clearInterval(interval);
    };
  }, [router]);

  const logout = () => {
    setAuthenticated(false);
    setIsAdmin(false);
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    router.replace("/login");
  };

  return (
    <AuthContext.Provider value={{ isAdmin, authenticated, setIsAdmin, setAuthenticated, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);