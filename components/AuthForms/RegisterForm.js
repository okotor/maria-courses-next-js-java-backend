'use client';

import { useState } from 'react';
import { BACKEND_URL } from "@/utils/constants"; 
import AuthFormWrapper from "@/components/AuthForms/AuthFormWrapper";
import GoogleLoginButton from "@/components/AuthForms/GoogleLoginButton";

export default function RegisterForm() {
  const [formState, setFormState] = useState({ error: null, message: null, loading: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState({ errors: null, message: null, loading: true });

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await fetch(`${BACKEND_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMessage = data.message || "Registrace selhala. Zkuste to znovu.";
        throw new Error(errorMessage);
      }

      setFormState({
        errors: null,
        message: "Úspěšná registrace! Zkontrolujte svůj e-mail a potvrďte registraci, než se přihlásíte.",
        loading: false
      });

      e.target.reset(); // Clear form on success
    } catch (error) {
      setFormState({ error: error.message, message: null, loading: false });
    }
  };

  return (
    <AuthFormWrapper
      onSubmit={handleSubmit}
      title="Registrace"
      buttonText="Registrovat se"
      message={formState.message}
      error={formState.error}
      loading={formState.loading}
      includePassword={true}
      currentPage="register"
    >
      <GoogleLoginButton onSuccessRedirect="/" />
    </AuthFormWrapper>
  );
}

