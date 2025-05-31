// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { useAuth } from '@/context/AuthContext';

// const useAuthRedirect = (redirectTo = "/") => {
//   const { authenticated, loading } = useAuth();
//   const router = useRouter();

//   useEffect(() => {
//     if (authenticated) {
//       router.replace(redirectTo);
//     }
//   }, [authenticated, router, redirectTo]);

//   return { loading, authenticated };
// };

// export default useAuthRedirect;