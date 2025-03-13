package com.tehacko.backend_java.controller;

import com.tehacko.backend_java.model.Course;
import com.tehacko.backend_java.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/courses")
@CrossOrigin(origins = "http://localhost:3000") // Allow requests from React
public class CourseController {

    @Autowired
    private CourseService courseService;

    @GetMapping("/{slug}")
    public ResponseEntity<Course> getCourseBySlug(@PathVariable String slug) {
        Course course = courseService.findBySlug(slug);
        if (course == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(course);
    }

    //Search by Keyword
    @GetMapping("courses/keyword/{keyword}")
    public List<Course> searchByKeyword(@PathVariable("keyword") String keyword){
        return courseService.search(keyword);
    }

}
