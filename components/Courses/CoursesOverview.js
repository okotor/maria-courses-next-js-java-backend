'use client';

import { useState } from 'react';
import CourseSearchBar from './CourseSearchBar';
import CoursesGrid from './CoursesGrid';

export default function CoursesOverview({ courses }) {
  if (!Array.isArray(courses)) {
    return <p>No courses available.</p>;
  }
  if (courses.length === 0) {
    return <p>No courses available.</p>;
  }
  const [filteredCourses, setFilteredCourses] = useState(courses);

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
      <CourseSearchBar onSearch={handleSearch} />
      <CoursesGrid courses={filteredCourses} />
    </>
  );
}