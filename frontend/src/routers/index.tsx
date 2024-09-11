import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Dashboard = lazy(() => import('@pages/dashboard'));
const Login = lazy(() => import('@pages/login'));

const Routers = () => {
  return (
    <Suspense>
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='login' element={<Login />} />
      </Routes>
    </Suspense>
  );
};

export default Routers;
