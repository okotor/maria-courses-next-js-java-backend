package com.tehacko.backend_java.repo;

import com.tehacko.backend_java.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRepo extends JpaRepository<Course, Integer> {
    List<Course> findByTitleContainingOrCourseDescriptionContainingOrSummaryContainingOrLecturerContaining(
            String titleKeyword, String courseDescriptionKeyword, String summaryKeyword, String lecturerKeyword);
}
