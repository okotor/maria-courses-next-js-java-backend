// import CourseList from "@/components/Courses/CourseList";
import { getCoursesForYear } from "@/lib/courseService";
import classes from '@/app/page.module.css'
import YearHeaderWrapper from "@/components/Courses/YearHeaderWrapper";
import CoursesGrid from "@/components/Courses/CoursesGrid";

// function LoadingFilteredCourses(courses) {
//     return <CoursesGrid courses={courses}/>
// }

export default async function FilteredCoursesPage({params}) {
    
    const filter = params.filter;
    const selectedYear = filter?.[0];
    // const selectedMonth = filter?.[1];
    let courses = [];
    if (selectedYear /*&& !selectedMonth*/) {
        courses = await getCoursesForYear(selectedYear);
    }

    // if (courses && courses.length > 0) {
    //     courseContent = <CoursesGrid courses={courses} />;
    // }

    return (
        <div className={classes.main}>
            <YearHeaderWrapper />
        {selectedYear ? (
            <CoursesGrid courses={courses} />
        ) : (
            <p styles={{textAlign: 'center'}}>Vyberte rok.</p>
        )}
        </div>
    );
}