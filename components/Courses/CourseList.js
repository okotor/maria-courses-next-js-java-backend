import { Suspense } from "react";
import classes from "./CourseList.module.css";


export default function CourseList({ loader, course }) {

    return (
        <>
            <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading}>Loading...</p>}>
                    {loader()}
                </Suspense>
            </main>
        </>
    )
}