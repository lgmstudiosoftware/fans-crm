import { lazy } from 'react';
import './index.css';
import Routers from '@routers/index';

const DefaultLayout = lazy(() => import('@layouts/default'));

const App = () => {
  return (
    <>
      <DefaultLayout>
        <h1 className='text-3xl text-center font-bold underline'>
          Welcome to the main page
        </h1>
        <Routers />
      </DefaultLayout>
    </>
  );
};

export default App;
