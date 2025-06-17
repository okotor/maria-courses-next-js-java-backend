'use client';

import React from 'react';
import CourseFields from '../CoursesAdmin/CourseFields';
import classes from './page.module.css';

export default function CourseCreateForm() {
  const handleCreate = async (formData) => {
    if (!formData.get('image')?.name) {
      formData.delete('image');
    }

    // in your client component
    const response = await fetch('/api/courses/create', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    console.log('[FRONTEND RECEIVED]', data, response.ok, response.status);

    if (!response.ok || !data.success) {
      throw new Error(data.message || 'Chyba při vytváření kurzu');
    }

    return data;
  };

  return (
    <>
      <header className={`page-header ${classes.header}`}>
        <h1>Vytvoření <span className={classes.highlight}>nového kurzu</span></h1>
        <p>Zkontroluj si správnost všech údajů a odešli formulář.</p>
      </header>
      <main className={classes.main}>
        <CourseFields onSubmit={handleCreate} requireImage={true} actionType="create" />
      </main>
    </>
  );
}
