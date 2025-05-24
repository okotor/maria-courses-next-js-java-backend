import { getCourse } from '@/lib/courseService';
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import CourseEditClientWrapper from '@/components/Courses/CourseEditClientWrapper';

export default async function CourseEditPage({ params }) {
    const course = await getCourse(params.slug);

    return (
        <ProtectedRoute requireAdmin={true}>
            <CourseEditClientWrapper course={course} />;
        </ProtectedRoute>
    );
}