import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Context } from '../../contexts/user';

export const ProtectedRoute = () => {
  const { user, loading } = useContext(Context);
  if (!loading) {
    return null;
  }
  return user ? <Outlet /> : <Navigate to={'/'} replace />;
};
