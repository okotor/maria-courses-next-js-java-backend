'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from '@/utils/api'; // Ensure this is correctly configured

export default function ConfirmEmailPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const [status, setStatus] = useState('loading');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!token) {
      setStatus('error');
      setMessage('Ověřovací token chybí.');
      return;
    }

    axios
      .post('/confirm-email', { token })
      .then(() => {
        setStatus('success');
        setMessage('Váš e-mail byl úspěšně ověřen.');
      })
      .catch(() => {
        setStatus('error');
        setMessage('Ověření e-mailu selhalo. Zkontrolujte odkaz nebo kontaktujte podporu.');
      });
  }, [token]);

  return (
    <div className="auth-form">
      <h2>Ověření e-mailu</h2>
      {status === 'loading' && <p>Probíhá ověřování...</p>}
      {status !== 'loading' && <p>{message}</p>}
    </div>
  );
}