import { getCourse } from '@/lib/courseService';
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import CourseEditForm from '@/components/Courses/CourseEditForm';

export default async function CourseEditPage({ params }) {
    const course = await getCourse(params.slug);

    return (
        <ProtectedRoute requireAdmin={true}>
            <CourseEditForm course={course} />
        </ProtectedRoute>
    );
}