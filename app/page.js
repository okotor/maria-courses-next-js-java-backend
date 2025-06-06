import dynamic from 'next/dynamic';

// Dynamic imports to avoid SSR issues or circular deps
const Archive = dynamic(() => import('./archive/@archive/[[...filter]]/page'), { ssr: true });
const Latest = dynamic(() => import('./archive/@latest/default'), { ssr: true });

export default function HomePage() {
    return (
        <>
            <section id="archive-latest">
                <Latest />
            </section>
            <section id="archive-filter">
                <Archive params={{}} />
            </section>
        </>
    );
}