'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLoading } from '@/context/LoadingContext';

export default function ArchiveLink({ href, children, className }) {
  const { setIsLoading } = useLoading();
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    if (pathname === href) return; // Do nothing if already on this route

    setIsLoading(true);
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
