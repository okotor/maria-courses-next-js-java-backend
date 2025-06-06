import classes from '@/app/page.module.css'

export default function ArchiveLayout({ archive, latest }) {
    return (
        <>
            <header className={`page-header ${classes.header}`}>
            </header>
            <section id="archive-latest"> {latest}</section>
            <section id="archive-filter">{archive}</section>
            {/* <section id="archive-latest"> {children}</section> */}
        </>
    );
}