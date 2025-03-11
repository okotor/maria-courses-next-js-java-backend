import CourseItem from './CourseItem';
import classes from './CoursesGrid.module.css';

export default function CoursesGrid({ courses }) {
    return (
        <ul className={classes.courses}>
            {courses.map(course => (
                <li key={course.id}>
                    <CourseItem {...course} />
                </li>
            ))}
        </ul>
    );
}