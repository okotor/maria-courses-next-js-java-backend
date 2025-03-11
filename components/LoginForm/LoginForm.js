'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // ✅ Added for redirection
import { useAuth } from "../../context/AuthContext";


export default function LoginForm() {
  const [formState, setFormState] = useState({ errors: null, message: null });
  const [googleError, setGoogleError] = useState(null); // ✅ State for Google login error
  const { setAuthenticated, setIsAdmin } = useAuth();
  const router = useRouter(); // ✅ Added for navigation

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('error') === 'google') {
      setGoogleError('Google login failed. Please try again.');
    }

    const checkSession = async () => {
      const res = await fetch("http://localhost:5000/auth/status", {
        credentials: "include",
      });
      const data = await res.json();
      console.log('Initial check session:', data); // Add this line for debugging
      if (data.authenticated) {
        setAuthenticated(true);
        setIsAdmin(data.isAdmin);
        if (data.isAdmin) {
          router.push("/admin-dashboard");
        } else {
          router.push("/my-courses");
        }
      } else if (urlParams.get('success') === 'true') {
        router.push("/my-courses");
      }
    };

    checkSession();
  }, [setAuthenticated, setIsAdmin, router]);

  const handleGoogleLogin = () => {
    // Redirect to Google's OAuth login page
    window.location.href = "http://localhost:5000/auth/google";
  };
  
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    console.log('Login response:', data); // Add this line for debugging
    if (data.success) {
      setAuthenticated(true);
      setIsAdmin(data.user.is_admin); // Ensure this line uses `data.user.is_admin`
      router.push("/my-courses");
    } else {
      setFormState({ errors: "Invalid credentials", message: null });
    }
  };

  return (
      <div id ="login-box">
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

      <p>
        {/* Added Google login button, redirects to backend auth route */}
        <button 
            type="button" 
            onClick={handleGoogleLogin} // ✅ Trigger the Google login process
          >
            Registrovat / Přihlásit se přes Google
          </button>
      </p>
    </form>

    {googleError && (
        <p style={{ color: 'red' }}>{googleError}</p>
    )}
      </div>
    )
  }