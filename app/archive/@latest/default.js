// import CourseList from "@/components/Courses/CourseList";
import { getLatestCourses } from "@/lib/courseService";
import CoursesGrid from "@/components/Courses/CoursesGrid";
import classes from '@/app/courses/page.module.css'


// async function LoadingLatestCourses() {
//     const courses = await getLatestCourses();
//     return <CoursesGrid courses={courses}/>
// }

export default async function LatestCoursesPage() {
    const courses = await getLatestCourses();

    return (
        <>
            <div className={classes.subheader} style={{ textAlign: 'center' }}>
            <h1>Nejnovější <span className={classes.highlight} >kurzy</span></h1>
            </div>
            <CoursesGrid courses={courses} />
        </>
    );
}