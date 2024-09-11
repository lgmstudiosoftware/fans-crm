import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Dashboard = lazy(() => import('@pages/dashboard'));

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />}></Route>
    </Routes>
  );
};

export default Routers;
