'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import RegisterForm from '@/components/RegisterForm/RegisterForm';

export default function Register() {
  const { authenticated, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (authenticated) {
      router.replace("/my-courses");
    }
  }, [authenticated, router]);

  // Show a loading state while auth status is being checked
  if (loading || authenticated === null) {
    return <div className="loading">Načítání...</div>;
  }

  // If the user is already authenticated, do not render anything
  if (authenticated) return null;

  // Render the registration form
  return <RegisterForm />;
}

// import RegisterBox from '@/components/RegisterBox.js';

// export default function Register() {

// //     function handleRegisterPress() {
//     user.registered = true;
//     console.log('Registration requested. Registered:', user.registered)
//   }

//     return (
//         <main id="main">
//             <RegisterBox onRegisterPress={() => handleRegisterPress()}>Register</RegisterBox>
//         </main>
//     );
// }