'use client';

import Link from 'next/link';
import Image from 'next/image';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useAuth } from '@/context/AuthContext'; // Import useAuth hook
import classes from './CourseItem.module.css';

export default function CourseItem({ date, title, slug, image, summary, lecturer }) {
  // const { isAdmin } = useAuth(); // Get isAdmin from AuthContext
  const { isAdmin } = false; // For testing purposes, set isAdmin to false

  // Add console logs to check each prop individually
  console.log('CourseItem Props:', { date, title, slug, image, summary, lecturer });
  console.log('Types:', {
    title: typeof title,
    summary: typeof summary,
    lecturer: typeof lecturer,
    slug: typeof slug,
    date: typeof date,
  });

  // Format date safely
  let formattedDate = 'Neznámé datum';
  if (date instanceof Date && !isNaN(date)) {
    formattedDate = date.toLocaleDateString('cs-CZ', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } else if (typeof date === 'string' || typeof date === 'number') {
    const d = new Date(date);
    if (!isNaN(d)) {
      formattedDate = d.toLocaleDateString('cs-CZ', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    }
  }

  // Defensive: ensure correct types for all fields
  const safeTitle = typeof title === 'string'
    ? title
    : (title !== undefined && title !== null ? JSON.stringify(title) : 'Bez názvu');
  const safeLecturer = typeof lecturer === 'string'
    ? lecturer
    : (lecturer !== undefined && lecturer !== null ? JSON.stringify(lecturer) : 'Neznámý');
  const safeSummary = typeof summary === 'string'
    ? summary
    : (summary !== undefined && summary !== null ? JSON.stringify(summary) : 'Neznámý');
  const safeSlug = typeof slug === 'string'
    ? slug
    : (slug !== undefined && slug !== null ? JSON.stringify(slug) : '');

  // Define functions to handle delete and edit
  const handleDelete = () => {
          alert('Need to define.');
      }   

  const handleEdit = () => {
        alert('Need to define.');
    }   


  return (
    <article className={classes.course}>
      <header>
        <div className={classes.image}>
        {image ? (
          <Image
            src={`https://marian-courses-bucket.s3.us-east-1.amazonaws.com/public/${image}`} 
            alt={title}
            fill
          />
        ) : (
          <div className={classes.placeholderImage}>No Image Available</div>
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
          <Link href={`/courses/${safeSlug}`}>Více informací</Link>
          {/* Show these icons only if the user is an admin */}
          {isAdmin && (
                      <>
                          <DeleteIcon onClick={handleDelete} />
                          <EditIcon onClick={handleEdit} />
                      </>
                  )}
        </div>
      </div>
    </article>
  );
}
  