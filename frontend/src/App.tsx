import React from 'react';
import './index.css';
import DefaultLayout from '@layouts/default';

const App = () => {
  return (
    <>
      <DefaultLayout>
        <h1 className='text-3xl text-center font-bold underline'>
          Hello world!
        </h1>
      </DefaultLayout>
    </>
  );
};

export default App;
