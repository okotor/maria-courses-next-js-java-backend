'use client';

import React from 'react';
import { use } from 'react';
import ProtectedRoute from "@/components/Authentication/ProtectedRoute";
import CourseEditForm from '@/components/Courses/CourseEditForm';

export default function CourseEditPage({ params }) {
    const { slug } = use(params);

    return (
        <ProtectedRoute requireAdmin={true}>
            <CourseEditForm slug={slug} />
        </ProtectedRoute>
    );
}