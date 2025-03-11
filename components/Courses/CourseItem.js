import Link from 'next/link';
import Image from 'next/image';

import classes from './CourseItem.module.css';

export default function CourseItem({ date, title, slug, image, summary, lecturer }) {
    return (
      <article className={classes.course}>
        <header>
          <div className={classes.image}>
            <Image
              src={`/${image}`} 
              // https://marian-courses-bucket.s3.us-east-1.amazonaws.com/public/
              alt={title}
              fill
            />
          </div>
          <div className={classes.headerText}>
            <h2>{title}</h2>
            <p>Vedoucí: {lecturer}</p>
            <p>Publikováno: {date}</p>
          </div>
        </header>
        <div className={classes.content}>
          <p className={classes.summary}>{summary}</p>
          <div className={classes.actions}>
            <Link href={`/courses/${slug}`}>Více informací</Link>
          </div>
        </div>
      </article>
    );
  }
  