import { useAuth } from '@providers/auth';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { user, handleLogOut } = useAuth();

  return (
    <>
      {!user ? (
        <Link to='login'>
          <button className='mx-auto text-center w-[200px] rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
            Authorization
          </button>
        </Link>
      ) : (
        <div className='flex flex-col gap-4'>
          <div className='bg-white overflow-hidden shadow rounded-lg border'>
            <div className='px-4 py-5 sm:px-6'>
              <h3 className='text-lg leading-6 font-medium text-gray-900'>
                User Profile
              </h3>
              <p className='mt-1 max-w-2xl text-sm text-gray-500'>
                This is some information about the user.
              </p>
            </div>
            <div className='border-t border-gray-200 px-4 py-5 sm:p-0'>
              <dl className='sm:divide-y sm:divide-gray-200'>
                <div className='py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-500'>
                    Full name
                  </dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                    {user.name}
                  </dd>
                </div>
                <div className='py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-500'>
                    Email address
                  </dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                    {user.email}
                  </dd>
                </div>
                <div className='py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-500'>
                    Phone number
                  </dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                    {user.phone}
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <button>
            <button
              className='flex w-full justify-center rounded-md bg-gray-100 px-3 py-1.5 text-sm font-semibold leading-6 hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-100 shadow-sm ring-1 ring-inset ring-gray-300'
              onClick={handleLogOut}
            >
              Logout
            </button>
          </button>
        </div>
      )}
    </>
  );
};

export default Profile;
