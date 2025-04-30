import { useEffect } from "react";
import axios from "@/utils/api";
import { getJwtToken } from "@/utils/tokenUtil";

export const useAuthCheck = (setAuthenticated, setIsAdmin, hasCheckedAuth) => {
    useEffect(() => {
      const checkAuth = async () => {
        if (hasCheckedAuth.current) {
            console.log("Auth check already performed, skipping.");
            return; // Prevent multiple checks
          }
  
        const jwt = getJwtToken();
        if (!jwt) {
            console.log("No JWT found, skipping auth check.");
            return;
          }
  
        try {
          const response = await axios.get("/auth/check", { withCredentials: true });
          setAuthenticated(response.data?.authenticated || false);
          setIsAdmin(response.data?.user?.is_admin || false);
        } catch {
          setAuthenticated(false);
          setIsAdmin(false);
        }
        hasCheckedAuth.current = true;
      };
  
      checkAuth();
    }, [setAuthenticated, setIsAdmin, hasCheckedAuth]);
  };