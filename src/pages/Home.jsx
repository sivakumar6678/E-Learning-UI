import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  const featuredCourses = [
    {
      id: 1,
      title: 'Web Development Bootcamp',
      description: 'Learn full-stack web development from scratch',
      instructor: 'John Doe',
      level: 'Beginner',
    },
    {
      id: 2,
      title: 'Data Science Fundamentals',
      description: 'Master the basics of data analysis and visualization',
      instructor: 'Jane Smith',
      level: 'Intermediate',
    },
    {
      id: 3,
      title: 'Mobile App Development',
      description: 'Build cross-platform mobile applications',
      instructor: 'Mike Johnson',
      level: 'Advanced',
    },
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Learn Anything, Anytime, Anywhere</h1>
          <p>Join thousands of students learning new skills and advancing their careers</p>
          <div className="hero-buttons">
            <Link to="/signup" className="btn btn-primary">
              Get Started
            </Link>
            <Link to="/courses" className="btn btn-secondary">
              Browse Courses
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose E-Learn?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Expert Instructors</h3>
            <p>Learn from industry professionals with years of experience</p>
          </div>
          <div className="feature-card">
            <h3>Flexible Learning</h3>
            <p>Study at your own pace with 24/7 access to course materials</p>
          </div>
          <div className="feature-card">
            <h3>Practical Projects</h3>
            <p>Apply your knowledge through hands-on projects and assignments</p>
          </div>
        </div>
      </section>

      <section className="featured-courses">
        <h2>Featured Courses</h2>
        <div className="courses-grid">
          {featuredCourses.map((course) => (
            <div key={course.id} className="course-card">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="course-meta">
                <span>Instructor: {course.instructor}</span>
                <span>Level: {course.level}</span>
              </div>
              <Link to={`/courses/${course.id}`} className="btn btn-primary">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home; 