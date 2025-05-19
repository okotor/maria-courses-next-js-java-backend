'use client';

import React from 'react';
import ProtectedRoute from "@/components/Authentication/ProtectedRoute";
import CourseCreateForm from "@/components/Courses/CourseCreateForm";

export default function CourseCreatePage() {
    return (
        <ProtectedRoute requireAdmin={true}>
            <CourseCreateForm />
        </ProtectedRoute>
    );
}