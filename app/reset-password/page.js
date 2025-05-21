'use client';

import { Suspense } from 'react';
import ResetPasswordForm from '@/components/AuthForms/ResetPasswordForm';

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div>Načítání formuláře...</div>}>
      <ResetPasswordForm />
    </Suspense>
  );
}