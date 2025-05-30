import React from 'react';
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import CourseCreateForm from "@/components/CoursesAdmin/CourseCreateForm";

export default function CourseCreatePage() {
    return (
        <ProtectedRoute requireAdmin={true}>
            <CourseCreateForm />
        </ProtectedRoute>
    );
}