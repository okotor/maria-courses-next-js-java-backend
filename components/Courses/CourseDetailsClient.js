'use client';

import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import { useState } from 'react';
import AdminCourseActions from '@/components/Courses/AdminCourseActions';
import classes from './CourseDetailsClient.module.css';

export default function CourseDetailsClient({ course }) {
  const { authenticated, isAdmin } = useAuth();
  const [showVideo, setShowVideo] = useState(false);

  const courseDescription = course.courseDescription
    ? course.courseDescription.replace(/\n/g, '<br />')
    : '';

  return (
    <>
      <header className={classes.header} style={{ flexDirection: 'column', alignItems: 'center', marginTop: '1.5rem' }}>
        <div style={{ width: '100%', maxWidth: '40rem', overflow: 'hidden' }}>
          <Image
            src={course.image
              ? `https://marian-courses-bucket.s3.us-east-1.amazonaws.com/public/${course.image}`
              : '/default-image.jpg'}
            alt={course.title}
            layout="responsive"
            width={640}
            height={180}
            style={{ display: 'block' }}
          />
        </div>

        <div className={classes.headerText} style={{ textAlign: 'center', maxWidth: '100%', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
          <h1>{course.title}</h1>
          <p className={classes.lecturer} style={{ margin: '1rem 0' }}>
            by <a href={`mailto:${course.lecturer_email}`}>{course.lecturer}</a>
          </p>
          <p className={classes.summary} style={{ marginBottom: '0.25rem' }}>{course.summary}</p>
        </div>

        {isAdmin && (
          <AdminCourseActions slug={course.slug} title={course.title} />
        )}
      </header>

      <main>
        <p
          className={classes.instructions}
          style={{ margin: '0 auto', width: '75%', marginTop: '0.5rem', fontSize: '1.45rem' }}
          dangerouslySetInnerHTML={{ __html: courseDescription }}
        ></p>

        {authenticated && course.videoKey && (
          <>
            <div style={{ textAlign: 'center' }}>
              <button className="button" onClick={() => setShowVideo(true)}>Zobrazit video</button>
            </div>
            {showVideo && (
              <div className={classes.modalOverlay}>
                <div className={classes.modalContent}>
                  <video controls autoPlay style={{ width: '100%' }}>
                    <source src={`https://marian-courses-bucket.s3.us-east-1.amazonaws.com/videos/${course.videoKey}`} type="video/mp4" />
                    Váš prohlížeč nepodporuje video tag.
                  </video>
                  <button onClick={() => setShowVideo(false)} className="button">Zavřít</button>
                </div>
              </div>
            )}
          </>
        )}
      </main>
    </>
  );
}
