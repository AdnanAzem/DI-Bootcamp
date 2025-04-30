// src/components/PrivateRoute.tsx
import React from 'react';
import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store'; // Import RootState to access auth state

interface PrivateRouteProps {
  component: React.ComponentType;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component }) => {
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);

  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }

  return <Component />;
};

export default PrivateRoute;
