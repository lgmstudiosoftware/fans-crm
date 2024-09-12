import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useAuth } from '@providers/auth';

type loginFormType = {
  username: string;
  password: string;
};

const SignIn = () => {
  const [input, setInput] = useState<loginFormType>({
    username: '',
    password: '',
  });

  const auth = useAuth();

  const handleSubmitEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.username !== '' && input.password !== '') {
      auth.handleLogin(input);
      return;
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <form className='space-y-6' onSubmit={handleSubmitEvent}>
        {auth.error && (
          <div
            className='flex items-center p-4 text-sm text-red-800 rounded-lg bg-red-50 light:bg-gray-800 light:text-red-400'
            role='alert'
          >
            <svg
              className='flex-shrink-0 inline w-4 h-4 me-3'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z' />
            </svg>
            <span className='sr-only'>Info</span>
            <div>{auth.error}</div>
          </div>
        )}
        <div>
          <label
            htmlFor='username'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Email
          </label>
          <div className='mt-2'>
            <input
              id='username'
              name='username'
              type='username'
              autoComplete='username'
              required
              className='px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              onChange={handleInput}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor='password'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Password
          </label>
          <div className='mt-2'>
            <input
              id='password'
              name='password'
              type='password'
              autoComplete='current-password'
              required
              className='px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              onChange={handleInput}
            />
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <button
            type='submit'
            className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Sign in
          </button>
          <Link
            to='/'
            className='flex w-full justify-center rounded-md bg-gray-100 px-3 py-1.5 text-sm font-semibold leading-6 hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-100 shadow-sm ring-1 ring-inset ring-gray-300'
          >
            Cancel
          </Link>
        </div>
      </form>
    </>
  );
};

export default SignIn;
