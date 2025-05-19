// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { saveCourse } from '@/lib/courseService';
// import ImagePicker from '@/components/Courses/ImagePicker';
// import CourseCreateButton from '@/components/Courses/CourseCreateButton';
// import classes from '@/app/(auth)/create-a-course/page.module.css';

// export default function CourseCreateForm() {
//     const [state, setState] = useState({ success: false, message: null });
//     const router = useRouter();

//     useEffect(() => {
//         if (state.success) {
//             router.push("/courses");
//         }
//     }, [state.success, router]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const formData = new FormData(e.target);

//         for (let [key, value] of formData.entries()) {
//             console.log(`${key}:`, value);
//         }

//         try {
//             await saveCourse(formData);
//             setState({ success: true, message: "Kurz byl úspěšně uložen!" });
//         } catch (error) {
//             console.error('Error saving course:', error);
//             setState({ success: false, message: 'Chyba při ukládání kurzu.' });
//         }
//     };

//     return (
//         <>
//             <header className={classes.header}>
//                 <h1>
//                     Vytvoření <span className={classes.highlight}>nového kurzu</span>
//                 </h1>
//                 <p>
//                     Zkontroluj si prosím správnost veškerého textu v textovém editoru a přílušné kusy zkopíruj do přílušných políček. 
//                     Následně zkontroluj, že vše je ve správném políčku. Až poté odešli. Kurz poté najdeš v nabídce kurzů.
//                 </p>
//             </header>
//             <main className={classes.main}>
//                 <form className={classes.form} onSubmit={handleSubmit}>
//                     <div className={classes.row}>
//                         <p>
//                             <label htmlFor="name">Jméno přednášejícího</label>
//                             <input type="text" id="name" name="lecturer" required />
//                         </p>
//                         <p>
//                             <label htmlFor="email">Email přednášejícího</label>
//                             <input type="email" id="email" name="lecturerEmail" required />
//                         </p>
//                     </div>
//                     <p>
//                         <label htmlFor="title">Název</label>
//                         <input type="text" id="title" name="title" required />
//                     </p>
//                     <p>
//                         <label htmlFor="summary">Abstrakt</label>
//                         <input type="text" id="summary" name="summary" required />
//                     </p>
//                     <p>
//                         <label htmlFor="courseDescription">Popis kurzu</label>
//                         <textarea
//                             id="courseDescription"
//                             name="courseDescription"
//                             rows="10"
//                             required
//                         ></textarea>
//                     </p>
//                     <ImagePicker label="Your image" name="image" />
//                     {state.message && (
//                         <p style={{ color: state.success ? 'green' : 'red' }}>
//                             {state.message}
//                         </p>
//                     )}
//                     <p className={classes.actions}>
//                         <CourseCreateButton />
//                     </p>
//                 </form>
//             </main>
//         </>
//     );
// }

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { saveCourse } from '@/lib/courseService';
import CourseFields from './CourseFields';
import CourseCreateButton from '@/components/Courses/CourseCreateButton';
import classes from '@/app/(auth)/create-course/page.module.css';

export default function CourseCreateForm() {
  const [state, setState] = useState({ success: false, message: null });
  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      router.push('/courses');
    }
  }, [state.success, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      await saveCourse(formData);
      setState({ success: true, message: 'Kurz byl úspěšně uložen!' });
    } catch (error) {
      console.error('Error saving course:', error);
      setState({ success: false, message: 'Chyba při ukládání kurzu.' });
    }
  };

  return (
    <>
      <header className={classes.header}>
        <h1>
          Vytvoření <span className={classes.highlight}>nového kurzu</span>
        </h1>
        <p>
          Zkontroluj si prosím správnost veškerého textu v textovém editoru a příslušné kusy
          zkopíruj do příslušných políček. Až poté odešli.
        </p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <CourseFields />
          {state.message && (
            <p style={{ color: state.success ? 'green' : 'red' }}>{state.message}</p>
          )}
          <p className={classes.actions}>
            <CourseCreateButton />
          </p>
        </form>
      </main>
    </>
  );
}