import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export const useAuthRedirect = (redirectTo = "/my-courses") => {
  const { authenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (authenticated) {
      router.push(redirectTo);
    }
  }, [authenticated, router, redirectTo]);
};
