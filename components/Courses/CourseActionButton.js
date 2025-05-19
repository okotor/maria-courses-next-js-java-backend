'use client';

import { useFormStatus } from 'react-dom';
import classes from '@/app/(auth)/create-course/page.module.css';

export default function CourseActionButton({ actionType = 'create' }) {
  const { pending } = useFormStatus();

  const label = actionType === 'edit'
    ? (pending ? 'Ukládám změny...' : 'Uložit změny')
    : (pending ? 'Vytvářím kurz...' : 'Vytvořit kurz');

  return (
    <button disabled={pending} className={classes.actionButton}>
      {label}
    </button>
  );
}