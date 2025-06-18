import React, { Suspense } from 'react';
import classes from '@/app/page.module.css';

// The client-side logic goes into its own component!
import CoursesClientWrapper from './CoursesClientWrapper';

export default function CoursesPage() {
  return (
    <main className={classes.main}>
      <Suspense fallback={<p>Načítání kurzů…</p>}>
        <CoursesClientWrapper />
      </Suspense>
    </main>
  );
}