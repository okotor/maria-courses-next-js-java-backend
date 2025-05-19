'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { useAuth } from '@/context/AuthContext'; 
import { useRouter } from 'next/navigation';
import { deleteCourse } from '@/lib/courseService';
import { useState } from 'react';
import ConfirmationModal from '@/components/ConfirmationModal/ConfirmationModal';
import classes from './CourseItem.module.css';

export default function CourseItem({ date, title, slug, image, summary, lecturer }) {
  const auth = useAuth();
  console.log('useAuth:', auth);
  const { isAdmin } = auth || {};
  console.log('isAdmin:', isAdmin);
  console.log('image:', image);
  const router = useRouter();

  const [isModalOpen, setModalOpen] = useState(false);
  const [isDeleting, setDeleting] = useState(false);

  // Defensive: ensure correct types for all fields
  const formattedDate = date || 'Datum není dostupné';  // Directly use the formatted date from the service
  const safeTitle = typeof title === 'string' ? title : 'Bez názvu';
  const safeLecturer = typeof lecturer === 'string' ? lecturer : 'Neznámý';
  const safeSummary = typeof summary === 'string' ? summary : 'Neznámý';
  const safeSlug = typeof slug === 'string' ? slug : '';

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  // Confirm & delete course then refresh list or navigate
  const handleDelete = async () => {
    setDeleting(true);
    try {
      await deleteCourse(safeSlug);
      router.refresh();
    } catch (error) {
      console.error('Error deleting course:', error);
      // Optionally show a toast or message here
    } finally {
      setDeleting(false);
      closeModal();
    }
  };

  // Navigate to edit page
  const handleEdit = () => {
    router.push(`/edit-course/${safeSlug}`);
  }; 

  return (
    <>
      <article className={classes.course}>
        <header>
          <div className={classes.image}>
          {image ? (
            <Image
              src={`https://marian-courses-bucket.s3.us-east-1.amazonaws.com/public/${image}`} 
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className={classes.placeholderImage}>Obrázek není k dispozici.</div>
          )}
          </div>
          <div className={classes.headerText}>
            <h2>{safeTitle}</h2>
              <p>Vedoucí: {safeLecturer}</p>
              <p>Publikováno: {formattedDate}</p>
          </div>
        </header>
        <div className={classes.content}>
          <p className={classes.summary}>
          {safeSummary}
          </p>
          <div className={classes.actions}>
            <div className={classes.actionsRow}>
              <Link href={`/courses/${safeSlug}`}>Více informací</Link>
              {/* Show these icons only if the user is an admin. */}
              {isAdmin && (
                <>
                  <FaTrash 
                    onClick={openModal} 
                    className={classes.iconButton} 
                    title="Smazat kurz" 
                    role="button"
                  />
                  <FaEdit 
                    onClick={handleEdit} 
                    className={classes.iconButton} 
                    title="Upravit kurz" 
                    role="button"
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </article>
       <ConfirmationModal
          isOpen={isModalOpen}
          message={`Opravdu chcete smazat kurz "${safeTitle}"?`}
          onConfirm={handleDelete}
          onCancel={closeModal}
          cancelText="Nemazat"
          confirmText="Smazat"
        />
    </>  
  );
}
  