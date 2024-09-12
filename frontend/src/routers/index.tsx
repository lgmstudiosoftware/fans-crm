import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Dashboard = lazy(() => import('@pages/dashboard'));
const SignIn = lazy(() => import('@pages/auth/sign-in'));

const Routers = () => {
  return (
    <Suspense>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='login' element={<SignIn />} />
      </Routes>
    </Suspense>
  );
};

export default Routers;
