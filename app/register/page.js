'use client';

import { useState } from 'react';
import { useAuthRedirect } from '@/hooks/useAuthRedirect';
import RegisterForm from '@/components/RegisterForm/RegisterForm';

export default function Register() {
  useAuthRedirect("/my-courses"); // Redirect if authenticated

  const [loading, setLoading] = useState(false);

  // Render loading state while the page is still processing authentication
  if (loading) {
    return <div className="loading">Načítání...</div>;
  }

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