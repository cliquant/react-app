import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';

function HomePage() {
  const { token } = useAuth();

  useEffect(() => {
    document.title = 'Website | Home';
  }, []);

  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <p>This is the main entry point of our React application.</p>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  );
}

export default HomePage;
