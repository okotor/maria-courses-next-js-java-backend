package com.tehacko.backend_java.service;
import com.tehacko.backend_java.model.Course;
import com.tehacko.backend_java.repo.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {

    private final CourseRepo courseRepo;

    @Autowired
    public CourseService(CourseRepo courseRepo) {
        this.courseRepo = courseRepo;
    }

    public Course findBySlug(String slug) {
        return courseRepo.findBySlug(slug);
    }

    public List<Course> search(String keyword) {
        return courseRepo.findByTitleContainingOrCourseDescriptionContainingOrSummaryContainingOrLecturerContaining(keyword, keyword, keyword, keyword);
    }

}
