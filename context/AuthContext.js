'use client';

import { createContext, useContext, useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import axios from "@/utils/api";
import { refreshAccessToken } from '@/utils/tokenUtil';
import { useAuthCheck } from "@/hooks/useAuthCheck";

const SESSION_REFRESH_INTERVAL = 5 * 60 * 1000; // 5 minutes
const INACTIVITY_TIMEOUT = 20 * 60 * 1000; // 20 minutes

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();
  const lastActivityRef = useRef(Date.now());
  const hasCheckedAuth = useRef(false);

  useAuthCheck(setAuthenticated, setIsAdmin, hasCheckedAuth);

  useEffect(() => {
    // Track activity
    const handleUserActivity = () => {
      lastActivityRef.current = Date.now();
      console.log("User activity detected, updating last activity time.");
    };

    const refreshSession = async () => {
      const now = Date.now();
      const inactiveFor = now - lastActivityRef.current;
      console.log("Inactive for:", inactiveFor, "ms");

      if (inactiveFor < INACTIVITY_TIMEOUT) { 
        console.log("User is active, skipping session refresh.");
        console.log("Inactive for:", inactiveFor, "ms");  
        try {
          const newToken = await refreshAccessToken();
          if (!newToken) logout();
        } catch {
          logout();
        }
      }
    };

    document.addEventListener("mousemove", handleUserActivity);
    document.addEventListener("keydown", handleUserActivity);
    const interval = setInterval(refreshSession, SESSION_REFRESH_INTERVAL);

    return () => {
      document.removeEventListener("mousemove", handleUserActivity);
      document.removeEventListener("keydown", handleUserActivity);
      clearInterval(interval);
      console.log("AuthProvider cleanup: Event listeners and interval cleared.");
    };
  }, []);

  const logout = async () => {
    try {
      await axios.post("/auth/logout", {}, { withCredentials: true });
      console.log("Logout successful.");
    } catch {
      console.error("Logout failed.");
    }
    setAuthenticated(false);
    setIsAdmin(false);
    router.replace("/login");
  };

  const login = (user) => {
    setAuthenticated(true);
    setIsAdmin(user.is_admin);
  };

  return (
    <AuthContext.Provider
      value={{ isAdmin, authenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);