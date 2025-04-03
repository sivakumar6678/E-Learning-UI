import { useState } from 'react';
import { Link } from 'react-router-dom';
import { courses, categories } from '../../data/courses';
import './CourseList.scss';

const CourseList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const difficulties = ['all', 'Beginner', 'Intermediate', 'Advanced', 'Beginner to Advanced'];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = 
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = 
      selectedCategory === 'all' || course.category === selectedCategory;
    
    const matchesDifficulty = 
      selectedDifficulty === 'all' || course.difficulty === selectedDifficulty;

    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="course-list">
      <div className="filters">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search courses by title, description, or instructor..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="filter-group">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.icon} {category.name}
              </option>
            ))}
          </select>
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
          >
            {difficulties.map((difficulty) => (
              <option key={difficulty} value={difficulty}>
                {difficulty === 'all' ? 'All Difficulties' : difficulty}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="courses-grid">
        {filteredCourses.map((course) => (
          <div key={course.id} className="course-card">
            <img src={course.image} alt={course.title} />
            <div className="course-content">
              <div className="course-category">
                {categories.find(cat => cat.id === course.category)?.icon} 
                {categories.find(cat => cat.id === course.category)?.name}
              </div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="course-meta">
                <span className="instructor">
                  <i className="fas fa-user"></i> {course.instructor}
                </span>
                <span className="difficulty">
                  <i className="fas fa-signal"></i> {course.difficulty}
                </span>
                <span className="duration">
                  <i className="fas fa-clock"></i> {course.duration}
                </span>
                <span className="rating">
                  <i className="fas fa-star"></i> {course.rating}
                </span>
              </div>
              <div className="course-footer">
                <span className="price">${course.price}</span>
                <Link to={`/courses/${course.id}`} className="btn btn-primary">
                  View Course
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList; 