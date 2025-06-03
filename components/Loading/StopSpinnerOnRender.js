'use client';

import { useEffect } from 'react';
import { useLoading } from '@/context/LoadingContext';

export default function StopSpinnerOnRender({ children }) {
  const { setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(false); // stop spinner on render
  }, []);

  return children;
}