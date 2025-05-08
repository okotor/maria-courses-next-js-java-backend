'use client';

import CourseSearchBar from './CourseSearchBar';
import CoursesGrid from './CoursesGrid';

export default function CoursesOverview({ courses, onSearch }) {
  return (
    <>
      <CourseSearchBar onSearch={onSearch} />
      <CoursesGrid courses={courses} />
    </>
  );
}