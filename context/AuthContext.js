'use client';

import { createContext, useContext,
           useEffect, useMemo, useRef, 
            useState } from "react";
import { useRouter } from "next/navigation";
import api, { setLogoutFunction, setIsAuthenticatedGetter }  from "@/utils/api";
import { SESSION_REFRESH_INTERVAL } from "@/utils/constants";
// import { useAuthCheck } from "@/hooks/useAuthCheck";
//INACTIVITY LOGOUT
// import { INACTIVITY_TIMEOUT } from "@/utils/constants";

const AuthContext = createContext();

// Create a BroadcastChannel
const authChannel = typeof window !== "undefined" ? new BroadcastChannel("auth") : null;

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(null); // null until checked
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true); // NEW
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

  // Expose current auth state for api.js to check
  const authStateRef = useRef(authenticated);
  useEffect(() => {
    authStateRef.current = authenticated;
  }, [authenticated]);

  //Recheck auth status every 5 minutes
  useEffect(() => {
    console.log("AuthProvider mounted, setting up auth check.");
    setLogoutFunction(logout); // let interceptor access logout
    setIsAuthenticatedGetter(() => authStateRef.current);

    const doCheck = async () => {
      await checkAuth();
      setLoading(false); // ✅ now we’re ready to render
    };
  
    doCheck(); // run on mount
    const interval = setInterval(checkAuth, SESSION_REFRESH_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  // Sync auth state across tabs using BroadcastChannel
  useEffect(() => {
    if (!authChannel) return;

    const handler = async (event) => {
      const { type, user } = event.data;
      console.log("BroadcastChannel message:", event.data);

      if (type === "logout") {
        console.log("Detected logout from another tab");
        await performLogout(false); // no rebroadcast
      }

      if (type === "login" && user) {
        console.log("Detected login from another tab");
          try {
            await checkAuth(); // re-validate on this tab
          } catch (err) {
            console.error("Post-login checkAuth failed", err);
          }
      }
    };

    authChannel.addEventListener("message", handler);
    return () => authChannel.removeEventListener("message", handler);
  }, []);

  //Checking authentication status with the backend function
  const checkAuth = async (retryCount = 0) => {
    try {
      const response = await api.get("/auth/check");
      const isAuth = response.data?.authenticated || false;
      setAuthenticated(isAuth);
      setIsAdmin(response.data?.user?.is_admin || false);
      console.log("Auth check succeeded:", response.data);
    } catch (err) {
      console.error("Auth check failed", err);
      if (retryCount < 1) {
        console.log("Retrying checkAuth in 4 seconds...");
        setTimeout(() => checkAuth(retryCount + 1), 4000);
      } else {
        console.warn("Max retries reached.");
        if (authenticated) {
          console.log("Was previously authenticated, but check failed.");
        } else {
          console.log('User was never authenticated. Updating state.');
        }
        setAuthenticated(false);
        setIsAdmin(false);
      }
    }
  };

  const login = (user) => {
    console.log("Login successful:", user);
    setAuthenticated(true);
    setIsAdmin(user.is_admin);
    if (authChannel) {
      authChannel.postMessage({ type: "login", user });
    }
  };

  const logout = async (broadcast = true) => {
    await performLogout(broadcast);
  };

  const performLogout = async (broadcast) => {
    if (broadcast && authChannel) {
      console.log("[Logout] Broadcasting logout");
      authChannel.postMessage({ type: "logout" });
    }

    try {
      await api.post("/auth/logout", {}, { withCredentials: true });
      console.log("[Logout] API logout successful");
    } catch (err) {
      console.warn("[Logout] API call failed, continuing", err);
    }
    setAuthenticated(false);
    setIsAdmin(false);
    router.replace("/login");
};

  const contextValue = useMemo(() => ({
    isAdmin,
    authenticated,
    login,
    logout,
    loading,
  }), [isAdmin, authenticated]);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);