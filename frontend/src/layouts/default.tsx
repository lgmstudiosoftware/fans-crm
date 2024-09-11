import React, { FC, ReactNode } from 'react';

const DefaultLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <main className='mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8'>
        {children}
      </main>
    </>
  );
};

export default DefaultLayout;
