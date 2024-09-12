import { Link } from 'react-router-dom';
import React, { useState } from 'react';

type loginFormType = {
  username: string;
  password: string;
};

const SignIn = () => {
  const [input, setInput] = useState<loginFormType>({
    username: '',
    password: '',
  });

  const handleSubmitEvent = (e: HTMLFormElement) => {
    e.preventDefault();
    if (input.username !== '' && input.password !== '') {
      //dispatch action from hooks
    }
    alert('please provide a valid input');
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
      <form className='space-y-6' action='#' method='POST'>
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
