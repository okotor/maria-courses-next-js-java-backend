'use client';

import ProtectedRoute from "@/components/Authentication/AuthRequired";
import CourseCreateForm from "@/components/Courses/CourseCreateForm";

export default function CreateACoursePage() {
    return (
        <ProtectedRoute requireAdmin={true}>
            <CourseCreateForm />
        </ProtectedRoute>
    );
}