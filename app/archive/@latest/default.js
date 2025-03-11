import CourseList from "@/components/Courses/CourseList";
import { getLatestCourses } from "@/lib/db-content";
import CoursesGrid from "@/components/Courses/CoursesGrid";
import classes from '@/app/courses/page.module.css'


async function LoadingLatestCourses() {
    const courses = await getLatestCourses();
    return <CoursesGrid courses={courses}/>
}

export default function LatestCoursesPage() {

    return (
        <>
            <div className={`${classes.highlight} ${classes.subheader}`}>
            <h1>Nejnovější kurzy</h1>
            </div>
            <CourseList loader={LoadingLatestCourses}/>
        </>
    );
}