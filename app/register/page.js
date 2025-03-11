import RegisterForm from "@/components/RegisterForm/RegisterForm";

export default async function Register() {
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