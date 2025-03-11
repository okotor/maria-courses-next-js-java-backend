import Image from 'next/image';

import { notFound } from 'next/navigation';
import { getCourse } from '@/lib/db-content'
import classes from './page.module.css'

export default async function CourseDetailsPage( { params } ) {
    const { Courseslug } = await params;
    const course = await getCourse(Courseslug);


    // If the course is not found, show the not found page
    if (!course) {
        notFound();
        return null; // Return null to stop further processing
    }

    course.course_description = course.course_description.replace(/\n/g, '<br />');

    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={'/' + `${course.image}`} alt={course.title} fill/>
                {/* https://marian-courses-bucket.s3.us-east-1.amazonaws.com/public/ */}
                </div>
                <div className={classes.headerText}>
                    <h1>{course.title}</h1>
                    <p className={classes.lecturer}></p>
                        by <a href={`mailto:${course.lecturer_email}`}>{course.lecturer}</a>
                </div>
                <p className={classes.summary}>{course.summary}</p>
            </header>
            <main>
                <p className={classes.instructions} dangerouslySetInnerHTML={{
                    __html: course.course_description,
                }}></p>
            </main>
        </>
    );
}