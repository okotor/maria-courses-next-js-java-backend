'use client';

import React from 'react';
import CourseSearchBar from './CourseSearchBar';
import CoursesGrid from './CoursesGrid';


class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, error: null, errorInfo: null };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      console.error("Error caught in ErrorBoundary:", error, errorInfo);
      this.setState({ error, errorInfo });
    }
  
    render() {
      if (this.state.hasError) {
        return (
          <div>
            <h1>Something went wrong.</h1>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo && this.state.errorInfo.componentStack}
            </details>
          </div>
        );
      }
  
      return this.props.children;
    }
  }

const CoursesOverview = ({ courses, onSearch }) => {
  return (
    <ErrorBoundary>
      <CourseSearchBar onSearch={onSearch}/>
      <CoursesGrid courses={courses} />
    </ErrorBoundary>
  );
};

export default CoursesOverview;