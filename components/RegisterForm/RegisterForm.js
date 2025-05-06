'use client';

import { useState } from 'react';
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { BACKEND_URL } from "@/utils/constants"; 

export default function RegisterForm() {
  const [formState, setFormState] = useState({ errors: null, message: null, loading: false });
  const router = useRouter(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState({ errors: null, message: null, loading: true });

    try {
      const formData = new FormData(e.target);
      const email = formData.get('email');
      const password = formData.get('password');

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

      setFormState({ errors: null, message: "Úspěšná registrace! Můžete se nyní přihlásit.", loading: false });
      e.target.reset(); // Clear form on success

    } catch (error) {
      setFormState({ errors: error.message, message: null, loading: false });
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <div>
        {/* <img src="/images/auth-icon.jpg" alt="A lock icon" /> */}
      </div>
      <h2>Registrace</h2>
      <p>
        <label htmlFor="email">Email: </label>
        <input 
          type="email" 
          name="email" 
          id="email" 
          required 
          disabled={formState.loading} 
          placeholder="Zadejte svůj email"
        />
      </p>

      <p>
        <label htmlFor="password">Heslo: </label>
        <input 
          type="password" 
          name="password" 
          id="password" 
          required
          disabled={formState.loading} 
          placeholder="Zadejte své heslo"
        />
      </p>

      {formState.errors && <p style={{ color: 'red' }}>{formState.errors}</p>}
      {formState.message && <p style={{ color: 'green' }}>{formState.message}</p>}

      <p>
        <button type="submit" className="button" disabled={formState.loading}>
          {formState.loading ? "Registrace..." : "Vytvořit účet"}
        </button>
      </p>
      <br></br>
      <p style={{ textAlign: 'center' }}>
        <Link className="button" href="/login">
          Přihlásit se existujícím účtem.
        </Link>
      </p>
    </form>
  );
}

