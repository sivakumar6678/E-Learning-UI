import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Dashboard.scss';

const Dashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('courses');

  // Mock enrolled courses data
  const enrolledCourses = [
    {
      id: 1,
      title: 'Web Development Bootcamp',
      progress: 45,
      lastAccessed: '2 days ago',
      thumbnail: 'https://via.placeholder.com/300x200',
    },
    {
      id: 2,
      title: 'Data Science Fundamentals',
      progress: 30,
      lastAccessed: '1 week ago',
      thumbnail: 'https://via.placeholder.com/300x200',
    },
  ];

  // Mock certificates data
  const certificates = [
    {
      id: 1,
      courseTitle: 'Introduction to Programming',
      date: '2023-12-15',
      certificateId: 'CERT-12345',
    },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Welcome, {user?.name}!</h1>
        <div className="dashboard-tabs">
          <button
            className={activeTab === 'courses' ? 'active' : ''}
            onClick={() => setActiveTab('courses')}
          >
            My Courses
          </button>
          <button
            className={activeTab === 'certificates' ? 'active' : ''}
            onClick={() => setActiveTab('certificates')}
          >
            Certificates
          </button>
        </div>
      </div>

      {activeTab === 'courses' && (
        <div className="courses-section">
          <h2>Enrolled Courses</h2>
          <div className="courses-grid">
            {enrolledCourses.map((course) => (
              <div key={course.id} className="course-card">
                <img src={course.thumbnail} alt={course.title} />
                <div className="course-content">
                  <h3>{course.title}</h3>
                  <div className="progress-bar">
                    <div
                      className="progress"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <p>Progress: {course.progress}%</p>
                  <p className="last-accessed">
                    Last accessed: {course.lastAccessed}
                  </p>
                  <Link
                    to={`/courses/${course.id}`}
                    className="btn btn-primary"
                  >
                    Continue Learning
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'certificates' && (
        <div className="certificates-section">
          <h2>My Certificates</h2>
          <div className="certificates-grid">
            {certificates.map((cert) => (
              <div key={cert.id} className="certificate-card">
                <h3>{cert.courseTitle}</h3>
                <p>Date: {cert.date}</p>
                <p>Certificate ID: {cert.certificateId}</p>
                <button className="btn btn-primary">
                  Download Certificate
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard; 