import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function DashboardHome() {
    const { username, clearAuthData } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        clearAuthData();
        navigate('/login');
    };

    return (
        <div>
            <h1>Welcome to the Dashboard, {username}!</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default DashboardHome;