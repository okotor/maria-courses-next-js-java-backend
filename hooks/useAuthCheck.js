// import { useEffect } from "react";
// import api from "@/utils/api";

// export const useAuthCheck = (setAuthenticated, setIsAdmin, hasCheckedAuth) => {
//     useEffect(() => {
//       const checkAuth = async () => {
//         console.log("Checking authentication status...");
//         // Check if the auth check has already been performed
//         if (hasCheckedAuth.current) {
//             console.log("Auth check already performed, skipping.");
//             return; // Prevent multiple checks
//           }
  
//         try {
//           const response = await api.get("/auth/check", { withCredentials: true });
//           setAuthenticated(response.data?.authenticated || false);
//           setIsAdmin(response.data?.user?.is_admin || false);
//           console.log("Auth check response:", response.data);
//         } catch {
//           setAuthenticated(false);
//           setIsAdmin(false);
//           console.error("Error checking authentication status.");
//         }
//         hasCheckedAuth.current = true;
//       };
  
//       checkAuth();
//     }, [setAuthenticated, setIsAdmin, hasCheckedAuth]);
//   };