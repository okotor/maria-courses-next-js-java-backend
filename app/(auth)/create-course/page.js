import React from 'react';
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import CourseCreateForm from "@/components/CoursesAdmin/CourseCreateForm";
import StopSpinnerOnRender from '@/components/Loading/StopSpinnerOnRender';

export default function CourseCreatePage() {
    return (
        <StopSpinnerOnRender>
            <ProtectedRoute requireAdmin={true}>
                <CourseCreateForm />
            </ProtectedRoute>
        </StopSpinnerOnRender>
    );
}