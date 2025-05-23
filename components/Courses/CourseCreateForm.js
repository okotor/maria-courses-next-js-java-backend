import React from 'react';
import { saveCourse } from '@/lib/courseService';
import CourseFields from './CourseFields';
import classes from './page.module.css';

export default function CourseCreateForm() {
  const handleCreate = (formData) => saveCourse(formData);

  return (
    <>
      <header className={classes.header}>
        <h1>Vytvoření <span className={classes.highlight}>nového kurzu</span></h1>
        <p>Zkontroluj si správnost všech údajů a odešli formulář.</p>
      </header>
      <main className={classes.main}>
        <CourseFields onSubmit={handleCreate} requireImage={true} actionType="create" />
      </main>
    </>
  );
}
