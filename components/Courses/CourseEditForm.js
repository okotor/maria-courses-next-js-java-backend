'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import CourseFields from './CourseFields';
import classes from './page.module.css';

export default function CourseEditForm({ course }) {
  const router = useRouter();

  const handleUpdate = async (formData) => {
    if (!formData.get('image')?.name) {
      formData.delete('image');
    }
    const response = await fetch(`/api/courses/${course.slug}/edit`, {
      method: 'POST',
      body: formData,
    });

    if (response.redirected) {
      window.location.href = response.url; // ✅ browser will load fresh, revalidated content
    }
  };

  return (
    <>
      <header className={classes.header}>
        <h1>Úprava <span className={classes.highlight}>kurzu</span></h1>
        <p>Uprav libovolné pole a odešli formulář.</p>
      </header>
      <main className={classes.main}>
        <CourseFields defaultValues={course} onSubmit={handleUpdate} requireImage={false} actionType="edit" />
      </main>
    </>
  );
}
