package com.tehacko.backend_java.controller;

import com.tehacko.backend_java.model.Course;
import com.tehacko.backend_java.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CourseController {

    @Autowired
    private CourseService courseService;

    //Search by Keyword
    @GetMapping("courses/keyword/{keyword}")
    public List<Course> searchByKeyword(@PathVariable("keyword") String keyword){
        return courseService.search(keyword);
    }

}
