import { lazy } from 'react';

const SignInForm = lazy(() => import('@components/auth/forms/sign-in'));

const SignIn = () => {
  return (
    <>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <h1 className='text-3xl text-center font-bold mb-4'>Login Form</h1>
        <SignInForm />
      </div>
    </>
  );
};

export default SignIn;
