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

    // Ensure browser follows redirect if it exists
    if (response.redirected) {
      window.location.href = response.url;
    }
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
