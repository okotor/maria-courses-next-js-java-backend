'use client';
import CourseEditForm from './CourseEditForm';

export default function CourseEditClientWrapper({ course }) {
  return <CourseEditForm course={course} />;
}