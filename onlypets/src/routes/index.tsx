import { Routes, Route } from 'react-router-dom';
import { Homepage } from '../pages/homepage';
import { UserPage } from '../pages/userPage';
import { PetPage } from '../pages/petPage';
import { ShelterPage } from '../pages/ShelterPage';
import { Dashboard } from '../pages/dashboard';
import { ErrorPages } from '../pages/404';
import { ProtectedRoute } from '../components/ProtectedRoutes';
export const RoutesMain = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route element={<ProtectedRoute />}>
        <Route path='/home/:id' element={<UserPage />} />
        <Route path='/dashboard/:id' element={<Dashboard />} />
        <Route path='/pets/:id' element={<PetPage />} />
        <Route path='/shelter/:id' element={<ShelterPage />} />
      </Route>
      <Route path='*' element={<ErrorPages />} />
    </Routes>
  );
};
