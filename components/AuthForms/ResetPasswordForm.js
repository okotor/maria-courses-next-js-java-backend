'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import AuthFormWrapper from '@/components/AuthForms/AuthFormWrapper';
import { BACKEND_URL } from '@/utils/constants';

export default function ResetPasswordForm() {
  const [formState, setFormState] = useState({ message: null, error: null, loading: false });
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const password = e.target.password.value.trim();

    if (!password) {
        setFormState({ message: null, error: "Zadejte prosím nové heslo.", loading: false });
        return;
    }

    if (!token) {
        setFormState({ message: null, error: "Platnost odkazu vypršela. Požádejte prosím znovu o obnovení hesla.", loading: false });
        return;
    }

    setFormState({ loading: true, message: null, error: null });

    try {
      const response = await fetch(`${BACKEND_URL}/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password }),
      });

    const text = await response.text();
    let data;
    try {
        data = text ? JSON.parse(text) : {};
    } catch {
        data = {};
    }

      if (!response.ok) throw new Error(data.message || "Nastavení nového hesla se nezdařilo. Zkuste to prosím znovu.");

      setFormState({ message: data.message, error: null, loading: false });
    } catch (err) {
      setFormState({ message: null, error: err.message, loading: false });
    }
  };

  return (
    <AuthFormWrapper
      onSubmit={handleSubmit}
      title="Změna hesla"
      buttonText="Nastavit nové heslo"
      message={formState.message}
      error={formState.error}
      loading={formState.loading}
      includeEmail={false}
      includePassword={true}
      currentPage="reset"
    />
  );
}