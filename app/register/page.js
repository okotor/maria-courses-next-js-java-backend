'use client';

import { useAuthPageRedirect } from '@/hooks/useAuthPageRedirect';
import RegisterForm from '@/components/RegisterForm/RegisterForm';

export default function Register() {
  const { loading, authenticated } = useAuthPageRedirect("/my-courses");

  if (loading || authenticated === null) {
    return <div className="loading">Načítání...</div>;
  }

  // If the user is authenticated, return null (no need to show register form)
  if (authenticated) return null;

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