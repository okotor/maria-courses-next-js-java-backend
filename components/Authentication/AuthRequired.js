"use client";

import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children, requireAdmin = false }) {
  const { authenticated, isAdmin } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!authenticated) {
      router.replace("/login"); // Redirect if not logged in
    } else if (requireAdmin && !isAdmin) {
      router.replace("/my-courses"); // Redirect non-admins away from admin-only pages
    }
  }, [authenticated, isAdmin, router, requireAdmin]);

  if (!authenticated || (requireAdmin && !isAdmin)) return null; // Prevent rendering before redirect

  return <>{children}</>;
}
