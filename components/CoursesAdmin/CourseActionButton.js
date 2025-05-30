'use client';

import { useFormStatus } from 'react-dom';
import classes from './page.module.css';

export default function CourseActionButton({ actionType = 'create', loading = false, message }) {
  const label =
    actionType === 'edit'
      ? (loading ? 'Ukládám změny...' : 'Uložit změny')
      : (loading ? 'Vytvářím kurz...' : 'Vytvořit kurz');

  return (
    <div>
      <button disabled={loading} className={classes.actionButton}>
        {label}
      </button>
      {message && (
        <p style={{ color: message.success ? 'green' : 'red', marginTop: '0.5rem' }}>
          {message.text}
        </p>
      )}
    </div>
  );
}