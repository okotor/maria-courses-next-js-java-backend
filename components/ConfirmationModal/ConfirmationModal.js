import React from 'react';
import classes from './ConfirmationModal.module.css';

export default function ConfirmationModal({ 
  message, 
  children,
  onConfirm, 
  onCancel, 
  isOpen, 
  cancelText = 'Zrušit',
  confirmText = 'Potvrdit',
  inputValue,
  onInputChange,
  confirmDisabled = false,
  loading = false
}) {
  if (!isOpen) return null;

  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        {children || <p>{message}</p>}

        {onInputChange && (
          <input
            type="text"
            value={inputValue}
            onChange={onInputChange}
            placeholder="Napište 'Smazat' pro potvrzení"
            className={classes.confirmationInput}
          />
        )}

        <div className={classes.actions}>
          <button onClick={onCancel} className={classes.cancel} disabled={loading}>{cancelText}</button>
          <button 
            onClick={onConfirm} 
            className={classes.confirm} 
            disabled={confirmDisabled || loading}
          >
            {loading ? 'Mazání...' : confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}