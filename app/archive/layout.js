import classes from '@/app/courses/page.module.css'

export default function ArchiveLayout({ archive, latest }) {
    return (
        <>
            <header className={classes.header}>
                <h1>Všechny kurzy</h1>
            </header>
            <section id="archive-latest"> {latest}</section>
            <section id="archive-filter">{archive}</section>
            {/* <section id="archive-latest"> {children}</section> */}
        </>
    );
}