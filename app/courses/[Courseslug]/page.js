import { notFound } from 'next/navigation';
import { getCourse, getCourses } from '@/lib/courseService';
import CourseDetailsClient from '@/components/Courses/CourseDetailsClient';

export async function generateStaticParams() {
  try {
    const courses = await getCourses();
    return courses.map((course) => ({ Courseslug: course.slug }));
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
}

export default async function CourseDetailsPage({ params }) {
  const { Courseslug } = await params;
  const course = await getCourse(Courseslug);

  if (!course) {
    notFound();
    return null;
  }

  return <CourseDetailsClient course={course} />;
}   