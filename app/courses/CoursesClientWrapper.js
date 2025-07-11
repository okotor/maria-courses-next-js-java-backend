'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { getCourses } from "@/lib/courseService";
import CoursesOverview from "@/components/Courses/CoursesOverview";
import classes from '@/app/page.module.css';

export default function CoursesClientWrapper(){
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getCourses(); // YOUR LOGIC (respects sorting)
        setCourses(data);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (searchParams.get('refresh') === '1') {
      async function refreshData() {
        setLoading(true);
        try {
          const data = await getCourses();
          setCourses(data);
          setError(null);
        } catch (e) {
          setError(true);
        } finally {
          setLoading(false);
        }
        // Remove refresh param from URL (optional)
        const params = new URLSearchParams(window.location.search);
        params.delete('refresh');
        router.replace(`/courses${params.toString() ? '?' + params.toString() : ''}`);
      }
      refreshData();
    }
  }, [searchParams, router]);

  if (loading) return <p className={classes.courseError}>Načítání kurzů…</p>;
  if (error) return <p className={classes.courseError}>Chyba při načítání kurzů.</p>;
  if (!courses) return <p className={classes.courseError}>Žádné kurzy.</p>;

  return <CoursesOverview courses={courses} />;
}