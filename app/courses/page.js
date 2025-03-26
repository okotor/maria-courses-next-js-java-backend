import { getCourses } from "@/lib/courses-actions";
import CourseList from "@/components/Courses/CourseList";
import CoursesGrid from "@/components/Courses/CoursesGrid";
import SearchIcon from '@mui/icons-material/Edit';
import {
    InputAdornment,
    TextField,
  } from "@mui/material";
import classes from "./page.module.css";

export const metadata = {
    title: 'All Courses',
    description: 'Browse the magnificent courses offered'
}

async function LoadingCourses() {
    const courses = await getCourses();
    return <CoursesGrid courses={courses}/>
}

export default async function CoursesPage(){

    return (
        <>
            <header className={classes.header}>
                <h1>Kurzy vytvořené {''}
                    <span className={classes.highlight}>jen pro vás</span>
                </h1>
                                <p>
                    Vyberte svůj kurz na míru a zažijte proměnu!
                </p>
            </header>
            <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            placeholder="Najd kurz podle klíčového slova..."
            sx={{ width: "75%", padding: "2% auto" }}
            fullWidth
            // onChange={(e) => setQuery(e.target.value)}
          />
            <CourseList loader={LoadingCourses}/>
            {/* <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading}>Loading...</p>}>
                    <LoadingCourses />
                </Suspense>
            </main> */}
        </>
    );
}