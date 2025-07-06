import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { authService } from './AuthService';

const ProtectedRoute: React.FC = () => {
  if (!authService.isAuthenticated()) {
    return <Navigate to="/signin" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;