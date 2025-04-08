'use client';

import dynamic from 'next/dynamic';
import React from 'react';

const CourseSearchBar = dynamic(() => import('./CourseSearchBar'), { ssr: false });
const CoursesGrid = dynamic(() => import('./CoursesGrid'), { ssr: false });

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
      <CourseSearchBar />
      <CoursesGrid courses={courses} />
    </ErrorBoundary>
  );
};

export default CoursesOverview;