'use client';

import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { GOOGLE_CLIENT_ID, BACKEND_URL } from '@/utils/constants';
import api from '@/utils/api';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useLoading } from '@/context/LoadingContext';

export default function GoogleLoginButton({ onSuccessRedirect = '/' }) {
  const { login } = useAuth();
  const router = useRouter();
  const [error, setError] = useState(null);
  const { setIsLoading } = useLoading();

  const handleGoogleLoginSuccess = async ({ credential }) => {
    if (!credential) {
      setError('Přihlášení s Googlem selhalo.');
      return;
    }
    try {
      const response = await api.post(`${BACKEND_URL}/google-login`, { token: credential });
      login(response.data.user);
      router.push(response.data.user.is_admin ? '/' : onSuccessRedirect);
    } catch (err) {
      setError('Přihlášení s Googlem selhalo.');
      setIsLoading(false);
    }
  };

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <div className="google-login-container" style={{ marginTop: '1rem' }}>
        <GoogleLogin
          onSuccess={handleGoogleLoginSuccess}
          onError={() => setError('Přihlášení s Googlem selhalo.')}
        />
        {error && <p className="form-message error">{error}</p>}
      </div>
    </GoogleOAuthProvider>
  );
}