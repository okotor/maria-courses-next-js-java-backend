'use client';

import { createContext, useContext, useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import api, { setLogoutFunction }  from "@/utils/api";
// import { useAuthCheck } from "@/hooks/useAuthCheck";

//INACTIVITY LOGOUT
// const SESSION_REFRESH_INTERVAL = 5 * 60 * 1000; // 5 minutes
// const INACTIVITY_TIMEOUT = 20 * 60 * 1000; // 20 minutes

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();
  //INACTIVITY LOGOUT
  // const lastActivityRef = useRef(Date.now());

  //INACTIVITY LOGOUT
  // useEffect(() => {
  //   // Track activity
  //   const handleUserActivity = () => {
  //     lastActivityRef.current = Date.now();
  //     console.log("User activity detected, updating last activity time.");
  //   };

  //   const logoutIfInactive = () => {
  //     const now = Date.now();
  //     const inactiveFor = now - lastActivityRef.current;
  
  //     if (inactiveFor >= INACTIVITY_TIMEOUT) {
  //       console.log("Logging out due to inactivity");
  //       logout();
  //     }
  //   };

  //   document.addEventListener("mousemove", handleUserActivity);
  //   document.addEventListener("keydown", handleUserActivity);
  //   const interval = setInterval(logoutIfInactive, SESSION_REFRESH_INTERVAL);

  //   return () => {
  //     document.removeEventListener("mousemove", handleUserActivity);
  //     document.removeEventListener("keydown", handleUserActivity);
  //     clearInterval(interval);
  //     console.log("AuthProvider cleanup: Event listeners and interval cleared.");
  //   };
  // }, []);

  //Recheck auth status every 5 minutes
  useEffect(() => {
    console.log("AuthProvider mounted, setting up auth check.");
    setLogoutFunction(logout); // let interceptor access logout
    checkAuth(); // run immediately

    const interval = setInterval(() => {
      checkAuth();
    }, 5 * 60 * 1000); // every 5 minutes

    return () => clearInterval(interval);
  }, []);

  const checkAuth = async (retryCount = 0) => {
    try {
      const response = await api.get("/auth/check");
      const isAuth = response.data?.authenticated || false;
      setAuthenticated(isAuth);
      setIsAdmin(response.data?.user?.is_admin || false);
      console.log("Auth re-check success", response.data);
    } catch (err) {
      console.error("Auth re-check failed", err);
      // Retry auth check if under retry limit
      if (retryCount < 1) {
        console.log("Retrying auth check...");
        setTimeout(() => checkAuth(retryCount + 1), 2000); // Retry after 2 seconds
      } else {
        console.log("Auth re-check failed after retries. Logging out...");
        logout(); // Logout if retries are exhausted
      }
    }
  };

  const logout = async () => {
    console.log("Logging out...");
    try {
      // Avoid logout API call if already logged out
    if (authenticated) {
      await api.post("/auth/logout", {}, { withCredentials: true });
      console.log("Logout successful.");
    } else {
      console.log("Already logged out, no action taken.");
    }
  } catch {
    console.error("Logout failed.");
  }
  setAuthenticated(false);
  setIsAdmin(false);
  router.replace("/login");
};

  const login = (user) => {
    console.log("Login successful:", user);
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