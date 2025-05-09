import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getCourse, getCourses } from '@/lib/courseService'
import classes from './page.module.css'

export async function generateStaticParams() {
    try {
        const courses = await getCourses();
        return courses.map((course) => ({
          Courseslug: course.slug,
        }));
      } catch (error) {
        console.error("Error fetching courses:", error);
        return []; // Return an empty array to avoid build failure
      }
    }

export default async function CourseDetailsPage( { params } ) {
    // const { Courseslug } = await params;
    // const course = await getCourse(Courseslug);
    const course = await getCourse(params.Courseslug);

    // If the course is not found, show the not found page
    if (!course) {
        notFound();
        return null; // Return null to stop further processing
    }

   // Replace newlines with <br /> tags in course description
   const courseDescription = course.courseDescription ? course.courseDescription.replace(/\n/g, '<br />') : '';

    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image 
                       src={course.image ? `https://marian-courses-bucket.s3.us-east-1.amazonaws.com/public/${course.image}` : '/default-image.jpg'}
                       alt={course.title} 
                        fill
                    />
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
                <p 
                className={classes.instructions}
                dangerouslySetInnerHTML={{
                    __html: courseDescription}}
                ></p>
            </main>
        </>
    );
}