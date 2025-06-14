'use client';

import { createContext, useContext,
           useEffect, useMemo, useRef, 
            useState } from "react";
import { useRouter } from "next/navigation";
import api, { setLogoutFunction, setIsAuthenticatedGetter }  from "@/utils/api";
import { SESSION_REFRESH_INTERVAL } from "@/utils/constants";
import { getAllowPersistent } from "@/utils/cookieConsentUtil";
import { jwtDecode } from "jwt-decode";
// import { useAuthCheck } from "@/hooks/useAuthCheck";
//INACTIVITY LOGOUT
// import { INACTIVITY_TIMEOUT } from "@/utils/constants";

const AuthContext = createContext();

// Create a BroadcastChannel
const authChannel = typeof window !== "undefined" ? new BroadcastChannel("auth") : null;

// 🔑 Helper: Parse exp from JWT
const parseJwtExp = (token) => {
  try {
    const decoded = jwtDecode(token);
    if (decoded && decoded.exp) {
      return decoded.exp * 1000; // Convert to ms
    }
    console.warn("JWT decoded but no exp found");
    return null;
  } catch (err) {
    console.warn("Failed to decode JWT", err);
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(null); // null until checked
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true); // NEW
  const router = useRouter();
  const refreshTimerRef = useRef(null);
  

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

  useEffect(() => {
    setLogoutFunction(logout);
    setIsAuthenticatedGetter(() => authStateRef.current);
    initAuthFlow();
    const interval = setInterval(checkAuth, SESSION_REFRESH_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!authChannel) return;
    const handler = async (event) => {
      const { type, user } = event.data;
      if (type === "logout") await performLogout(false);
      if (type === "login" && user) await attemptAuthCheckOrRefresh();
    };
    authChannel.addEventListener("message", handler);
    return () => authChannel.removeEventListener("message", handler);
  }, []);

  const initAuthFlow = async () => {
    await attemptAuthCheckOrRefresh();
    setLoading(false);
  };

  const attemptAuthCheckOrRefresh = async () => {
    try {
      await checkAuth();
    } catch (err) {
      console.warn("Auth check failed, attempting refresh...");
      const success = await attemptRefreshAndCheck();
      if (!success) await logout();
    }
  };

  const hasRefreshToken = () => {
    return document.cookie.includes("refreshToken=");
  };

  const attemptRefreshAndCheck = async () => {
    if (!hasRefreshToken()) {
      console.warn("No refresh token found, cannot attempt refresh");
      return false;
    }
    try {
      await api.post("/auth/refresh", { allowPersistent: getAllowPersistent() });
      console.log("🔍 Post-refresh cookies: ", document.cookie);
      // 🚨 Check for invalid jwtToken

      if (document.cookie.includes("jwtToken=null")) {
        console.warn("🚨 Backend sent jwtToken=null — this should not happen!");
        console.warn("🚨 Full cookie string:", document.cookie);
      }

      await checkAuth();
      return true;
    } catch (err) {
      console.error("Refresh failed", err);
      return false;
    }
  };

  //Checking authentication status with the backend function
  const checkAuth = async () => {
    const response = await api.get("/auth/check");
    const isAuth = response.data?.authenticated || false;
    setAuthenticated(isAuth);
    setIsAdmin(response.data?.user?.is_admin || false);

    if (isAuth) {
      console.log("✅ checkAuth: user is authenticated, refreshing schedule");
      scheduleProactiveRefresh();
    } else {
      console.log("❌ checkAuth: user not authenticated, clearing refresh");
      clearProactiveRefresh();
    }
  };

  const login = (user) => {
    setAuthenticated(true);
    setIsAdmin(user.is_admin);
    if (authChannel) authChannel.postMessage({ type: "login", user });
    clearProactiveRefresh(); // 🔧 Clear any leftover timers before starting new one
    scheduleProactiveRefresh(); // 🔧 Schedule based on fresh token
    console.log("✅ Login flow completed, proactive refresh scheduled");
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
    clearProactiveRefresh(); // 🔧 Always stop timers
    document.cookie = "jwtToken=; Path=/; Max-Age=0; SameSite=None; Secure";
    document.cookie = "refreshToken=; Path=/; Max-Age=0; SameSite=None; Secure";
    router.replace("/login");
  };

  // 🕑 Proactive refresh using actual exp
  const scheduleProactiveRefresh = () => {
    clearProactiveRefresh();

    const match = document.cookie.match(/jwtToken=([^;]+)/);
    if (!match) {
      console.warn("No jwtToken cookie found for proactive refresh");
      return;
    }

    const jwt = decodeURIComponent(match[1]);
    const exp = parseJwtExp(jwt);
    if (!exp) {
      console.warn("Could not parse JWT expiry, skipping proactive refresh");
      return;
    }

    const now = Date.now();
    const delay = exp - now - 7000; // 🔧 Refresh 10 seconds before expiry

    if (delay <= 0) {
      console.warn("Token already expired or about to expire, refreshing immediately");
      console.log(`⏳ Attempting refresh ${((exp - Date.now()) / 1000).toFixed(2)} seconds before expiry`);
      attemptRefreshAndCheck();
      return;
    }

    console.log(`🔄 Scheduling proactive refresh in ${(delay / 1000).toFixed(2)}s`);
    refreshTimerRef.current = setTimeout(async () => {
      const success = await attemptRefreshAndCheck();
      if (success) {
        scheduleProactiveRefresh();
      } else {
        await logout();
      }
    }, delay);
  };

  const clearProactiveRefresh = () => {
    if (refreshTimerRef.current) {
      clearTimeout(refreshTimerRef.current);
      refreshTimerRef.current = null;
      console.log("⏹️ Cleared proactive refresh timer");
    }
  };

  useEffect(() => () => clearProactiveRefresh(), []);

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