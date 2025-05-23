'use client';

import { useState } from 'react';
import CourseSearchBar from './CourseSearchBar';
import CoursesGrid from './CoursesGrid';
import classes from '@/app/page.module.css';

export default function CoursesOverview({ courses }) {
  const [allCourses, setAllCourses] = useState(courses ?? []);
  const [filteredCourses, setFilteredCourses] = useState(courses ?? []);

  if (!Array.isArray(courses)) {
    return <p>Kurzy nejsou dostupné.</p>;
  }

  const handleSearch = (searchTerm) => {
    const lowercasedTerm = searchTerm.toLowerCase();
    const filtered = courses.filter(course => {
      const titleMatch = course.title?.toLowerCase().includes(lowercasedTerm);
      const summaryMatch = course.summary?.toLowerCase().includes(lowercasedTerm);
      const descMatch = course.courseDescription?.toLowerCase().includes(lowercasedTerm);
      const lecturerMatch = course.lecturer?.toLowerCase().includes(lowercasedTerm);
      return titleMatch || summaryMatch || descMatch || lecturerMatch;
    });
    setFilteredCourses(filtered);
  };

  const handleCourseDeleted = (slug) => {
    const updated = allCourses.filter(course => course.slug !== slug);
    setAllCourses(updated);
    setFilteredCourses(prev => prev.filter(course => course.slug !== slug));
  };

  return (
    <>
      <header className={classes.header}>
        <h1>
          Kurzy vytvořené <span className={classes.highlight}>jen pro vás</span>
        </h1>
        <p>Najděte svůj kurz na míru a zažijte proměnu!</p>
      </header>

      <main className={classes.main}>
        <CourseSearchBar onSearch={handleSearch} />
        <CoursesGrid courses={filteredCourses} onDeleted={handleCourseDeleted} />
      </main>
    </>
  );
}