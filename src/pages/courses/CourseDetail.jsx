import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './CourseDetail.scss';

const CourseDetail = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [isEnrolled, setIsEnrolled] = useState(false);

  // Mock course data - in a real app, this would come from an API
  const course = {
    id: 1,
    title: 'Web Development Bootcamp',
    description: 'Learn full-stack web development from scratch',
    instructor: 'John Doe',
    level: 'Beginner',
    category: 'Web Development',
    thumbnail: 'https://via.placeholder.com/800x400',
    duration: '12 weeks',
    price: '$99.99',
    syllabus: [
      { id: 1, title: 'Introduction to Web Development', duration: '2 hours' },
      { id: 2, title: 'HTML & CSS Fundamentals', duration: '4 hours' },
      { id: 3, title: 'JavaScript Basics', duration: '6 hours' },
      { id: 4, title: 'React.js Fundamentals', duration: '8 hours' },
      { id: 5, title: 'Backend Development with Node.js', duration: '10 hours' },
      { id: 6, title: 'Database Integration', duration: '6 hours' },
      { id: 7, title: 'Final Project', duration: '20 hours' },
    ],
    requirements: [
      'Basic computer knowledge',
      'No prior programming experience required',
      'A computer with internet access',
    ],
  };

  const handleEnroll = () => {
    if (!user) {
      // Redirect to login
      window.location.href = '/login';
      return;
    }
    setIsEnrolled(true);
    // In a real app, you would make an API call to enroll the user
  };

  return (
    <div className="course-detail">
      <div className="course-header">
        <img src={course.thumbnail} alt={course.title} />
        <div className="course-info">
          <h1>{course.title}</h1>
          <p className="instructor">Instructor: {course.instructor}</p>
          <div className="course-meta">
            <span>Level: {course.level}</span>
            <span>Duration: {course.duration}</span>
            <span>Category: {course.category}</span>
          </div>
          <div className="course-actions">
            <span className="price">{course.price}</span>
            {!isEnrolled ? (
              <button onClick={handleEnroll} className="btn btn-primary">
                Enroll Now
              </button>
            ) : (
              <button className="btn btn-secondary" disabled>
                Enrolled
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="course-content">
        <div className="course-description">
          <h2>About This Course</h2>
          <p>{course.description}</p>
        </div>

        <div className="course-syllabus">
          <h2>Course Syllabus</h2>
          <ul>
            {course.syllabus.map((item) => (
              <li key={item.id}>
                <span className="lesson-title">{item.title}</span>
                <span className="lesson-duration">{item.duration}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="course-requirements">
          <h2>Requirements</h2>
          <ul>
            {course.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail; 