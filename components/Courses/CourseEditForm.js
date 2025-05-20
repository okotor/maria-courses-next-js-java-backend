'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCourse, updateCourse } from '@/lib/courseService';
import CourseFields from './CourseFields';
import CourseActionButton from './CourseActionButton';
import classes from './page.module.css';

export default function CourseEditForm({ slug }) {
  const [course, setCourse] = useState(null);
  const [state, setState] = useState({ loading: true, success: false, message: null });
  const router = useRouter();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const data = await getCourse(slug);
        setCourse(data);
        setState(prev => ({ ...prev, loading: false }));
      } catch (error) {
        console.error('Error loading course:', error);
        setState({ loading: false, success: false, message: 'Chyba při načítání kurzu.' });
      }
    };

    fetchCourse();
  }, [slug]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      await updateCourse(formData, slug);
      setState({ loading: false, success: true, message: 'Kurz byl úspěšně aktualizován!' });
      router.push('/courses');
    } catch (error) {
      console.error('Error updating course:', error);
      setState({ loading: false, success: false, message: 'Chyba při aktualizaci kurzu.' });
    }
  };

  const handleCancel = () => {
    router.back();
  };

  if (state.loading) return <p>Načítání...</p>;

  return (
    <>
      <header className={classes.header}>
        <h1>
          Úprava <span className={classes.highlight}>kurzu</span>
        </h1>
        <p>Uprav potřebná pole a ulož kurz.</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <CourseFields defaultValues={course} />
          <p style={{ fontSize: '0.9em', color: '#666', marginTop: '0.25rem' }}>
            Pokud nenahrajete nový obrázek, stávající zůstane beze změny.
          </p>
          {state.message && (
            <p style={{ color: state.success ? 'green' : 'red' }}>{state.message}</p>
          )}
          <p className={classes.actions}>
            <button type="button" onClick={handleCancel} className={classes.cancelButton}>
                Zrušit
            </button>
            <CourseActionButton actionType="edit" />
          </p>
        </form>
      </main>
    </>
  );
}