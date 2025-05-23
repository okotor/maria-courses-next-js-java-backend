'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { updateCourse } from '@/lib/courseService';
import CourseFields from './CourseFields';
import classes from './page.module.css';

export default function CourseEditForm({ course }) {
  const router = useRouter();

  const handleCancel = () => {
    router.back();
  };

  const handleUpdate = (formData) => {
    if (!formData.get('image')?.name) {
      formData.delete('image');
    }
    return updateCourse(formData, course.slug);
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
