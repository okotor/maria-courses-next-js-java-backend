import CourseItem from './CourseItem';
console.log('>>> CourseItem type:', typeof CourseItem);
import classes from './CoursesGrid.module.css';

export default function CoursesGrid({ courses, onDeleted }) {
    if (!Array.isArray(courses) || courses.length === 0) {
        return <p>No courses available.</p>;
      }

    return (
        <ul id="courses-grid" className={classes.courses}>
            {courses.map(course => (
                <li key={course.cId || course.slug}>
                    <CourseItem {...course} onDeleted={onDeleted} />
                </li>
            ))}
        </ul>
    );
}