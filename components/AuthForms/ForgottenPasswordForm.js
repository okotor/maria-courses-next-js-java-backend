'use client';

import { useState } from 'react';
import AuthFormWrapper from '@/components/AuthForms/AuthFormWrapper';
import { BACKEND_URL } from '@/utils/constants';

export default function ForgottenPasswordForm() {
  const [formState, setFormState] = useState({ message: null, error: null, loading: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState({ message: null, error: null, loading: true });

    const email = e.target.email.value.trim();

    if (!email) {
      setFormState({ message: null, error: "Email je povinný.", loading: false });
      return;
    }

    setFormState({ message: null, error: null, loading: true });

    try {
      const response = await fetch(`${BACKEND_URL}/forgotten-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || 'Chyba při odesílání žádosti o změnu hesla.');

      setFormState({ message: data.message, error: null, loading: false });
    } catch (err) {
      setFormState({ message: null, error: err.message, loading: false });
    }
  };

  return (
    <AuthFormWrapper
      onSubmit={handleSubmit}
      title="Obnovit heslo"
      message={formState.message}
      error={formState.error}
      loading={formState.loading}
      includePassword={false}
      currentPage="forgotten"
    />
  );
}