'use client';

import { FormFooterLinks, ConditionalPasswordInput, FormMessage, FormInput } from '@/components/AuthForms/AuthFormElements';
import styles from '@/styles/form.module.css';

export default function AuthFormWrapper({
  onSubmit,
  title,
  message,
  error,
  loading,
  includePassword = false,
  currentPage = '',
  children
}) {
  return (
    <div className={styles.pageWrapper}>
      <form className="auth-form" onSubmit={onSubmit}>
        <h2>{title}</h2>

        <FormInput
          label="Email"
          type="email"
          name="email"
          required
          disabled={loading}
          placeholder="Zadejte svůj email"
        />

        <ConditionalPasswordInput
          include={includePassword}
          disabled={loading}
        />

        <FormMessage error={error} success={message} />

        <p>
          <button type="submit" className="button" disabled={loading}>
            {loading ? `${title}...` : title}
          </button>
        </p>

        {children}

        <FormFooterLinks exclude={[currentPage]} />
      </form>
    </div>
  );
}
