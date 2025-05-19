// import CourseList from "@/components/Courses/CourseList";
import { getCoursesForYear } from "@/lib/courseService";
import CoursesGrid from "@/components/Courses/CoursesGrid";
import YearHeader from "@/components/Archive/YearHeader";
import classes from '@/app/page.module.css'

// function LoadingFilteredCourses(courses) {
//     return <CoursesGrid courses={courses}/>
// }

export default async function FilteredCoursesPage({params}) {
    
    const filter = params.filter;
    const selectedYear = filter?.[0];
    const selectedMonth = filter?.[1];
    let courses;
    if (selectedYear && !selectedMonth) {
        courses = await getCoursesForYear(selectedYear);
    }

    let courseContent = <p>Vyberte rok.</p>

    if (courses && courses.length > 0) {
        courseContent = <CoursesGrid courses={courses} />;
    }

    return (
        <div className={classes.section}>
            <YearHeader />
            {courseContent}
        </div>
    );
}