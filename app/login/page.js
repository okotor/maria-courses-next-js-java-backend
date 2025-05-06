'use client';

import { useState } from 'react';
import { useAuthRedirect } from '@/hooks/useAuthRedirect';
import LoginForm from '@/components/LoginForm/LoginForm';

export default function Login() {
  useAuthRedirect("/my-courses"); // Redirect if authenticated

  const [loading, setLoading] = useState(false);

  // Render loading state while the page is still processing authentication
  if (loading) {
    return <div className="loading">Načítání...</div>;
  }

  return <LoginForm />;
}