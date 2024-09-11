import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';

const ProtectedRoutes = () => {
  // Get authentication status from localStorage
  const auth = localStorage.getItem('token');

  // Use useLocation hook to access the current path
  const location = useLocation();

  return (
    auth
      ? <Outlet />  // If authenticated, render the child routes
      : location.pathname !== '/'
        ? <Navigate to="/sign-in" replace state={{ from: location }} /> // Redirect to sign-in if not on home page
        : <Navigate to="/" replace /> // Redirect to home page if on '/'
  );
}

export default ProtectedRoutes;
