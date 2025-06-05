'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classes from './ClientNavLink.module.css';

export default function ClientLink({href, children, ...props}) {
    const path = usePathname();

    const isActive =
    path === href || (href !== '/' && path.startsWith(href) && !path.match(/^\/courses\/[^\/]+$/));

    return (
        <Link
            href={href}
            {...props}
            className={isActive ? `${classes.link} ${classes.active}` : classes.link}
        >
            {children}
        </Link>
    );
}