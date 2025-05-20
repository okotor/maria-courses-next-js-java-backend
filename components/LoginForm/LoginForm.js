'use client';

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import router
import axios from "@/utils/api";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { GOOGLE_CLIENT_ID, BACKEND_URL } from "@/utils/constants";
import { useAuth } from "../../context/AuthContext"; // Ensure useAuth is imported

export default function LoginForm() {
  const [formState, setFormState] = useState({ errors: null, message: null, loading: false });
  const { login, authenticated } = useAuth();
  const router = useRouter(); // Get router instance

  // General function to handle errors
  const handleError = (error) => {
    setFormState({
      errors: error.response?.data?.message || "Něco se pokazilo.",
      message: null,
      loading: false,
    });
  };

  // General function to handle login responses
  const handleResponse = (data) => {
    if (data.success) {
      login(data.user); // Use the `login` function from `AuthContext`
      setFormState({ errors: null, message: "Úspěšné přihlášení!", loading: false });
      router.push(data.user.is_admin ? "/admin-dashboard" : "/my-courses"); // Simplified routing logic
    } else {
      setFormState({ errors: "Nesprávné přihlašovací údaje", message: null, loading: false });
    }
  };

  // Unified function to handle both regular and Google login
  const handleLoginRequest = async (url, data) => {
    try {
      const response = await axios.post(url, data, { withCredentials: true }); // Shared axios post call
      handleResponse(response.data);
    } catch (error) {
      handleError(error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setFormState((prev) => ({ ...prev, loading: true })); // Set loading to true on submit
    const email = e.target.email.value;
    const password = e.target.password.value;
    handleLoginRequest(`${BACKEND_URL}/login`, { email, password });
  };

  const handleGoogleLoginSuccess = async (tokenResponse) => {
    const { credential } = tokenResponse;
    if (!credential) {
      setFormState({ errors: "S Googlem se to teď nezdařilo. Zkuste znovu.", message: null });
      return;
    }
    handleLoginRequest(`${BACKEND_URL}/google-login`, { token: credential });
  };

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <form className="auth-form" onSubmit={handleLogin}>
          <div>
            {/* <img src="/images/auth-icon.jpg" alt="A lock icon" /> */}
          </div>
          <h2>Přihlášení</h2>
          
          <p>
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" required />
          </p>

          <p>
            <label htmlFor="password">Heslo: </label>
            <input type="password" name="password" id="password" required />
          </p>

          {formState.errors && (
            <p className="form-message" style={{ color: 'red' }}>{formState.errors}</p>
          )}

          {formState.message && (
            <p className="form-message" style={{ color: 'green' }}>{formState.message}</p>
          )}

          <p>
            <button type="submit" className="button" disabled={formState.loading}> 
              {formState.loading ? 'Přihlašování...' : 'Přihlásit se'}
            </button>
          </p>
          <div className="google-login-container">
      <p className="google-login-text"></p>
      <br></br>
      <GoogleLogin
        onSuccess={handleGoogleLoginSuccess}
        onError={() => {
          setFormState({ errors: "Přihlášení s Googlem selhalo.", message: null });
        }}
      />
    </div>
  </form>
</GoogleOAuthProvider>
    );
  }