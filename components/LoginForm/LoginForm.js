'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "@/utils/api";
import { useAuth } from "../../context/AuthContext";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function LoginForm() {
  const [formState, setFormState] = useState({ errors: null, message: null });
  const { setAuthenticated, setIsAdmin } = useAuth();
  const router = useRouter();
  
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await axios.post(
        `${BACKEND_URL}/login`,
        { email, password },
        { withCredentials: true } // Include cookies in the request
      );
      const data = response.data;
      console.log('Login response:', data); // debugging

      if (data.success) {
        setAuthenticated(true);
        setIsAdmin(data.user.is_admin);
        console.log("isAdmin state after setting:", data.user.is_admin); // Debugging
        if (data.user.is_admin) {
          router.push("/admin-dashboard");
        } else {
          router.push("/my-courses");
        }
      } else {
        setFormState({ errors: "Invalid credentials", message: null });
      }
    } catch (error) {
      console.error('Login error:', error); // debugging
      setFormState({ errors: error.response?.data?.message || "An error occurred", message: null });
    }
  };

  const handleGoogleLoginSuccess = async (tokenResponse) => {
    const { credential } = tokenResponse;
    if (!credential) {
      setFormState({ errors: "Google login failed: Missing credential", message: null });
      return;
    }
    try {
      const res = await axios.post(
        `${BACKEND_URL}/google-login`,
        { token: credential },
        { withCredentials: true } // Include cookies in the request
      );
      const data = res.data;

      if (data.success) {
        setAuthenticated(true);
        console.log("is_admin value from backend:", data.user.is_admin); // Debugging
        setIsAdmin(data.user.is_admin);
        console.log("isAdmin state after setting:", data.user.is_admin); // Debugging
        if (data.user.is_admin) {
          router.push("/admin-dashboard");
        } else {
          router.push("/my-courses");
        }
      } else {
        setFormState({ errors: "Google login failed", message: null });
      }
    } catch (error) {
      console.error("Google login error:", error.response?.data || error.message); // Debugging
      setFormState({ errors: error.response?.data?.message || "An error occurred", message: null });
    }
  };


  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <div id="login-box">
        <form id="auth-form" onSubmit={handleLogin}>
          <div>
            {/* <img src="/images/auth-icon.jpg" alt="A lock icon" /> */}
          </div>
          
          <p>
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" required />
          </p>

          <p>
            <label htmlFor="password">Heslo: </label>
            <input type="password" name="password" id="password" required />
          </p>

          {formState.errors && (
            <p style={{ color: 'red' }}>{formState.errors}</p>
          )}

          {formState.message && (
            <p style={{ color: 'green' }}>{formState.message}</p>
          )}

          <p>
            <button type="submit">Přihlásit se</button>
          </p>
        </form>
        <GoogleLogin
          onSuccess={handleGoogleLoginSuccess}
          onError={() => {
            setFormState({ errors: "Google login failed", message: null });
          }}
        />
      </div>
    </GoogleOAuthProvider>
    );
  }