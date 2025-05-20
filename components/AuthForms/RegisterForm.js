'use client';

import { useState } from 'react';
import { BACKEND_URL } from "@/utils/constants"; 
import AuthFormWrapper from "@/components/AuthForms/AuthFormWrapper";

export default function RegisterForm() {
  const [formState, setFormState] = useState({ errors: null, message: null, loading: false });

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
        throw new Error(data.error || "Registrace selhala. Zkuste to znovu.");
      }

      setFormState({
        errors: null,
        message: "Úspěšná registrace! Zkontrolujte svůj e-mail a potvrďte registraci, než se přihlásíte.",
        loading: false
      });

      e.target.reset(); // Clear form on success
    } catch (error) {
      setFormState({ errors: error.message, message: null, loading: false });
    }
  };

  return (
    <AuthFormWrapper
      onSubmit={handleSubmit}
      title="Registrace"
      message={formState.message}
      error={formState.error}
      loading={formState.loading}
      includePassword={true}
      currentPage="register"
    />
  );
}

