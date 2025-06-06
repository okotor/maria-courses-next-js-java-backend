import CourseItem from './CourseItem';
import classes from './CoursesGrid.module.css';

export default function CoursesGrid({ courses, onDeleted }) {
    if (!Array.isArray(courses) || courses.length === 0) {
        return <p className={`noItemChosen`}>Žádný text v žádném našem kurzu neobsahuje tuto sekvenci písmen.</p>;
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