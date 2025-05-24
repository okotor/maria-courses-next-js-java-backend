import dynamic from 'next/dynamic';
import classes from '@/app/courses/page.module.css';

// Dynamic imports to avoid SSR issues or circular deps
const Archive = dynamic(() => import('./archive/@archive/[[...filter]]/page'), { ssr: true });
const Latest = dynamic(() => import('./archive/@latest/default'), { ssr: true });

export default function HomePage() {
    return (
        <>
            <header className={classes.header}>
                <h1>Vítejte na portálu kurzů Marie!</h1>
            </header>
            <section id="archive-latest">
                <Latest />
            </section>
            <section id="archive-filter">
                <Archive params={{}} />
            </section>
        </>
    );
}