'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import classes from './CourseItem.module.css'

export default function CourseItemClient({ date, title, slug, image, summary, lecturer, onRequestDelete }) {
  const auth = useAuth();
  const { isAdmin } = auth || {};
  const [cacheBuster, setCacheBuster] = useState('');
  const router = useRouter();

  useEffect(() => {
    setCacheBuster(`?v=${Date.now()}`);
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return 'Datum není dostupné';
    return new Date(dateString).toLocaleDateString('cs-CZ', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formattedDate = formatDate(date);
  const safeTitle = typeof title === 'string' ? title : 'Bez názvu';
  const safeLecturer = typeof lecturer === 'string' ? lecturer : 'Neznámý';
  const safeSummary = typeof summary === 'string' ? summary : 'Neznámý';
  const safeSlug = typeof slug === 'string' ? slug : '';

  const imageUrl = image && cacheBuster
    ? `https://marian-courses-bucket.s3.us-east-1.amazonaws.com/public/${image}${cacheBuster}`
    : null;

  const handleEdit = () => {
    router.push(`/edit-course/${safeSlug}`);
  };

  const handleDelete = async (confirmationInput, setLoading, setModalOpen, setConfirmationInput) => {
    if (confirmationInput !== 'Smazat') return;
    setLoading(true);
    try {
      const res = await fetch(`/api/courses/${safeSlug}/delete`, { method: 'DELETE' });
      if (res.redirected) {
        window.location.href = res.url;
      } else {
        onRequestDelete?.();
      }
    } catch (error) {
      console.error('Chyba při mazání kurzu:', error);
    } finally {
      setLoading(false);
      setModalOpen(false);
      setConfirmationInput('');
    }
  };

  return (
    <article className={classes.course}>
      <header>
        <div className={classes.image}>
          {imageUrl ? (
            <Image
              src={imageUrl}
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
        <p className={classes.summary}>{safeSummary}</p>
        <div className={classes.actions}>
          <div className={classes.actionsRow}>
            <Link href={`/courses/${safeSlug}`}>Více informací</Link>
            {isAdmin && (
                <>
                  <FaTrash
                    onClick={() => onRequestDelete?.(handleDelete, { slug: safeSlug, title: safeTitle })}
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
  );
}
