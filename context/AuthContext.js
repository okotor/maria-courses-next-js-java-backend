'use client';

import { createContext, useContext, useEffect, useMemo, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import api, { setLogoutFunction }  from "@/utils/api";
// import { useAuthCheck } from "@/hooks/useAuthCheck";

//INACTIVITY LOGOUT
const SESSION_REFRESH_INTERVAL = 5 * 60 * 1000; // 5 minutes
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
    }, SESSION_REFRESH_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  // Sync login/logout across tabs
  useEffect(() => {
    const syncAuthAcrossTabs = async (event) => {
      console.log("Storage event detected:", event); // Debug log for storage event
      if (event.key === 'logout') {
        console.log('Detected logout from another tab');
        await logout(false); // Ensure logout is handled properly
      }
      if (event.key === 'login') {
        console.log('Detected login from another tab');
        await checkAuth();
      }
    };
    window.addEventListener('storage', syncAuthAcrossTabs);
    return () => window.removeEventListener('storage', syncAuthAcrossTabs);
  }, []);

  //Checking authentication status with the backend function
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

  const logout = async (broadcast = true) => {
    console.log("Logging out...");
    if (broadcast) {
      localStorage.setItem('logout', Date.now());
    }
    if (authenticated) {
      try {
        await api.post('/auth/logout', {}, { withCredentials: true });
        console.log('Logout successful');
      } catch (err) {
        console.error('Logout request failed', err);
      }
    }
  setAuthenticated(false);
  setIsAdmin(false);
  router.replace("/login");
};

  const login = (user) => {
    console.log("Login successful:", user);
    setAuthenticated(true);
    setIsAdmin(user.is_admin);
    localStorage.setItem('login', Date.now()); // Sync login across tabs
  };

  const contextValue = useMemo(
    () => ({ isAdmin, authenticated, login, logout }),
    [isAdmin, authenticated]
  );

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);