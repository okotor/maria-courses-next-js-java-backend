// pages/login/page.js
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import LoginForm from '@/components/AuthForms/LoginForm';

export default function Login() {
  const { authenticated, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (authenticated) {
      router.replace("/");
    }
  }, [authenticated, router]);

  if (loading || authenticated === null) {
    return <div className="loading">Načítání...</div>;
  }

  if (authenticated) return null; // don't render anything

  return <LoginForm />;
}