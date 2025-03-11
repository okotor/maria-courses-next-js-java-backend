import CourseList from "@/components/Courses/CourseList";
import { getCoursesForYear } from "@/lib/db-content";
import CoursesGrid from "@/components/Courses/CoursesGrid";
import YearHeader from "@/components/Archive/YearHeader";

function LoadingFilteredCourses(courses) {
    return <CoursesGrid courses={courses}/>
}

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
        courseContent = <CourseList loader={() => LoadingFilteredCourses(courses)} />
    }

    return (
        <>
            <YearHeader />
            {courseContent}
        </>
    );
}