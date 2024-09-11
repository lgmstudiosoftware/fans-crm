import { lazy } from 'react';
import './index.css';
import Routers from '@routers/index';

const DefaultLayout = lazy(() => import('@layouts/default'));

const App = () => {
  return (
    <>
      <DefaultLayout>
        <Routers />
      </DefaultLayout>
    </>
  );
};

export default App;
