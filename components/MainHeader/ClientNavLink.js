'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classes from './ClientNavLink.module.css';

export default function ClientLink({href, children}){
    const path = usePathname();

    const isActive =
    (href === '/' && path === '/') ||
    (href !== '/' && path.startsWith(href));

    return (
        <Link
            href={href}
            className={isActive ? `${classes.link} ${classes.active}` : classes.link}
        >
            {children}
        </Link>
    );
}