'use client';

import "@/styles/globals.css";
import { useState } from 'react';
import Link from 'next/link';

export default function RegisterForm() {
  const [formState, setFormState] = useState({ errors: null, message: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    const response = await fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      setFormState({ errors: data.error, message: null });
    } else {
      setFormState({ errors: null, message: data.message });
      e.target.reset(); // Clear the form after success
    }
  };

  return (
    <form id="auth-form" onSubmit={handleSubmit}>
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
        <button type="submit">Vytvořit účet</button>
      </p>

      <p>
        <Link className="button" href="/login">Přihlásit se existujícím účtem.</Link>
      </p>
    </form>
  );
}

