import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@providers/auth';

const Dashboard = lazy(() => import('@pages/dashboard'));
const SignIn = lazy(() => import('@pages/auth/sign-in'));

const PrivateRoute = () => {
  const user = useAuth();
  if (!user.token) return <Navigate to='/login' />;
  return <Outlet />;
};

const Routers = () => {
  return (
    <Suspense>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path='/' element={<Dashboard />} />
        </Route>
        <Route path='login' element={<SignIn />} />
      </Routes>
    </Suspense>
  );
};

export default Routers;
