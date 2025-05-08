import { getCourses } from "@/lib/courseService";
import CoursesGrid from "@/components/Courses/CoursesGrid";
// import CoursesOverview from "@/components/Courses/CoursesOverview";

export const dynamic = 'force-dynamic';

export default async function CoursesPage(){
  const courses = await getCourses(); 

  if (!Array.isArray(courses) || courses.length === 0) {
    return (
      <main className={classes.main}>
        <p>Žádné kurzy nebyly nalezeny.</p>
      </main>
    );
  }

  // return <CoursesOverview courses={courses} />;
  return <CoursesGrid courses={courses} />;
}