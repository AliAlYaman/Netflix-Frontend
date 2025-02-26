import { Navigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../services/api/api'; // Your Axios instance
import LoadingSpinner from './LoadingSpinner';

const PrivateRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        await api.get('/api/user' , {
            withCredentials:true,
            withXSRFToken:true
        }); // Laravel's auth check route
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
      }
      setLoading(false);
    };

    checkAuthStatus();
  }, []);

  if (loading) return <LoadingSpinner/>; // Show a loader while checking auth

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
