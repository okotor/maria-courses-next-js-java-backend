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
            <Image
              src={`/${image}`} 
              // https://marian-courses-bucket.s3.us-east-1.amazonaws.com/public/
              alt={title}
              fill
            />
          </div>
          <div className={classes.headerText}>
            <h2>{title}</h2>
            <p>Vedoucí: {lecturer}</p>
            <p>Publikováno: {date}</p>
          </div>
        </header>
        <div className={classes.content}>
          <p className={classes.summary}>{summary}</p>
          <div className={classes.actions}>
            <Link href={`/courses/${slug}`}>Více informací</Link>
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
  