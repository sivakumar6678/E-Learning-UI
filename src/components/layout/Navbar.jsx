import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './Navbar.scss';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          E-Learn
        </Link>

        <div className="navbar-links">
          <Link to="/courses">Courses</Link>
          {user ? (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <div className="navbar-user">
                <span>
                  <FontAwesomeIcon icon={faUser} /> {user.name}
                </span>
                <button onClick={handleLogout} className="btn-logout">
                  <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup" className="btn btn-primary">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 