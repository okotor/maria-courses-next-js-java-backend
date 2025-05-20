'use client';

import { Suspense } from 'react';
import ConfirmEmailPageInner from './ConfirmEmailPageInner';

export default function ConfirmEmailPage() {
  return (
    <Suspense fallback={<p>Načítání...</p>}>
      <ConfirmEmailPageInner />
    </Suspense>
  );
}
