'use client';

import { useFormStatus } from "react-dom";

export default function CourseCreateButton() {
    const { pending } = useFormStatus();

    return <button disabled={pending}>
        {pending ? 'Vytvářím kurz...' : 'Vytvořit kurz'}
    </button>
}