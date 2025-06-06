'use client';

import Link from 'next/link';
import styles from '@/app/page.module.css';

export function FormInput({ type = 'text', name, label, disabled, placeholder }) {
  return (
    <p>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        required
        disabled={disabled}
        placeholder={placeholder}
      />
    </p>
  );
}

export function FormMessage({ error, success }) {
  if (error) return <p className="form-message" style={{ color: 'red' }}>{error}</p>;
  if (success) return <p className="form-message" style={{ color: 'green' }}>{success}</p>;
  return null;
}

export function FormFooterLinks({ exclude = [] }) {
  const allLinks = [
    { href: '/login', label: 'Přihlásit se', key: 'login' },
    { href: '/register', label: 'Registrovat se', key: 'register' },
    { href: '/forgotten-password', label: 'Zapomenuté heslo', key: 'forgotten' },
    { href: '/resend-confirmation', label: 'Opětovné potvrzení registrace', key: 'resend' },
  ];

  const filteredLinks = allLinks.filter(link => !exclude.includes(link.key));

  return (
    <p className={styles['form-footer']}>
      {filteredLinks.map((link, index) => (
        <span key={link.key}>
          <Link href={link.href}>{link.label}</Link>
          {index < filteredLinks.length - 1 && <span className={styles.separator}>|</span>}
        </span>
      ))}
    </p>
  );
}

export function ConditionalPasswordInput({ include, loading }) {
  if (!include) return null;
  return (
    <FormInput
      type="password"
      name="password"
      label="Heslo:"
      disabled={loading}
      placeholder="Zadejte své heslo"
    />
  );
}
