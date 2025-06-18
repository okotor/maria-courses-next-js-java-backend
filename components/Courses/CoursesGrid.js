'use client';

import { useState } from 'react';
import CourseItem from './CourseItem';
import ConfirmationModal from '@/components/CoursesAdmin/ConfirmationModal';
import classes from './CoursesGrid.module.css';

export default function CoursesGrid({ courses, onDeleted }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [targetCourse, setTargetCourse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [confirmationInput, setConfirmationInput] = useState('');

    const handleRequestDelete = (deleteFn, course) => {
        setTargetCourse({ ...course, handleDelete: deleteFn });
        setModalOpen(true);
    };

    const handleConfirmDelete = async () => {
        if (!targetCourse || confirmationInput !== 'Smazat') return;
        const { handleDelete } = targetCourse;
        if (typeof handleDelete === 'function') {
            await handleDelete(confirmationInput, setLoading, setModalOpen, setConfirmationInput);
            if (onDeleted) onDeleted(targetCourse.slug);
        }
    };

    const handleCancel = () => {
        setModalOpen(false);
        setTargetCourse(null);
        setConfirmationInput('');
    };

    if (!Array.isArray(courses) || courses.length === 0) {
        return <p className={`noItemChosen`}>Žádný text v žádném našem kurzu neobsahuje tuto sekvenci písmen.</p>;
    }

    return (
        <>
            <ul id="courses-grid" className={classes.courses}>
                {courses.map(course => (
                    <li key={course.cId || course.slug}>
                        <CourseItem {...course} onRequestDelete={(deleteFn, data) => handleRequestDelete(deleteFn, data)} />
                    </li>
                ))}
            </ul>
            <ConfirmationModal
                isOpen={modalOpen}
                message={`Pro smazání kurzu napište \"Smazat\" do pole níže:`}
                inputValue={confirmationInput}
                onInputChange={e => setConfirmationInput(e.target.value)}
                onConfirm={handleConfirmDelete}
                onCancel={handleCancel}
                cancelText="Nemazat"
                confirmText="Smazat"
                confirmDisabled={confirmationInput !== 'Smazat'}
                loading={loading}
            />    
        </>
    );
}