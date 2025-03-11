'use client';

// import { useState } from 'react';
import ProtectedRoute from "@/components/Authentication/AuthRequired"
import { useActionState } from 'react';
import { createACourse } from '@/lib/server-actions';
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import ImagePicker from '@/components/Courses/ImagePicker';
import CourseCreateButton from '@/components/Courses/CourseCreateButton';
import classes from './page.module.css';

export default function CreateACoursePage() {
    const [state, formAction] = useActionState(createACourse, {message: null});
    const router = useRouter();

    // Redirect on successful course creation
    useEffect(() => {
        if (state.success) {
        router.push("/courses");
        }
    }, [state.success, router]);


    // const [title, setTitle] = useState('');
    // const [description, setDescription] = useState('');

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Handle form submission logic here
    //     console.log('Course Created:', { title, description });
    // };

    return (
        <ProtectedRoute requireAdmin={true}>
            <>
                <header className={classes.header}>
                    <h1>
                    Vytvoření <span className={classes.highlight}>nového kurzu</span>
                    </h1>
                    <p>Zkontroluj si prosím správnost veškerého textu v textovém editoru a přílušné kusy zkopíruj do přílušných políček. Následně zkontroluj, že vše je ve správném políčku. Až poté odešli. Kurz poté najdeš v nabídce kurzů.</p>
                </header>
                <main className={classes.main}>
                    <form className={classes.form} action={formAction}>
                    <div className={classes.row}>
                        <p>
                            <label htmlFor="name">Jméno přednášejícího</label>
                        <input type="text" id="name" name="name" required />
                        </p>
                        <p>
                        <label htmlFor="email">Email přednášejícího</label>
                        <input type="email" id="email" name="email" required />
                        </p>
                    </div>
                    <p>
                        <label htmlFor="title">Název</label>
                        <input type="text" id="title" name="title" required />
                    </p>
                    <p>
                        <label htmlFor="summary">Abstrakt</label>
                        <input type="text" id="summary" name="summary" required />
                    </p>
                    <p>
                        <label htmlFor="course_description">Popis kurzu</label>
                            <textarea
                            id="course_description"
                            name="course_description"
                            rows="10"
                            required
                            ></textarea>
                    </p>
                    <ImagePicker label="Your image" name="image"/>
                    {state.message && <p>{state.message}</p>}
                    <p className={classes.actions}>
                        <CourseCreateButton />
                    </p>
                    </form>
                </main>
            </>
        </ProtectedRoute>
    );
}

// export default function CreateCourse() {
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Handle form submission logic here
//         console.log('Course Created:', { title, description });
//     };

//     return (
//         <div>
//             <h1>Create a New Course</h1>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="title">Course Title:</label>
//                     <input
//                         type="text"
//                         id="title"
//                         value={title}
//                         onChange={(e) => setTitle(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="description">Course Description:</label>
//                     <textarea
//                         id="description"
//                         value={description}
//                         onChange={(e) => setDescription(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <button type="submit">Create Course</button>
//             </form>
//         </div>
//     );
// }