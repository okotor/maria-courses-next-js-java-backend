import Link from "next/link";
import classes from '@/app/page.module.css'
import { getAvailableCourseYears } from "@/lib/db-content";

export default async function YearHeader() {
    const courseYearLinks = await getAvailableCourseYears();
    return (
        <>
            <header className={`${classes.highlight} ${classes.subheader}`}>
                <h1>Archiv kurzů</h1>
                <ul className={classes.yearslist}>
                    {courseYearLinks.map(link => <li key={link}>
                        <Link href={`/archive/${link}`}>{link}</Link>
                    </li>
                )}
                </ul>
            </header>
        </>
    );
}