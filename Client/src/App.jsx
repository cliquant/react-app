import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import AuthRegister from './components/Auth/Register';
import AuthLogin from './components/Auth/Login';
import DashboardHome from './components/Dashboard/Home';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import PublicRoute from './components/Auth/PublicRoute';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={
                    <PublicRoute>
                        <AuthLogin />
                    </PublicRoute>
                } />
                <Route path="/register" element={
                    <PublicRoute>
                        <AuthRegister />
                    </PublicRoute>
                } />
                <Route path="/dashboard" element={
                    <ProtectedRoute>
                        <DashboardHome />
                    </ProtectedRoute>
                } />
            </Routes>
        </Router>
    );
}

export default App;
