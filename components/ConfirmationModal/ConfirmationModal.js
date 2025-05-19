import React from 'react';
import classes from './ConfirmationModal.module.css';

export default function ConfirmationModal({ 
  message, 
  onConfirm, 
  onCancel, 
  isOpen, 
  cancelText = 'Zrušit',
  confirmText = 'Potvrdit',
}) {
  if (!isOpen) return null;

  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <p>{message}</p>
        <div className={classes.actions}>
          <button onClick={onCancel} className={classes.cancel}>{cancelText}</button>
          <button onClick={onConfirm} className={classes.confirm}>{confirmText}</button>
        </div>
      </div>
    </div>
  );
}