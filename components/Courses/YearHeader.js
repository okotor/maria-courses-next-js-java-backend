'use client';

import ArchiveLink from './ArchiveLink';
import classes from '@/app/page.module.css';

export default function YearHeader({ courseYearLinks }) {
  return (
    <header className={`${classes.highlight} ${classes.subheader}`}>
      <h1>Archiv kurzů</h1>
      <ul className={classes.yearslist}>
        {courseYearLinks.map((link) => (
          <li key={link}>
            <ArchiveLink href={`/archive/${link}`} className={classes.link}>
              {link}
            </ArchiveLink>
          </li>
        ))}
      </ul>
    </header>
  );
}