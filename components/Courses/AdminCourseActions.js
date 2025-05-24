'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaTrash, FaEdit } from 'react-icons/fa';
import ConfirmationModal from '@/components/ConfirmationModal/ConfirmationModal';
import classes from './AdminCourseActions.module.css';

export default function AdminCourseActions({ slug, title, onDeleted }) {
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDeleting, setDeleting] = useState(false);
  const [confirmationInput, setConfirmationInput] = useState('');

  const handleEdit = () => {
    router.push(`/edit-course/${slug}`);
  };

  const handleDelete = async () => {
    if (confirmationInput !== 'Smazat') return;
    setDeleting(true);
    try {
      const res = await fetch(`/api/courses/${slug}/delete`, { method: 'DELETE' });
      if (res.redirected) {
        window.location.href = res.url;
      } else if (onDeleted) {
        onDeleted();
      }
    } catch (error) {
      console.error('Chyba při mazání kurzu:', error);
    } finally {
      setDeleting(false);
      setModalOpen(false);
      setConfirmationInput('');
    }
  };

  return (
    <div className={classes.actionsRow}>
      <span><FaEdit
        onClick={handleEdit}
        className={classes.iconButton}
        title="Upravit kurz"
        role="button"
      /></span>
      <span><FaTrash
        onClick={() => setModalOpen(true)}
        className={classes.iconButton}
        title="Smazat kurz"
        role="button"
      /></span>
      <ConfirmationModal
        isOpen={isModalOpen}
        message={`Pro smazání kurzu \"${title}\" napište \"Smazat\" do pole níže:`}
        inputValue={confirmationInput}
        onInputChange={e => setConfirmationInput(e.target.value)}
        onConfirm={handleDelete}
        onCancel={() => {
          setModalOpen(false);
          setConfirmationInput('');
        }}
        cancelText="Nemazat"
        confirmText="Smazat"
        confirmDisabled={confirmationInput !== 'Smazat'}
        loading={isDeleting}
      />
    </div>
  );
}
