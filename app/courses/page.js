'use client';

import { useEffect, useState } from 'react';
import { getCourses } from "@/lib/courses-actions";
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

  useEffect(() => {
    getCourses().then(setCourses);
  }, []);

  return (
    <>
      <header className={classes.header}>
        <h1>Kurzy vytvořené {''}
          <span className={classes.highlight}>jen pro vás</span>
        </h1>
        <p>Vyberte svůj kurz na míru a zažijte proměnu!</p>
      </header>
      <main className={classes.main}>
        <CoursesOverview courses={courses} />
      </main>
    </>
  );
}