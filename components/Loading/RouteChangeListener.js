'use client';
import { useEffect } from 'react';
import { useLoading } from '@/context/LoadingContext';
import { usePathname } from 'next/navigation';

export default function RouteChangeListener() {
  const { setIsLoading } = useLoading();
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true); // Start loading immediately when path changes

    const timeout = setTimeout(() => {
      setIsLoading(false); // Stop after short delay (adjust as needed)
    }, 300); // Example delay to simulate loading

    return () => clearTimeout(timeout); // Cleanup
  }, [pathname]);

  return null;
}