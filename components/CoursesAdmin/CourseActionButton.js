'use client';

import classes from './page.module.css';

export default function CourseActionButton({ actionType = 'create', loading = false, message, disabled = false }) {
  const label =
    actionType === 'edit'
      ? (loading ? 'Ukládám změny...' : 'Uložit změny')
      : (loading ? 'Vytvářím kurz...' : 'Vytvořit kurz');

  return (
    <div>
      <button disabled={loading || disabled} className={classes.actionButton}>
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