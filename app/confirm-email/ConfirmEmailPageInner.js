
'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import axios from '@/utils/api';

export default function ConfirmEmailPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const [status, setStatus] = useState('loading');
  const [message, setMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      setStatus('error');
      setMessage('Chybí ověřovací token.');
      return;
    }

    axios
      .post('/confirm-email', { token })
      .then(() => {
        setStatus('success');
        setMessage('Váš e-mail byl úspěšně ověřen. Budete přesměrováni na přihlášení.');
        setTimeout(() => {
            router.push('/login'); // Redirect after 3 seconds
        }, 3000);
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