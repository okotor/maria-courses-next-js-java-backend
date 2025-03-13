package com.tehacko.backend_java.repo;

import com.tehacko.backend_java.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@Repository
@CrossOrigin(origins = "http://localhost:3000") // Allow React
public interface CourseRepo extends JpaRepository<Course, Integer> {

    Course findBySlug(String slug);

    List<Course> findByTitleContainingOrCourseDescriptionContainingOrSummaryContainingOrLecturerContaining(
            String titleKeyword, String courseDescriptionKeyword, String summaryKeyword, String lecturerKeyword);
}
