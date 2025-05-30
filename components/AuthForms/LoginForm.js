'use client';

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import router
import { useAuth } from "@/context/AuthContext";
import axios from "@/utils/api";
import { BACKEND_URL } from "@/utils/constants";
import AuthFormWrapper from "@/components/AuthForms/AuthFormWrapper";
import GoogleLoginButton from "@/components/AuthForms/GoogleLoginButton";

export default function LoginForm() {
  const [formState, setFormState] = useState({ errors: null, message: null, loading: false });
  const { login } = useAuth();
  const router = useRouter(); // Get router instance

  const handleResponse = (data) => {
    if (data.success) {
      login(data.user);
      setFormState({ error: null, message: "Úspěšné přihlášení!", loading: false });
      router.push(data.user.is_admin ? "/admin-dashboard" : "/courses");
    } else {
      setFormState({ error: "Nesprávné přihlašovací údaje", message: null, loading: false });
    }
  };

  const handleLoginRequest = async (url, data) => {
    try {
      const response = await axios.post(url, data, { withCredentials: true });
      handleResponse(response.data);
    } catch (error) {
      setFormState({ error: error.response?.data?.message || "Něco se pokazilo.", message: null, loading: false });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState((prev) => ({ ...prev, loading: true }));
    const email = e.target.email.value;
    const password = e.target.password.value;
    await handleLoginRequest(`${BACKEND_URL}/login`, { email, password });
  };

  return (
    <AuthFormWrapper
      onSubmit={handleSubmit}
      title="Přihlášení"
      buttonText="Přihlásit se"
      message={formState.message}
      error={formState.error}
      loading={formState.loading}
      includePassword={true}
      currentPage="login"
    >
      <GoogleLoginButton onSuccessRedirect="/courses" />
    </AuthFormWrapper>
  );
}