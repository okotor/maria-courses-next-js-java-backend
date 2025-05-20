"use client";

import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute"

export default function AdminDashboard() {
  return (
    <ProtectedRoute requireAdmin={true}>
      <div>
        <h1>Admin Dashboard</h1>
        <p>Welcome, Admin!</p>
      </div>
    </ProtectedRoute>
  );
}
