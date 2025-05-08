'use client';

import { useEffect, useState } from 'react';
import { getCourses } from "@/lib/courseService";
// import CourseSearchBar from "@/components/Courses/CourseSearchBar";
// import CoursesGrid from "@/components/Courses/CoursesGrid";
import classes from "./page.module.css";
import CoursesOverview from '@/components/Courses/CoursesOverview';

// async function LoadingCourses() {
    // const courses = await getCourses();
//     return <CoursesGrid courses={courses}/>
// }

// export default async function CoursesPage(){
//   const courses = await getCourses();
//     return (
//         <>
//             <header className={classes.header}>
//                 <h1>Kurzy vytvořené {''}
//                     <span className={classes.highlight}>jen pro vás</span>
//                 </h1>
//                                 <p>
//                     Vyberte svůj kurz na míru a zažijte proměnu!
//                 </p>
//             </header>
//             <CourseSearchBar />
//             <main className={classes.main}>
//                 <CoursesGrid courses={courses} />
//             </main>
//             {/* <main className={classes.main}>
//                 <Suspense fallback={<p className={classes.loading}>Loading...</p>}>
//                     <LoadingCourses />
//                 </Suspense>
//             </main> */}
//         </>
//     );
// }

export default function CoursesPage(){
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    getCourses()
    .then(data => {
      console.log("Načtené kurzy:", data);

      const sortedCourses = data.sort((a, b) => new Date(b.date) - new Date(a.date));
      setCourses(sortedCourses);
      setFilteredCourses(sortedCourses); // Initialize filtered courses
    })
    .catch(error => {
      console.error("Nepodařilo se načíst kurzy:", error);
    })
    .finally(() => setLoading(false)); // Set loading to false after fetching;
  }, []);

  const handleSearch = (searchTerm) => {
    const lowercasedTerm = searchTerm.toLowerCase();
    const filtered = courses.filter(course =>
      (typeof course.title === 'string' && course.title.toLowerCase().includes(lowercasedTerm)) ||
      (typeof course.summary === 'string' && course.summary.toLowerCase().includes(lowercasedTerm)) ||
      (typeof course.courseDescription === 'string' && course.courseDescription.toLowerCase().includes(lowercasedTerm)) ||
      (typeof course.lecturer === 'string' && course.lecturer.toLowerCase().includes(lowercasedTerm))
    );
    setFilteredCourses(filtered);
  };

  if (loading) {
    return (
      <main className={classes.main}>
        <p>Načítám...</p> {/* Show loading message */}
      </main>
    );
  }

  return (
    <>
      <header className={classes.header}>
        <h1>Kurzy vytvořené {''}
          <span className={classes.highlight}>jen pro vás</span>
        </h1>
        <p>Vyberte svůj kurz na míru a zažijte proměnu!</p>
      </header>
      <main className={classes.main}>
        <CoursesOverview courses={filteredCourses} onSearch={handleSearch}/>
      </main>
    </>
  );
}