import { getCourses } from "@/lib/courseService";
import CoursesOverview from "@/components/Courses/CoursesOverview";
import classes from "./page.module.css";

export default async function CoursesPage(){
  const courses = await getCourses(); 

  if (!Array.isArray(courses) || courses.length === 0) {
    return (
      <main className={classes.main}>
        <p>Žádné kurzy nebyly nalezeny.</p>
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
        <CoursesOverview courses={courses}/>
      </main>       
    </>
  );
}