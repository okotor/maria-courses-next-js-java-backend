'use client';

import xss from 'xss';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import { useState, useEffect } from 'react';
import AdminCourseActions from '@/components/CoursesAdmin/AdminCourseActions';

import classes from './CourseDetailsClient.module.css';

export default function CourseDetailsClient({ course }) {
  const { authenticated, isAdmin } = useAuth();
  const [videoError, setVideoError] = useState(false);
  const [cacheBuster, setCacheBuster] = useState('');

  useEffect(() => {
    setCacheBuster(`?v=${Date.now()}`);
  }, []);

  const courseDescription = course.courseDescription
  ? xss(
      course.courseDescription
        .replace(/\n/g, '<br />')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')   // Bold
        .replace(/\*(.*?)\*/g, '<em>$1</em>')               // Italics
        .replace(/__(.*?)__/g, '<u>$1</u>')                 // Underline
        .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>') // Links
    )
  : '';

  const imageUrl = course.image && cacheBuster
    ? `https://marian-courses-bucket.s3.us-east-1.amazonaws.com/public/${course.image}${cacheBuster}`
    : '/default-image.jpg';

  const videoUrl = `https://marian-courses-bucket.s3.us-east-1.amazonaws.com/public/videos/${course.slug}-video.mp4${cacheBuster}`;

  return (
    <>
      <header className={classes.header} style={{ flexDirection: 'column', alignItems: 'center', marginTop: '1.5rem' }}>
        <div className={classes.headerText} style={{ textAlign: 'center', maxWidth: '100%', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
          <h1>{course.title}</h1>
          <p className={classes.lecturer} style={{ margin: '1rem 0' }}>
            by <a href={`mailto:${course.lecturer_email}`}>{course.lecturer}</a>
          </p>
          
        </div>
        <div style={{ width: '100%', maxWidth: '40rem', overflow: 'hidden' }}>
          <Image
            src={imageUrl}
            alt={course.title}
            width={640}
            height={180}
            style={{ display: 'block', width: '100%', height: 'auto' }}
          />
        </div>

        <p className={classes.summary} style={{ marginBottom: '0.25rem' }}>{course.summary}</p>

        {/* {authenticated && course.videoKey && (
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <button className="button" onClick={() => setShowVideo(true)}>Zobrazit video</button>
          </div>
        )} */}

        {isAdmin && (
          <AdminCourseActions slug={course.slug} title={course.title} />
        )}
      </header>

      <main>
        {authenticated ? (
          videoError ? (
            <p className={classes.loginReminder}>
              Kurz je prezenční, neobsahuje tedy video záznam.
            </p>
          ) : (
            <div className={classes.modalOverlay}>
              <div className={classes.modalContent}>
                <video
                  controls
                  style={{ width: '100%' }}
                  onError={() => setVideoError(true)}
                >
                  <source
                    src={videoUrl}
                    type="video/mp4"
                  />
                  Váš prohlížeč nepodporuje video tag.
                </video>
              </div>
            </div>
          )
        ) : (
          <p className={classes.loginReminder}>
            Přihlas se pro zobrazení videozáznamu kurzu.
          </p>
        )}

        <p
          className={classes.instructions}
          style={{ margin: '0 auto', width: '75%', marginTop: '0.5rem', fontSize: '1.45rem' }}
          dangerouslySetInnerHTML={{ __html: courseDescription }}
        ></p>
      </main>
    </>
  );
}
