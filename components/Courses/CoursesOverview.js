'use client';

import React from 'react';
import CourseSearchBar from './CourseSearchBar';
import CoursesGrid from './CoursesGrid';


class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      console.error("Error caught in ErrorBoundary:", error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>;
      }
  
      return this.props.children;
    }
  }

const CoursesOverview = ({ courses }) => {
  return (
    <ErrorBoundary>
      <CourseSearchBar onSearch={onSearch}/>
      <CoursesGrid courses={courses} />
    </ErrorBoundary>
  );
};

export default CoursesOverview;