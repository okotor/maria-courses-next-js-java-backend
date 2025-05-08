'use client';

import { useState } from 'react';
import CourseSearchBar from './CourseSearchBar';
import CoursesGrid from './CoursesGrid';
import classes from "./page.module.css";

export default function CoursesOverview({ courses }) {
  const [filteredCourses, setFilteredCourses] = useState(courses ?? []);

  if (!Array.isArray(courses)) {
    return <p>No courses available.</p>;
  }

  const handleSearch = (searchTerm) => {
    const lowercasedTerm = searchTerm.toLowerCase();
    const filtered = courses.filter(course => {
      const titleMatch = typeof course.title === 'string' && course.title.toLowerCase().includes(lowercasedTerm);
      const summaryMatch = typeof course.summary === 'string' && course.summary.toLowerCase().includes(lowercasedTerm);
      const descMatch = typeof course.courseDescription === 'string' && course.courseDescription.toLowerCase().includes(lowercasedTerm);
      const lecturerMatch = typeof course.lecturer === 'string' && course.lecturer.toLowerCase().includes(lowercasedTerm);
      return titleMatch || summaryMatch || descMatch || lecturerMatch;
    });
    setFilteredCourses(filtered);
  };

  return (
    <>
      <header className={classes.header}>
        <h1>
          Kurzy vytvořené <span className={classes.highlight}>jen pro vás</span>
        </h1>
        <p>Vyberte svůj kurz na míru a zažijte proměnu!</p>
      </header>

      <main className={classes.main}>
        <CourseSearchBar onSearch={handleSearch} />
        <CoursesGrid courses={filteredCourses} />
      </main>
    </>
  );
}