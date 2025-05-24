'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import AdminCourseActions from '@/components/Courses/AdminCourseActions';
import classes from './CourseItem.module.css';

export default function CourseItemClient({ date, title, slug, image, summary, lecturer, onDeleted }) {
  const auth = useAuth();
  const { isAdmin } = auth || {};

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

  return (
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
        <p className={classes.summary}>{safeSummary}</p>
        <div className={classes.actions}>
          <div className={classes.actionsRow}>
            <Link href={`/courses/${safeSlug}`}>Více informací</Link>
            {isAdmin && (
              <AdminCourseActions
                slug={safeSlug}
                title={safeTitle}
                {...(onDeleted ? { onDeleted: () => onDeleted(safeSlug) } : {})}
              />
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
