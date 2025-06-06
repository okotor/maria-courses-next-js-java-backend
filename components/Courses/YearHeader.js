'use client';

import ArchiveLink from './ArchiveLink';
import classes from '@/app/page.module.css';

export default function YearHeader({ courseYearLinks }) {
  return (
    <header className={`${classes.subsubheader}`}>
      <h1>Archiv <span className={classes.highlight}>kurzů</span></h1>
      <ul className={classes.yearslist}>
        {courseYearLinks.map((link) => (
          <li key={link} className={classes.highlight}>
            <ArchiveLink href={`/archive/${link}`}>
              {link}
            </ArchiveLink>
          </li>
        ))}
      </ul>
    </header>
  );
}