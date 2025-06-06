'use client';

import { useState } from 'react';
import { FormInput, FormMessage } from '@/components/AuthForms/AuthFormElements';
import ConfirmationModal from '@/components/ConfirmationModal/ConfirmationModal';
import { useAuth } from '@/context/AuthContext';
import api from '@/utils/api';

export default function AccountSettingsForm() {
  const { logout } = useAuth();
  const [confirmText, setConfirmText] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [deleteError, setDeleteError] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const oldPassword = formData.get('oldPassword');
    const newPassword = formData.get('newPassword');
    const confirmPassword = formData.get('confirmPassword');

    if (newPassword !== confirmPassword) {
      setPasswordError("Nová hesla se neshodují.");
      return;
    }

    try {
      setLoading(true);
      const response = await api.put('/change-password', { oldPassword, newPassword });
      setPasswordMessage(response.data?.message || "Heslo bylo změněno.");
      setPasswordError('');
      e.target.reset(); 
    } catch (err) {
      const backendError = err?.response?.data?.error || err?.response?.data || "Změna hesla selhala.";
      setPasswordError(backendError);
      setPasswordMessage('');
    } finally {
      setLoading(false);
    }
  };

  const confirmAccountDeletion = async () => {
    if (confirmText.trim() !== 'Smazat') {
      setDeleteError("Potvrzovací text musí být 'Smazat'.");
      return;
    }

    try {
      const response = await api.delete('/delete-account');
      setDeleteError('');
      await logout();
    } catch (err) {
      const backendError =
        err?.response?.data?.error ||
        (typeof err?.response?.data === 'string' ? err.response.data : null) ||
        "Smazání účtu selhalo.";
      setDeleteError(backendError);
    }
  };

  return (
    <>
      <div className="auth-form" style={{ maxWidth: 500, margin: '2rem auto' }}>
        <form onSubmit={handlePasswordSubmit}>
          <h2>Změna hesla</h2>

          <FormInput type="password" name="oldPassword" label="Původní heslo:" disabled={loading} />
          <FormInput type="password" name="newPassword" label="Nové heslo:" disabled={loading} />
          <FormInput type="password" name="confirmPassword" label="Potvrdit nové heslo:" disabled={loading} />

          <FormMessage error={passwordError} success={passwordMessage} />

          <div style={{ marginTop: '1rem' }}>
            <button type="submit" className="button" disabled={loading}>
              {loading ? 'Ukládání...' : 'Uložit změnu hesla'}
            </button>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <button
              type="button"
              onClick={() => setShowDeleteModal(true)}
              style={{
                backgroundColor: '#e04e2c',
                color: 'white',
                width: '100%',
                padding: '0.6rem 1.2rem',
                fontWeight: 600,
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              Smazat účet
            </button>
          </div>
        </form>
      </div>

      <ConfirmationModal
        isOpen={showDeleteModal}
        onConfirm={confirmAccountDeletion}
        onCancel={() => setShowDeleteModal(false)}
        cancelText="Zrušit"
        confirmText="Smazat"
      >
        <div>
          <p>Opravdu chcete smazat svůj účet? Tato akce je nevratná.</p>
          <p>Zadejte slovo <strong>"Smazat"</strong> pro potvrzení:</p>
          <input
            type="text"
            value={confirmText}
            onChange={(e) => setConfirmText(e.target.value)}
            placeholder="Smazat"
            style={{
              width: '100%',
              padding: '0.5rem',
              marginTop: '1rem',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
          />
          {deleteError && <FormMessage error={deleteError} />}
        </div>
      </ConfirmationModal>
    </>
  );
}
